/* eslint-disable global-require */
import Vue from "vue";

import Vuex from "vuex";

import window from "./window";

Vue.use(Vuex);

export default function (/* { ssrContext } */) {
	const Store = new Vuex.Store({
		modules: { window },

		strict: process.env.DEV
	});

	if (process.env.DEV && module.hot) {
		module.hot.accept(["./window"], () => {
			Store.hotUpdate({ modules: { drawer: require("./window").default } });
		});
	}

	return Store;
}
