<template>
	<section class="has-text-centered">
    <div class="columns">
      <div class="column">
        <h1 class="is-size-1 has-text-white has-background-black-transparent">
          Annual Membership
        </h1>
      </div>
    </div>
		<div class="box">
			<div class="columns">
				<div class="column">
					<p>
						{{ settings.main_text }}
					</p>
				</div>
			</div>
			<div class="columns">
				<div class="column">
					<form
						action="https://www.paypal.com/cgi-bin/webscr"
						method="post"
						target="_blank"
					>
						<!-- hidden fields -->
						<input type="hidden" name="cmd" value="_s-xclick" />
						<input
							type="hidden"
							name="hosted_button_id"
							value="SWJ6RDWGJY7X6"
						/>
						<input type="hidden" name="on0" value="ANNUAL dues" />
						<input type="hidden" name="currency_code" value="USD" />

						<div class="columns">
							<div class="column">
								<div class="select">
									<select name="os0">
										<option value="Single member">
											Single member: $25.00 USD/year
										</option>
										<option value="Family membership">
											Family membership: $30.00 USD/year
										</option>
									</select>
								</div>
							</div>
						</div>
						<div class="columns">
							<div class="column">
								<button
									type="submit"
									class="square-button square-button--yellow"
								>
									Join
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import membershipSettings from "../assets/settings/pages/membership.json";

export default {
	name: "membership",
	data() {
		return {
			settings: membershipSettings
		};
	}
};
</script>

<style scoped></style>
