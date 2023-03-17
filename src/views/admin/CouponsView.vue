<template>
  <VLoading
    :active="isLoading"
    :can-cancel="false"
    :color="'#007bff'"
    :is-full-page="true"
  ></VLoading>
  <DeleteModal
    ref="delModal"
    :item="tempCoupon"
    @delItem="deleteCoupon"
  ></DeleteModal>
  <CouponModal
    ref="couponModal"
    :coupon="tempCoupon"
    :isNew="isNew"
    @updateCoupon="updateCoupon"
  ></CouponModal>
  <div class="container">
    <div class="text-end mt-4">
      <button class="btn btn-primary" type="button" @click="openModal(true)">
        建立新的產品
      </button>
    </div>
    <table class="table table-striped border mt-4">
      <thead class="bg-dark">
        <tr>
          <th class="text-white">是否啟用</th>
          <th class="text-white">名稱</th>
          <th class="text-white">折扣百分比</th>
          <th class="text-white">到期日</th>
          <th class="text-white">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in coupons" :key="item.id">
          <td>
            <input
              :id="item.title"
              v-model="item.is_enabled"
              :true-value="1"
              :false-value="0"
              class="tgl tgl-light"
              type="checkbox"
              @change="() => updateCoupon(item)"
            />
            <label :for="item.title" class="tgl-btn"></label>
          </td>
          <td>{{ item.title }}</td>
          <td>{{ item.percent }} %</td>
          <td>{{ date(item.due_date) }}</td>

          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-sm"
                type="button"
                @click="() => openModal(false, item)"
              >
                編輯
              </button>
              <button
                class="btn btn-outline-danger btn-sm"
                type="button"
                @click="openDelModal(item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <pagination :pages="pagination" @updatePage="getCoupons"></pagination>
</template>
<script>
const { VITE_URL, VITE_PATH } = import.meta.env;
import pagination from "../../components/PaginationView.vue";
import CouponModal from "../../components/CouponModal.vue";
import DeleteModal from "../../components/DeleteModal.vue";
export default {
  inject: ["date"],
  data() {
    return {
      coupons: [],
      tempCoupon: {},
      pagination: {},
      isLoading: false,
      isNew: false,
      currentPage: 1,
    };
  },
  methods: {
    getCoupons(page = 1) {
      this.currentPage = page;
      this.isLoading = true;
      this.$http
        .get(`${VITE_URL}/api/${VITE_PATH}/admin/coupons?page=${page}`)
        .then((res) => {
          this.isLoading = false;
          const { pagination, coupons } = res.data;
          this.pagination = pagination;
          this.coupons = coupons;
        })
        .catch((err) => {
          this.isLoading = false;
          this.$swal(err.response.data.message);
        });
    },

    openModal(isNew, item) {
      if (isNew) {
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000,
        };

        this.isNew = true;
      } else {
        this.tempCoupon = { ...item };
        this.isNew = false;
      }
      this.$refs.couponModal.modal.show();
    },
    openDelModal(item) {
      this.tempCoupon = { ...item };
      this.$refs.delModal.modal.show();
    },
    updateCoupon(item) {
      this.isLoading = true;
      if (this.isNew) {
        this.$http
          .post(`${VITE_URL}/api/${VITE_PATH}/admin/coupon`, {
            data: item,
          })
          .then((res) => {
            this.isLoading = false;
            this.$refs.couponModal.modal.hide();
            this.getCoupons(this.currentPage);
            this.$swal(res.data.message);
          })
          .catch((err) => {
            this.isLoading = false;
            this.$swal(err.response.data.message);
          });
      } else {
        this.$http
          .put(`${VITE_URL}/api/${VITE_PATH}/admin/coupon/${item.id}`, {
            data: item,
          })
          .then((res) => {
            this.isLoading = false;
            this.$refs.couponModal.modal.hide();
            this.getCoupons(this.currentPage);
            this.$swal(res.data.message);
          })
          .catch((err) => {
            this.isLoading = false;
            this.$swal(err.response.data.message);
          });
      }
    },
    deleteCoupon() {
      this.isLoading = true;
      this.$http
        .delete(
          `${VITE_URL}/api/${VITE_PATH}/admin/coupon/${this.tempCoupon.id}`
        )
        .then((res) => {
          this.isLoading = false;
          this.$refs.delModal.modal.hide();
          this.getCoupons(this.currentPage);
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
    CouponModal,
    DeleteModal,
  },
  mounted() {
    this.getCoupons();
  },
};
</script>
