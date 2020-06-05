<template>
	<nav class="navbar is-fixed-top is-black" role="navigation">
		<div class="navbar-brand">
			<!-- Home -->
			<nuxt-link class="navbar-item" to="/">
				CopaHams
			</nuxt-link>
			<!-- Burger -->
			<div
				role="button"
				aria-label="Navbar Burger"
				:class="{
					'navbar-burger': true,
					'is-active': this.$store.state.showNavbar,
				}"
				@click="onClickHamburgerMenu"
			>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</div>
		</div>
		<div
			:class="{
				'navbar-menu': true,
				'is-active': this.$store.state.showNavbar,
			}"
		>
			<div class="navbar-start">
				<!-- Meetings-->
				<nuxt-link class="navbar-item" to="/repeaters">
					<font-awesome-icon :icon="faBroadcastTower" class="icon" />
					&nbsp; Repeaters
				</nuxt-link>
				<!-- Meetings-->
				<nuxt-link class="navbar-item" to="/meetings">
					<font-awesome-icon :icon="faUsers" class="icon" />
					&nbsp; Meetings
				</nuxt-link>
				<!-- Club Resources -->
				<div class="navbar-item has-dropdown is-hoverable">
					<span class="navbar-link">
						<font-awesome-icon :icon="faBoxes" class="icon" />
						&nbsp; Club Resources
					</span>
					<div class="navbar-dropdown is-boxed">
						<nuxt-link class="navbar-item" to="/newsletter">
							<font-awesome-icon
								:icon="faNewspaper"
								class="icon"
							/>
							&nbsp; Newsletter
						</nuxt-link>
						<nuxt-link class="navbar-item" to="/membership">
							<font-awesome-icon :icon="faRibbon" class="icon" />
							&nbsp; Membership
						</nuxt-link>
						<nuxt-link class="navbar-item" to="/badges">
							<font-awesome-icon :icon="faIdBadge" class="icon" />
							&nbsp; Badges
						</nuxt-link>
						<hr class="navbar-divider" />
						<nuxt-link
							class="navbar-item"
							to="/constitution_and_by_laws"
						>
							<font-awesome-icon :icon="faGavel" class="icon" />
							&nbsp; Constitution & By-Laws
						</nuxt-link>
						<nuxt-link class="navbar-item" to="/arrl_affiliation">
							<font-awesome-icon
								:icon="faCertificate"
								class="icon"
							/>
							&nbsp; ARRL Affiliation
						</nuxt-link>
						<hr class="navbar-divider" />
						<a
							class="navbar-item"
							href="https://www.flickr.com/photos/copahams/albums"
							target="_blank"
							rel="noopener noreferrer"
						>
							<font-awesome-icon :icon="faImages" class="icon" />
							&nbsp; Gallery
							<span class="spacer"></span>
							<font-awesome-icon
								:icon="faExternalLinkAlt"
								class="icon"
							/>
						</a>
						<a
							class="navbar-item"
							href="https://az-mapping.kg6wxc.net/map_display.php#10/33.3004/-111.8233"
							target="_blank"
							rel="noopener noreferrer"
						>
							<font-awesome-icon
								:icon="faMapMarkedAlt"
								class="icon"
							/>
							&nbsp; AZ AREDN Map
							<span class="spacer"></span>
							<font-awesome-icon
								:icon="faExternalLinkAlt"
								class="icon"
							/>
						</a>
						<a
							class="navbar-item"
							href="https://discord.gg/Gq98SwK"
							target="_blank"
							rel="noopener noreferrer"
						>
							<font-awesome-icon :icon="faDiscord" class="icon" />
							&nbsp; MARA Discord Server
							<span class="spacer"></span>
							<font-awesome-icon
								:icon="faExternalLinkAlt"
								class="icon"
							/>
						</a>
						<a
							class="navbar-item"
							href="https://www.arnewsline.org/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<font-awesome-icon
								:icon="faNewspaper"
								class="icon"
							/>
							&nbsp; Amateur Radio Newsline
							<span class="spacer"></span>
							<font-awesome-icon
								:icon="faExternalLinkAlt"
								class="icon"
							/>
						</a>
					</div>
				</div>
				<!-- Events-->
				<div class="navbar-item has-dropdown is-hoverable">
					<span class="navbar-link">
						<font-awesome-icon :icon="faCalendarAlt" class="icon" />
						&nbsp; Events
					</span>
					<div class="navbar-dropdown is-boxed">
						<a
							class="navbar-item"
							href="https://copafest.org"
							target="_blank"
						>
							🎉&nbsp; CopaFest
							<span class="spacer"></span>
							<font-awesome-icon
								:icon="faExternalLinkAlt"
								class="icon"
							/>
						</a>
						<a
							class="navbar-item"
							href="http://www.arca-az.org/main/calendar.html"
							target="_blank"
							rel="noopener noreferrer"
						>
							🎊&nbsp; AZ Hamfests
							<span class="spacer"></span>
							<font-awesome-icon
								:icon="faExternalLinkAlt"
								class="icon"
							/>
						</a>
					</div>
				</div>
				<!-- Contact Us -->
				<nuxt-link class="navbar-item" to="/contact">
					<font-awesome-icon :icon="faComments" class="icon" />
					&nbsp; Contact Us
				</nuxt-link>
				<!-- About -->
				<nuxt-link class="navbar-item" to="/about">
					<font-awesome-icon :icon="faBook" class="icon" />
					&nbsp; About
				</nuxt-link>
			</div>
		</div>
	</nav>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
	faBook,
	faBoxes,
	faBroadcastTower,
	faCalendarAlt,
	faCertificate,
	faComments,
	faExternalLinkAlt,
	faGavel,
	faIdBadge,
	faImages,
	faMapMarkedAlt,
	faNewspaper,
	faRibbon,
	faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

export default {
	name: "navbar",
	data() {
		return {
			showNavbar: false,
			faExternalLinkAlt,
			faBroadcastTower,
			faUsers,
			faIdBadge,
			faNewspaper,
			faCertificate,
			faGavel,
			faRibbon,
			faComments,
			faBook,
			faCalendarAlt,
			faBoxes,
			faImages,
			faMapMarkedAlt,
			faDiscord,
		};
	},
	components: {
		"font-awesome-icon": FontAwesomeIcon,
	},
	methods: {
		onClickHamburgerMenu: function () {
			this.$store.commit("toggleNavbar");
		},
	},
};
</script>

<style scoped>
.spacer {
	width: 0.5rem;
}

.havbar-link {
	cursor: pointer;
}
</style>
