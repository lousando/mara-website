<template>
	<div class="notification is-info has-text-centered">
		<font-awesome-icon :icon="faInfoCircle" class="icon is-small" />
		&nbsp;
		<slot></slot>
	</div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export default {
	name: "info-notification",
	data() {
		return {
			faInfoCircle
		};
	},
	components: {
		"font-awesome-icon": FontAwesomeIcon
	}
};
</script>

<style scoped></style>
