/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html"],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
				fraunces: ["Fraunces", "serif"],
			},
			colors: {
				cream: "hsl(30, 38%, 92%)",
				white: "hsl(0, 0%, 100%)",
				"dark-cyan": "hsl(158, 36%, 37%)",
				"dark-blue": "hsl(212, 21%, 14%)",
				"grayish-blue": "hsl(228, 12%, 48%)",
			},
			backgroundImage: {
				"image-sm": "url(/images/image-product-mobile.jpg)",
				"image-lg": "url(/images/image-product-desktop.jpg)",
			},
		},
	},
	plugins: [],
};
