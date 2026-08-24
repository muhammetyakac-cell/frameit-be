import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF5ED',
          200: '#F4ECE0',
          300: '#EADBCB',
          400: '#DEC4A9',
        },
        gold: {
          300: '#F3E5AB',
          400: '#E6CA65',
          500: '#D4AF37',
          600: '#B8860B',
          700: '#996515',
        },
        museum: {
          dark: '#1C1917',
          charcoal: '#292524',
          wood: '#5C3826',
          terracotta: '#A6533A',
          rose: '#E8A598',
          sage: '#7D8C7C',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.1), 0 0 25px 0 rgba(212, 175, 55, 0.15)',
        'glow': '0 0 30px rgba(253, 224, 71, 0.35)',
        'inner-glow': 'inset 0 0 20px rgba(253, 224, 71, 0.25)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
