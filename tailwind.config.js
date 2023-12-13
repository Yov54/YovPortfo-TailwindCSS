/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "index.html",
        "WebDev.html",
        "SD1EkasariSchoolSite.html",
        "SD1EkasariLMS.html",
        "Herbitional.html",
        "./node_modules/flowbite/**/*.js",
    ],
    theme: {
        container: {
            center: true,
            padding: "16px",
        },
        extend: {
            colors: {
                primary: "#7c3aed", //600
                secondary: "#8b5cf6", //500
                dark: "#2e1065", //950
            },
            screens: {
                "2xl": "1328px",
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};

