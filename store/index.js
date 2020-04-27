import globalSettings from "../assets/settings/global";

export const state = () => ({
	// from the config file
	globalSettings,
	// app
	showNavbar: false
});

export const mutations = {
	toggleNavbar(state) {
		state.showNavbar = !state.showNavbar;
	},
	hideNavbar(state) {
		state.showNavbar = false;
	}
};
