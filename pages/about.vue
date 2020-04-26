<template>
	<section>
		<div class="columns">
			<div class="column">
				<h1 class="is-size-1">
					Officers
				</h1>
				<div
					class="card"
					v-for="officer in settings.officers"
					:key="officer.call_sign"
				>
					<div class="card-content">
						<div class="media">
							<div class="media-left" v-if="officer.image_src">
								<figure class="image is-128x128">
									<img
										:src="officer.image_src"
										:alt="'photo of ' + officer.name"
									/>
								</figure>
							</div>
							<div class="media-content">
								<p class="title is-4">
									{{ officer.name }}, {{ officer.call_sign }}
								</p>
								<p class="subtitle is-6">
									{{ officer.role }}
								</p>
							</div>
						</div>
						<p class="content">
							{{ officer.bio }}
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="columns">
			<div class="column">
				<h1 class="is-size-1">
					Board Members
				</h1>
				<div class="is-flex-desktop">
					<div
						class="card"
						v-for="member in settings.board_members"
						:key="member.call_sign"
					>
						<div class="card-content">
							<div class="media">
								<div class="media-left" v-if="member.image_src">
									<figure class="image is-48x48">
										<img
											src="https://bulma.io/images/placeholders/96x96.png"
											:alt="'photo of ' + member.name"
										/>
									</figure>
								</div>
								<div class="media-content">
									<p class="title is-4">
										{{ member.name }},
										{{ member.call_sign }}
									</p>
									<p class="subtitle is-6">
										Board member
									</p>
								</div>
							</div>
							<div class="content">
								{{ member.bio }}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import aboutSettings from "../assets/settings/pages/about.json";

export default {
	name: "about",
	data() {
		return {
			settings: aboutSettings
		};
	}
};
</script>

<style scoped></style>
