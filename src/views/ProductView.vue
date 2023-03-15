<template>
  <main class="main overflow-hidden">
    <div class="container py-8">
      <div class="row justify-content-center align-items-center g-8">
        <div class="col-md-6 col-sm-10 col-12">
          <div class="border border-dark-subtle">
            <img
              class="w-100 object-fit-cover"
              :src="product.imageUrl"
              alt=""
              style="object-fit: cover"
            />
          </div>
        </div>
        <div class="col-md-6 col-sm-10 col-12">
          <h2 class="mb-4">{{ product.title }}</h2>
          <ul class="mb-3" style="list-style: disc; padding-left: 1em">
            <li
              style="list-style: disc"
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
          <div class="row gx-5 gy-2 align-items-center mb-3">
            <div class="col-md-6 col-12">
              <button
                type="button"
                class="btn btn-primary text-white p-2 w-100"
              >
                加入購物車
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- 內容 -->
      <div class="py-5">
        <div class="row justify-content-center">
          <div class="col-md-12 col-sm-10 col-12">
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
      <!-- swiper -->
      <Swiper ref="mySwiper" :options="swiperOptions">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </div>
  </main>
</template>
<script>
const { VITE_URL, VITE_PATH } = import.meta.env;
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, A11y } from "swiper";
export default {
  inject: ["currency"],
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      product: {},
      modules: [Navigation, Pagination, A11y],
      swiperOptions: {
        modules: [Navigation, Pagination],
        slidesPerView: 3,
        spaceBetween: 50,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
  methods: {
    getProduct() {
      this.isLoading = true;
      this.$http
        .get(`${VITE_URL}/api/${VITE_PATH}/product/${this.$route.params.id}`)
        .then((res) => {
          this.isLoading = false;
          this.product = res.data.product;
          console.log(res.data);
          console.log(this.product);
        })
        .catch((err) => {
          this.isLoading = false;
          this.$swal(err.response.data.message);
        });
    },
  },

  mounted() {
    this.getProduct();
  },
};
</script>
<style lang="scss">
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
