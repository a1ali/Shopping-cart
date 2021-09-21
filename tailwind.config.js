

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
                "93v": "93vh",
                "95v": "95vh",
                "100v": "100vh",
            },
            screens: {
                "3xl": "2000px",
                'tablet': '640px',
                'laptop': '1400px',
            },
            textColor: {
              'primary': '#6C63FF',
              'secondary': '#ffed4a',
              'coat': '#FF6484',
            },
            scale: {
                60: ".60",
                65: ".65",
                55: ".55",
                40: ".40",
                45: ".45",
            }

        },
        backgroundColor: (theme) => ({
            ...theme("colors"),
            primary: "#6C63FF",
            secondary: "#514BC0",
            coat: "#FF6484",
        }),
        fontFamily: {
            roboto: ["Roboto"],
        },

        borderColor: theme => ({
            ...theme('colors'),
            DEFAULT: theme('colors.gray.300', 'currentColor'),
            primary: "#6C63FF",
            secondary: "#514BC0",
            coat: "#FF6484",
        })
  
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
