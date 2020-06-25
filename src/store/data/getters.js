import Vue from "vue";

function $deepCopy(value) {
	return Vue.prototype.$deepCopy(value);
}



function sort(data) {
	return data.sort((a, b) => (a.x === b.x ? a.y - b.y : a.x - b.x));
}

function sortX(data) {
	return data.map(({ x }) => x).sort();
}

function bucketX(data) {
	return sortX(data).reduce((a, i) => {
		if (a[i] === undefined) {
			a[i] = 1;
		} else {
			a[i]++;
		}

		return a;
	}, {});
}



export function sortedData({ data }) {
	return sort($deepCopy(data));
}

export function count({ data }) {
	return data.length;
}

export function sumX({ data }) {
	return data.reduce((a, i) => a + i.x, 0);
}

export function sumY({ data }) {
	return data.reduce((a, i) => a + i.y, 0);
}

export function meanX(state) {
	return sumX(state) / count(state);
}

export function meanY(state) {
	return sumY(state) / count(state);
}

export function medianX(state) {
	const sorted = sortedData(state).map(({ x }) => x);

	return sorted.length % 2
		? sorted[(sorted.length - 1) / 2]
		: (sorted[sorted.length / 2] + sorted[sorted.length / 2 - 1]) / 2;
}

export function modeX({ data }) {
	const bucket = bucketX(data);

	const reversedBucket = Object.keys(bucket).reduce((a, i) => {
		if (a[bucket[i]] === undefined) {
			a[bucket[i]] = [i];
		} else {
			a[bucket[i]].push(i);
		}

		return a;
	}, {});

	const [index] = Object.keys(reversedBucket).reverse();

	const modeList = reversedBucket[index];

	return modeList.join(", ");
}

export function rangeX({ data }) {
	const sorted = sortX(data);

	return sorted[sorted.length - 1] - sorted[0];
}

export function varianceX(state) {
	const bucket = bucketX(state.data);

	const mean = meanX(state);

	return Object.keys(bucket).reduce(
		(a, i) => a
			+ bucket[i] * Math.pow(i - mean, 2),
		0
	) / state.data.length;
}

export function standardDeviationX(state) {
	return Math.sqrt(varianceX(state));
}
