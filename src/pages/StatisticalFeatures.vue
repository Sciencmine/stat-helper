<template>
	<q-page
		padding
		class="flex flex-center"
	>
		<div class="justify-center row">
			<q-card
				bordered
				class="col-grow shadow-4"
			>
				<q-card-section>
					<span class="non-selectable text-h5">
						Data
					</span>
					<div class="col float-right">
						<q-btn
							rounded
							class="on-left"
							color="accent"
							icon="autorenew"
							label="Restore"
							@click="restoreData"
						/>
						<q-btn
							rounded
							color="primary"
							icon="sort"
							label="Sort"
							@click="sortData"
						/>
					</div>
				</q-card-section>

				<q-separator
					spaced
					inset
				/>

				<q-card-section>
					<q-list separator>
						<q-item
							v-for="(i, index) in data"
							:key="index"
						>
							<q-item-section
								thumbnail
								class="non-selectable"
							>
								# {{ index + 1 }}
							</q-item-section>
							<q-item-section item-aligned>
								<q-input
									v-model.number="data[index]"
									type="number"
									outlined
									rounded
									clearable
									hide-bottom-space
									item-aligned
									:rules="[validate]"
									@clear="clearItem(index)"
								/>
							</q-item-section>
							<q-item-section side>
								<q-btn
									round
									:disable="data.length === 1"
									color="negative"
									icon="clear"
									@click="removeItem(index)"
								/>
							</q-item-section>
						</q-item>
						<q-item>
							<q-item-section
								thumbnail
								class="non-selectable"
							>
								# N
							</q-item-section>
							<q-item-section>
								<q-input
									v-model.number="defaultValue"
									type="number"
									outlined
									rounded
									clearable
									hide-bottom-space
									item-aligned
									:rules="[validate]"
									@clear="defaultValue = 0"
								/>
							</q-item-section>
							<q-item-section side>
								<q-btn
									round
									color="positive"
									icon="add"
									@click="addItem"
								/>
							</q-item-section>
						</q-item>
					</q-list>
				</q-card-section>
			</q-card>

			<q-separator
				spaced
				vertical
				class="invisible"
			/>

			<q-card
				bordered
				class="col-grow shadow-4"
			>
				<q-card-section>
					<div class="non-selectable text-h5">
						Features
					</div>
				</q-card-section>
				<q-separator
					spaced
					inset
				/>
				<q-card-section>
					<q-list separator>
						<feature-display-item
							v-model="count"
							label="Count"
						/>
						<feature-display-item
							v-model="sum"
							label="Sum"
						/>
						<feature-display-item
							v-model="mean"
							label="Mean"
						/>
						<feature-display-item
							v-model="median"
							label="Median"
						/>
						<feature-display-item
							v-model="mode"
							label="Mode"
						/>
						<feature-display-item
							v-model="range"
							label="Range"
						/>
						<feature-display-item
							v-model="variance"
							label="Variance"
						/>
						<feature-display-item
							v-model="standardDeviation"
							label="Standard Deviation"
						/>
					</q-list>
				</q-card-section>
			</q-card>
		</div>
	</q-page>
</template>

<script>
const defaultData = [
	5,
	3,
	4,
	1,
	2
];

export default {
	name: "PageStatisticalFeature",

	components: { "feature-display-item": () => import("components/FeatureDisplayItem.vue") },

	data() {
		return {
			data: this.$deepCopy(defaultData),
			defaultData: this.$deepCopy(defaultData),
			defaultValue: 0
		};
	},

	computed: {
		sortedData() {
			const newData = this.data.slice();

			newData.sort();

			return newData;
		},
		bucket() {
			return this.sortedData.reduce((accumulator, i) => {
				if (accumulator[i] === undefined) {
					accumulator[i] = 1;
				} else {
					accumulator[i]++;
				}

				return accumulator;
			}, {});
		},
		reversedBucket() {
			return Object.keys(this.bucket).reduce((accumulator, i) => {
				if (accumulator[this.bucket[i]] === undefined) {
					accumulator[this.bucket[i]] = [i];
				} else {
					accumulator[this.bucket[i]].push(i);
				}

				return accumulator;
			}, {});
		},

		count() {
			return this.data.length;
		},
		sum() {
			return this.data.reduce((accumulator, i) => accumulator + i);
		},
		mean() {
			return this.sum / this.count;
		},
		median() {
			return this.count % 2
				? this.sortedData[(this.count - 1) / 2]
				: (this.sortedData[this.count / 2 - 1]
					+ this.sortedData[this.count / 2])
					/ 2;
		},
		modeList() {
			const [index] = Object.keys(this.reversedBucket).reverse();

			return this.reversedBucket[index];
		},
		mode() {
			return this.modeList.join(", ");
		},
		range() {
			return this.sortedData[this.count - 1] - this.sortedData[0];
		},
		variance() {
			return (
				Object.keys(this.bucket).reduce(
					(accumulator, i) => accumulator
						+ this.bucket[i] * Math.pow(i - this.mean, 2),
					0
				) / this.data.length
			);
		},
		standardDeviation() {
			return Math.sqrt(this.variance);
		}
	},

	methods: {
		validate(value) {
			return typeof value === "number";
		},

		validateDefaultValue() {
			if (!this.validate(this.defaultValue)) {
				this.defaultValue = 0;
			}
		},

		addItem() {
			this.validateDefaultValue();

			this.data.push(this.defaultValue);
		},

		clearItem(index) {
			this.validateDefaultValue();

			this.data[index] = this.defaultValue;
		},

		removeItem(index) {
			this.data.splice(index, 1);
		},

		restoreData() {
			this.data = this.$deepCopy(this.defaultData);
		},
		sortData() {
			this.data = this.$deepCopy(this.sortedData);
		},

		copyToClipboard(value) {
			this.$store.dispatch("window/copyToClipboard", value);
		}
	}
};
</script>
