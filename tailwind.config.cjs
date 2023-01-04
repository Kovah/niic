/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
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
