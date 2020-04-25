<template>
	<div>
		<div role="banner" class="hero is-primary is-bold">
			<div class="hero-body">
				<div class="container">
					<div class="title">
						Maricopa Amateur Radio Association
					</div>
					<div class="subtitle">
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
		</div>

		<navbar />

		<div role="complementary" class="repeaters-container level">
			<div class="level-item has-text-centered">
				<div>
					<p class="heading">CAC Maricopa Campus</p>
					<div>145.210 -600KHz, PL 162.2</div>
					<div>449.125 -5MHz, PL 136.5</div>
					<div class="is-italic">Parrot Feature using DMTF 9999</div>
					<div class="has-text-weight-bold">Weekly Net:</div>
					<div>
						Every Monday Night @ 8:00pm MST (03:00 UTC)
					</div>
				</div>
			</div>
			<div class="level-item has-text-centered">
				<div>
					<p class="heading">Thunderbird Farms</p>
					<p>446.300 -5MHz, PL 100.0</p>
				</div>
			</div>
			<div class="level-item has-text-centered">
				<div>
					<div class="heading">Wires X Fusion Repeater</div>
					<div>146.780 -600Khz, PL 100.0</div>
					<div>Wires X Node 18445/Room 28445</div>
					<div>Auto/Auto Mode</div>
					<div class="has-text-weight-bold">Weekly Net:</div>
					<div>
						Every Wednesday Night @ 7:00pm MST (02:00 UTC)
					</div>
				</div>
			</div>
		</div>

		<!-- main content -->
		<main>
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
			<div class="columns has-text-centered">
				<div class="column">
					<div class="content">
						<p>
							Maricopa Amateur Radio Association is a 501(c)(3)
							non-profit corporation.
						</p>
					</div>
					<a href="/" rel="noopener">
						<img
							class="mara-logo is-rounded"
							src="imgs/mara_logo.svg"
							alt="MARA Logo"
						/>
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
.mara-logo {
	width: 14rem;
	height: 14rem;
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
	margin: 1rem;
}
</style>
