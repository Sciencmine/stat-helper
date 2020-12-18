<template>
	<q-header
		elevated
		class="bg-primary non-selectable text-white"
		height-hint="98"
	>
		<q-toolbar>
			<!-- <q-btn
				flat
				dense
				icon="menu"
				aria-label="Menu"
				@click="drawerOpened = !drawerOpened"
			/> -->

			<q-avatar>
				<img src="icons/favicon.png">
			</q-avatar>

			<q-chip
				v-if="debug"
				v-once
				color="warning"
				text-color="dark"
				class="shadow-1"
				label="Debug"
			/>

			<q-toolbar-title>{{ $t("title") }}</q-toolbar-title>
		</q-toolbar>

		<q-tabs>
			<q-route-tab
				v-for="i in tabs"
				:key="i"
				:to="i"
				:label="$t(`tabs.${ i }`)"
			/>
		</q-tabs>
	</q-header>
</template>

<script>
// import { mapState } from "vuex";

export default {
	name: "AppHeader",

	data() {
		return {
			debug: process.env.NODE_ENV !== "production",

			tabs: [
				"/settings", "/", "/statistical-features"
				// "/linear-regression-equation"
			]
		};
	},

	computed: {
		drawerOpened: {
			get() {
				return this.$store.state.window.drawerOpened;
			},
			set(value) {
				this.$store.commit("window/updateDrawerOpenness", value);
			}
		}

		// ...mapState("window", { tabs: "tabs" })
	}
};
</script>
