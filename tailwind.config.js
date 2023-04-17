/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                blueBg: "#C5C7F6",
                greenBg: "#DDF6DE",
                greenText: "#608662",
                grayBg: "#F8F8F8",
                grayText: "#94979A",
                
            },
            fontFamily: {
                roboto: ["roboto", "sans-serif"],
                rubik: ["Rubik", "sans-serif"],
                sulphurPoint: ["Sulphur Point", "sans-serif"],
            },
            screens: {
                'xl': '1200px'
            }
        },
    },
    plugins: [],
};
