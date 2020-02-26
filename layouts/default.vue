<template>
	<div>
		<div class="hero is-primary is-bold">
			<div class="hero-body">
				<div class="container">
					<div class="title">
						Maricopa Amateur Radio Association
					</div>
					<div class="subtitle">
						A 501(c)(3) nonprofit corporation
					</div>
				</div>
			</div>
		</div>

		<!-- main content -->
		<nuxt />

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
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default {
	name: "mara-footer",
	data() {
		return {
			faGithub
		};
	},
	components: {
		"font-awesome-icon": FontAwesomeIcon
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
</style>
