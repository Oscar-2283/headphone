<template>
  <VLoading
    :active="isLoading"
    :can-cancel="false"
    :color="'#007bff'"
    :is-full-page="true"
  ></VLoading>
  <OrderModal
    ref="orderModal"
    :order="tempOrder"
    @updateOrder="updateOrder"
  ></OrderModal>
  <DeleteModal
    ref="delModal"
    :item="tempOrder"
    @delItem="deleteOrder"
  ></DeleteModal>
  <div class="container">
    <div class="grid gap-3 mt-4" style="align-items: stretch">
      <div
        class="g-col-4 border border-dark-subtle position-relative"
        v-for="order in orders"
        :key="order.id"
      >
        <div class="p-3 d-flex flex-column h-100">
          <div class="d-flex gap-3 justify-content-end align-items-center mb-3">
            <span v-if="order.is_paid">已付款</span>
            <span v-else>未付款</span>
            <input
              :id="order.id"
              v-model="order.is_paid"
              class="tgl tgl-light"
              @change="updateOrder(order)"
              type="checkbox"
            />
            <label :for="order.id" class="tgl-btn"></label>
          </div>
          <table class="table" style="border-color: transparent">
            <tbody>
              <tr>
                <th scope="row" style="width: 100px">購買時間 :</th>
                <td>{{ date(order.create_at) }}</td>
              </tr>
              <tr>
                <th scope="row">Email :</th>
                <td>{{ order.user.email }}</td>
              </tr>
              <tr>
                <th scope="row">購買款項 :</th>
                <td>
                  <ul>
                    <li v-for="(product, i) in order.products" :key="i">
                      {{ product.product.title }}
                      <span class="ms-3"
                        >數量：{{ product.qty }}
                        {{ product.product.unit }}</span
                      >
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th scope="row">應付金額 :</th>
                <td>{{ currency(order.total) }}</td>
              </tr>
            </tbody>
          </table>
          <div class="btn-group d-flex mt-auto">
            <button
              class="btn btn-outline-primary btn-sm"
              type="button"
              @click="openModal(order)"
            >
              編輯
            </button>
            <button
              class="btn btn-outline-danger btn-sm"
              type="button"
              @click="openDelModal(order)"
            >
              刪除
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <pagination
    :pages="pagination"
    @updatePage="getOrders"
    class="py-5"
  ></pagination>
</template>
<script>
const { VITE_URL, VITE_PATH } = import.meta.env;
import pagination from "../../components/PaginationView.vue";
import OrderModal from "../../components/OrderModal.vue";
import DeleteModal from "../../components/DeleteModal.vue";
export default {
  inject: ["date", "currency"],
  data() {
    return {
      orders: [],
      tempOrder: {},
      pagination: {},
      isLoading: false,
      currentPage: 1,
    };
  },
  methods: {
    getOrders(page = 1) {
      this.currentPage = page;
      this.isLoading = true;
      this.$http
        .get(`${VITE_URL}/api/${VITE_PATH}/admin/orders?page=${page}`)
        .then((res) => {
          this.isLoading = false;
          const { orders, pagination } = res.data;
          this.orders = orders;
          this.pagination = pagination;
        })
        .catch((err) => {
          this.isLoading = false;
          this.$swal(err.response.data.message);
        });
    },
    updateOrder(item) {
      this.isLoading = true;
      this.$http
        .put(`${VITE_URL}/api/${VITE_PATH}/admin/order/${item.id}`, {
          data: item,
        })
        .then((res) => {
          this.isLoading = false;
          this.$refs.orderModal.modal.hide();
          this.getOrders(this.currentPage);
          this.$swal(res.data.message);
        })
        .catch((err) => {
          this.isLoading = false;
          this.$swal(err.response.data.message);
        });
    },
    openModal(item) {
      this.tempOrder = { ...item };
      this.$refs.orderModal.modal.show();
    },
    openDelModal(item) {
      this.tempOrder = { ...item };
      this.$refs.delModal.modal.show();
    },
    deleteOrder() {
      this.isLoading = true;
      this.$http
        .delete(`${VITE_URL}/api/${VITE_PATH}/admin/order/${this.tempOrder.id}`)
        .then((res) => {
          this.isLoading = false;
          this.$refs.delModal.modal.hide();
          this.getOrders(this.currentPage);
          this.$swal(res.data.message);
        })
        .catch((err) => {
          this.isLoading = false;
          this.$swal(err.response.data.message);
        });
    },
  },
  components: {
    pagination,
    OrderModal,
    DeleteModal,
  },
  mounted() {
    this.getOrders();
  },
};
</script>
