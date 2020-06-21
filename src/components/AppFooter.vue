<template>
	<q-footer elevated class="bg-grey-8 text-white">
		<q-toolbar>
			<copy-popup align="right" />
		</q-toolbar>
	</q-footer>
</template>

<script>
export default {
	name: "AppFooter",

	components: { "copy-popup": () => import("components/Copy.vue") },

	data() {
		return {};
	}
};
</script>
