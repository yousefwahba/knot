/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  plugins: [require('flowbite/plugin')],

  theme: {
    extend: {
      colors: {
        primary: '#FA7517',
        secondary: '#2ECC71',
        third: '#010001',
      },
    },
  },
};
