/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      transitionDuration: {
        2000: '2000ms',
        1500: '1500ms',
      },
    },
  },
  plugins: [],
};
