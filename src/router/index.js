import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../views/FrontLayout.vue"),
      children: [
        {
          path: "",
          component: () => import("../views/HomeView.vue"),
          children: [],
        },
        {
          path: "products",
          component: () => import("../views/ProductsView.vue"),
          children: [],
        },
        {
          path: "product/:id",
          component: () => import("../views/ProductView.vue"),
        },
        {
          path: "about",
          component: () => import("../views/AboutView.vue"),
        },
        {
          path: "articles",
          component: () => import("../views/ArticlesView.vue"),
        },
        {
          path: "articles/article/:id",
          component: () => import("../views/ArticleView.vue"),
        },
      ],
    },
    {
      path: "/login",
      component: () => import("../views/LogIn.vue"),
    },
    {
      path: "/admin",
      component: () => import("../views/admin/BackLayout.vue"),
      children: [
        {
          path: "products",
          component: () => import("../views/admin/ProductsView.vue"),
        },
        {
          path: "orders",
          component: () => import("../views/admin/OrderView.vue"),
        },
        {
          path: "coupons",
          component: () => import("../views/admin/CouponsView.vue"),
        },
        {
          path: "article",
          component: () => import("../views/admin/ArticleEdit.vue"),
        },
        {
          path: "test",
          component: () => import("../views/admin/editTest.vue"),
        },
      ],
    },
  ],
  linkActiveClass: "active",
});

export default router;
