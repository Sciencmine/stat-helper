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
						{{ $t("statisticalFeatures.data") }}
					</span>
					<div class="col float-right">
						<q-btn
							rounded
							class="on-left"
							color="accent"
							icon="autorenew"
							:label="$t('statisticalFeatures.restore')"
							@click="restoreData"
						/>
						<q-btn
							rounded
							color="primary"
							icon="sort"
							:label="$t('statisticalFeatures.sort')"
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
						<data-input-item
							v-for="(i, index) in data"
							:key="index"
							v-model="i.x"
							:index="index"
							:removable="data.length > 1"
						/>

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
						{{ $t("statisticalFeatures.features") }}
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
							:label="$t('statisticalFeatures.count')"
						/>
						<feature-display-item
							v-model="sum"
							:label="$t('statisticalFeatures.sum')"
						/>
						<feature-display-item
							v-model="mean"
							:label="$t('statisticalFeatures.mean')"
						/>
						<feature-display-item
							v-model="median"
							:label="$t('statisticalFeatures.median')"
						/>
						<feature-display-item
							v-model="mode"
							:label="$t('statisticalFeatures.mode')"
						/>
						<feature-display-item
							v-model="range"
							:label="$t('statisticalFeatures.range')"
						/>
						<feature-display-item
							v-model="variance"
							:label="$t('statisticalFeatures.variance')"
						/>
						<feature-display-item
							v-model="standardDeviation"
							:label="$t('statisticalFeatures.standardDeviation')"
						/>
					</q-list>
				</q-card-section>
			</q-card>
		</div>
	</q-page>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
	name: "PageStatisticalFeatures",

	components: {
		"data-input-item": () => import("components/DataInputItemSingle.vue"),
		"feature-display-item": () => import("components/FeatureDisplayItem.vue")
	},

	data() {
		return {};
	},

	computed: {
		data: {
			get() {
				return this.$store.state.data.data;
			},
			set(value) {
				this.$store.commit("data/update", value);
			}
		},
		defaultValue: {
			get() {
				return this.$store.state.data.defaultValue.x;
			},
			set(value) {
				this.$store.commit("data/updateDefaultValue", { x: value });
			}
		},

		...mapGetters("data", {
			count: "count",
			sum: "sumX",
			mean: "meanX",
			median: "medianX",
			mode: "modeX",
			range: "rangeX",
			variance: "varianceX",
			standardDeviation: "standardDeviationX"
		})
	},

	methods: {
		validate(value) {
			return typeof value === "number";
		},

		...mapMutations("data", {
			addItem: "addItem",
			clearItem: "clearItem",
			removeItem: "removeItem",
			sortData: "sort",
			restoreData: "restore"
		}),

		...mapActions("window", ["copyToClipboard"])
	}
};
</script>
