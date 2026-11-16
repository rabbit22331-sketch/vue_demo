import backLayout from "@/layout/backendLayout.vue";
const routers = [
  {
    path: "/admin",
    component: backLayout,
    children: [
      {
        path: "about",
        name: "adminAbout",
        component: () => import("@/page/backend/about/index.vue"),
      },
      {
        path: "news",
        name: "adminNews",
        component: () => import("@/page/backend/news/index.vue"),
      },
      {
        path: "contact",
        name: "adminContact",
        component: () => import("@/page/backend/contact/index.vue"),
      },
    ],
  },
  {
    path: "/admin/login",
    name: "Login",
    component: () => import("@/page/backend/login/index.vue"),
  },
  {
    path: "/admin/forget",
    name: "Forget",
    component: () => import("@/page/backend/login/forget.vue"),
  },
];

export default routers;
