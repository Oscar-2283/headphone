<template>
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
</template>

<script>
const { VITE_URL, VITE_PATH } = import.meta.env;

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
  },
  mounted() {
    this.getOrder();
  },
};
</script>
