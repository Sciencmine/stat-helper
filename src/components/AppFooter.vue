<template>
	<q-footer
		elevated
		class="bg-grey-7 text-white"
	>
		<q-toolbar>
			<q-toolbar-title />
			<!-- The element above is required for the "align='right'" below to function -->
			<copy-popup align="right" />
		</q-toolbar>
	</q-footer>
</template>

<script>
export default {
	name: "AppFooter",

	components: { "copy-popup": () => import("components/CopyPopup.vue") },

	data() {
		return {};
	}
};
</script>
