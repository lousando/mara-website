<template>
	<section class="has-text-centered">
		<div class="columns">
			<div class="column">
				<h1
					class="is-size-1 has-text-white has-background-black-transparent"
				>
					Badge Ordering
				</h1>
			</div>
		</div>
		<div class="box">
			<div class="columns">
				<div class="column">
					<div>
						{{ settings.main_text }}
					</div>
				</div>
			</div>
			<div class="columns has-text-centered">
				<div class="column">
					<div class="is-flex is-horizontal-center">
						<figure class="image is-128x128">
							<img
								src="https://thesignman.com/pix/maricopa2l.jpg"
								alt="2 Line Badge"
							/>
						</figure>
					</div>
					<a
						href="https://thesignman.com/clubs/maricopa2lcart.html"
						target="_blank"
						rel="noreferrer noopener"
					>
						<button class="button is-primary">
							Order 2 Line Badge
						</button>
					</a>
				</div>
				<div class="column">
					<div class="is-flex is-horizontal-center">
						<figure class="image is-128x128">
							<img
								src="https://thesignman.com/pix/maricopa3l.jpg"
								alt="3 Line Badge"
							/>
						</figure>
					</div>
					<a
						href="https://thesignman.com/clubs/maricopa3lcart.html"
						target="_blank"
						rel="noreferrer noopener"
					>
						<button class="button is-primary">
							Order 3 Line Badge
						</button>
					</a>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import badgesSettings from "../assets/settings/pages/badges.json";

export default {
	head: {
		title: "Badges",
	},
	data() {
		return {
			settings: badgesSettings,
		};
	},
};
</script>

<style scoped></style>
