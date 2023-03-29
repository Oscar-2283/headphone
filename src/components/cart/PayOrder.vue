<template>
  <div class="row g-5 mt-2">
    <div class="col-lg-8 col-12">
      <div class="border border-dark-subtle p-5 bg-white">
        <h3 class="mb-4">訂單資訊</h3>
        <ul class="orderList">
          <li>
            <p>訂單編號</p>
            <p>{{ order.id }}</p>
          </li>
          <li>
            <p>訂單日期</p>
            <p>{{ date(order.create_at) }}</p>
          </li>
          <li>
            <p>email</p>
            <p>{{ order.user.email }}</p>
          </li>
          <li>
            <p>收件人姓名</p>
            <p>{{ order.user.name }}</p>
          </li>
          <li>
            <p>收件人電話</p>
            <p>{{ order.user.tel }}</p>
          </li>
          <li>
            <p>收件地址</p>
            <p>{{ order.user.address }}</p>
          </li>
          <li>
            <p class="align-middle">訂單金額</p>

            <h3 class="align-middle">{{ currency(order.total) }} 元</h3>
          </li>
          <li>
            <p>備註</p>

            <p class="col">{{ order.message }}</p>
          </li>
        </ul>
        <VForm v-slot="{ errors }" @submit="payOrder">
          <div class="row gx-5 mt-4">
            <h3 class="mb-4">付款資訊</h3>
            <div class="col-md-6 col-12">
              <h4>付款方式</h4>
            </div>
            <div class="col-md-6 col-12">
              <div class="form-control d-flex">
                <VField
                  class="form-check-input"
                  type="radio"
                  name="pay"
                  id="cod"
                  value="貨到付款"
                  rules="required"
                  v-model="order.paymethod"
                  checked
                />
                <label class="form-check-label ms-2 w-100" for="cod">
                  貨到付款
                </label>
              </div>
              <div class="form-control mt-4 d-flex">
                <VField
                  class="form-check-input"
                  type="radio"
                  name="pay"
                  id="credit"
                  value="信用卡"
                  v-model="order.paymethod"
                />
                <label class="form-check-label ms-2 w-100" for="credit">
                  信用卡
                </label>
              </div>
            </div>
          </div>
          <div v-if="order.paymethod === '信用卡'" class="row gx-5 mt-4">
            <div class="mb-3 col-md-6 col-12">
              <label for="credit-number" class="form-label">號碼</label
              ><VField
                type="number"
                class="form-control"
                name="號碼"
                id="credit-number"
                placeholder="8163421927531021"
                rules="required|min:16|max:16|numeric"
                :class="{ 'is-invalid': errors['號碼'] }"
                required
              />
              <ErrorMessage name="號碼" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="mb-3 col-md-6 col-12">
              <label for="credit-last" class="form-label">後三碼</label
              ><VField
                type="number"
                class="form-control"
                name="後三碼"
                id="credit-last"
                placeholder="188"
                rules="required|min:3|max:3|numeric"
                :class="{ 'is-invalid': errors['後三碼'] }"
                required
              />
              <ErrorMessage
                name="後三碼"
                class="invalid-feedback"
              ></ErrorMessage>
            </div>
          </div>
          <div class="mt-4 text-end">
            <button type="submit" class="btn btn-outline-primary">
              確認付款
            </button>
          </div>
        </VForm>
      </div>
    </div>
    <div class="col-lg-4 col-12">
      <div class="border border-dark-subtle p-5 bg-white">
        <div class="d-flex justify-content-between w-100">
          <h3>訂購商品</h3>
        </div>
        <div class="mt-4">
          <ul>
            <li
              class="d-flex gap-4 align-items-center"
              v-for="item in order.products"
              :key="item.id"
            >
              <div class="col-3 p-0">
                <img
                  style="border-radius: 8px"
                  :src="item.product.imageUrl"
                  alt=""
                />
              </div>
              <div>
                <h4>{{ item.product.title }}</h4>
                <p>${{ currency(item.final_total) }}</p>
              </div>

              <div class="ms-auto">x{{ item.qty }}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const { VITE_URL, VITE_PATH } = import.meta.env;

import Toast from "@/mixin/toast.js";
export default {
  inject: ["currency", "date"],
  data() {
    return {
      order: {
        user: "",
        address: "",
        email: "",
        name: "",
        tel: "",
        paymethod: "",
      },
    };
  },
  methods: {
    getOrder() {
      this.$http
        .get(`${VITE_URL}/api/${VITE_PATH}/order/${this.$route.params.id}`)
        .then((res) => {
          const { order } = res.data;
          this.order = order;
        })
        .catch((err) => alert(err.response.data.message));
    },
    payOrder() {
      this.$http
        .post(`${VITE_URL}/api/${VITE_PATH}/pay/${this.$route.params.id}`)
        .then(() => {
          Toast.fire({
            icon: "success",
            title: "付款成功",
            width: 250,
          });
          this.$router.push(`/cart/checkOut/${this.$route.params.id}`);
        })
        .catch((err) => alert(err.response.data.message));
    },
  },

  mounted() {
    this.getOrder();
  },
};
</script>
