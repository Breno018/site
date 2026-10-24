/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      // Cores do site — troque aqui para mudar o visual inteiro
      colors: {
        primary: '#DEDBC8', // creme: textos e destaques
        cream: '#E1E0CC', // creme dos títulos
        card: '#101010', // cartões grandes
        panel: '#212121', // cartões menores
        brand: '#2F5BFF', // azul do logo TellexApp (uso pontual)
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'serif'],
      },
    },
  },
  plugins: [],
}
