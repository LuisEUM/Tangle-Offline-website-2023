/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './public/**/*.{jpeg,png,svg}'
  ],
  theme: {
    extend: {
      colors: {
        'tangle-oxford-blue': '#181F31',
        'tangle-rich-black-FOGBRA-29': '#0D111B',
        'tangle-cyan-process': '#00ADE4'
      },
      fontFamily: {
        title: ['Righteous'],
        body: ['Source Sans Pro']
      },
      backgroundImage: {
        'hero-desktop': "url('/backgrounds/girlWalkingPhone.jpeg')",
        'hero-mobile': "url('/backgrounds/girlWalkingPhoneCentered.jpeg')",
        'img-coffe': "url('/backgrounds/partneringWithOfflineBusinesses.png')",
        'collage-1': "url('/collagePeople/pexels-caleb-oquendo-11140378.jpg')",
        'collage-2': "url('/collagePeople/pexels-sangeet-rao-5775283.jpg')",
        'collage-3': "url('/collagePeople/pexels-alessandro-kelvin-2376268.jpg')",
        'collage-4': "url('/collagePeople/top-view-from-colorful-stylish-happy-young-company-friends-lying-grass-park-man-women-having-fun-together.jpg')",
        'collage-5': "url('/collagePeople//pexels-mathias-pr-reding-4386145.jpg')",
        'collage-6': "url('/collagePeople/pexels-matheus-bertelli-8533826.jpg')",
        'collage-7': "url('/collagePeople/pexels-helena-lopes-745045.jpg')"
      }
    }
  },
  plugins: []
}
