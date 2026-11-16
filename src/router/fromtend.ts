import frontLayout from "@/layouts/frontendLayout.vue";

const routers = [
  {
    path: "/",
    component: frontLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/page/frontend/home.vue"),
      },
      {
        path: "about",
        name: "About",
        component: () => import("@/page/frontend/about/index.vue"),
      },
      {
        path: "news",
        name: "News",
        component: () => import("@/page/frontend/news/index.vue"),
      },
      {
        path: "news-detail",
        name: "NewsIns",
        component: () => import("@/page/frontend/news/ins.vue"),
      },
      {
        path: "contact",
        name: "Contact",
        component: () => import("@/page/frontend/contact/index.vue"),
      },
    ],
  },
];

export default routers;
