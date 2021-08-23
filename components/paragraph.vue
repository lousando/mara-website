<template>
	<div
		v-editable="blok"
		:class="{
			content: true,
			[blok.alignment]: true,
		}"
	>
		<RichTextRenderer :document="blok.text" />
	</div>
</template>

<script>
export default {
	name: "paragraph",
	props: {
		blok: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style scoped></style>
