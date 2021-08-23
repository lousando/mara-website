<template>
	<div
		:class="{
			column: true,
			'is-flex is-flex-direction-column': Boolean(blok.alignment),
			[Boolean(blok.alignment) ? blok.alignment : '']: true,
		}"
	>
		<component
			v-for="innerBlok in blok.column_content"
			:key="innerBlok._uid"
			:blok="innerBlok"
			v-editable="blok"
			:is="innerBlok.component"
		/>
	</div>
</template>

<script>
export default {
	name: "column",
	props: {
		blok: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style scoped></style>
