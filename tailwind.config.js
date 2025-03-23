/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        garamond: ['EB Garamond', 'serif'],
      },
      colors: {
        copper: {
          lightest: '#f5e6d3',
          light: '#e5c4a9',
          DEFAULT: '#d9ab84',
          dark: '#c49367',
          darker: '#ab7d4d',
        },
        midnight: {
          light: '#2a2a3a',
          DEFAULT: '#1a1a2a',
          dark: '#10101a',
        },
      },
      boxShadow: {
        'copper': '0 4px 14px 0 rgba(217, 171, 132, 0.15)',
        'copper-glow': '0 0 20px 0 rgba(217, 171, 132, 0.2)',
        'midnight': '0 4px 14px 0 rgba(26, 26, 42, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};