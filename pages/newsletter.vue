<template>
	<section class="has-text-centered">
		<div class="columns">
			<div class="column">
				<h1
					class="is-size-1 has-text-white has-background-black-transparent"
				>
					Join our newsletter!
				</h1>
			</div>
		</div>
		<div class="columns">
			<div class="column">
				<div class="box">
					<div class="content">
						<p v-html="settings.main_text" />
					</div>
					<div>
						<a
							href="https://copahams.us4.list-manage.com/subscribe?u=5ab31254779c7186ff0c9b8c8&id=fa560aca8b"
							target="_blank"
							rel="noopener noreferrer"
						>
							<a
								href="https://secure.hamclubonline.com/"
								target="_blank"
							>
								Ham Club Online
								<font-awesome-icon
									:icon="faExternalLinkAlt"
									class="icon"
								/>
							</a>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import newsletterSettings from "../assets/settings/pages/newsletter.json";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export default {
	head: {
		title: "Newsletter",
	},
	data() {
		return {
			settings: newsletterSettings,
			faExternalLinkAlt,
		};
	},
	components: {
		"font-awesome-icon": FontAwesomeIcon,
	},
};
</script>

<style scoped></style>
