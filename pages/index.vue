<template>
	<section>
		<div class="columns">
			<div class="column">
				<div class="box">
					<div class="is-size-4 has-text-weight-bold">Welcome!</div>
					<p>
						The Maricopa Amateur Radio Association serves the
						Amateur Radio community in the City of Maricopa and the
						communities of Casa Grande, Hidden Valley, Stanfield,
						Arizona City, and Eloy, as well as surrounding areas. We
						provide VE testing and a variety of community services
						through our affiliation with the Community Emergency
						Response Team (CERT) and Military Affiliate Radio
						Service (MARS). We sustain our activities with
						donations, fundraising, and membership dues.
					</p>
				</div>
			</div>
		</div>
		<div class="columns">
			<div class="column">
				<div class="box">
					<div class="is-size-4 has-text-weight-bold">
						MARA Monthly Meetings
					</div>
					<p>
						Our monthly Business/Club meeting is held on the first
						Saturday of the month, at 9:00 AM! Our meeting location
						is the Maricopa PD's Copper Sky Substation, located at
						17985 N Greythorn Dr, Maricopa, AZ 85138. Coffee &
						Doughnuts will be available.
						<a
							href="https://calendar.google.com/calendar/embed?src=calendar%40copahams.org&ctz=America/Phoenix"
							>Click here to check the calendar.</a
						>
					</p>
					<div class="notification is-info has-text-centered">
						<font-awesome-icon
							:icon="faInfoCircle"
							class="icon is-small"
						/>
						VE Testing is available at all MARA Meetings. Just let
						us know in advance so we can bring the materials.
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export default {
	components: {},
	data() {
		return {
			faInfoCircle
		};
	},
	components: {
		"font-awesome-icon": FontAwesomeIcon
	}
};
</script>

<style></style>
