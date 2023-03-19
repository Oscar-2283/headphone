<template>
  <main>
    <div
      class="banner-img d-flex justify-content-center align-items-center"
      style="height: 500px"
      :style="{ backgroundImage: `url(${bannerImg})` }"
    ></div>
    <div class="container py-8">
      <div class="row gx-4 gy-3">
        <div class="col-md-3 col-12">
          <div
            class="p-3 border border-2 rounded-3 position-sticky product-menu"
            style="top: 12%"
          >
            <div class="mb-4 d-md-block d-none">
              <div class="product-title">
                <h4>價格</h4>
              </div>
              <div class="d-flex gap-3">
                <div>
                  <input
                    class="w-100 border-bottom border-dark bg-transparent p-2"
                    type="number"
                    v-model="minPrice"
                    @change="sortProducts"
                    placeholder="最低"
                  />
                </div>
                <span>-</span>
                <div>
                  <input
                    class="w-100 border-bottom border-dark bg-transparent p-2"
                    type="number"
                    v-model="maxPrice"
                    @change="sortProducts"
                    placeholder="最高"
                  />
                </div>
              </div>
            </div>
            <div>
              <div class="product-title">
                <h4>商品類型</h4>
              </div>
              <!-- 選單 -->
              <ul class="px-3 w-md-auto w-100">
                <li class="mb-1">
                  <router-link
                    :to="{ query: { category: '全部', page: 1 } }"
                    :class="{ selected: selectedCategory === '全部' }"
                  >
                    全部
                  </router-link>
                </li>

                <li class="mb-1" v-for="item in categories" :key="item">
                  <router-link
                    :to="{
                      query: { category: item, page: 1 },
                    }"
                    :class="{ selected: selectedCategory === item }"
                  >
                    {{ item }}
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-md-9 col-12">
          <div class="row gy-2 align-items-center pt-2 pb-3 px-md-0 px-3">
            <div class="col-md-4 col-12">
              <select
                class="w-100 p-2 border border-dark rounded-3"
                v-model="selectedSort"
                @change="sortProducts"
              >
                <option value="照順序排列">照順序排列</option>
                <option value="價格低到高">價格低到高</option>
                <option value="價格高到低">價格高到低</option>
              </select>
            </div>
            <div class="col-md-8 col-12">
              <h4>
                {{ selectedCategory === "全部" ? "" : selectedCategory }}
              </h4>
            </div>
          </div>
          <hr />
          <div v-if="filteredProducts[filteredProducts.length - 1]">
            <div class="row gy-4 py-2">
              <div
                class="col-lg-4 col-md-6 col-12"
                v-for="product in filteredProducts"
                :key="product.id"
              >
                <RouterLink
                  :to="`/product/${product.id}`"
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
              </div>
            </div>
            <pagination
              v-if="pagination.total_pages !== 1"
              :pages="pagination"
              @updatePage="filterProducts"
            ></pagination>
          </div>
          <div v-else>
            <div class="text-center mt-4">
              <h3>找不到產品</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import bannerImg from "@/assets/img/products-banner.jpg";
const { VITE_URL, VITE_PATH } = import.meta.env;
import { mapActions, mapState } from "pinia";
import cartStore from "@/stores/cart";
import LoadingStore from "@/stores/LoadingStore.js";
import pagination from "@/components/PaginationView.vue";
import Toast from "@/mixin/toast.js";
export default {
  inject: ["currency"],
  data() {
    return {
      bannerImg: bannerImg,
      products: [],
      filteredProducts: [],
      selectedCategory: "" || this.$route.query.category,
      categories: [],
      selectedSort: "價格高到低",
      minPrice: null,
      maxPrice: null,
      pagination: {},
    };
  },
  methods: {
    ...mapActions(LoadingStore, ["showLoading", "hideLoading"]),
    getProducts() {
      this.$http
        .get(`${VITE_URL}/api/${VITE_PATH}/products/all`)
        .then((res) => {
          this.products = res.data.products;
          this.getCategories();
        })
        .catch((err) => console.dir(err));
    },
    filterProducts(page = 1) {
      let url = `${VITE_URL}/api/${VITE_PATH}/products?page=${page}`;
      const category = this.$route.query.category;
      if (category && category !== "全部") {
        url = `${VITE_URL}/api/${VITE_PATH}/products?page=${page}&category=${category}`;
      }
      this.$http
        .get(url)
        .then((res) => {
          this.filteredProducts = res.data.products;
          this.pagination = res.data.pagination;
          this.$router.push({ path: "products", query: { category, page } });
          this.hideLoading();
        })
        .catch((err) => console.dir(err));
    },
    getCategories() {
      const categories = [
        ...new Set(this.products.map((item) => item.category)),
      ];
      this.categories = categories;
    },
    addToCart(id, qty = 1) {
      const data = {
        product_id: id,
        qty,
      };
      this.$http
        .post(`${VITE_URL}/api/${VITE_PATH}/cart`, { data })
        .then((res) => {
          this.getCart();
          Toast.fire({
            icon: "success",
            title: res.data.message,
            width: 250,
          });
        })
        .catch((err) => console.log(err.data));
    },
    sortProducts() {
      let products =
        this.$route.query.category === "全部"
          ? this.products
          : this.products.filter(
              (product) => product.category === this.$route.query.category
            );
      if (this.minPrice !== null) {
        products = products.filter((product) => product.price >= this.minPrice);
      }
      if (this.maxPrice !== null) {
        products = products.filter((product) => product.price <= this.maxPrice);
      }

      if (this.selectedSort === "價格高到低") {
        this.filteredProducts = products.sort((a, b) => b.price - a.price);
      } else if (this.selectedSort === "價格低到高") {
        this.filteredProducts = products.sort((a, b) => a.price - b.price);
      } else {
        this.filteredProducts = products;
      }
    },
    ...mapActions(cartStore, ["getCart"]),
  },
  components: {
    pagination,
  },
  mounted() {
    this.getProducts();
    this.filterProducts();
  },
  computed: {
    ...mapState(cartStore, ["carts"]),
  },
  created() {
    this.showLoading();
  },
  watch: {
    $route: {
      handler(val) {
        this.showLoading();
        if (val.name === "products") {
          this.filterProducts(this.$route.query.page);
        }
        this.selectedCategory = val.query.category;
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.selected {
  color: #da6a19 !important;
}
.text-text {
  display: block;
  letter-spacing: 0;
  line-height: 20px;
  overflow: hidden;
  text-overflow: clip;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.product-menu {
  a.router-link-exact-active {
    color: #222222;
  }
  .product-title {
    position: relative;
    background: #f1f1f1;
    text-align: center;
    padding: 5px;
    border-radius: 5px;
    margin-bottom: 20px;
    h4 {
      font-size: 17px;
      font-weight: bold;
    }
    &::before {
      content: "";
      position: absolute;
      border-width: 13px 8px 0px 8px;
      border-color: #f1f1f1 transparent transparent transparent;
      border-style: solid;
      left: 50%;
      bottom: -12px;
      transform: translateX(-50%);
      width: 0;
      height: 0;
    }
  }
}
</style>