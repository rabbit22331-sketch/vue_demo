import { createRouter, createWebHistory } from "vue-router"; //從已安裝的vue-router拿出需要的兩個函式，前者是用來建立路由的，後者是會讓網址看起來像傳統網站的
import frontendRoutes from "./frontend";
import backendRoutes from "./backend";
const routes = [
  ...frontendRoutes,
  ...backendRoutes,
  {
    //使用者輸入的網址不存在在前後台設定裡時執行
    path: "/:pathMatch(.*)*", //將不存在的網址捕捉後
    redirect: "/", //跳回首頁
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to) => {
  if (to.path.startsWith("/admin")) {
    return;
  }
  const seo = to.meta.seo;
  document.title = seo.title;
  updateMeta("description", seo.description);
  updateMeta("keywords", seo.keywords);
});
function updateMeta(name, content) {
  let element = document.querySelector(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("name", name);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

export default router;
