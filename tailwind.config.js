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
                    100: '#F4F4F4',
                    300: '#999999',
                    400: '#C4C4C4'
                },
                black: '#333',
                green: '#A8B64F'
            },
            fontSize: {
                '10xl': '9.375rem'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
