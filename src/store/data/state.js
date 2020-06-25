import Vue from "vue";

function $deepCopy(value) {
	return Vue.prototype.$deepCopy(value);
}

const defaultData = [
		{ x: 5, y: 4 },
		{ x: 2, y: 1 },
		{ x: 4, y: 3 },
		{ x: 3, y: 2 },
		{ x: 1, y: 5 }
	],
	defaultValue = { x: 0, y: 0 };

export default function () {
	return {
		data: $deepCopy(defaultData),
		defaultData: $deepCopy(defaultData),
		defaultValue: $deepCopy(defaultValue)
	};
}
