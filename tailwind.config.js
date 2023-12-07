/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			md: '768px',
			lg: '1080px',
			xl: '1280px',
		},
		extend: {
			colors: {
				main: '#7c3aed',
				dark: '#0c0a09',
				light: '#ffffff',
			},
		},
	},
	plugins: [],
}
