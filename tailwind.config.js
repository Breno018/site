/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      // Cores da marca TellexApp — troque aqui para mudar o site inteiro
      colors: {
        brand: { DEFAULT: '#2F5BFF', dark: '#1F45E0', soft: '#EEF2FF' },
        violet: { DEFAULT: '#5B2EFF' },
        ink: '#0B1533',
        muted: '#5B6478',
        surface: '#F6F8FE',
        line: '#E6EAF5',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(11,21,51,.04), 0 12px 32px -12px rgba(11,21,51,.10)',
        brand: '0 12px 28px -10px rgba(47,91,255,.55)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(120deg, #2F5BFF 0%, #5B2EFF 100%)',
      },
    },
  },
  plugins: [],
}
