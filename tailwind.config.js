/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxxs: "10px",
        "5.5xl": "57px",
        xxs: "11px",
      },
      boxShadow: {
        "3xl": "box-shadow: 0px 5.32008px 4.25607px rgba(0, 0, 0, 0.137324);",
        "4xl":
          "box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);",
      },
      screens: {
        xs: "441px",
        mid: "850px",
        lg2: "1250px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        "1px": "1px",
        128: "400px",
        160: "500px",
        192: "525px",
      },
      width: {
        xxxsm: "50px",
        xxsm: "263px",
        128: "360px",
        160: "568px",
      },
      translate: {
        0.5: "2px",
      },
      maxWidth: {
        xxxsm: "50px",
        9: "36px",
        160: "568px",
      },
      inset: {
        0.75: "3px",
        50: "50px",
      },
      padding: {
        0.75: "3px",
        4.5: "18px",
      },
      colors: {
        purple: "#603ADE",
        black: "#111C37",
        turk1: "#3C9DE8",
        blue1: "#416CD2",
        white1: "#F8F7F7",
        white2: "#FFFFFF",
        linkBlue: "#0000EE",
        linkedinBlue: "#0A66C2",
        github: "#181717",
        twitter: "#1DA1F2",
      },
    },
  },
  plugins: [],
};
