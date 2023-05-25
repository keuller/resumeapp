import type { Config } from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{ts,tsx,js}"],
    theme: {
        extend: {
            colors: {
                primary: "#10A9FF",
                'primary-light': "#CCEDFF",
                secondary: "#FFFFFF",
                inverted: "#0D81C2",
                "inverted-dark": "#0d77b5"
            }
        },
    },
    plugins: [],
} satisfies Config;
