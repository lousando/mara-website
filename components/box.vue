<template>
	<div class="columns">
		<div class="column">
			<div class="box">
				<component
					v-for="innerBlok in blok.box_content"
					:key="innerBlok._uid"
					:blok="innerBlok"
					v-editable="blok"
					:is="innerBlok.component"
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "box",
	props: {
		blok: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style scoped></style>
