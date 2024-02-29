export default {
  routes: (_routes) => [
    {
      name: "home",
      path: "/",
      component: () =>
        import("@/pages/Home/HomePage.vue").then((r) => r.default || r),
    },
  ],
};
