<template>
	<section data-v-314f53c6="">
		<div class="columns">
			<div class="column has-text-centered">
				<h1
					class="
						is-size-1
						has-text-white has-background-black-transparent
					"
				>
					Page Not Found!
				</h1>
			</div>
		</div>
		<div class="columns">
			<div class="column">
				<div class="box has-text-centered">
					{{ this.$store.state.globalSettings.error_404_message }}
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	head: {
		title: "404",
	},
};
</script>
