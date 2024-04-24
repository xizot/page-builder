/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
        colors: {
          ...colors,
          primary: '#003C43'
        },
    },
    plugins: [],
};
