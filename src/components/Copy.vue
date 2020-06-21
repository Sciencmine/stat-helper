<template>
	<transition
		appear
		enter-active-class="zoomIn"
		leave-active-class="zoomOut"
	>
		<q-chip
			v-if="copied"
			elevated
			color="positive"
			text-color="white"
			class="animated non-selectable shadow-1"
			label="Copied!"
		/>
	</transition>
</template>

<script>
import Vue from "vue";
import { copyToClipboard } from "quasar";

export default {
	name: "Copy",

	data() {
		return {
			copied: false,
			copiedStayTime: 1000,
			copiedIntervalId: -1
		};
	},

	created() {
		Vue.prototype.copyToClipboard = this.copy;
	},

	methods: {
		copy(string) {
			copyToClipboard(string)
				.then(() => {
					this.copied = true;

					// eslint-disable-next-line no-magic-numbers
					if (this.copiedIntervalId !== -1) {
						clearInterval(this.copiedIntervalId);
					}

					this.copiedIntervalId = setInterval(() => {
						this.copied = false;
						clearInterval(this.copiedIntervalId);
						// eslint-disable-next-line no-magic-numbers
						this.copiedIntervalId = -1;
					}, this.copiedStayTime);
				})
				// eslint-disable-next-line no-empty-function
				.catch(() => {});
		}
	}
};
</script>
