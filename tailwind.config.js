/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#EDD89B',
        secondary: '#CCBC6F',
        card: '#720D0D',
        background: '#B51805',
        text: '#EEEEEE',
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
      },
      animation: {
        rotate: 'rotate 5s infinite linear',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};

