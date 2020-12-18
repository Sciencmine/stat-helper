/* eslint "array-element-newline": ["warn", { multiline: true, minItems: 1 }] */
const routes = [
	{
		path: "/",
		component: () => import("layouts/MainLayout.vue"),
		children: [
			{ path: "", component: () => import("pages/Index.vue") },
			{ path: "/settings", component: () => import("pages/Settings.vue") },
			{ path: "/statistical-features", component: () => import("pages/StatisticalFeatures.vue") }
			// { path: "/linear-regression-equation", component: () => import("pages/LinearRegressionEquation") }
		]
	}
];

// Always leave this as last one
routes.push({
	path: "*",
	component: () => import("pages/Error404.vue")
});

export default routes;
