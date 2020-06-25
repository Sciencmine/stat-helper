import state from "./state.js";
import * as getters from "./getters.js";
import * as mutations from "./mutations.js";
import * as actions from "./actions.js";

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
};
