<template>
	<a :href="blok.href" :target="blok.target" ref="noopener" v-editable="blok">
		<button class="button is-primary">
			{{ blok.text }}
		</button>
	</a>
</template>

<script>
export default {
	name: "pretty-button",
	props: {
		blok: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style scoped></style>
