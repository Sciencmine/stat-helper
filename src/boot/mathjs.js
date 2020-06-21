import {
	absDependencies,
	bignumberDependencies,
	create,
	forEachDependencies,
	formatDependencies,
	fractionDependencies,
	numberDependencies
} from "mathjs";

import Vue from "vue";

const config = {
	number: "BigNumber",
	precision: 64
};

const math = create({
	absDependencies,
	bignumberDependencies,
	forEachDependencies,
	formatDependencies,
	fractionDependencies,
	numberDependencies
}, config);

Vue.prototype.$math = math;
