<template>
	<section class="has-text-centered">
		<div class="columns">
			<!-- Constitution -->
			<div class="column">
				<h1 class="is-size-1">Constitution</h1>
				<div>
					<a
						href="/documents/constitution.pdf"
						target="_blank"
						rel="noreferrer noopener"
						>Downloadable PDF Version</a
					>
				</div>
				<iframe
					title="Constitution Embedded View"
					src="https://docs.google.com/document/d/1EUlAt0Q8UfXkZhxP-W2KUlM23sZBkdIbQJNFjmwdYSU/pub?embedded=true"
				>
				</iframe>
			</div>
			<!-- By-Laws -->
			<div class="column">
				<h1 class="is-size-1">By-Laws</h1>
				<div>
					<a
						href="/documents/by_laws.pdf"
						target="_blank"
						rel="noreferrer noopener"
						>Downloadable PDF Version</a
					>
				</div>
				<iframe
					title="By-Laws Embedded View"
					src="https://docs.google.com/document/d/1ITV-1JpHi8ZiIp4eemKVYptAI4MVd88ivUzZb3fg2Ss/pub?widget=true&embedded=true"
				>
				</iframe>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "constitution"
};
</script>

<style scoped>
iframe {
	width: 700px;
	max-width: 100%;
	height: 800px;
}
</style>
