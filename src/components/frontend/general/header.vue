<script setup lang="ts">
import { useRouter } from "vue-router"; //useRouter是vue的函式，取得目前專案的路由設定
const router = useRouter();
const menuList = router.getRoutes().filter((router) => {
  return router.meta.menu === true;
});
</script>
<template>
  <header>
    <div class="wrap">
      <figure class="logo">
        <img src="/images/logo.png" width="250" height="83" alt="logo" />
      </figure>
      <nav class="menuList">
        <div class="menuItem" v-for="item in menuList" :key="item.menu">
          <RouterLink :to="{ name: item.name }">{{
            item.meta.title
          }}</RouterLink>
        </div>
      </nav>
    </div>
  </header>
</template>
<style scoped lang="scss">
.wrap {
  padding: 10px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menuList {
  display: flex;
  gap: 20px;
  .menuItem {
    text-decoration: none;
  }
}
</style>
