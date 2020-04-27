<template>
	<section>
		<div class="columns">
			<div class="column has-text-centered">
				<h1 class="is-size-1 has-text-white">Welcome!</h1>
			</div>
		</div>
		<div class="columns">
			<div class="column">
				<div class="box">
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
					<h2 class="is-size-3 has-text-weight-bold">
						MARA Monthly Meetings
					</h2>
					<div class="content">
						<p>
							Our monthly Business/Club meeting is held on the
							first Saturday of the month, at 9:00 AM! Our meeting
							location is the Maricopa PD's Copper Sky Substation,
							located at 17985 N Greythorn Dr, Maricopa, AZ 85138.
							Coffee & Doughnuts will be available.
							<a
								href="https://calendar.google.com/calendar/embed?src=calendar%40copahams.org&ctz=America/Phoenix"
								>Click here to check the calendar.</a
							>
						</p>
					</div>
					<info-notification>
						​{{
							this.$store.state.globalSettings
								.ve_testing_notification_text
						}}
					</info-notification>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import infoNotification from "../components/info-notification";

export default {
	components: {
		infoNotification
	}
};
</script>

<style></style>
