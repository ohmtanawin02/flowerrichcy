/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'base' :['Kanit', 'sans-serif'],
        'baseeng':['Poppins','sans-serif']
      },
      backgroundImage:{
        'background':"url('/public/background.png')",
        'about':"url('/public/about.png')",
        'product':"url('/public/product.png')",
        'performance':"url('/public/performance.png')",
        'blog':"url('/public/blog.png')",
        'contact':"url('/public/contact.jpg')",
      },
      fontSize: {
        engmain: ['64px'],
        abouttext: ['32px']
      },
      colors:{
        'grey-a' :'#787878',
        'green-a' : '#167F57'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
