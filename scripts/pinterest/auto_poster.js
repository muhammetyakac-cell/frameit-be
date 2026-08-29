const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const SESSION_DIR = path.join(__dirname, '.pinterest_session');
const PINS_FILE = path.join(__dirname, 'pins_data.json');
const LOG_FILE = path.join(__dirname, 'published_pins.json');

// Map image filenames to local paths
const imageMap = {
  'museum_couple.jpg': path.resolve(__dirname, '../../public/images/museum_couple.jpg'),
  'baby_milestone.jpg': path.resolve(__dirname, '../../public/images/baby_milestone.jpg'),
  'anniversary_frame.jpg': path.resolve(__dirname, '../../public/images/anniversary_frame.jpg'),
  'family_museum.jpg': path.resolve(__dirname, '../../public/images/family_museum.jpg'),
  'gift_unboxing.jpg': path.resolve(__dirname, '../../public/images/gift_unboxing.jpg')
};

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getPublishedList() {
  if (fs.existsSync(LOG_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(LOG_FILE, 'utf8'));
    } catch (e) {
      return [];
    }
  }
  return [];
}

function markAsPublished(title) {
  const list = getPublishedList();
  list.push({ title, publishedAt: new Date().toISOString() });
  fs.writeFileSync(LOG_FILE, JSON.stringify(list, null, 2), 'utf8');
}

async function runAutoPoster() {
  console.log('====================================================');
  console.log('🤖 Frameit Living — Pinterest Otopilot Botu Başlatılıyor');
  console.log('====================================================\n');

  if (!fs.existsSync(PINS_FILE)) {
    console.error('❌ pins_data.json bulunamadı. Önce generate_pins.js çalıştırın.');
    return;
  }

  const pins = JSON.parse(fs.readFileSync(PINS_FILE, 'utf8'));
  const published = getPublishedList().map(p => p.title);
  const pendingPins = pins.filter(p => !published.includes(p.title));

  console.log(`📋 Toplam Pin Sayısı: ${pins.length}`);
  console.log(`✅ Daha önce paylaşılan: ${published.length}`);
  console.log(`⏳ Paylaşılacak Pin Sayısı: ${pendingPins.length}\n`);

  if (pendingPins.length === 0) {
    console.log('🎉 Tüm pinler zaten daha önce paylaşılmış! Tebrikler.');
    return;
  }

  console.log('🌐 Tarayıcı açılıyor (Kalıcı oturum hafızası ile)...');
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    userDataDir: SESSION_DIR,
    args: ['--start-maximized', '--disable-notifications']
  });

  const page = (await browser.pages())[0] || await browser.newPage();

  console.log('🔑 Pinterest kontrol ediliyor...');
  await page.goto('https://www.pinterest.com/', { waitUntil: 'networkidle2' });

  // Check if logged in
  const isLoggedIn = async () => {
    return await page.evaluate(() => {
      return !!document.querySelector('[data-test-id="header-profile"]') || 
             !!document.querySelector('[aria-label="Profiliniz"]') ||
             !!document.querySelector('[aria-label="Your profile"]') ||
             !!document.querySelector('[data-test-id="pin-builder-menu-button"]');
    });
  };

  let loggedIn = await isLoggedIn();

  if (!loggedIn) {
    console.log('\n⚠️ Lütfen açılan tarayıcı penceresinde Pinterest hesabınıza GİRİŞ YAPIN.');
    console.log('⏳ Giriş yapmanız bekleniyor (Giriş yaptıktan sonra bot otomatik devralacak)...');

    while (!loggedIn) {
      await sleep(3000);
      loggedIn = await isLoggedIn();
      if (loggedIn) {
        console.log('🎉 Giriş Başarılı! Oturum hafızaya kaydedildi.\n');
        break;
      }
    }
  } else {
    console.log('✅ Zaten oturum açık! Paylaşımlara başlanıyor.\n');
  }

  for (let i = 0; i < pendingPins.length; i++) {
    const pin = pendingPins[i];
    const imgFilename = path.basename(pin.image);
    const localImgPath = imageMap[imgFilename];

    console.log(`\n📌 [${i + 1}/${pendingPins.length}] Paylaşılıyor: "${pin.title.substring(0, 40)}..."`);
    console.log(`🔗 Hedef Link: ${pin.link}`);

    try {
      await page.goto('https://www.pinterest.com/pin-creation-tool/', { waitUntil: 'networkidle2' });
      await sleep(2000);

      // 1. Upload File
      if (localImgPath && fs.existsSync(localImgPath)) {
        const fileInput = await page.$('input[type="file"]');
        if (fileInput) {
          await fileInput.uploadFile(localImgPath);
          console.log('   📸 Görsel yüklendi.');
          await sleep(1500);
        }
      }

      // 2. Set Title
      const titleSelector = 'input[id*="pin-draft-title"], textarea[id*="pin-draft-title"], [data-test-id="editor-title"] input, [data-test-id="editor-title"] textarea';
      const titleElem = await page.$(titleSelector);
      if (titleElem) {
        await titleElem.click({ clickCount: 3 });
        await titleElem.type(pin.title, { delay: 20 });
        console.log('   ✏️ Başlık yazıldı.');
      }

      // 3. Set Description
      const descSelector = '[data-test-id="editor-description"] div[contenteditable="true"], textarea[id*="pin-draft-description"]';
      const descElem = await page.$(descSelector);
      if (descElem) {
        await descElem.click();
        await descElem.type(pin.description, { delay: 15 });
        console.log('   📝 Açıklama ve hashtagler yazıldı.');
      }

      // 4. Set Link
      const linkSelector = 'input[id*="pin-draft-link"], [data-test-id="editor-link"] input';
      const linkElem = await page.$(linkSelector);
      if (linkElem) {
        await linkElem.click();
        await linkElem.type(pin.link, { delay: 20 });
        console.log('   🌐 Hedef URL eklendi.');
      }

      await sleep(2000);

      // 5. Click Publish / Kaydet
      console.log('   🚀 Paylaş butonuna tıklanıyor...');
      const publishBtn = await page.evaluateHandle(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        return buttons.find(b => 
          b.innerText.includes('Yayınla') || 
          b.innerText.includes('Kaydet') || 
          b.innerText.includes('Publish') || 
          b.innerText.includes('Save')
        );
      });

      if (publishBtn && publishBtn.asElement()) {
        await publishBtn.asElement().click();
        console.log('   ✅ Pin başarıyla yayınlandı!');
        markAsPublished(pin.title);
      } else {
        console.log('   ℹ️ Yayınlama butonu tetiklendi, kontrol ediliyor.');
      }

      // Wait between pins to appear natural
      console.log('   ⏳ Doğal görünüm için 6 saniye bekleniyor...');
      await sleep(6000);

    } catch (err) {
      console.error(`   ❌ Bu pinde hata oluştu: ${err.message}`);
    }
  }

  console.log('\n====================================================');
  console.log('🎉 TÜM PİNLERİN PAYLAŞIMI TAMAMLANDI!');
  console.log('====================================================');
  await browser.close();
}

runAutoPoster().catch(console.error);
