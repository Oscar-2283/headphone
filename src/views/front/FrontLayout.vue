<template>
  <header
    class="position-fixed top-0 w-100 bg-white header"
    ref="header"
    :class="{ 'header-shadow': isScroll }"
    style="z-index: 10"
  >
    <nav class="h-100">
      <div class="container h-100">
        <div
          class="d-flex justify-content-between align-items-center gap-5 h-100"
        >
          <RouterLink @click="closeMenu" to="/" class="fs-5">
            <picture>
              <source
                srcset="/src/assets/img/logo_web.png"
                media="(min-width:768px)"
              />
              <img src="/src/assets/img/logo_mobile.png" alt="logo" />
            </picture>
          </RouterLink>
          <div class="d-md-flex align-item-center gap-xl-6 gap-4">
            <ul
              class="d-lg-flex align-item-center gap-xl-6 gap-4 d-none flex-shrink-0"
            >
              <li>
                <RouterLink
                  @click="closeMenu"
                  to="/products?category=全部&page=1"
                  class="fs-5"
                  >產品一覽</RouterLink
                >
              </li>
              <li>
                <RouterLink @click="closeMenu" to="/about" class="fs-5"
                  >關於我們</RouterLink
                >
              </li>
              <li>
                <RouterLink @click="closeMenu" to="/articles" class="fs-5"
                  >好文分享</RouterLink
                >
              </li>
              <li>
                <RouterLink @click="closeMenu" to="/searchOrder" class="fs-5"
                  >訂單查詢</RouterLink
                >
              </li>
            </ul>
            <div class="d-flex align-items-center gap-xl-6 gap-4">
              <RouterLink @click="closeMenu" to="/login"
                ><span class="material-symbols-outlined p2">
                  person
                </span></RouterLink
              >
              <div class="position-relative">
                <button
                  @click.prevent="togglecart()"
                  type="button"
                  class="cartIcon"
                  style="background-color: transparent"
                  aria-controls="offcanvas"
                >
                  <span class="material-symbols-outlined p2">
                    shopping_cart
                  </span>
                </button>

                <span
                  v-if="carts.length"
                  class="badge rounded-pill bg-danger text-white position-absolute top-0 end-0"
                  style="transform: translate(50%, -50%)"
                  >{{ carts.length }}</span
                >
              </div>
              <div class="d-lg-none d-block" style="z-index: 1050">
                <button
                  class="menuToggle"
                  :class="{ show: showMenu }"
                  @click.prevent="toggleMenu()"
                  type="button"
                  style="background-color: transparent"
                  aria-controls="offcanvas"
                >
                  <span></span>
                </button>
              </div>
            </div>
          </div>

          <div
            v-if="showMenu"
            @click="showMenu = false"
            class="offcanvas-backdrop fade show"
            style="backdrop-filter: blur(8px); background: rgba(0, 0, 0, 0.5)"
          ></div>
          <PhoneMenu
            ref="phoneMenu"
            class="phoneMenu"
            :class="{ show: showMenu }"
            @closeMenu="closeMenu"
          />
        </div>
      </div>
    </nav>
    <div></div>
  </header>

  <AsideCart ref="cart" />

  <RouterView />
  <footer class="footer py-8">
    <div class="container">
      <div
        class="d-flex flex-wrap justify-content-center align-items-center gap-3"
      >
        <div class="grid justify-content-center flex-wrap g-5">
          <RouterLink
            to="/products"
            class="g-col-md-3 g-col-12 text-center text-white fs-5"
            >產品一覽</RouterLink
          >
          <RouterLink
            to="/about"
            class="g-col-md-3 g-col-12 text-center text-white fs-5"
            >關於我們</RouterLink
          >
          <RouterLink
            to="/articles"
            class="g-col-md-3 g-col-12 text-center text-white fs-5"
            >好文分享</RouterLink
          >
          <RouterLink
            to="/searchOrder"
            class="g-col-md-3 g-col-12 text-center text-white fs-5"
            >訂單查詢</RouterLink
          >
        </div>
      </div>
      <div>
        <p class="w-100 text-center text-white fs-5 mt-3">
          本網站僅供個人作品使用，不提供商業用途
        </p>
        <p class="w-100 text-center text-white fs-5 mt-1">
          Copyright © 2023 oscar.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import AsideCart from "@/components/AsideCart.vue";
import PhoneMenu from "@/components/PhoneMenu.vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { mapActions, mapState } from "pinia";
import cartStore from "@/stores/cart";
gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      isScroll: false,
      showMenu: false,
      windowWidth: window.innerWidth,
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

    closeMenu() {
      this.showMenu = false;
    },
    togglecart() {
      this.$refs.cart.bsCart.toggle();
    },
    toggleMenu() {
      this.$refs.phoneMenu.$el.classList.toggle("show");
      this.showMenu = !this.showMenu;
    },

    ...mapActions(cartStore, ["getCart"]),
  },
  components: {
    AsideCart,
    PhoneMenu,
  },
  mounted() {
    this.scrollTrigger();
    this.getCart();
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth > 768) {
        this.showMenu = false;
      }
    });
  },
  computed: {
    ...mapState(cartStore, ["carts"]),
  },
};
</script>

<style lang="scss">
a.router-link-exact-active {
  color: #da6a19 !important;
}
.header-shadow {
  box-shadow: 0 0 6px 0 #00000080;
}
.phoneMenu {
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  &.show {
    transform: translateX(0%);
  }
}
.menuToggle {
  width: 18px;
  height: 12px;
  margin: 0px auto 16px;
  span::after,
  span::before {
    content: "";
    position: absolute;
    left: 0;
    top: -6px;
  }
  span::after {
    top: 6px;
  }
  span,
  span::after,
  span::before {
    width: 100%;
    height: 1px;
    background-color: #222222;
    transition: all 0.3s;
    backface-visibility: hidden;
    border-radius: 1px;
  }
  span {
    position: relative;
    display: block;
  }
  &.show {
    span {
      background-color: transparent;
      &::before {
        transform: rotate(45deg) translate(3px, 5px);
      }
      &::after {
        transform: rotate(-45deg) translate(3px, -6px);
      }
    }
  }
}
</style>
