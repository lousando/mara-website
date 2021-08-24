<template>
	<div class="card" v-editable="blok">
		<div class="card-content">
			<div class="media">
				<div class="media-left">
					<figure class="image is-128x128">
						<img
							class="lozad"
							:data-src="getImage(blok)"
							:alt="'photo of ' + blok.name"
						/>
					</figure>
				</div>
				<div class="media-content">
					<div class="title is-4" v-if="blok.name && blok.call_sign">
						{{ blok.name }}, {{ blok.call_sign }}
					</div>
					<div class="subtitle is-6">
						{{ blok.role }}
					</div>
				</div>
			</div>
			<p class="content" v-if="blok.bio">
				<RichTextRenderer :document="blok.bio" />
			</p>
		</div>
	</div>
</template>

<script>
import lozad from "lozad";
import { toSvg } from "jdenticon";

export default {
	name: "club-member",
	props: {
		blok: {
			type: Object,
			required: true,
		},
	},
	mounted() {
		lozad().observe();
	},
	methods: {
		getImage: function (member) {
			if (member.image.filename) {
				return member.image.filename;
			}

			if (process.client) {
				return `data:image/svg+xml;base64,${btoa(
					toSvg(member.call_sign, 256)
				)}`;
			}

			return "";
		},
	},
};
</script>

<style scoped></style>
