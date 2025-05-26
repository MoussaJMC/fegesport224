/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#009639', // Green
          50: '#e6f9ee',
          100: '#ccf3dd',
          200: '#99e7bb',
          300: '#66db99',
          400: '#33cf77',
          500: '#00c355',
          600: '#009c44',
          700: '#007533',
          800: '#004e22',
          900: '#002711',
        },
        'secondary': {
          DEFAULT: '#FCD116', // Yellow
          50: '#fffbec',
          100: '#fff7d9',
          200: '#feeeb3',
          300: '#fee58d',
          400: '#fddc67',
          500: '#fcd116',
          600: '#caa712',
          700: '#977d0d',
          800: '#655309',
          900: '#322a04',
        },
        'accent': {
          DEFAULT: '#CE1126', // Red
          50: '#fbecee',
          100: '#f7d8dc',
          200: '#eeb1ba',
          300: '#e68b97',
          400: '#dd6475',
          500: '#ce1126',
          600: '#a40e1e',
          700: '#7b0a17',
          800: '#52070f',
          900: '#290308',
        },
        'dark': {
          DEFAULT: '#111111', // Black
          50: '#f2f2f2',
          100: '#e6e6e6',
          200: '#cccccc',
          300: '#b3b3b3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4d4d4d',
          800: '#333333',
          900: '#1a1a1a',
        }
      },
      fontFamily: {
        'heading': ['Orbitron', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};