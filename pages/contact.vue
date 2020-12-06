<template>
	<section>
		<div class="columns">
			<div class="column has-text-centered">
				<h1
					class="is-size-1 has-text-white has-background-black-transparent"
				>
					Contact Us
				</h1>
			</div>
		</div>
		<div class="box">
			<div class="columns has-text-centered">
				<div class="column">
					<info-notification>
						​{{
							this.$store.state.globalSettings
								.ve_testing_notification_text
						}}
					</info-notification>
				</div>
			</div>
			<div class="columns">
				<div class="column">
					<form @submit.prevent="onClickSubmit" v-if="!emailSent">
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
							<label class="label">Email</label>
							<div class="control">
								<input
									class="input"
									type="email"
									v-model="email"
									autocomplete="email"
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
							<label class="label">Reason</label>
							<div class="select">
								<select v-model="reason" required="required">
									<option
										selected="selected"
										value=""
										disabled="disabled"
									>
										Please select an option
									</option>
									<option value="info">
										Question, Comment, or Inquiry
									</option>
									<option value="mvet">VE Testing</option>
									<option value="webmaster">
										Website Issues
									</option>
									<option value="info">Other</option>
								</select>
							</div>
							<div class="help is-danger">
								This field is required
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
						<div class="field">
							<label class="label" v-once>{{
								this.challengeQuestion
							}}</label>
							<div class="control">
								<input
									class="input"
									type="text"
									required="required"
									v-model.trim="challengeAnswer"
								/>
							</div>
							<div class="help is-danger">
								This field is required
							</div>
						</div>
						<div class="has-text-centered">
							<button
								:class="{
									button: true,
									'is-primary': true,
									'is-loading': emailIsSending,
								}"
								type="submit"
							>
								Send
							</button>
						</div>
					</form>
					<div class="has-text-centered" v-else>
						<h3 class="is-size-3">Email Successfully Sent</h3>
						<p>We'll get back to you shortly.</p>
					</div>
				</div>
				<div class="column">
					<div>
						<h3 class="is-size-3">Phone:</h3>
						<div class="has-text-left">
							​<a href="tel:+​1-520-222-7646">​(520) 222-7646</a>
						</div>
					</div>
					<div>
						<h3 class="is-size-3">Mailing Address:</h3>
						<div class="has-text-left">
							Maricopa Amateur Radio Association<br />
							Post Office Box 951<br />
							Maricopa, AZ<br />
							85139<br />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import infoNotification from "../components/info-notification";
import emailjs from "emailjs-com";

// init service
emailjs.init(process.env.NUXT_ENV_EMAILJS_USER_ID);

export default {
	head: {
		title: "Contact Us",
	},
	data() {
		return {
			// email
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			reason: "",
			message: "",
			// email status
			emailIsSending: false,
			emailSent: false,
			// security
			challengeQuestion: process.env.NUXT_ENV_CHALLENGE_QUESTION,
			challengeAnswer: "",
		};
	},
	components: {
		infoNotification,
	},
	methods: {
		onClickSubmit: function () {
			if (
				this.challengeAnswer.toLocaleUpperCase() !==
				process.env.NUXT_ENV_CORRECT_CHALLENGE_ANSWER
			) {
				this.challengeAnswer = ""; // clear the wrong answer
				// tell them the answer is wrong
				alert("Sorry, wrong answer to the security challenge.");
				return;
			}

			this.emailIsSending = true;

			emailjs
				.send(
					process.env.NUXT_ENV_EMAILJS_SERVICE_ID,
					process.env.NUXT_ENV_EMAILJS_TEMPLATE_ID,
					{
						to_email: this.reason,
						first_name: this.firstName,
						last_name: this.lastName,
						reply_to: this.email,
						phone: this.phone,
						message: this.message,
					}
				)
				.then(() => {
					this.emailSent = true;
				})
				.catch(() => {
					alert(
						"There was an issue sending your message. Please try again later."
					);
				})
				.finally(() => {
					this.emailIsSending = false;
				});
		},
	},
};
</script>

<style scoped>
form {
	margin: auto;
	width: 500px;
	max-width: 80%;
}

textarea {
	height: 150px;
}
</style>
