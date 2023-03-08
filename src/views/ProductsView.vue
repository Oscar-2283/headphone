<script>
import { RouterLink } from "vue-router";
export default {
  methods: {},
  components: {
    RouterLink,
  },
};
</script>
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
                    placeholder="最低"
                  />
                </div>
                <span>-</span>
                <div>
                  <input
                    class="w-100 border-bottom border-dark bg-transparent p-2"
                    type="number"
                    placeholder="最高"
                  />
                </div>
              </div>
            </div>
            <div>
              <h4 class="mb-2">商品類型</h4>
              <!-- 電腦選單 -->
              <ul class="px-3 d-md-block d-none">
                <li class="mb-1"><a href="">全部</a></li>
                <li class="mb-1"><a href="">[無線]耳罩式耳機</a></li>
                <li class="mb-1"><a href="">[有線]耳罩式耳機</a></li>
                <li class="mb-1"><a href="">[有線]耳塞式耳機</a></li>
                <li class="mb-1"><a href="">[無線]耳塞式耳機</a></li>
                <li class="mb-1"><a href="">主動式消噪耳機</a></li>
                <li class="mb-1"><a href="">監聽耳機</a></li>
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
              >
                <option value="">按最新產品順序</option>
                <option value="">低到高</option>
                <option value="">高到低</option>
              </select>
            </div>
            <div class="col-md-8 col-12">
              <h4>[無線]耳罩式耳機</h4>
            </div>
          </div>
          <div class="row gy-4 py-4">
            <div class="col-lg-4 col-md-6 col-12" v-for="i in 6" :key="i">
              <RouterLink to="/product/6789" class="card overflow-hidden">
                <div style="position: relative">
                  <img
                    src="/src/assets/img/img_product.png"
                    class="card-img-top"
                    alt=""
                  />
                  <button
                    type="button"
                    @click.prevent=""
                    class="btn btn-primary text-white position-absolute bottom-0 end-0"
                  >
                    加入購物車
                  </button>
                </div>
                <div class="card-body">
                  <h3 class="mb-2 text-center text-title">ATH-W5000</h3>
                  <p class="mb-2 text-title">NT$ 30000</p>
                  <h4 class="text-text">Arctis Nova 7 Wireless</h4>
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
