/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fade': '#FFCEAE',
        'orange':'#EB5D00',
        
    },
    width: {
      '128': '36.25rem',
  },
  plugins: [],
}
}
}
