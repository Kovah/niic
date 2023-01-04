/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1024px',
                '2xl': '1024px'
            }
        },
        extend: {
            colors: {
                'ngu-primary': '#6386a4',
                'ngu-primary-dark': '#265174',
                'ngu-energy': '#55ce7e',
                'ngu-magic': '#748ff5',
                'ngu-three': '#cc3a01',
                'ngu-red': '#ec3838'
            }
        }
    },
    plugins: []
};
