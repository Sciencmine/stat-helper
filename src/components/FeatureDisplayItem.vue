<template>
	<q-item>
		<q-item-section class="non-selectable text-h6">
			{{ label }}
		</q-item-section>
		<q-item-section>
			<q-input
				v-model="value"
				readonly
				rounded
				outlined
				hide-bottom-space
				item-aligned
			/>
		</q-item-section>
		<q-item-section side>
			<q-btn
				round
				color="primary"
				icon="library_books"
				@click="copyToClipboard(value)"
			/>
		</q-item-section>
	</q-item>
</template>

<script>
import { mapActions } from "vuex";

export default {
	name: "FeatureDisplayItem",

	props: {
		label: {
			type: String,
			required: false,
			default: ""
		},
		value: {
			type: [String, Number],
			required: false,
			default: ""
		}
	},

	data() {
		return {};
	},

	methods: { ...mapActions("window", ["copyToClipboard"]) }
};
</script>
