require("dotenv").config();
const metadata = require("./assets/metadata.json");
const axios = require("axios");

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
				json: metadata,
			},
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
	plugins: [
		"~/plugins/composition-api",
		"~/plugins/rich-text-renderer",
		"~/plugins/components",
	],

	// router settings
	router: {
		middleware: "navbarHide",
	},

	/*
	 ** Nuxt.js modules
	 */
	modules: [
		"@nuxtjs/sitemap",
		[
			"storyblok-nuxt",
			{
				accessToken: process.env.NUXT_ENV_STORYBLOK_TOKEN,
				cacheProvider: "memory",
			},
		],
	],

	sitemap: {
		hostname: "https://www.copahams.org",
	},

	/*
	 ** Build configuration
	 */
	build: {},

	generate: {
		routes: function (callback) {
			const token = process.env.NUXT_ENV_STORYBLOK_TOKEN;
			const version = "published";
			let cache_version = 0;

			let toIgnore = ["home", "global", "global/settings", "en/settings"];

			// other routes that are not in Storyblok with their slug.
			let routes = ["/"]; // adds / directly

			// Load space and receive latest cache version key to improve performance
			axios
				.get(
					`https://api.storyblok.com/v1/cdn/spaces/me?token=${token}`
				)
				.then((space_res) => {
					// timestamp of latest publish
					cache_version = space_res.data.space.version;

					// Call for all Links using the Links API: https://www.storyblok.com/docs/Delivery-Api/Links
					axios
						.get(
							`https://api.storyblok.com/v1/cdn/links?token=${token}&version=${version}&cv=${cache_version}&per_page=100`
						)
						.then((res) => {
							Object.keys(res.data.links).forEach((key) => {
								if (
									!toIgnore.includes(res.data.links[key].slug)
								) {
									routes.push("/" + res.data.links[key].slug);
								}
							});

							callback(null, routes);
						});
				});
		},
	},
};
