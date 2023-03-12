<style lang="scss">
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%) !important;
}
</style>
<template>
  <header
    class="position-fixed top-0 w-100 header"
    ref="header"
    :class="{ 'bg-white': isScroll }"
    style="z-index: 10"
  >
    <nav class="h-100">
      <div class="container h-100">
        <div
          class="d-flex justify-content-between align-items-center gap-5 h-100"
        >
          <RouterLink @click="closeAsideCart" to="/" class="fs-5">
            <picture>
              <source
                srcset="/src/assets/img/logo_web.png"
                media="(min-width:768px)"
              />
              <img src="/src/assets/img/logo_mobile.png" alt="" />
            </picture>
          </RouterLink>
          <ul
            class="d-md-flex align-item-center gap-xl-6 gap-4 d-none flex-shrink-0"
          >
            <li>
              <RouterLink @click="closeAsideCart" to="/products" class="fs-5"
                >產品一覽</RouterLink
              >
            </li>
            <li>
              <RouterLink @click="closeAsideCart" to="/about" class="fs-5"
                >關於我們</RouterLink
              >
            </li>

            <li>
              <RouterLink @click="closeAsideCart" to="/articles" class="fs-5"
                >好文分享</RouterLink
              >
            </li>
            <li>
              <RouterLink @click="closeAsideCart" to="/login" class="fs-5"
                >登入</RouterLink
              >
            </li>
            <li class="position-relative">
              <a
                href=""
                @click.prevent="showAsideCart = !showAsideCart"
                class="cartIcon"
                :class="{ active: showAsideCart }"
              >
                <svg width="24" height="27" viewBox="0 0 24 27" fill="none">
                  <path
                    d="M7.24388 26.2298C6.71496 26.2298 6.26653 26.0428 5.89859 25.6688C5.53064 25.2948 5.34667 24.8273 5.34667 24.2662C5.34667 23.7052 5.53064 23.2319 5.89859 22.8462C6.26653 22.4605 6.72646 22.2676 7.27837 22.2676C7.80729 22.2676 8.26147 22.4605 8.64091 22.8462C9.02035 23.2319 9.21007 23.7052 9.21007 24.2662C9.21007 24.8273 9.02035 25.2948 8.64091 25.6688C8.26147 26.0428 7.79579 26.2298 7.24388 26.2298ZM20.2139 26.2298C19.662 26.2298 19.202 26.0428 18.8341 25.6688C18.4661 25.2948 18.2822 24.8273 18.2822 24.2662C18.2822 23.7052 18.4661 23.2319 18.8341 22.8462C19.202 22.4605 19.662 22.2676 20.2139 22.2676C20.7658 22.2676 21.2257 22.4605 21.5937 22.8462C21.9616 23.2319 22.1456 23.7052 22.1456 24.2662C22.1456 24.8273 21.9616 25.2948 21.5937 25.6688C21.2257 26.0428 20.7658 26.2298 20.2139 26.2298ZM5.00172 4.03483L8.89962 12.3448H18.1787C18.3397 12.3448 18.4891 12.3039 18.6271 12.2221C18.7651 12.1403 18.8686 12.0292 18.9376 11.889L22.801 4.77115C22.8929 4.58415 22.8987 4.41468 22.8182 4.26274C22.7377 4.1108 22.5825 4.03483 22.3525 4.03483H5.00172ZM4.44981 2.94787H22.4215C23.0194 2.94787 23.4679 3.19916 23.7668 3.70173C24.0658 4.2043 24.0773 4.71271 23.8013 5.22697L19.9724 12.3448C19.7654 12.672 19.5067 12.935 19.1963 13.1337C18.8858 13.3324 18.5581 13.4317 18.2132 13.4317H8.24422L6.38151 16.9381C6.24353 17.1484 6.23778 17.3763 6.36426 17.6218C6.49074 17.8672 6.68046 17.9899 6.93342 17.9899H22.1456V19.0769H7.1059C6.32402 19.0769 5.76061 18.7964 5.41566 18.2354C5.07071 17.6744 5.07071 17.0666 5.41566 16.4121L7.65781 12.3097L2.48361 1.22978H0V0.142822H3.13901L4.44981 2.94787Z"
                    fill="#233749"
                  />
                </svg>
              </a>
              <span
                class="badge rounded-pill bg-danger text-white position-absolute top-0 end-0"
                style="transform: translate(50%, -50%)"
                >{{ carts.length }}</span
              >
            </li>
          </ul>
          <div class="d-md-none d-block position-relative">
            <h1 @click="isOpen = !isOpen">555</h1>
            <transition name="menuToggle">
              <ul
                v-if="isOpen"
                class="position-absolute ul-box"
                style="top: 100%"
              >
                <li>1</li>
                <li>1</li>
              </ul>
            </transition>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <transition name="slide">
    <AsideCart
      v-if="showAsideCart"
      @closeAsideCart="closeAsideCart"
    ></AsideCart>
  </transition>
  <RouterView />
  <footer class="footer py-8">
    <div class="container">
      <div
        class="d-flex flex-wrap justify-content-md-between justify-content-center align-items-center gap-3"
      >
        <div class="d-flex justify-content-center flex-wrap gap-5">
          <RouterLink to="/products" class="text-white fs-lg-5 fs-md-6"
            >產品一覽</RouterLink
          >
          <RouterLink to="/about" class="text-white fs-lg-5 fs-md-6"
            >關於我們</RouterLink
          >
          <RouterLink to="/" class="text-white fs-lg-5 fs-md-6"
            >好文分享</RouterLink
          >
        </div>
        <div class="w-full-md text-md-end text-center mb-4">
          <a href="tel:04-1234-5678" class="fs-2 text-white mb-3 d-block"
            >04-1234-5678</a
          >
          <h4 class="text-white mb-2">439台中市大安區興安路378號</h4>
          <p class="text-white">營業時間:周一至周六 10:00~20:00</p>
        </div>
      </div>
    </div>
    <p class="w-100 text-center text-white fs-5 mt-md-3">Copyright@</p>
  </footer>
</template>
<script>
import AsideCart from "../components/AsideCart.vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { mapActions, mapState } from "pinia";
import cartStore from "../stores/cart";
gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      isScroll: false,
      showAsideCart: false,
    };
  },
  methods: {
    scrollTrigger() {
      gsap.to("header", {
        scrollTrigger: {
          trigger: document.documentElement,
          onUpdate: () => {
            this.isScroll = window.scrollY > 0;
          },
        },
        transition: ".3s ease-in-out",
      });
    },
    isOpen() {
      console.log("666");
    },
    closeAsideCart() {
      this.showAsideCart = false;
    },
    ...mapActions(cartStore, ["getCart"]),
  },
  components: {
    AsideCart,
  },
  mounted() {
    this.scrollTrigger();
    this.getCart();
  },
  computed: {
    ...mapState(cartStore, ["carts"]),
  },
};
</script>
