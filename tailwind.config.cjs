/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
			fontFamily: {
				sans: ["Inter","Noto Sans JP",
				 ...defaultTheme.fontFamily.sans],
			  },		
		},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

