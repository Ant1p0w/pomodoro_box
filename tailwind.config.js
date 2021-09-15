module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                red: {
                    500: '#DC3E22'
                },
                gray: {
                    300: '#999999'
                },
                black: '#333',
                green: '#A8B64F'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
