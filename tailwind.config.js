/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js,jsx,ts,tsx}', './src/**/*.{html,js,jsx,ts,tsx}'],
  prefix: 'tw-',
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    backgroundColor: {
      black: 'black',
      1: 'white',
      2: '#212121',
      primary: '#265026',
      'primary-hover': '#3e693e',
    },
    outlineColor: {
      focus: 'dodgerblue',
    },
  },
  plugins: [],
};
