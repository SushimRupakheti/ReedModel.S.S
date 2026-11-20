export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Poppins', 'system-ui', 'sans-serif'] },
      colors: {
        navy: '#12285a', brand: '#1f6feb', leaf: '#2e8b57',
        accent: '#e8811a', mist: '#f1f5fb', line: '#dbe3ef',
      },
    },
  },
  plugins: [],
}
