// tailwind.config.js
// const defaultTheme = require('tailwindcss/defaultTheme')
import { defaultTheme } from 'tailwindcss/defaultTheme'
import { colors } from 'tailwindcss/colors'

module.exports = {
    purge: [
        './layouts/**/*.html',
        './layouts/**/*.js',
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {},
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio')
    ],
}
