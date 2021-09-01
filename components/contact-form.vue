<template>
	<div v-editable="blok">
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
				<div class="help is-danger">This field is required</div>
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
				<div class="help is-danger">This field is required</div>
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
				<div class="help is-danger">This field is required</div>
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
						<option value="webmaster">Website Issues</option>
						<option value="info">Other</option>
					</select>
				</div>
				<div class="help is-danger">This field is required</div>
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
				<div class="help is-danger">This field is required</div>
			</div>
			<div class="field">
				<label class="label" v-once>{{ this.challengeQuestion }}</label>
				<div class="control">
					<input
						class="input"
						type="text"
						required="required"
						v-model.trim="challengeAnswer"
					/>
				</div>
				<div class="help is-danger">This field is required</div>
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
</template>

<script>
import emailjs from "emailjs-com";

export default {
	name: "contact-form",
	props: {
		blok: {
			type: Object,
			required: true,
		},
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
			challengeQuestion: this.blok.challenge_question,
			challengeAnswer: "",
		};
	},
	mounted() {
		emailjs.init(process.env.NUXT_ENV_EMAILJS_USER_ID);
	},
	methods: {
		onClickSubmit: function () {
			if (
				this.challengeAnswer.toLocaleUpperCase() !==
				this.blok.challenge_answer.toLocaleUpperCase()
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

<style scoped></style>
