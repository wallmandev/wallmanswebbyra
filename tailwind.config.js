// tailwind.config.js
import defaultTheme from 'tailwindcss/defaultTheme'; // Ändrad till ES-modul import

const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // ersätter sans‑klassen
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        // en egen serif‑klass
        playfair: ['var(--font-playfair)', ...defaultTheme.fontFamily.serif],
      },

        colors: {
        'myColor': '#0F0F0F',
        'secondary': '#fbf2e4',
        'primary': '#D8622E',
      }
    }
  },
  plugins: []
};

export default config;