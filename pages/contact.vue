<template>
	<section>
		<div class="columns has-text-centered">
			<div class="column">
				<h1 class="is-size-1">
					Contact Us
				</h1>
				<h2 class="is-size-2">
					Questions? Comments? Feel free to reach out.
				</h2>
			</div>
		</div>
		<div class="columns">
			<div class="column">
				<form @submit.prevent="onClickSubmit">
					<div class="field">
						<label class="label">First Name</label>
						<div class="control">
							<input
								class="input"
								type="text"
								v-model="firstName"
								autocomplete="given-name"
								required="required"
							/>
						</div>
						<div class="help is-danger">
							This field is required
						</div>
					</div>
					<div class="field">
						<label class="label">Last Name</label>
						<div class="control">
							<input
								class="input"
								type="text"
								v-model="lastName"
								autocomplete="family-name"
								required="required"
							/>
						</div>
						<div class="help is-danger">
							This field is required
						</div>
					</div>
					<div class="field">
						<label class="label">Phone</label>
						<div class="control">
							<input
								class="input"
								type="tel"
								v-model="phone"
								autocomplete="tel"
							/>
						</div>
					</div>
					<div class="field">
						<label class="label">Message</label>
						<div class="control">
							<textarea
								class="input"
								rows="5"
								required="required"
								v-model="message"
							/>
						</div>
						<div class="help is-danger">
							This field is required
						</div>
					</div>
					<div class="has-text-centered">
						<button class="button" type="submit">
							Send
						</button>
					</div>
				</form>
			</div>
			<div class="column">
				<div>
					<h3 class="is-size-3">
						Email:
					</h3>
					<a :href="'mailto:' + mara_inquiry_email">{{
						mara_inquiry_email
					}}</a>
				</div>
				<div>
					<h3 class="is-size-3">
						Mailing Address:
					</h3>
					<div class="has-text-left">
						Maricopa Amateur Radio Association<br />
						Post Office Box 951<br />
						Maricopa, AZ<br />
						85139<br />
					</div>
				</div>
				<div>
					<h3 class="is-size-3">
						Phone:
					</h3>
					<a href="tel:1-520-222-7646">​(520) 222-7646</a>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "contact",
	data() {
		return {
			mara_inquiry_email: this.$store.state.globalSettings
				.mara_inquiry_email,
			firstName: "",
			lastName: "",
			phone: "",
			message: ""
		};
	},
	methods: {
		onClickSubmit: function() {
			const mailToLink = `mailto:${
				this.$store.state.globalSettings.mara_inquiry_email
			}?subject=${encodeURIComponent(
				"CopaHams Info Request"
			)}&body=${encodeURIComponent(this.message)}<br/><br/>Phone: ${
				this.phone
			}<br/>- ${this.firstName} ${this.lastName}`;

			window.open(mailToLink);
		}
	}
};
</script>

<style scoped>
form {
	margin: auto;
	width: 500px;
	max-width: 80%;
}
</style>
