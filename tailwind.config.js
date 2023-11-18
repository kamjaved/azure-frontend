/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				palanquin: ['Palanquin', 'sans-serif'],
				montserrat: ['Monstserrat', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
