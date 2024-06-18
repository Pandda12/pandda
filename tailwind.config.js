import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
//                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
//                sans: ['"Pixelify Sans"', ...defaultTheme.fontFamily.sans],
//                sans: ['"Proxima Nova"', ...defaultTheme.fontFamily.sans],
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
//                pixelFont: ['"Public Pixel"', "sans-serif"],
            },
            fontSize: {
                '12xl': '192px'
            },
            screens: {
                'lt': {'min': '411px', 'max': '639px'}
            },
        },
    },

    plugins: [forms],
};
