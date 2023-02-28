/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    'Inter',
                    ... defaultTheme.fontFamily.sans
                ]
            },
            colors: {
                primary: {
                    50: '#F9F9F9',
                    100: '#F2F2F2',
                    200: '#D9D9D9',
                    300: '#C0C0C0',
                    400: '#959595',
                    500: '#6A6A6A',
                    600: '#5F5F5F',
                    700: '#3F3F3F',
                    800: '#2F2F2F',
                    900: '#1F1F1F'
                },
                secondary: {
                    50: '#F3FAF7',
                    100: '#E6F5EF',
                    200: '#BFE8D8',
                    300: '#99DBBF',
                    400: '#4DC38E',
                    500: '#00AB5F',
                    600: '#009E54',
                    700: '#006835',
                    800: '#004D25',
                    900: '#003417'
                }
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};

