/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'medium-violet': '#7957FF',
				'dazzle-rose': '#F845C6',
				'tiffany-green': '#00BFB2',
				'absolute-blue': '#0447B4',
			},
		},
	},
	plugins: [require('daisyui')],

	daisyui: {
		themes: false,
	},
};
