<template>
	<q-footer
		elevated
		class="bg-grey-7 text-white"
	>
		<q-toolbar>
			<q-toolbar-title />
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
