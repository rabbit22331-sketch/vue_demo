import frontLayout from "@/layout/frontendLayout.vue";

const routers = [
  {
    path: "/",
    component: frontLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/page/frontend/home.vue"),
        meta: {
          title: "首頁",
          menu: false,
          seo: {
            keywords: "首頁,vue demo",
            description: "這是一個首頁",
          },
        },
      },
      {
        path: "about",
        name: "About",
        component: () => import("@/page/frontend/about/index.vue"),
        meta: {
          title: "關於我們",
          menu: true,
          seo: {
            keywords: "關於我們,vue demo",
            description: "這是一個關於我們",
          },
        },
      },
      {
        path: "news",
        name: "News",
        component: () => import("@/page/frontend/news/index.vue"),
        meta: {
          title: "最新消息列表",
          menu: true,
          seo: {
            keywords: "最新消息列表,vue demo",
            description: "這是一個最新消息列表",
          },
        },
      },
      {
        path: "news-detail",
        name: "NewsIns",
        component: () => import("@/page/frontend/news/ins.vue"),
        meta: {
          title: "最新消息內頁",
          menu: false,
          seo: {
            keywords: "最新消息內頁,vue demo",
            description: "這是一個最新消息內頁",
          },
        },
      },
      {
        path: "contact",
        name: "Contact",
        component: () => import("@/page/frontend/contact/index.vue"),
        meta: {
          title: "聯絡我們",
          menu: true,
          seo: {
            keywords: "聯絡我們,vue demo",
            description: "這是一個聯絡我們",
          },
        },
      },
    ],
  },
];

export default routers;
