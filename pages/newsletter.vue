<template>
	<section class="has-text-centered">
		<div class="columns">
			<div class="column">
				<div class="box">
					<h1 class="is-size-1">
						Join our mailing list!
					</h1>
					<div>
						{{ settings.main_text }}
					</div>
					<div>
						<a
							href="https://copahams.us4.list-manage.com/subscribe?u=5ab31254779c7186ff0c9b8c8&id=fa560aca8b"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button class="button is-primary">
								Join
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import newsletterSettings from "../assets/settings/pages/newsletter.json";

export default {
	name: "newsletter",
	data() {
		return {
			settings: newsletterSettings
		};
	}
};
</script>

<style scoped></style>
