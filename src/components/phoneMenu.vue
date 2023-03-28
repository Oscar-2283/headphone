<template>
  <div class="position-fixed top-0 end-0 bg-white" style="z-index: 1045">
    <div class="phoneMenuBody">
      <ul>
        <li>
          <RouterLink @click="() => closeMenu()" to="/" class="fs-5">
            首頁
          </RouterLink>
        </li>
        <li>
          <RouterLink
            @click="() => closeMenu()"
            to="/products?category=全部&page=1"
            class="fs-5"
            >產品一覽</RouterLink
          >
        </li>
        <li>
          <RouterLink @click="() => closeMenu()" to="/about" class="fs-5"
            >關於我們</RouterLink
          >
        </li>
        <li>
          <RouterLink @click="() => closeMenu()" to="/articles" class="fs-5"
            >好文分享</RouterLink
          >
        </li>
        <li>
          <RouterLink @click="() => closeMenu()" to="/searchOrder" class="fs-5"
            >訂單查詢</RouterLink
          >
        </li>
      </ul>
      <div class="mt-auto">
        <a
          href="mailto:service@gmail.com"
          class="mb-3 d-block"
          style="font-size: 20px; text-decoration: underline"
          >service@gmail.com</a
        >
        <p>營業時間:</p>
        <p>周一至周六 10:00~20:00</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    closeMenu() {
      this.$emit("closeMenu");
    },
  },
};
</script>
<style lang="scss">
.phoneMenuBody {
  min-width: 375px;
  padding: 80px 80px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 300px;
    background-color: rgba(219, 106, 26, 0.3);
    border-radius: 50%;
    z-index: -1;
  }
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);
    width: 500px;
    height: 500px;
    background-color: #e7eaeb;
    border-radius: 50%;
    z-index: -1;
  }
  li {
    margin-bottom: 20px;
    letter-spacing: 0.5em;
  }
}
</style>
