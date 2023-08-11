/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: [],
      serif: [],
    },
    extend: {

      // Screen Size
      screens: {
        '7xl': '80rem'
      },

      // Typography
      fontsize: {},

      // Line Heights
      lineHeight: {},

      // Colors
      colors: {

      }
    },
  },
  plugins: [],
}
