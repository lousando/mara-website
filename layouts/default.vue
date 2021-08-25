<template>
	<div>
		<navbar />
		<!-- notifications -->
		<component
			v-for="blok in globalStory.notifications"
			v-editable="blok"
			:key="blok._uid"
			:blok="blok"
			:is="blok.component"
		/>

		<section id="main-hero" class="hero">
			<div
				class="
					banner-background-container
					banner-background-container--loading
				"
			>
				<picture aria-hidden="true">
					<!-- webp -->
					<source
						srcset="
							/imgs/antenna_640w.webp   640w,
							/imgs/antenna_1280w.webp 1280w,
							/imgs/antenna_1920w.webp 1920w,
							/imgs/antenna_6020w.webp 6020w
						"
						type="image/webp"
					/>
					<!-- jpeg -->
					<source
						srcset="
							/imgs/antenna_640w.jpg   640w,
							/imgs/antenna_1280w.jpg 1280w,
							/imgs/antenna_1920w.jpg 1920w,
							/imgs/antenna_6020w.jpg 6020w
						"
						type="image/jpeg"
					/>
					<!-- fallback -->
					<img
						@load="onLoadBannerImage"
						class="banner-background-container__image"
						src="/imgs/antenna_6020w.jpg"
						alt="antenna on a mountain in Phoenix, Arizona"
					/>
				</picture>
			</div>
			<div class="hero-body" role="banner">
				<div class="container">
					<div class="columns is-gapless">
						<div class="column is-narrow is-hidden-mobile">
							<img
								v-editable="globalStory"
								v-if="globalStory.site_logo"
								:src="globalStory.site_logo.filename"
								width="200"
								height="200"
								:alt="globalStory.site_logo.alt"
							/>
						</div>
						<div class="column">
							<div v-editable="globalStory" class="title">
								<nuxt-link class="has-text-white" to="/">
									{{ globalStory.main_heading }}
								</nuxt-link>
							</div>
							<div
								v-editable="globalStory"
								class="subtitle has-text-white"
							>
								{{ globalStory.main_subtitle }}
							</div>
							<!-- icons -->
							<div>
								<a
									v-if="
										globalStory.social_link_facebook &&
										globalStory.social_link_facebook.url
									"
									:href="globalStory.social_link_facebook.url"
									target="_blank"
									class="social-icon social-icon--facebook"
									aria-label="MARA Facebook"
								>
									<font-awesome-icon
										class="icon"
										:icon="faFacebook"
									/>
								</a>
								<a
									v-if="
										globalStory.social_link_twitter &&
										globalStory.social_link_twitter.url
									"
									:href="globalStory.social_link_twitter.url"
									target="_blank"
									class="social-icon social-icon--twitter"
									aria-label="MARA Twitter"
								>
									<font-awesome-icon
										class="icon"
										:icon="faTwitter"
									/>
								</a>
								<a
									v-if="
										globalStory.social_link_instagram &&
										globalStory.social_link_instagram.url
									"
									:href="
										globalStory.social_link_instagram.url
									"
									target="_blank"
									class="social-icon social-icon--instagram"
									aria-label="MARA Instagram"
								>
									<font-awesome-icon
										class="icon"
										:icon="faInstagram"
									/>
								</a>
								<a
									v-if="
										globalStory.social_link_youtube &&
										globalStory.social_link_youtube.url
									"
									:href="globalStory.social_link_youtube.url"
									target="_blank"
									class="social-icon social-icon--youtube"
									aria-label="MARA Youtube"
								>
									<font-awesome-icon
										class="icon"
										:icon="faYoutube"
									/>
								</a>
								<a
									v-if="
										globalStory.social_link_flickr &&
										globalStory.social_link_flickr.url
									"
									:href="globalStory.social_link_flickr.url"
									target="_blank"
									class="social-icon social-icon--flickr"
									aria-label="MARA Flickr"
								>
									<font-awesome-icon
										class="icon"
										:icon="faFlickr"
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- main content -->
		<main class="container">
			<section>
				<!-- Page Header  -->
				<component
					v-for="blok in pageStory.header"
					:key="blok._uid"
					:blok="blok"
					:is="blok.component"
				/>
				<!-- page content  -->
				<component
					v-for="blok in pageStory.body"
					:key="blok._uid"
					:blok="blok"
					:is="blok.component"
				/>
			</section>
		</main>

		<footer class="footer has-text-centered">
			<div class="columns">
				<div class="column">
					<h5 class="is-size-5">Ways to help</h5>
				</div>
			</div>
			<div class="columns">
				<div class="column">
					<div class="content">
						<p>
							{{ settings.amazon_smile_pitch }}
						</p>
					</div>
					<a
						href="https://smile.amazon.com/ch/46-2297818"
						target="_blank"
						rel="noreferrer noopener"
					>
						<button type="button" class="button is-primary">
							Register with Amazon Smile &nbsp;
							<font-awesome-icon :icon="faAmazon" />
						</button>
					</a>
				</div>
				<div class="column">
					<p v-html="settings.donation_pitch" />
					<form
						action="https://www.paypal.com/cgi-bin/webscr"
						method="post"
						target="_blank"
					>
						<input type="hidden" name="cmd" value="_s-xclick" />
						<input
							type="hidden"
							name="hosted_button_id"
							value="AL3TRQJ78JY6E"
						/>
						<button
							type="submit"
							class="square-button square-button--yellow"
						>
							Donate
						</button>
					</form>
				</div>
				<div class="column">
					<div class="content">
						<p>
							{{ settings.frys_food_pitch }}
						</p>
					</div>
					<a
						href="https://www.frysfood.com/account/communityrewards"
						target="_blank"
						rel="noreferrer noopener"
					>
						<button type="button" class="button is-primary">
							Register with Fry's Food &nbsp;
							<font-awesome-icon :icon="faUtensils" />
						</button>
					</a>
				</div>
			</div>
			<div class="columns has-text-center">
				<div class="column">
					<div>Site contributions welcome on Github</div>
					<a
						href="https://github.com/lousando/mara-website"
						target="_blank"
						class="github-icon"
						aria-label="MARA Website Github"
					>
						<font-awesome-icon :icon="faGithub" />
					</a>
				</div>
			</div>
		</footer>
	</div>
</template>

<script>
import defaultLayoutSettings from "../assets/settings/layout/default.json";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import {
	faAmazon,
	faFacebook,
	faFlickr,
	faGithub,
	faInstagram,
	faTwitter,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import navbar from "../components/navbar";

function splitStories(stories) {
	return {
		globalStory: stories.find((s) => s.content.component === "global"),
		pageStory: stories.find((s) => s.content.component === "page"),
	};
}

export default {
	name: "layout-default",
	async fetch() {
		// We are getting only the draft version of the content in this example.
		// In real world project you should ask for correct version of the content
		// according to the environment you are deploying to.
		const version =
			process.env.NODE_ENV !== "production" ? "draft" : "published";
		const fullSlug =
			this.$nuxt.context.route.path == "/" ||
			this.$nuxt.context.route.path == ""
				? "home"
				: this.$nuxt.context.route.path.replace(/^\//, "");

		try {
			const res = await this.$nuxt.context.app.$storyapi.get(
				`cdn/stories?by_slugs=global/settings,${fullSlug}`,
				{
					version,
				}
			);

			const { globalStory, pageStory } = splitStories(res.data.stories);
			this.globalStory = globalStory.content;
			this.pageStory = pageStory.content;

			// update title
			this.pageStoryTitle = pageStory.name;
		} catch (error) {
			console.log("$fetch failed: ", error);
		}
	},
	head() {
		return {
			title: this.pageStoryTitle,
		};
	},
	data() {
		return {
			pageStoryTitle: "",
			globalStory: {},
			pageStory: {},
			settings: defaultLayoutSettings,
			faGithub,
			faFacebook,
			faTwitter,
			faInstagram,
			faYoutube,
			faFlickr,
			faAmazon,
			faUtensils,
		};
	},
	components: {
		"font-awesome-icon": FontAwesomeIcon,
		navbar,
	},
	mounted() {
		_initGoogleAnalytics();

		// only allow this in dev
		if (process.env.NODE_ENV !== "production") {
			this.$storybridge(
				() => {
					const storyblokInstance = new StoryblokBridge();

					storyblokInstance.on(
						["input", "published", "change"],
						(event) => {
							if (
								event.action == "input" ||
								event.action == "change"
							) {
								switch (event.story?.content?.component) {
									case "global":
										this.globalStory = event.story.content;
									case "page":
										this.pageStory = event.story.content;
								}
							} else {
								window.location.reload();
							}
						}
					);
				},
				(error) => {
					console.error(error);
				}
			);
		}
	},
	watch: {
		$route() {
			this.$fetch();
			globalThis?.scrollTo(0, 0);
		},
	},
	methods: {
		onLoadBannerImage: () => {
			const loadingBanner = document.querySelector(
				".banner-background-container--loading"
			);

			if (loadingBanner) {
				loadingBanner.classList.remove(
					"banner-background-container--loading"
				);
			}
		},
	},
};

function _initGoogleAnalytics() {
	/**
	 * Most likely using an add blocker.
	 * Don't slow down the page by making a request
	 * that'll likely be blocked.
	 */
	if (navigator.doNotTrack !== "1") {
		const gaId = "UA-156478886-2";

		let trackingScript = document.createElement("script");
		trackingScript.defer = true;
		trackingScript.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
		document.head.appendChild(trackingScript);

		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag("js", new Date());
		gtag("config", gaId);
	}
}
</script>

<style lang="scss" scoped>
.notification {
	margin-top: 5rem;
}

#main-hero {
	color: white;
	text-shadow: 3px 3px 5px black;
	margin-top: 3.25rem;
}

.banner-background-container {
	background: linear-gradient(to bottom, rgba(25, 25, 180, 1), transparent);
	position: absolute;
	transform: translateY(-10%);
	z-index: -1;

	&--loading {
		background: black;
	}

	&__image {
		mix-blend-mode: hard-light;
	}
}

.github-icon {
	color: white;
	font-size: 2.2rem;
}

/**
  * social media links
  * ===================
 */

@mixin social-icon-colors($color) {
	color: $color;

	&:active,
	&:hover {
		color: $color;
	}
}

.social-icon {
	font-size: 1.5rem;
	margin-left: 0.2rem;
	margin-right: 0.2rem;

	svg {
		filter: drop-shadow(3px 3px 5px black);
	}

	&--facebook {
		@include social-icon-colors(#405d9a);
	}

	&--twitter {
		@include social-icon-colors(rgb(29, 161, 242));
	}

	&--instagram {
		@include social-icon-colors(#d2348b);
	}

	&--youtube {
		@include social-icon-colors(#cc0000);
	}

	&--flickr {
		@include social-icon-colors(#0063db);
	}
}

.repeater-container {
	&__entry {
		background-color: rgba(0, 0, 0, 0.4);
	}
}

main {
	padding-bottom: 1rem;
}
</style>
