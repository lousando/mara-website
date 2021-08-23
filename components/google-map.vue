<template>
	<iframe
		v-editable="blok"
		class="lozad map"
		:style="{
			height: blok.height,
		}"
		:data-src="`https://www.google.com/maps/embed/v1/place?key=${NUXT_ENV_GMAPS_API_KEY}&q=${blok.address}&zoom=16&maptype=${blok.type}`"
		allowfullscreen
	></iframe>
</template>

<script>
import lozad from "lozad";

export default {
	name: "google-map",
	props: {
		blok: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			NUXT_ENV_GMAPS_API_KEY: process.env.NUXT_ENV_GMAPS_API_KEY,
		};
	},
	mounted() {
		lozad().observe();
	},
};
</script>

<style scoped>
.map {
	width: 100%;
}
</style>
