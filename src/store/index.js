/* eslint-disable global-require */
import Vue from "vue";
import Vuex from "vuex";

import window from "./window";
import data from "./data";

Vue.use(Vuex);

export default function (/* { ssrContext } */) {
	const Store = new Vuex.Store({
		modules: {
			window,
			data
		},

		strict: process.env.DEV
	});

	if (process.env.DEV && module.hot) {
		module.hot.accept(["./window", "./data"], () => {
			Store.hotUpdate({
				modules: {
					window: require("./window").default,
					data: require("./data").default
				}
			});
		});
	}

	return Store;
}
