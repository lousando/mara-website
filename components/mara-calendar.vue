<template>
	<iframe
		v-editable="blok"
		class="lozad calendar"
		data-src="https://calendar.google.com/calendar/embed?src=calendar%40copahams.org&ctz=America/Phoenix"
	>
	</iframe>
</template>

<script>
import lozad from "lozad";

export default {
	name: "mara-calendar",
	props: {
		blok: {
			type: Object,
			required: true,
		},
	},
	mounted() {
		lozad().observe();
	},
};
</script>

<style scoped>
.calendar {
	width: 100%;
	height: 500px;
}
</style>
