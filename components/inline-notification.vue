<template>
	<div v-editable="blok" class="notification is-info has-text-centered">
		<font-awesome-icon :icon="faInfoCircle" class="icon is-small" />
		<RichTextRenderer :document="blok.text" />
	</div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export default {
	name: "inline-notification",
	props: {
		blok: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			faInfoCircle,
		};
	},
	components: {
		"font-awesome-icon": FontAwesomeIcon,
	},
};
</script>

<style lang="scss" scoped>
.notification * {
	display: inline;
}

.notification svg.icon {
	margin-right: 0.2rem;
}
</style>
