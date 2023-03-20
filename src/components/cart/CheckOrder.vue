<template>
  <div class="row g-5 mt-2">
    <div class="col-lg-8 col-12">
      <div class="border border-dark-subtle p-5 bg-white">
        <VForm ref="form" v-slot="{ errors }" @submit="onSubmit">
          <div class="row gx-5">
            <h3 class="mb-4">訂購資訊</h3>
            <div class="mb-3 col-lg-6 col-12">
              <label for="姓名" class="form-label">姓名</label>
              <VField
                id="name"
                name="姓名"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['姓名'] }"
                placeholder="請輸入姓名"
                rules="required"
                v-model="form.user.name"
              ></VField>
              <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="mb-3 col-lg-6 col-12">
              <label for="email" class="form-label">Email</label>
              <VField
                id="email"
                name="email"
                type="email"
                class="form-control"
                :class="{ 'is-invalid': errors['email'] }"
                rules="email|required"
                placeholder="請輸入 Email"
                v-model="form.user.email"
              ></VField>
              <ErrorMessage
                name="email"
                class="invalid-feedback"
              ></ErrorMessage>
            </div>
            <div class="mb-3 col-lg-6 col-12">
              <label for="tel" class="form-label">電話</label
              ><VField
                id="tel"
                name="電話"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['電話'] }"
                rules="required|min:8|max:10|numeric"
                placeholder="請輸入電話"
                v-model="form.user.tel"
              ></VField>
              <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="mb-3 col-12">
              <label for="address" class="form-label">地址</label
              ><VField
                id="address"
                name="地址"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['地址'] }"
                placeholder="請輸入地址"
                rules="required"
                v-model="form.user.address"
              ></VField>
              <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="mb-3 col-12">
              <label for="message" class="form-label">留言</label
              ><textarea
                class="form-control"
                id="message"
                v-model="form.message"
                style="height: 200px"
              />
            </div>
            <div class="text-end">
              <button type="submit" class="btn btn-outline-primary">
                送出訂單
              </button>
            </div>
          </div>
        </VForm>
      </div>
    </div>
    <div class="col-lg-4 col-12">
      <div class="border border-dark-subtle p-5 bg-white">
        <div class="d-flex justify-content-between w-100">
          <h3>商品明細</h3>
        </div>
        <div class="mt-4">
          <ul class="mb-2">
            <li
              class="d-flex gap-4 align-items-center"
              v-for="item in carts"
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
                <p>${{ currency(item.total) }}</p>
              </div>

              <div class="ms-auto">x{{ item.qty }}</div>
            </li>
          </ul>
          <hr />
        </div>

        <div class="my-4">
          <div class="input-group mb-3 input-group-sm" disabled>
            <input
              v-if="isDiscount"
              type="text"
              class="form-control panya-input p-2"
              placeholder="已套用優惠券"
              disabled
            />
            <input
              v-else
              type="text"
              class="form-control"
              v-model="code"
              placeholder="請輸入優惠碼"
            />
            <div class="input-group-append">
              <button
                :disabled="isDiscount"
                @click="useCoupon(code)"
                class="btn btn-outline-primary"
                style="border-radius: 0"
                type="button"
              >
                套用優惠碼
              </button>
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-between w-100 mb-2">
          <p v-if="isDiscount" class="text-secondary" style="font-size: 16px">
            小記:
          </p>
          <h4 v-else>總金額:</h4>
          <h4>${{ currency(total) }}</h4>
        </div>
        <div v-if="isDiscount">
          <div class="d-flex justify-content-between w-100">
            <h4>折扣後金額:</h4>
            <h4>${{ currency(final_total) }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const { VITE_URL, VITE_PATH } = import.meta.env;
import { mapActions, mapState } from "pinia";
import cartStore from "@/stores/cart";
import LoadingStore from "@/stores/LoadingStore.js";
import Toast from "@/mixin/toast.js";
export default {
  inject: ["currency"],
  data() {
    return {
      cart: {},
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
        },
        message: "",
      },
      code: "",
      isDiscount: false,
    };
  },
  methods: {
    ...mapActions(LoadingStore, ["hideLoading"]),
    ...mapActions(cartStore, ["getCart"]),
    onSubmit() {
      this.$http
        .post(`${VITE_URL}/api/${VITE_PATH}/order`, { data: this.form })
        .then((res) => {
          Toast.fire({
            icon: "success",
            title: res.data.message,
            width: 300,
          });
          this.form.message = "";
          this.$refs.form.resetForm();
          this.getCart();
          this.$router.push(`/cart/payOrder/${res.data.orderId}`);
        })
        .catch((err) => alert(err.response.data.message));
    },
    useCoupon() {
      const data = {
        code: this.code,
      };
      this.$http
        .post(`${VITE_URL}/api/${VITE_PATH}/coupon`, {
          data,
        })
        .then((res) => {
          this.getCart();
          this.total = res.data.total;
          this.isDiscount = true;
          Toast.fire({
            icon: "success",
            title: res.data.message,
            width: 250,
          });
        })
        .catch((err) => alert(err.response.data.message));
    },
  },
  computed: {
    ...mapState(cartStore, ["carts", "total", "final_total"]),
  },
  watch: {
    final_total(val) {
      this.isDiscount = val !== this.total;
    },
  },
};
</script>
