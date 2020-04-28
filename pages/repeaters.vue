<template>
	<section class="has-text-centered">
		<div class="columns">
			<div class="column">
				<h1 class="is-size-1 has-text-white">Repeaters</h1>
			</div>
		</div>
		<div class="box">
			<div class="columns">
				<div class="column">
					<div class="content">
						<p v-text="settings.description" />
					</div>
				</div>
			</div>
		</div>
		<div class="box">
			<div class="columns repeater-container">
				<div
					class="column has-text-centered repeater-container__entry"
					v-for="repeater in settings.repeaters"
					:key="repeater.rx_freq"
				>
					<div class="is-size-5" v-if="!repeater.is_club_repeater">
						Hosted Repeater:
					</div>
					<div class="is-size-5" v-else>
						{{ repeater.qth }}
					</div>
					<div>
						<span class="has-text-weight-bold">RX:</span>
						{{ repeater.rx_freq }},
						<span class="has-text-weight-bold">Offset:</span>
						{{ repeater.offset }},
						<span class="has-text-weight-bold">PL:</span>
						{{ repeater.pl_tone }}
					</div>
					<div v-if="repeater.net">
						<span class="has-text-weight-bold">Net:</span>
						{{ repeater.net }}
					</div>
					<div class="is-italic" v-text="repeater.extra_info" />
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import repeatersSettings from "../assets/settings/pages/repeaters.json";

export default {
	name: "repeaters",
	data() {
		return {
			settings: repeatersSettings
		};
	}
};
</script>

<style scoped></style>
