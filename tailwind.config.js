/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forestgreen: {
          100: "#029a42",
          200: "#019942",
          300: "#009941",
          400: "rgba(0, 153, 65, 0.3)",
        },
        gainsboro: {
          100: "#e6e6e6",
          200: "#e3e3e3",
        },
        gray: {
          100: "#888",
          200: "#161616",
          300: "#060606",
          400: "rgba(255, 255, 255, 0.5)",
        },
        whitesmoke: {
          100: "#f5f5f5",
          200: "#f4f4f4",
        },
        dimgray: "#4d4d4d",
        mediumseagreen: {
          100: "#29bf69",
          200: "#26bf69",
        },
      },
      fontFamily: {
        poppins: "Poppins",
        inter: "Inter",
        lato: "Lato",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        inter: ["var(--font-inter)"],
        lato: ["var(--font-lato)"],
      },
      borderRadius: {
        "3xs": "10px",
        "81xl": "100px",
        "11xl": "30px",
        "24xl-6": "43.6px",
        "31xl": "50px",
        "smi-9": "12.9px",
        "4xs-7": "8.7px",
        "4xs": "9px",
        "3xs-4": "9.4px",
        "40xl-2": "59.2px",
        "8xl-1": "27.1px",
        "19xl-8": "38.8px",
        xl: "20px",
        "5xl-4": "24.4px",
        "14xl-9": "33.9px",
        "8xs": "5px",
        "19xl-7": "38.7px",
        "4xs-9": "8.9px",
      },
    },
    fontSize: {
      lg: "18px",
      base: "16px",
      sm: "14px",
      xl: "20px",
      "26xl": "45px",
      "8xl": "27px",
      "17xl": "36px",
      "11xl": "30px",
      "5xl": "24px",
      lgi: "19px",
      "46xl": "65px",
      "20xl": "39px",
      "33xl": "52px",
      "3xl": "22px",
      "10xl": "29px",
      "21xl": "40px",
      inherit: "inherit",
    },
    // screens: {
    //   mq1525: {
    //     raw: "screen and (max-width: 1525px)",
    //   },
    //   mq1225: {
    //     raw: "screen and (max-width: 1225px)",
    //   },
    //   mq850: {
    //     raw: "screen and (max-width: 850px)",
    //   },
    //   mq450: {
    //     raw: "screen and (max-width: 450px)",
    //   },
    // },
  },
  plugins: [],
};
