<template>
	<section class="has-text-centered">
		<div class="columns">
			<div class="column">
				<h1
					class="is-size-1 has-text-white has-background-black-transparent"
				>
					Meetings
				</h1>
			</div>
		</div>
		<div class="box">
			<div class="columns">
				<div class="column">
					<div class="content">
						<p>{{ settings.main_text }}</p>
					</div>
					<info-notification>
						​{{
							this.$store.state.globalSettings
								.ve_testing_notification_text
						}}
					</info-notification>
				</div>
				<div class="column">
					<iframe
						class="lozad map"
						:data-src="`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJI1lYm8r6KocRi7Y4CVcrcP0&zoom=16&maptype=satellite&key=${NUXT_ENV_GMAPS_API_KEY}`"
						allowfullscreen
					></iframe>
				</div>
			</div>
		</div>
		<div class="columns">
			<div class="column">
				<div class="box">
					<iframe
						class="lozad calendar"
						data-src="https://calendar.google.com/calendar/embed?src=calendar%40copahams.org&ctz=America/Phoenix"
					>
					</iframe>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import meetingSettings from "../assets/settings/pages/meetings.json";
import infoNotification from "../components/info-notification";
import lozad from "lozad";

export default {
	head: {
		title: "Meetings",
	},
	data() {
		return {
			NUXT_ENV_GMAPS_API_KEY: process.env.NUXT_ENV_GMAPS_API_KEY,
			settings: meetingSettings,
		};
	},
	mounted() {
		lozad().observe();
	},
	components: {
		infoNotification,
	},
};
</script>

<style scoped>
.map {
	width: 100%;
	height: 300px;
}

.calendar {
	width: 100%;
	height: 500px;
}
</style>
