import Vue from "vue";

function $deepCopy(value) {
	return Vue.prototype.$deepCopy(value);
}

export function updateData(state, data) {
	state.data = data;
}

export function updateDefaultValue(state, defaultValue) {
	if (defaultValue.x !== undefined) {
		state.defaultValue.x = defaultValue.x;
	}

	if (defaultValue.y !== undefined) {
		state.defaultValue.y = defaultValue.y;
	}
}

export function validateDefaultValue({ defaultValue }) {
	if (typeof defaultValue.x !== "number") {
		defaultValue.x = 0;
	}

	if (typeof defaultValue.y !== "number") {
		defaultValue.y = 0;
	}
}

export function addItem(state) {
	validateDefaultValue(state);

	state.data.push($deepCopy(state.defaultValue));
}

export function clearItem(state, index) {
	validateDefaultValue(state);

	state.data[index] = $deepCopy(state.defaultValue);
}

export function removeItem(state, index) {
	validateDefaultValue(state);

	state.data.splice(index, 1);
}

export function restore(state) {
	validateDefaultValue(state);

	state.data = $deepCopy(state.defaultData);
}

export function sort(state) {
	validateDefaultValue(state);

	state.data.sort((a, b) => (a.x === b.x ? a.y - b.y : a.x - b.x));
}
