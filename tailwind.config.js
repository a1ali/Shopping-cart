module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            height: {
                "5v": "5vh",
                "7v": "7vh",
                "10v": "10vh",
                "20v": "20vh",
                "30v": "30vh",
                "40v": "40vh",
                "50v": "50vh",
                "60v": "60vh",
                "70v": "70vh",
                "80v": "80vh",
                "90v": "90vh",
                "100v": "100vh",
            },
            screens: {
                "3xl": "2000px",
            },
        },
        backgroundColor: (theme) => ({
            ...theme("colors"),
            primary: "#6C63FF",
            secondary: "#ffed4a",
            danger: "#e3342f",
        }),
        fontFamily: {
            roboto: ["roboto"],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
