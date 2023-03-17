import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../views/front/FrontLayout.vue"),
      children: [
        {
          path: "",
          component: () => import("../views/front/HomeView.vue"),
          children: [],
        },
        {
          path: "products",
          name: "products",
          component: () => import("../views/front/ProductsView.vue"),
          children: [],
        },
        {
          path: "product/:id",
          component: () => import("../views/front/ProductView.vue"),
        },
        {
          path: "about",
          component: () => import("../views/front/AboutView.vue"),
        },
        {
          path: "articles",
          component: () => import("../views/front/ArticlesView.vue"),
        },
        {
          path: "articles/article/:id",
          component: () => import("../views/front/ArticleView.vue"),
        },
        {
          path: "cart",
          component: () => import("../views/front/CartView.vue"),
          children: [
            {
              path: "",
              component: () => import("../views/front/CheckOrder.vue"),
            },
            {
              path: "payOrder",
              component: () => import("../views/front/PayOrder.vue"),
            },
            {
              path: "checkOut/:id",
              component: () => import("../views/front/CheckOut.vue"),
            },
          ],
        },
      ],
    },
    {
      path: "/login",
      component: () => import("../views/front/LogIn.vue"),
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
      ],
    },
  ],
  linkActiveClass: "active",
});

export default router;
