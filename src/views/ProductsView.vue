<template>
  <main>
    <div
      class="banner-img"
      style="
        height: 500px;
        background-image: url('/src/assets/img/products-banner.jpg');
      "
    ></div>
    <div class="container py-8">
      <div class="row gx-4 gy-3">
        <div class="col-md-4 col-12">
          <div
            class="p-3 bg-primary bg-opacity-25 rounded-3 position-sticky"
            style="top: 12%"
          >
            <h3 class="mb-4">商品篩選</h3>
            <div class="mb-4 d-md-block d-none">
              <h4 class="mb-2">價格</h4>
              <div class="d-flex gap-3">
                <div>
                  <input
                    class="w-100 border-bottom border-dark bg-transparent p-2"
                    type="number"
                    v-model="minPrice"
                    placeholder="最低"
                  />
                </div>
                <span>-</span>
                <div>
                  <input
                    class="w-100 border-bottom border-dark bg-transparent p-2"
                    type="number"
                    v-model="maxPrice"
                    placeholder="最高"
                  />
                </div>
              </div>
            </div>
            <div>
              <h4 class="mb-2">商品類型</h4>
              <!-- 電腦選單 -->
              <ul class="px-3 d-md-block d-none">
                <li class="mb-1">
                  <a href="#" @click.prevent="() => (selectedCategory = '全部')"
                    >全部</a
                  >
                </li>

                <li class="mb-1" v-for="item in categories" :key="item">
                  <a
                    href="#"
                    @click.prevent="() => (selectedCategory = item)"
                    >{{ item }}</a
                  >
                </li>
              </ul>
              <!-- 手機選單 -->
              <select
                class="d-md-none d-block w-100 p-2 border border-dark rounded-3 bg-primary bg-opacity-50"
              >
                <option value="">全部</option>
                <option value="">[無線]耳罩式耳機</option>
                <option value="">[有線]耳罩式耳機</option>
                <option value="">[有線]耳塞式耳機</option>
                <option value="">[無線]耳塞式耳機</option>
                <option value="">主動式消噪耳機</option>
                <option value="">監聽耳機</option>
              </select>
            </div>
          </div>
        </div>
        <div class="col-md-8 col-12">
          <div
            class="row gy-2 border-bottom border-dark-subtle align-items-center py-2 px-md-0 px-3"
          >
            <div class="col-md-4 col-12">
              <select
                class="w-100 p-2 border border-dark rounded-3 bg-primary bg-opacity-50"
                v-model="selectedSort"
              >
                <option value="價格低到高">價格低到高</option>
                <option value="價格高到低">價格高到低</option>
              </select>
            </div>
            <div class="col-md-8 col-12">
              <h4>[無線]耳罩式耳機</h4>
            </div>
          </div>
          <div class="row gy-4 py-4">
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
        </div>
      </div>
    </div>
  </main>
</template>
<script>
const { VITE_URL, VITE_PATH } = import.meta.env;
import { mapActions, mapState } from "pinia";
import cartStore from "@/stores/cart";
// import pagination from "@/components/PaginationView.vue";
export default {
  inject: ["currency"],
  data() {
    return {
      products: [],
      categories: [],
      filtertype: [],
      selectedSort: "價格高到低",
      selectedCategory: "全部",
      minPrice: null,
      maxPrice: null,
    };
  },
  methods: {
    getProducts() {
      this.$http
        .get(`${VITE_URL}/api/${VITE_PATH}/products/all`)
        .then((res) => {
          this.products = res.data.products;
          this.getCategories();
        })
        .catch((err) => console.dir(err));
    },
    getCategories() {
      const categories = [
        ...new Set(this.products.map((item) => item.category)),
      ];
      this.categories = categories;
    },
    filterCategories(type) {
      const categories = this.products.filter((item) => item.category === type);
      console.log(categories);
      this.filtertype = categories;
    },
    addToCart(id, qty = 1) {
      const data = {
        product_id: id,
        qty,
      };
      this.$http
        .post(`${VITE_URL}/api/${VITE_PATH}/cart`, { data })
        .then((res) => {
          console.log(res.data);
          this.getCart();
        })
        .catch((err) => console.log(err.data));
    },
    ...mapActions(cartStore, ["getCart"]),
  },
  components: {},
  mounted() {
    this.getProducts();
  },
  computed: {
    ...mapState(cartStore, ["carts"]),
    filteredProducts() {
      let products =
        this.selectedCategory === "全部"
          ? this.products
          : this.products.filter(
              (product) => product.category === this.selectedCategory
            );
      if (this.minPrice !== null) {
        products = products.filter((product) => product.price >= this.minPrice);
      }
      if (this.maxPrice !== null) {
        products = products.filter((product) => product.price <= this.maxPrice);
      }

      if (this.selectedSort === "價格高到低") {
        return products.sort((a, b) => b.price - a.price);
      } else if (this.selectedSort === "價格低到高") {
        return products.sort((a, b) => a.price - b.price);
      } else {
        return products;
      }
    },
  },
};
</script>

<style lang="scss">
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
</style>
