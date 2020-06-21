/* eslint-env node */
/* eslint-disable camelcase */

module.exports = function (/* Ctx */) {
	return {
		supportIE: false,

		supportTS: false,

		boot: ["i18n"],

		css: ["app.sass"],

		extras: ["roboto-font", "material-icons"],

		build: {
			vueRouterMode: "hash",

			modern: true,

			extendWebpack(cfg) {
				cfg.module.rules.push({
					enforce: "pre",
					test: /\.(?<ext>js|vue)$/u,
					loader: "eslint-loader",
					exclude: /node_modules/u
				});
			}
		},

		devServer: {
			https: false,
			port: 8080,
			open: true
		},

		framework: {
			iconSet: "material-icons",
			lang: "en-us",

			all: "auto",

			components: [],
			directives: [],

			plugins: []
		},

		animations: [],

		ssr: { pwa: false },

		pwa: {
			workboxPluginMode: "GenerateSW",
			workboxOptions: {},
			manifest: {
				name: "Statistics Helper",
				short_name: "Statistics Helper",
				description: "A Tool for Statistics Calculations",
				display: "standalone",
				orientation: "portrait",
				background_color: "#ffffff",
				theme_color: "#027be3",
				icons: [
					{
						src: "statics/icons/icon-128x128.png",
						sizes: "128x128",
						type: "image/png"
					},
					{
						src: "statics/icons/icon-192x192.png",
						sizes: "192x192",
						type: "image/png"
					},
					{
						src: "statics/icons/icon-256x256.png",
						sizes: "256x256",
						type: "image/png"
					},
					{
						src: "statics/icons/icon-384x384.png",
						sizes: "384x384",
						type: "image/png"
					},
					{
						src: "statics/icons/icon-512x512.png",
						sizes: "512x512",
						type: "image/png"
					}
				]
			}
		}
	};
};
