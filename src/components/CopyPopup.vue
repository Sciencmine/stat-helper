<template>
	<transition
		appear
		enter-active-class="zoomIn"
		leave-active-class="zoomOut"
	>
		<q-chip
			v-if="copyPopupVisible"
			elevated
			color="positive"
			text-color="white"
			class="animated non-selectable shadow-1"
			label="Copied!"
		/>
	</transition>
</template>

<script>
export default {
	name: "CopyPopup",

	data() {
		return {};
	},

	computed: {
		copyPopupVisible() {
			return this.$store.state.window.copyPopupVisible;
		}
	}
};
</script>
