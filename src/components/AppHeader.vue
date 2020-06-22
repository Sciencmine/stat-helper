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

			<q-chip
				v-if="debug"
				v-once
				color="warning"
				text-color="dark"
				class="shadow-1"
				label="Debug"
			/>

			<q-avatar>
				<img src="statics/icons/favicon.png">
			</q-avatar>

			<q-toolbar-title>Statistics Helper</q-toolbar-title>
		</q-toolbar>

		<q-tabs>
			<q-route-tab
				v-for="(to, label) in tabs"
				:key="label"
				:to="tabs[label]"
				:label="label"
			/>
		</q-tabs>
	</q-header>
</template>

<script>
export default {
	name: "AppHeader",

	data() {
		return { debug: process.env.NODE_ENV !== "production" };
	},

	computed: {
		drawerOpened: {
			get() {
				return this.$store.state.window.drawerOpened;
			},
			set(value) {
				this.$store.commit("window/updateDrawerOpenness", value);
			}
		},

		tabs: {
			get() {
				return this.$store.state.window.tabs;
			},
			set(value) {
				this.$store.commit("window/updateTabs", value);
			}
		}
	},

	methods: {}
};
</script>
