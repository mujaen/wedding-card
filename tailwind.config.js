/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "white-900": "#FFFFFF",
        "white-800": "#F4F4F4",
        "white-700": "#ECECEC",
        "white-600": "#D7D7D7",
        "white-500": "#C6C6C6",
        "gray-500": "#E0D5D5",
        "primary-100": "#F4EFEF",
        "primary-300": "#DFA2A2",
        "primary-500": "#EB7B7B",
        "primary-700": "#BF4A4A",
        "secondary-100": "#E2DDD9",
        "secondary-300": "#D0CDCB",
        "secondary-500": "#BBA999",
      },
      fontSize: {
        headline1: "32px",
        headline2: "26px",
        headline3: "22px",
        title2: "20px",
        body1: "18px",
        body2: "16px",
        body3: "15px",
        body4: "14px",
        caption: "12px",
      },
      fontWeight: {
        400: "400",
        500: "500",
        700: "700",
        800: "800",
      },
    },
  },
  plugins: [],
};
