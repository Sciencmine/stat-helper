<template>
	<q-layout view="hHh lpr fFf">
		<app-header />

		<!-- <q-drawer
			v-model="drawerOpened"
			show-if-above
			bordered
			side="left"
		/> -->

		<q-page-container>
			<transition
				appear
				enter-active-class="animated fadeIn"
			>
				<router-view />
			</transition>
		</q-page-container>

		<app-footer />
	</q-layout>
</template>

<script>
export default {
	name: "MainLayout",

	components: {
		"app-header": () => import("components/AppHeader.vue"),
		"app-footer": () => import("components/AppFooter.vue")
	},

	data() {
		return {};
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
	}
};
</script>
