<template>
	<section>
		<div class="columns">
			<div class="column has-text-centered">
				<h1
					class="is-size-1 has-text-white has-background-black-transparent"
				>
					Welcome!
				</h1>
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
							We hold a monthly meeting to conduct club activities
							and go over club business. For more information,
							please visit
							<nuxt-link to="/meetings">
								our meetings page
							</nuxt-link>
						</p>
					</div>
					<info-notification>
						​{{
							this.$store.state.globalSettings
								.ve_testing_notification_text
						}}
					</info-notification>
          <img src="/imgs/ham_test_online_logo.png" alt="Ham Test Online Logo" />
          <p class="has-text-centered">
            <a href="https://www.hamradiolicenseexam.com/">https://www.hamradiolicenseexam.com/</a>
          </p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import infoNotification from "../components/info-notification";

export default {
	head: {
		title: "Home",
	},
	components: {
		infoNotification,
	},
};
</script>

<style></style>
