# 📌 Frameit Living — Pinterest Otomasyon & Trafik Çekme Botu

Bu bot, Frameit Living'in tüm ürünlerini, ilçe sayfalarını ve özel gün rotalarını (**Felemenkçe ve Fransızca**) yüksek dönüşümlü Pinterest Pinlerine dönüştürür.

---

## 🎯 Ne İşe Yarar?
1. **Canlı Görseller:** Sitenin canlı CDN üzerindeki yüksek çözünürlüklü fotoğraflarını (`https://www.frameit.living/images/...`) kullanır.
2. **SEO & Hashtag Optimizasyonu:** Belçika'da hediye arayan kitlelerin arattığı Felemenkçe ve Fransızca anahtar kelimeler ve hashtag'ler otomatik yerleştirilir.
3. **Doğrudan Siparişe Yönlendiren Linkler (Deep Linking):** Her pin, doğrudan ilgili sayfaya (`/gelegenheid/origineel-huwelijkscadeau`, `/cadeau/antwerpen` vb.) yönlendirir.
4. **Zamanlanmış Yayın (Drip Feed):** Pinleri 2 gün aralıklarla takvime yayarak Pinterest algoritmasının hesabınızı "Aktif & Otoriter İşletme" olarak öne çıkarmasını sağlar.

---

## 🚀 1. YÖNTEM: Tek Tıkla Toplu Yükleme (En Kolay & En Etkili Yol)

1. Terminalden scripti çalıştırıp güncel pin listesini üretin:
   ```bash
   node scripts/pinterest/generate_pins.js
   ```
2. Bu komut klasörde **`pinterest_bulk_pins.csv`** adında bir dosya oluşturur.
3. [Pinterest Business](https://www.pinterest.com/) hesabınıza giriş yapın.
4. Sol üst menüden **Oluştur (Create) -> Toplu Pin Oluştur (Create Pins in Bulk)** sekmesine gidin.
5. `pinterest_bulk_pins.csv` dosyasını sürükleyip bırakın.
6. **Sonuç:** Bütün pinleriniz, açıklamaları, etiketleri ve linkleriyle birlikte anında takvime eklenir ve arka planda her 2 günde bir otomatik yayınlanır!

---

## 🤖 2. YÖNTEM: Pinterest API ile Otomatik Paylaşım

Eğer Pinterest API anahtarınız varsa:
1. `scripts/pinterest/publish_api.js` dosyasına Access Token bilginizi ekleyin.
2. Komutu çalıştırın:
   ```bash
   node scripts/pinterest/publish_api.js
   ```
