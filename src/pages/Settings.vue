<template>
	<q-page
		padding
		class="flex flex-center"
	>
		<q-card class="col-grow">
			<q-card-section>
				<q-list>
					<q-item>
						<q-item-section class="non-selectable text-h6">
							{{ $t("settings.localization") }}
						</q-item-section>
						<q-item-section>
							<q-select
								v-model="$i18n.locale"
								:options="langs"
								:display-value="$t(`langNames.${ $i18n.locale }`)"
								transition-show="jump-down"
								transition-hide="jump-up"
								rounded
								outlined
								emit-value
								@input="updateTitle"
							/>
						</q-item-section>
					</q-item>
				</q-list>
			</q-card-section>
		</q-card>
	</q-page>
</template>

<script>
export default {
	name: "PageSettings",

	data() {
		return {
			langs: [
				{
					label: "English",
					value: "en-us"
				},
				{
					label: "简体中文",
					value: "zh-cn"
				}
			]
		};
	},

	methods: {
		updateTitle() {
			this.$store.commit("window/updateTitle", this.$t("title"));
		}
	}
};
</script>
