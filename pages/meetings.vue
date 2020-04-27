<template>
	<section class="has-text-centered">
		<div class="columns">
			<div class="column">
				<div class="box">
					<div class="content">
						<p>{{ settings.main_text }}</p>
					</div>
					<div class="notification is-info">
						​{{ settings.ve_testing_notification_text }}
					</div>
				</div>
			</div>
			<div class="column">
				<div class="box">
					<iframe
						class="map"
						:src="
							`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJI1lYm8r6KocRi7Y4CVcrcP0&key=AIzaSyBZYQ5IC9n_e4UYRQJWHdFdl5c-1kc2078&zoom=16&maptype=satellite&key=${NUXT_ENV_GMAPS_API_KEY}`
						"
						allowfullscreen
					></iframe>
				</div>
			</div>
		</div>
		<div class="columns">
			<div class="column">
				<div class="box">
					<iframe
						class="calendar"
						src="https://calendar.google.com/calendar/embed?src=calendar%40copahams.org&ctz=America/Phoenix"
					>
					</iframe>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import meetingSettings from "../assets/settings/pages/meetings.json";

export default {
	name: "activities",
	data() {
		return {
			NUXT_ENV_GMAPS_API_KEY: process.env.NUXT_ENV_GMAPS_API_KEY,
			settings: meetingSettings
		};
	}
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
