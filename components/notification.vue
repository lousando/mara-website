<template>
	<div
		:class="{
			notification: true,
			'is-light': true,
			'has-text-centered': true,
			[blok.style]: true,
		}"
		v-editable="blok"
	>
		<RichTextRenderer :document="blok.text" />
	</div>
</template>

<script>
export default {
	name: "notification",
	props: {
		blok: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style scoped></style>
