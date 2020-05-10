require("dotenv").config();

export default {
	mode: "spa",
	/*
	 ** Headers of the page
	 */
	head: {
		title: "Maricopa ARA",
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				hid: "description",
				name: "description",
				content: "The Maricopa Amateur Radio Association"
			}
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/imgs/favicon.ico" }]
	},
	/*
	 ** Customize the progress-bar color
	 */
	loading: { color: "#000" },
	/*
	 ** Global CSS
	 */
	css: ["@/assets/styles/global.scss"],
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [],

	// router settings
	router: {
		middleware: "navbarHide"
	},

	/*
	 ** Nuxt.js modules
	 */
	modules: [],

	/*
	 ** Build configuration
	 */
	build: {}
};
