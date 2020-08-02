<template>
	<section>
		<!-- Officers -->
		<div class="columns">
			<div class="column">
				<h1
					id="officers"
					class="is-size-1 has-text-white has-text-centered has-background-black-transparent"
				>
					Officers
				</h1>
			</div>
		</div>
		<div class="columns">
			<div class="column">
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
										class="lozad"
										:data-src="officer.image_src"
										:alt="'photo of ' + officer.name"
									/>
								</figure>
							</div>
							<div class="media-content">
								<div class="title is-4">
									{{ officer.name }}, {{ officer.call_sign }}
								</div>
								<div class="subtitle is-6">
									{{ officer.role }}
								</div>
							</div>
						</div>
						<p class="content">
							{{ officer.bio }}
						</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Board Members -->
		<div class="columns">
			<div class="column">
				<h1
					id="board-members"
					class="is-size-1 has-text-white has-text-centered has-background-black-transparent"
				>
					Board Members
				</h1>
			</div>
		</div>
		<div class="columns">
			<div class="column">
				<div class="box">
					<div class="board-members-container">
						<div
							v-for="member in settings.board_members"
							:key="member.call_sign"
						>
							<div class="card-content">
								<div class="media">
									<div
										class="media-left"
										v-if="member.image_src"
									>
										<figure class="image is-128x128">
											<img
												class="lozad"
												:data-src="member.image_src"
												:alt="'photo of ' + member.name"
											/>
										</figure>
									</div>
									<div class="media-content">
										<div class="title is-4">
											{{ member.name }},
											{{ member.call_sign }}
										</div>
										<div class="subtitle is-6">
											Board member
										</div>
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
		</div>

		<!-- VE Team -->
		<div class="columns">
			<div class="column">
				<h1
					id="ve-team"
					class="is-size-1 has-text-white has-text-centered has-background-black-transparent"
				>
					Volunteer Examiner Team
				</h1>
			</div>
		</div>
		<div class="columns">
			<div class="column">
				<div class="box">
					<div class="ve-container">
						<div v-for="ve in settings.ve_team" :key="ve.call_sign">
							<div class="card-content">
								<div class="media">
									<div class="media-left" v-if="ve.image_src">
										<figure class="image is-128x128">
											<img
												class="lozad"
												:data-src="ve.image_src"
												:alt="'photo of ' + ve.name"
											/>
										</figure>
									</div>
									<div class="media-content">
										<div class="title is-4">
											{{ ve.name }},
											{{ ve.call_sign }}
										</div>
										<div class="subtitle is-6">
											Volunteer Examiner
										</div>
									</div>
								</div>
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
import _orderBy from "lodash/orderBy";
import gravatarUrl from "gravatar-url";
import lozad from "lozad";

const orderedBoardMembers = _orderBy(aboutSettings.board_members, "name");
const orderedVeTeam = _orderBy(aboutSettings.ve_team, "name");

export default {
	head: {
		title: "About",
	},
	data() {
		return {
			settings: {
				officers: aboutSettings.officers.map(_addImgSrc),
				board_members: orderedBoardMembers.map(_addImgSrc),
				ve_team: orderedVeTeam.map(_addImgSrc),
			},
		};
	},
	mounted() {
		lozad().observe();
	},
};

function _addImgSrc(member) {
	if (member.hasOwnProperty("image_src")) {
		return member;
	}

	return {
		...member,
		image_src: gravatarUrl(member.call_sign, {
			default: "identicon",
			size: "256",
		}),
	};
}
</script>

<style scoped>
.board-members-container,
.ve-container {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
}
</style>
