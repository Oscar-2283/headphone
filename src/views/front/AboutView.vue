<template>
  <div class="ovf-hidden">
    <div
      class="banner-img d-flex justify-content-center align-items-center"
      style="height: 500px"
      :style="{ backgroundImage: `url(${bannerImg})` }"
    >
      <h1 class="text-white banner-title">關於我們</h1>
    </div>
    <div class="container py-8">
      <div class="text-bg position-relative">
        <div
          class="row gx-4 gy-md-10 gy-5 align-items-center position-relative"
        >
          <div class="col-md-6 col-12">
            <img src="@/assets/img/intro2.jpg" alt="" />
          </div>
          <div class="col-md-6 col-12">
            <h2 class="mb-3">Audio Avenue 起源</h2>
            <p class="lh-15">
              我們的耳機店由一群對音樂和音質有熱誠的年輕人創立，他們希望通過提供優質的耳機產品，幫助人們更好地享受音樂。自成立以來，我們一直致力於這一目標，並且通過不斷努力和創新，為客戶提供最好的體驗。
            </p>
          </div>
        </div>
        <div
          class="row gx-4 gy-md-10 gy-5 align-items-center position-relative mt-5"
        >
          <div class="col-md-6 col-12">
            <h2 class="mb-3">我們的歷史</h2>
            <p class="lh-15">
              我們是一家專門銷售高品質耳機的店鋪，我們的使命是為客戶提供最好的音質和最舒適的體驗。我們的店鋪位於市中心，擁有豐富的商品選擇和專業的銷售團隊。
            </p>
          </div>
          <div class="col-md-6 col-12 order-md-0 order-first">
            <img src="/src/assets/img/intro1.jpg" alt="" />
          </div>
        </div>
      </div>
      <!-- <div class="py-8 mx-auto" style="max-width: 1000px">
        <div class="mb-6">
          <h2 class="text-center mb-3">合作品牌</h2>
          <p class="text-center">
            我們與多家優質耳機品牌合作，共同推廣卓越的音質體驗和優異的品質，讓您在聆聽音樂、觀看影片和打電話時都能感受到耳機帶來的音質和使用體驗的良好。
          </p>
        </div>
        <div class="row gx-8 gy-4">
          <div
            v-for="i in 8"
            :key="i"
            class="col-3 d-flex justify-content-center"
          >
            <img src="/src/assets/img/icon/technica.png" alt="" />
          </div>
        </div>
      </div> -->
    </div>
    <div style="height: 400px">
      <iframe
        class="w-100 h-100"
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d28920.94406924319!2d121.53402431267422!3d25.030068959605366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z5Y-w5YyX5biC5pS_5bqc!5e0!3m2!1szh-TW!2stw!4v1677572598657!5m2!1szh-TW!2stw"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>
<script>
import bannerImg from "@/assets/img/about-banner.jpg";
import { mapActions } from "pinia";
import LoadingStore from "@/stores/LoadingStore.js";
export default {
  data() {
    return {
      bannerImg: bannerImg,
    };
  },
  methods: {
    ...mapActions(LoadingStore, ["hideLoading"]),
  },
  mounted() {
    this.hideLoading();
  },
};
</script>
<style lang="scss">
.text-bg {
  &::before {
    content: "";
    position: absolute;
    right: 0;
    bottom: 50%;
    background: url("@/assets/img/material-bg.png");
    width: 100vw;
    transform: translate(30%, 50%);
    height: 60%;
    z-index: -1;
  }
}
</style>
