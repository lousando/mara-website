require("dotenv").config();

export default {
	mode: "universal",
	/*
	 ** Headers of the page
	 */
	head: {
		htmlAttrs: {
			lang: "en"
		},
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
		link: [
			// preloads
			{ rel: "preload", as: "image", href: "/imgs/favicon.ico" },
			{ rel: "preload", as: "image", href: "/imgs/antenna.webp" },
			{ rel: "preload", as: "image", href: "/imgs/mara_logo.svg" },
			// direct links
			{ rel: "icon", type: "image/x-icon", href: "/imgs/favicon.ico" }
		]
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
