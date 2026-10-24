/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      // Paleta do site, tirada das artes do TellexApp (logo, painel e banners).
      // Troque aqui para mudar o visual inteiro.
      colors: {
        ink: '#05060F', // fundo da página (preto azulado)
        card: '#0B0D1C', // cartões grandes
        panel: '#141836', // cartões menores (marinho das artes)
        cream: '#E9EBF8', // texto principal (branco frio)
        primary: '#C9D1FF', // lavanda: textos claros, ícones e bordas
        brand: { DEFAULT: '#2F5BFF', soft: '#8FA8FF', blue: '#015BFE', violet: '#5D30E9' },
        mist: '#9AA3C7', // texto secundário
        dim: '#8189B0', // texto terciário
        ok: '#34D399', // status positivo (verde dos óculos)
        bad: '#F87171', // status de defeito
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(120deg, #015BFE 0%, #5D30E9 100%)',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'serif'],
      },
    },
  },
  plugins: [],
}
