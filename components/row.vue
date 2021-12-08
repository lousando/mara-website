<template>
	<div :class="{
	  columns: true,
	  'is-mobile': blok.is_mobile
	}">
		<component
			v-for="innerBlok in blok.row_content"
			:key="innerBlok._uid"
			:blok="innerBlok"
			v-editable="blok"
			:is="innerBlok.component"
		/>
	</div>
</template>

<script>
export default {
	name: "row",
	props: {
		blok: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style scoped></style>
