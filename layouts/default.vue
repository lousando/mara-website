<template>
	<div>
		<navbar />
    <div
      v-for="notification in this.$store.state.globalSettings.notifications"
      :key="notification"
      class="notification is-danger is-light has-text-centered"
      v-html="notification"
    />

		<section id="main-hero" class="hero">
			<div
				class="banner-background-container banner-background-container--loading"
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
								src="/imgs/mara_logo.svg"
								width="200"
								height="200"
								alt="MARA Logo"
							/>
						</div>
						<div class="column">
							<div class="title">
								<nuxt-link class="has-text-white" to="/">
									Maricopa Amateur Radio Association
								</nuxt-link>
							</div>
							<div class="subtitle has-text-white">
								A 501(c)(3) nonprofit corporation
							</div>
							<!-- icons -->
							<div>
								<a
									href="http://facebook.com/copahams"
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
									href="https://twitter.com/CopaHams"
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
									href="https://www.instagram.com/copahams/"
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
									href="https://www.youtube.com/channel/UC1JJQI7fnsLHcuerGbHLJKw"
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
									href="https://www.flickr.com/photos/copahams/albums"
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
			<nuxt />
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
					<div>
						Site contributions welcome on Github
					</div>
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
	faYoutube
} from "@fortawesome/free-brands-svg-icons";
import navbar from "../components/navbar";

export default {
	name: "mara-footer",
	data() {
		return {
			settings: defaultLayoutSettings,
			faGithub,
			faFacebook,
			faTwitter,
			faInstagram,
			faYoutube,
			faFlickr,
			faAmazon,
			faUtensils
		};
	},
	components: {
		"font-awesome-icon": FontAwesomeIcon,
		navbar
	},
	mounted() {
		_initGoogleAnalytics();
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
		}
	}
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
