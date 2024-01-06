// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [""],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "",
      },
      fontFamily: {
        'primary': ['Poppins']
      }, //end of fontFamily
      
    },
  },
  plugins: [],
}

