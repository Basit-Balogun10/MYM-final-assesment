/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                greenBg: "#C2ECC1",
                greenText: "#608662",
                blueBg: "#C5C7F6",
                grey: "#F8F8F8",
                
            },
            fontFamily: {
                sulphurPoint: ["Sulphur Point", "sans-serif"],
                roboto: ["roboto", "sans-serif"],
            },
        },
    },
    plugins: [],
};
