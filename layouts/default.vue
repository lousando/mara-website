<template>
	<div>
		<navbar />

		<div id="main-hero" class="hero">
			<div class="hero-body" role="banner">
				<div class="container">
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
							<font-awesome-icon :icon="faFacebook" />
						</a>
						<a
							href="https://twitter.com/CopaHams"
							target="_blank"
							class="social-icon social-icon--twitter"
							aria-label="MARA Twitter"
						>
							<font-awesome-icon :icon="faTwitter" />
						</a>
						<a
							href="https://www.instagram.com/copahams/"
							target="_blank"
							class="social-icon social-icon--instagram"
							aria-label="MARA Instagram"
						>
							<font-awesome-icon :icon="faInstagram" />
						</a>
						<a
							href="https://www.youtube.com/channel/UC1JJQI7fnsLHcuerGbHLJKw"
							target="_blank"
							class="social-icon social-icon--youtube"
							aria-label="MARA Youtube"
						>
							<font-awesome-icon :icon="faYoutube" />
						</a>
						<a
							href="https://www.flickr.com/photos/copahams/albums"
							target="_blank"
							class="social-icon social-icon--flickr"
							aria-label="MARA Flickr"
						>
							<font-awesome-icon :icon="faFlickr" />
						</a>
					</div>
				</div>
			</div>
			<div class="hero-foot" role="complementary">
				<div class="container">
					<div class="columns">
						<div
							class="column has-text-centered"
							v-for="repeater in settings.repeaters"
							:key="repeater.rx_freq"
						>
							<div
								class="is-size-5"
								v-if="repeater.is_club_repeater"
							>
								Club Repeater:
							</div>
							<div class="is-size-5" v-else>
								Hosted Repeater:
							</div>

							<div>
								<span class="has-text-weight-bold">QTH:</span>
								{{ repeater.qth }}
							</div>
							<div>
								<span class="has-text-weight-bold">RX:</span>
								{{ repeater.rx_freq }},
								<span class="has-text-weight-bold"
									>Offset:</span
								>
								{{ repeater.offset }},
								<span class="has-text-weight-bold">PL:</span>
								{{ repeater.pl_tone }}
							</div>
							<div v-if="repeater.net">
								<span class="has-text-weight-bold">Net:</span>
								{{ repeater.net }}
							</div>
							<div
								class="is-italic"
								v-text="repeater.extra_info"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- main content -->
		<main class="container">
			<nuxt />
		</main>

		<footer class="footer has-text-centered">
			<div class="columns">
				<div class="column">
					<p
						v-html="this.$store.state.globalSettings.donation_pitch"
					/>
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
import {
	faGithub,
	faFacebook,
	faTwitter,
	faInstagram,
	faYoutube,
	faFlickr
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
			faFlickr
		};
	},
	components: {
		"font-awesome-icon": FontAwesomeIcon,
		navbar
	}
};
</script>

<style lang="scss">
.hero-body {
	background-image: url("/imgs/mara_logo.svg");
	background-size: 200px 200px;
	background-repeat: no-repeat;
	padding-left: 200px;

	@media (max-width: 699px) {
		& {
			background-image: none;
			padding-left: 0;
		}
	}
}

.github-icon {
	color: black;
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
	margin-left: 0.1rem;
	margin-right: 0.1rem;

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

.repeaters-container {
	border-bottom: 0.2rem solid gray;
	padding-bottom: 1rem;
}

main {
	padding-bottom: 1rem;
}
</style>
