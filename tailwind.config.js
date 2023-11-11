/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "100": "#f7f7f7",
          "200": "#ebf0ef",
        },
        steelblue: {
          "100": "#1f79ab",
          "200": "#00659d",
        },
        white: "#fff",
        black: "#000",
        gray: {
          "100": "#7c7c7c",
          "200": "#787878",
          "300": "#282a2c",
          "400": "rgba(255, 255, 255, 0.25)",
          "500": "rgba(0, 0, 0, 0.75)",
        },
        gainsboro: {
          "100": "#dcdcdc",
          "200": "#d8d8d8",
        },
        darkslategray: "#16425a",
        darkgray: {
          "100": "#b0b0b0",
          "200": "#9d9d9d",
        },
        silver: "#c4c4c4",
        salmon: "#ec5e5e",
      },
      spacing: {},
      fontFamily: {
        "helvetica-neue": "'Helvetica Neue'",
        "dm-sans": "'DM Sans'",
      },
      borderRadius: {
        "10xs": "3px",
        "3xs": "10px",
        "11xl": "30px",
        "81xl": "100px",
        "12xs-5": "0.5px",
        "4xs-4": "8.4px",
        "54xl-9": "73.9px",
        "10xs-2": "2.2px",
        xl: "20px",
      },
    },
    fontSize: {
      base: "16px",
      "16xl": "35px",
      xl: "20px",
      "11xl": "30px",
      "17xl": "36px",
      sm: "14px",
      lg: "18px",
      "5xl": "24px",
      "29xl": "48px",
      "xs-7": "11.7px",
      "sm-3": "13.3px",
      "3xl-2": "22.2px",
      "23xl": "42px",
      "10xl": "29px",
      "9xl": "28px",
      "36xl": "55px",
      xs: "12px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
