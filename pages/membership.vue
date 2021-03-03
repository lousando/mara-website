<template>
	<section class="has-text-centered">
		<div class="columns">
			<div class="column">
				<h1
					class="is-size-1 has-text-white has-background-black-transparent"
				>
					Annual Membership
				</h1>
			</div>
		</div>
		<div class="box">
			<div class="columns">
				<div class="column">
					<h5 class="is-size-5">
						{{ settings.main_text }}
					</h5>
				</div>
			</div>
			<div class="columns">
				<div class="column">
					<p>
						{{ settings.sub_text }}
					</p>
					<a href="https://secure.hamclubonline.com/" target="_blank">
						Ham Club Online
						<font-awesome-icon
							:icon="faExternalLinkAlt"
							class="icon"
						/>
					</a>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import membershipSettings from "../assets/settings/pages/membership.json";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export default {
	head: {
		title: "Membership",
	},
	data() {
		return {
			settings: membershipSettings,
			faExternalLinkAlt,
		};
	},
	components: {
		"font-awesome-icon": FontAwesomeIcon,
	},
};
</script>

<style scoped></style>
