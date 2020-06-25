<template>
	<q-item>
		<q-item-section
			thumbnail
			class="non-selectable"
		>
			# {{ index + 1 }}
		</q-item-section>
		<q-item-section>
			<q-input
				v-model.number="value"
				type="number"
				outlined
				rounded
				clearable
				hide-bottom-space
				item-aligned
				:rules="[validate]"
			/>
		</q-item-section>
		<q-item-section side>
			<q-btn
				round
				:disable="!removable"
				color="negative"
				icon="clear"
				@click="removeItem(index)"
			/>
		</q-item-section>
	</q-item>
</template>

<script>
import { mapMutations } from "vuex";

export default {
	name: "FeatureDisplayItem",

	props: {
		index: {
			type: Number,
			required: false,
			default: 0
		},
		value: {
			type: Number,
			required: false,
			default: 0
		},
		removable: {
			type: Boolean,
			required: false,
			default: false
		}
	},

	data() {
		return {};
	},

	methods: {
		validate(value) {
			return typeof value === "number";
		},

		...mapMutations("data", ["removeItem"])
	}
};
</script>
