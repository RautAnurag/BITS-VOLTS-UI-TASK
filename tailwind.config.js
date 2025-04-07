// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     content: [
//       "./src/**/*.{js,jsx,ts,tsx}",
//     ],
//     theme: {
//       extend: {},
//     },
//     plugins: [],
//   }


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     screens: {
//       mobile: "430px",
//       md: "768px",       
//       lg: "1024px",
//       desktop: "1440px",
//     },
//     container: {
//       center: true,
//       padding: {
//         DEFAULT: "1rem",
//         mobile: "1rem",
//         desktop: "2rem",
//       },
//       screens: {
//         mobile: "430px",
//         desktop: "1440px",
//       },
//     },
//     extend: {
//       fontFamily: {
//         'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
//       },
//     },
//   },
//   plugins: [],
// }



// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     screens: {
//       mobile: "430px",
//       md: "768px",       
//       lg: "1024px",
//       desktop: "1440px",
//     },
//     container: {
//       center: true,
//       padding: {
//         DEFAULT: "1rem",
//         lg: "100px", // match your nav's px-[100px]
//       },
//     },
//     extend: {
//       fontFamily: {
//         'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
//       },
//     },
//   },
//   plugins: [],
// }




// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     screens: {
//       mobile: "430px",
//       md: "768px",
//       lg: "1024px",
//       desktop: "1440px",
//     },
//     container: {
//       center: true,
//       padding: {
//         DEFAULT: "1rem",
//         mobile: "1rem",
//         desktop: "2rem",
//       },
//     },
//     extend: {
//       fontFamily: {
//         'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
//       },
//       fontSize: {
//         base20: ['20px', { lineHeight: '28px' }],
//       },
//     },
//   },
//   plugins: [],
// }



  // /** @type {import('tailwindcss').Config} */
  // module.exports = {
  //   content: [
  //     "./src/**/*.{js,jsx,ts,tsx}",
  //   ],
  //   theme: {
  //     screens: {
  //       mobile: "430px",
  //       md: "768px",
  //       lg: "1024px",
  //       desktop: "1440px",
  //     },
  //     container: {
  //       center: true,
  //       padding: {
  //         DEFAULT: "1rem",
  //         mobile: "1rem",
  //         desktop: "2rem",
  //       },
  //     },
  //     extend: {
  //       fontFamily: {
  //         'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
  //       },
  //       fontSize: {
  //         base20: ['20px', { lineHeight: '28px' }],
  //       },
  //       keyframes: {
  //         marquee: {
  //           '0%': { transform: 'translateX(100%)' },
  //           '100%': { transform: 'translateX(-100%)' },
  //         },
  //       },
  //       animation: {
  //         marquee: 'marquee 15s linear infinite',
  //       },
  //     },
  //   },
  //   plugins: [],
  // }


  /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: "430px",
      md: "768px",
      lg: "1024px",
      desktop: "1440px",
    },
    extend: {
      fontFamily: {
        'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
      },
      fontSize: {
        base20: ['20px', { lineHeight: '28px' }],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
      },
    },
  },
  plugins: [],
};
