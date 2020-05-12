<template>
	<section class="has-text-centered">
		<div class="columns">
			<div class="column">
				<h1
					class="is-size-1 has-text-white has-background-black-transparent"
				>
					Page Not Found!
				</h1>
			</div>
		</div>
		<div class="columns">
			<div class="column">
				<div class="box">
					<div class="content">
						<p>
							​{{ this.$store.state.globalSettings.error_404_message }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "error_404"
};
</script>

<style scoped></style>
