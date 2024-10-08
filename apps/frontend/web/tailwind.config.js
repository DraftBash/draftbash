/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "rgb(20, 20, 30)", // Primary
                secondary: "rgb(255, 155, 0)", // Secondary
                black: {
                    DEFAULT: "rgb(0, 0, 0)", // black
                    1: "rgb(30, 30, 45)", // black1
                    2: "rgb(40, 40, 55)", // black2
                    3: "rgb(45, 45, 60)", // black3
                },
                grey: {
                    DEFAULT: "rgb(205, 205, 225)", // grey
                    1: "rgb(160, 160, 175)", // grey1
                    2: "rgb(106, 105, 115)", // grey2
                    3: "rgb(60, 60, 65)", // grey3
                    4: "rgb(48, 48, 50)", // grey4
                },
                white: {
                    DEFAULT: "rgb(255, 255, 255)", // white
                    1: "rgb(235, 235, 255)", // white1
                },
                green: "rgb(30, 200, 140)", // Green
                red: "rgb(255, 75, 75)", // Red
                blue: {
                    DEFAULT: "rgb(0, 205, 255)", // Blue
                    1: "rgb(0, 100, 125)", // Blue1
                },
                yellow: "rgb(255, 215, 0)", // Yellow
                orange: "rgb(225, 105, 10)", // Orange
                pink: "rgb(250, 95, 255)", // Pink
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"], // Poppins font
            },
        },
    },
    plugins: [],
};
