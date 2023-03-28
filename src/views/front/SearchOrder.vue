<template>
  <div class="ovf-hidden">
    <div
      class="banner-img d-flex justify-content-center align-items-center"
      style="height: 500px"
      :style="{ backgroundImage: `url(${bannerImg})` }"
    >
      >
      <h1 class="text-white banner-title">訂單查詢</h1>
    </div>
    <div class="container py-8">
      <div class="row justify-content-center">
        <div class="col-sm-8 col-12">
          <h3 class="text-center text-primary mb-3">請輸入您的訂單編號</h3>
          <div class="search">
            <input
              type="text"
              v-model.lazy="orderId"
              class="searchTerm h-100 w-100"
              placeholder="請輸入訂單號碼"
            />
            <button type="button" class="searchButton" @click="getOrder()">
              <span class="material-symbols-outlined"> search </span>
            </button>
          </div>
        </div>
      </div>
      <div v-if="orderStaus && order">
        <div class="row g-5 mt-2 justify-content-center">
          <div class="col-sm-8 col-12">
            <div class="border border-dark-subtle p-5 bg-white">
              <h3 class="mb-4">訂單資訊</h3>
              <ul class="orderList">
                <li>
                  <p>訂單編號</p>
                  <p>{{ order.id }}</p>
                </li>
                <li>
                  <p>訂單日期</p>
                  <p>{{ date(order.paid_date) }}</p>
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
                  <p class="align-middle">付款狀態</p>
                  <p>
                    <strong
                      :class="{
                        'text-success': order.is_paid,
                        'text-danger': !order.is_paid,
                      }"
                      >{{ order.is_paid ? "已付款" : "未付款" }}</strong
                    >
                  </p>
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
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-6">
        <div class="col-sm-8 col-12 p-4 border border-light-subtle">
          <h3>重要提醒</h3>
          <div class="remind">
            <div class="remind-body">
              <ul class="remind-text">
                <li>訂單編號範例：-N778fIMygF_0rRl8LlH</li>
                <li>
                  如購買過程及收到商品有任何問題，歡迎聯繫我們，
                  我們會盡快回覆您。
                </li>
                <li>如您所訂購的商品庫存不足，我們將盡快以電子郵件通知您。</li>
                <li>目前無提供海外服務。</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const { VITE_URL, VITE_PATH } = import.meta.env;
import bannerImg from "@/assets/img/order-banner.jpg";
import { mapActions } from "pinia";
import LoadingStore from "@/stores/LoadingStore.js";
import Toast from "@/mixin/toast.js";

export default {
  inject: ["currency", "date"],

  data() {
    return {
      orderStaus: false,
      bannerImg: bannerImg,
      orderId: "",
      order: {
        user: "",
        address: "",
        email: "",
        name: "",
        tel: "",
      },
    };
  },
  methods: {
    ...mapActions(LoadingStore, ["hideLoading", "showLoading"]),
    getOrder() {
      this.showLoading();
      this.$http
        .get(`${VITE_URL}/api/${VITE_PATH}/order/${this.orderId}`)
        .then((res) => {
          this.hideLoading();
          const { order } = res.data;
          this.orderStaus = true;
          this.order = order;
        })
        .catch(() => {
          this.hideLoading();

          Toast.fire({
            icon: "error",
            title: "您所查看的訂單編號不存在",
            width: 400,
            position: "center",
            timer: 3000,
          });
          this.orderStaus = false;
        });
    },
  },

  mounted() {
    this.hideLoading();
  },
};
</script>
<style lang="scss" scoped>
.search {
  position: relative;
  display: flex;
  margin: 0 auto;
  .searchTerm {
    border: 3px solid #da6a19;
    border-right: none;
    padding: 5px;
    height: 20px;
    border-radius: 5px 0 0 5px;
    outline: none;
    &:focus {
      color: #da6a19;
    }
  }

  .searchButton {
    width: 40px;
    border: 1px solid #da6a19;
    background: #da6a19;
    text-align: center;
    color: #fff;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.remind-text {
  li {
    font-size: 16px;
    font-weight: 300;
    line-height: 2;
  }
}
</style>
