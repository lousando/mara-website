<template>
	<nav class="navbar is-dark" role="navigation">
		<div class="navbar-brand">
			<!-- Home -->
			<nuxt-link class="navbar-item" to="/">
				CopaHams
			</nuxt-link>
			<!-- Burger -->
			<div
        role="button"
				:class="{
					'navbar-burger': true,
					'is-active': this.$store.state.showNavbar
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
				'is-active': this.$store.state.showNavbar
			}"
		>
			<div class="navbar-start">
				<!-- Meetings-->
				<nuxt-link class="navbar-item" to="/meetings">
					Meetings
				</nuxt-link>
				<!-- Club Resources -->
				<div class="navbar-item has-dropdown is-hoverable">
					<span class="navbar-link">
						Club Resources
					</span>
					<div class="navbar-dropdown is-boxed">
						<nuxt-link class="navbar-item" to="/newsletter">
							Newsletter
						</nuxt-link>
						<nuxt-link class="navbar-item" to="/membership">
							Membership
						</nuxt-link>
						<nuxt-link class="navbar-item" to="/badges">
							Badges
						</nuxt-link>
						<nuxt-link class="navbar-item" to="/constitution_and_by_laws">
							Constitution & By-Laws
						</nuxt-link>
						<nuxt-link class="navbar-item" to="/arrl_affiliation">
							ARRL Affiliation
						</nuxt-link>
						<a
							class="navbar-item"
							href="https://www.flickr.com/photos/copahams/albums"
							target="_blank"
							rel="noopener noreferrer"
						>
							Gallery
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
							AZ AREDN Map
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
						Events
					</span>
					<div class="navbar-dropdown is-boxed">
						<a
							class="navbar-item"
							href="https://copafest.org"
							target="_blank"
						>
							CopaFest
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
							AZ Hamfests
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
					Contact Us
				</nuxt-link>
				<!-- About -->
				<nuxt-link class="navbar-item" to="/about">
					About
				</nuxt-link>
			</div>
		</div>
	</nav>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export default {
	name: "navbar",
	data() {
		return {
			showNavbar: false,
			faExternalLinkAlt
		};
	},
	components: {
		"font-awesome-icon": FontAwesomeIcon
	},
	methods: {
		onClickHamburgerMenu: function() {
			this.$store.commit("toggleNavbar");
		}
	}
};
</script>

<style scoped>
nav {
	top: 0;
	position: sticky;
}

.spacer {
	width: 0.5rem;
}

.havbar-link {
	cursor: pointer;
}
</style>
