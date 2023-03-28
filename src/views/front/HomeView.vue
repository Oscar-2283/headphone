<template>
  <main class="main overflow-hidden">
    <section class="home-banner revealBox">
      <div class="pt-8 pb-md-8 pb-5">
        <div class="container">
          <div class="row g-5 justify-content-between align-items-center">
            <div class="col-md-6 col-12">
              <h1 class="text-title mb-4 banner-title">
                {{ randomProduct.title }}
              </h1>
              <p class="p2 text-text mb-4 max-w-482md">
                {{
                  randomProduct.instructions &&
                  randomProduct.instructions.length > 0
                    ? randomProduct.instructions[0]
                    : ""
                }}
              </p>
              <div class="px-5 px-md-0">
                <RouterLink
                  :to="`/product/${randomProduct.id}`"
                  class="btn btn1 btn-primary text-white py-3 px-8"
                >
                  觀看產品
                </RouterLink>
              </div>
            </div>
            <div class="col-md-6 col-12 order-md-0 order-first d-flex">
              <img
                class="mx-auto d-block w-100"
                :src="randomProduct.imageUrl"
                alt=""
              />
            </div>
          </div>
          <div class="uncover">
            <div v-for="i in 100" :key="i" class="uncover_slice"></div>
          </div>
        </div>
      </div>
    </section>
    <!-- about -->
    <section class="py-md-10 py-8">
      <div class="container">
        <div class="row gx-4 gy-6 align-items-center">
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="bottom-bottom"
            class="col-md-6 col-12"
          >
            <img class="w-100" src="/src/assets/img/img.png" alt="" />
          </div>
          <div class="col-md-6 col-12">
            <div
              data-aos="fade-left"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-delay="300"
              class="ms-md-auto max-w-526"
            >
              <h1 class="mb-4 text-title text-md-start text-center">
                關於我們
              </h1>
              <p class="p2 mb-md-8 mb-5 text-text">
                AudioAvenue一直以永續經營、站在客人角度思考的理念，為音樂愛好者提供出眾的商品及專業服務。
              </p>
              <div class="px-5 px-md-0">
                <RouterLink
                  to="/about"
                  class="btn btn1 btn-primary text-white py-3 px-8"
                >
                  了解更多
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- product -->
    <section class="product py-md-10 py-6">
      <div class="container">
        <h1 data-aos="fade-up" class="text-center mb-md-8 mb-6">產品一覽</h1>
        <div class="row gx-4 gy-5">
          <div data-aos="fade-up" class="col-xl-3 col-md-6 col-12">
            <div class="card">
              <div class="card-image">
                <img src="/src/assets/img/img_product1.jpg" alt="" />
              </div>
              <div class="pt-4 pb-5 d-flex justify-content-center">
                <div class="w-100 px-5">
                  <div class="mb-4">
                    <h3 class="text-center">|無線|</h3>
                    <h3 class="text-center">耳罩式耳機</h3>
                  </div>
                  <RouterLink
                    to="/products?category=有線耳罩式耳機&page=1"
                    type="button"
                    class="btn btn-title text-white w-100"
                    style="padding: 12px 20px"
                  >
                    進入商店
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            class="col-xl-3 col-md-6 col-12"
          >
            <div class="card">
              <div class="card-image">
                <img src="/src/assets/img/img_product2.png" alt="" />
              </div>
              <div class="pt-4 pb-5 d-flex justify-content-center">
                <div class="w-100 px-5">
                  <div class="mb-4">
                    <h3 class="text-center">|無線|</h3>
                    <h3 class="text-center">耳罩式耳機</h3>
                  </div>
                  <RouterLink
                    to="/products?category=無線耳罩式耳機&page=1"
                    type="button"
                    class="btn btn-title text-white w-100"
                    style="padding: 12px 20px"
                  >
                    進入商店
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            class="col-xl-3 col-md-6 col-12"
          >
            <div class="card">
              <div class="card-image">
                <img src="/src/assets/img/img_product3.jpg" alt="" />
              </div>
              <div class="pt-4 pb-5 d-flex justify-content-center">
                <div class="w-100 px-5">
                  <div class="mb-4">
                    <h3 class="text-center">|無線|</h3>
                    <h3 class="text-center">耳罩式耳機</h3>
                  </div>
                  <RouterLink
                    to="/products?category=有線耳塞式耳機&page=1"
                    type="button"
                    class="btn btn-title text-white w-100"
                    style="padding: 12px 20px"
                  >
                    進入商店
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="450"
            class="col-xl-3 col-md-6 col-12"
          >
            <div class="card">
              <div class="card-image">
                <img src="/src/assets/img/img_product4.jpg" alt="" />
              </div>
              <div class="pt-4 pb-5 d-flex justify-content-center">
                <div class="w-100 px-5">
                  <div class="mb-4">
                    <h3 class="text-center">|無線|</h3>
                    <h3 class="text-center">耳罩式耳機</h3>
                  </div>
                  <RouterLink
                    to="/products?category=無線耳塞式耳機&page=1"
                    type="button"
                    class="btn btn-title text-white w-100"
                    style="padding: 12px 20px"
                  >
                    進入商店
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-md-10 py-8">
      <div class="container revealBox">
        <div class="home-intro revealItem">
          <h1
            class="text-white mb-6"
            style="max-width: 411px; letter-spacing: 0.04em"
          >
            BRINGING YOU THE BEST AUDIO GEAR
          </h1>
          <p class="text-white" style="max-width: 528px">
            位于台北市中心的AudioAvenue是高端耳機、耳塞和音頻配件的首選商店。我们擁有大型展廳和視聽室，您可以在这里觀看並體驗我们的各種產品。來我們店內，我們有最專業的人員,讓您體驗到最優質的服務。
          </p>
        </div>
        <div class="uncover">
          <div v-for="i in 100" :key="i" class="uncover_slice"></div>
        </div>
      </div>
    </section>
    <section>
      <div class="home-coupon">
        <div class="container">
          <div class="d-flex justify-content-center align-items-center">
            <div data-aos="fade-up" class="coupon-body">
              <h1 class="coupon-body-title">歡慶開幕</h1>
              <p class="coupon-body-text">
                按下
                <span class="text-primary">訂閱</span>
                ，第一時間領取優惠碼及最新活動
              </p>
              <VForm ref="form" v-slot="{ errors }" @submit="onSubscribe">
                <div class="d-flex flex-wrap">
                  <div class="position-relative width-auto-md">
                    <VField
                      id="email"
                      name="email"
                      type="email"
                      class="form-control"
                      :class="{ 'is-invalid': errors['email'] }"
                      rules="email|required"
                      placeholder="請輸入 Email"
                    ></VField>
                    <ErrorMessage
                      name="email"
                      class="invalid-feedback scribe-invaild"
                    ></ErrorMessage>
                  </div>

                  <button class="btn btn-primary text-white">訂閱</button>
                </div>
              </VForm>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
const { VITE_URL, VITE_PATH } = import.meta.env;
import { mapActions } from "pinia";
import LoadingStore from "@/stores/LoadingStore.js";
import gsapMixin from "@/mixin/gsapMixin";
import AOS from "aos";

export default {
  mixins: [gsapMixin],
  data() {
    return {
      products: [],
      randomProduct: {
        title: "",
        imageUrl: "",
        instructions: ["default"],
      },
    };
  },
  methods: {
    ...mapActions(LoadingStore, ["hideLoading", "showLoading"]),
    async getProducts() {
      try {
        const res = await this.$http.get(
          `${VITE_URL}/api/${VITE_PATH}/products/all`
        );
        this.hideLoading();
        this.products = res.data.products;
        this.randomProduct = this.products[Math.floor(Math.random() * 10)];
      } catch (err) {
        alert(err.response.data.message);
      }
    },

    onSubscribe() {
      this.$swal({
        title: "感謝您的訂閱優惠券代碼為",
        text: "plate666",
      });
    },
  },
  created() {
    this.showLoading();
  },
  async mounted() {
    await this.getProducts();
    AOS.init({ duration: 1000, once: true });
    this.initGsap();
    this.GsapReval();
  },
};
</script>
<style lang="scss">
.swal2-html-container {
  font-size: 30px;
  font-weight: 600;
  color: #da6a19;
}
.scribe-invaild {
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translateY(100%);
}
.max-w-482md {
  @media (min-width: 768px) {
    max-width: 482px;
  }
}
.width-auto-md {
  width: 100%;
  @media (min-width: 768px) {
    width: auto;
  }
}
</style>
