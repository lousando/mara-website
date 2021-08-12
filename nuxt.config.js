require("dotenv").config();
const metadata = require("./assets/metadata.json");

export default {
	target: "static",

	/*
	 ** Headers of the page
	 */
	head: {
		htmlAttrs: {
			lang: "en-us",
		},
		titleTemplate: "Maricopa ARA - %s",
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				hid: "description",
				name: "description",
				content: "The Maricopa Amateur Radio Association",
			},
			{
				name: "google-site-verification",
				content: "YgXjJ4qyDlPI1Wym0ui9w9vMhvp-7XXWnZMWcV6C7vQ",
			},
		],
    script: [
      {
        type: "application/ld+json",
        json: metadata
      }
    ],
		link: [
			// preloads
			{ rel: "preload", as: "image", href: "/imgs/mara_logo.svg" },
			// banner
			{
				rel: "preload",
				as: "image",
				href: "/imgs/antenna_6020w.jpg",
				imagesrcset:
					"/imgs/antenna_640w.webp 640w, /imgs/antenna_1280w.webp 1280w, /imgs/antenna_1920w.webp 1920w, /imgs/antenna_6020w.webp 6020w",
			},
			// direct links
			{ rel: "icon", type: "image/x-icon", href: "/imgs/favicon.ico" },
		],
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
		middleware: "navbarHide",
	},

	/*
	 ** Nuxt.js modules
	 */
	modules: ["@nuxtjs/sitemap"],

  sitemap: {
	    hostname: "https://www.copahams.org"
  },

	/*
	 ** Build configuration
	 */
	build: {},
};
