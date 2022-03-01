module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
      'sui': ['SuisseIntl'],
      'si': ['SiFont'],
      'sir': ['SiFontRegular'],
      'sin': ['SiFontNormal'],
      'sit': ['SiFontThin'],
    },
    extend: {
      colors: {
        base: '#12141D',
        level1: '#0F161B',
        gray: '#1E2029',
        green: '#00FF62',
        primary: '#FFFFFF',
        secondary: '#737789',
        third: '#6A6F81',
      },
    },
  },
  plugins: [],
}
