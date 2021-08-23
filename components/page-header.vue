<template>
	<div class="columns">
		<div class="column has-text-centered">
			<h1
				class="
					is-size-1
					has-text-white has-background-black-transparent
				"
				v-editable="blok"
			>
				{{ blok.text }}
			</h1>
		</div>
	</div>
</template>

<script>
export default {
	name: "page-header",
	props: {
		blok: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style scoped></style>
