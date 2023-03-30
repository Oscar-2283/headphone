<template>
  <main class="main overflow-hidden">
    <div class="container py-8">
      <div class="row justify-content-center align-items-center g-8">
        <div class="col-md-6 col-sm-7 col-12">
          <div class="border border-dark-subtle">
            <img
              class="w-100 object-fit-cover"
              :src="product.imageUrl"
              alt=""
              style="object-fit: cover"
            />
          </div>
        </div>
        <div class="col-md-6 col-12">
          <h2 class="mb-4">{{ product.title }}</h2>
          <ul class="mb-3" style="list-style: disc; padding-left: 1em">
            <li
              style="list-style: disc"
              class="mb-1"
              v-for="(item, index) in product.instructions"
              :key="'text' + index"
            >
              {{ item }}
            </li>
          </ul>
          <div class="d-flex align-items-center gap-3 mt-auto mb-3">
            <del
              class="text-title text-muted"
              v-if="product.origin_price !== product.price"
              >NT$ {{ currency(product.origin_price) }}</del
            >
            <p class="text-title p2">NT$ {{ currency(product.price) }}</p>
          </div>
          <hr />
          <div
            class="row gx-5 gy-2 align-items-center justify-content-end mb-3"
          >
            <div class="col-md-6 col-12">
              <button
                type="button"
                class="btn btn-primary text-white p-2 w-100 d-flex align-items-center justify-content-center"
                @click="() => addToCart(product.id)"
              >
                <span class="material-symbols-outlined"> shopping_cart </span>
                加入購物車
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- 內容 -->
      <div class="py-5">
        <div class="row justify-content-center">
          <div class="col-md-12 col-12">
            <ul class="nav nav-tabs mb-3" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="pills-intro-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-intro"
                  type="button"
                  role="tab"
                  aria-controls="pills-intro"
                  aria-selected="true"
                >
                  產品介紹
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  產品規格
                </button>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-intro"
                role="tabpanel"
                aria-labelledby="pills-intro-tab"
              >
                <h2 class="mb-5 text-center">產品介紹</h2>
                <div
                  class="mb-4"
                  v-for="(item, num) in product.introQuantity"
                  :key="'intro' + num"
                >
                  <h3 class="mb-2">{{ item.intro }}</h3>
                  <p>
                    {{ item.description }}
                  </p>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <h2 class="mb-5 text-center">產品介紹</h2>
                <div class="mx-auto" style="max-width: 1000px">
                  <table class="table table-striped">
                    <tbody>
                      <tr>
                        <td class="w-25">型式</td>
                        <td class="w-75">{{ product.headPhoneType }}</td>
                      </tr>
                      <tr>
                        <td>驅動單體</td>
                        <td>{{ product.drive }}</td>
                      </tr>
                      <tr>
                        <td>頻率響應</td>
                        <td>{{ product.feq }}</td>
                      </tr>
                      <tr>
                        <td>靈敏度 (dB/mW)</td>
                        <td>{{ product.dB }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <!-- swiper -->
      <div>
        <div class="d-flex justify-content-between align-items-baseline mb-3">
          <div class="h4">您可能會喜歡</div>
          <RouterLink
            to="/products"
            class="btn btn-outline-primary d-flex align-items-center"
          >
            <span class="material-symbols-outlined"> arrow_back </span>
            回商品列表
          </RouterLink>
        </div>
        <Swiper
          :modules="modules"
          :space-between="50"
          :breakpoints="swiperOptions.breakpoints"
          navigation
          class="px-6"
        >
          <SwiperSlide
            class="py-4 px-2"
            v-for="product in randomProducts"
            :key="product.id"
          >
            <RouterLink
              :to="`/product/${product.id}`"
              @click="showLoading()"
              class="card overflow-hidden"
            >
              <div style="position: relative; background: #f1f1f1">
                <img :src="product.imageUrl" class="card-img-top" alt="" />
                <button
                  type="button"
                  @click.prevent="() => addToCart(product.id)"
                  class="btn btn-primary text-white position-absolute bottom-0 end-0 card-button"
                >
                  加入購物車
                </button>
              </div>
              <div class="card-body d-flex flex-column">
                <h4 class="mb-2 text-title">
                  {{ product.title }}
                </h4>
                <h4 class="text-text mb-2 fs-6">
                  {{ product.description1 }}
                </h4>
                <div class="d-flex align-items-center gap-3 mt-auto mb-2">
                  <del class="text-title text-muted fs-6"
                    >NT$ {{ currency(product.origin_price) }}</del
                  >
                  <p class="text-title fs-6">
                    NT$ {{ currency(product.price) }}
                  </p>
                </div>
              </div>
            </RouterLink>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </main>
</template>

<script>
const { VITE_URL, VITE_PATH } = import.meta.env;
import { mapActions, mapState } from "pinia";
import cartStore from "@/stores/cart";
import LoadingStore from "@/stores/LoadingStore.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import Toast from "@/mixin/toast.js";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default {
  inject: ["currency"],

  data() {
    return {
      product: {},
      allProducts: [],
      mySwiper: null,
      modules: [Navigation],
      swiperOptions: {
        breakpoints: {
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 50,
          },

          1080: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        },
      },
    };
  },
  methods: {
    ...mapActions(LoadingStore, ["hideLoading", "showLoading"]),
    getProduct() {
      this.$http
        .get(`${VITE_URL}/api/${VITE_PATH}/product/${this.$route.params.id}`)
        .then((res) => {
          this.product = res.data.product;
          this.hideLoading();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    fetchAllProducts() {
      this.$http
        .get(`${VITE_URL}/api/${VITE_PATH}/products/all`)
        .then((res) => {
          this.allProducts = res.data.products;
          this.hideLoading();
        })
        .catch((err) => alert(err.response.data.message));
    },
    addToCart(id, qty = 1) {
      const data = {
        product_id: id,
        qty,
      };
      this.$http
        .post(`${VITE_URL}/api/${VITE_PATH}/cart`, { data })
        .then((res) => {
          Toast.fire({
            icon: "success",
            title: res.data.message,
            width: 250,
          });
          this.getCart();
        })
        .catch((err) => alert(err.response.data.message));
    },
    ...mapActions(cartStore, ["getCart"]),
  },
  created() {
    this.showLoading();
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted() {
    this.fetchAllProducts();
    this.getProduct();
  },

  computed: {
    randomProducts() {
      const category = this.product.category;
      if (this.allProducts && category) {
        const randomProducts = this.allProducts.filter((item) => {
          return (
            item.category === category && item.title !== this.product.title
          );
        });

        if (randomProducts.length < 6) {
          return randomProducts;
        } else {
          const result = [];
          while (result.length < 6) {
            const randomIndex = Math.floor(
              Math.random() * randomProducts.length
            );

            const randomProduct = randomProducts[randomIndex];

            if (!result.includes(randomProduct)) {
              result.push(randomProduct);
            }
          }
          return result;
        }
      } else {
        return [];
      }
    },
    ...mapState(cartStore, ["carts"]),
  },
  watch: {
    $route: {
      handler(val) {
        this.showLoading();
        if (val.name === "product") {
          this.getProduct();
        }
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.swiper-slide {
  height: auto;
}
::v-deep .swiper-button-next,
::v-deep .swiper-button-prev {
  color: #fc6e07;
}
.nav-tabs {
  .nav-link {
    color: #233749;
    &.active {
      color: #fc6e07;
    }
  }
}
.table.table-striped {
  tbody {
    tr {
      td:first-child {
        border-right: 1px solid #dee2e6;
      }
    }
  }
}
</style>
