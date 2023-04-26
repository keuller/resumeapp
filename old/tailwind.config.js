/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
        borderWidth: {
            '1': '1px'
        },
        screens: {
            xs: '375px'
        },
        width: {
            86: '22rem'
        }
    },
  },
  plugins: [],
}
