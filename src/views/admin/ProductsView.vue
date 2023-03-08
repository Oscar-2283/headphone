<template>
  <VLoading
    :active="isLoading"
    :can-cancel="false"
    :color="'#007bff'"
    :is-full-page="true"
  ></VLoading>
  <DeleteModal
    ref="delModal"
    :item="tempProduct"
    @delItem="deleteProduct"
  ></DeleteModal>
  <ProductModal
    ref="productModalRef"
    :tempProduct="tempProduct"
    :isNew="isNew"
    @updateProduct="updateProduct"
  ></ProductModal>
  <div class="container">
    <div class="text-end mt-4">
      <button class="btn btn-primary" type="button" @click="openModal(true)">
        建立新的產品
      </button>
    </div>
    <table class="table table-striped border mt-4">
      <thead class="bg-dark">
        <tr>
          <th width="100" class="text-white">是否啟用</th>
          <th width="120" class="text-white">分類</th>
          <th class="text-white">產品名稱</th>
          <th width="180" class="text-white px-3">主要圖片</th>
          <th width="120" class="text-white">原價</th>
          <th width="120" class="text-white">售價</th>
          <th width="200" class="text-white">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>
            <input
              :id="item.title"
              v-model="item.is_enabled"
              true-value="1"
              false-value="0"
              class="tgl tgl-light"
              type="checkbox"
              @change="() => updateProduct(item)"
            />
            <label :for="item.title" class="tgl-btn"></label>
          </td>
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td><img class="img-fluid" :src="item.imageUrl" /></td>
          <td class="text-right">{{ currency(item.origin_price) }}</td>
          <td class="text-right">{{ currency(item.price) }}</td>

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
  <pagination :pages="pagination" @updatePage="getProducts"></pagination>
</template>
<script>
const { VITE_URL, VITE_PATH } = import.meta.env;
import pagination from "../../components/PaginationView.vue";
import ProductModal from "../../components/ProductModal.vue";
import DeleteModal from "../../components/DeleteModal.vue";
export default {
  inject: ["currency"],
  data() {
    return {
      products: [],
      tempProduct: {},
      pagination: {},
      isLoading: false,
      isNew: false,
      currentPage: 1,
    };
  },
  methods: {
    getProducts(page = 1) {
      this.currentPage = page;
      this.isLoading = true;
      this.$http
        .get(`${VITE_URL}/api/${VITE_PATH}/admin/products?page=${page}`)
        .then((res) => {
          this.isLoading = false;
          const { pagination, products } = res.data;
          this.pagination = pagination;
          this.products = products;
        })
        .catch((err) => {
          this.isLoading = false;
          this.$swal(err.response.data.message);
        });
    },
    getProduct(id) {
      this.isLoading = true;
      this.$http
        .get(`${VITE_URL}/api/${VITE_PATH}/product/${id}`)
        .then((res) => {
          this.isLoading = false;
          this.tempProduct = res.data.product;
          this.$refs.productModalRef.modal.show();
        })
        .catch((err) => {
          this.isLoading = false;
          this.$swal(err.response.data.message);
        });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {};
        this.isNew = true;
      } else {
        this.tempProduct = { ...item };
        this.isNew = false;
      }
      this.$refs.productModalRef.modal.show();
    },
    openDelModal(item) {
      this.tempProduct = { ...item };
      this.$refs.delModal.modal.show();
    },
    updateProduct(item) {
      this.isLoading = true;
      if (this.isNew) {
        this.$http
          .post(`${VITE_URL}/api/${VITE_PATH}/admin/product`, {
            data: item,
          })
          .then((res) => {
            this.isLoading = false;
            this.$refs.productModalRef.modal.hide();
            this.getProducts(this.currentPage);
            this.$swal(res.data.message);
          })
          .catch((err) => {
            this.isLoading = false;
            this.$swal(err.response.data.message);
          });
      } else {
        this.$http
          .put(`${VITE_URL}/api/${VITE_PATH}/admin/product/${item.id}`, {
            data: item,
          })
          .then((res) => {
            this.isLoading = false;
            this.$refs.productModalRef.modal.hide();
            this.getProducts(this.currentPage);
            this.$swal(res.data.message);
          })
          .catch((err) => {
            this.isLoading = false;
            this.$swal(err.response.data.message);
          });
      }
    },
    deleteProduct() {
      this.isLoading = true;
      this.$http
        .delete(
          `${VITE_URL}/api/${VITE_PATH}/admin/product/${this.tempProduct.id}`
        )
        .then((res) => {
          this.isLoading = false;
          this.$refs.delModal.modal.hide();
          this.getProducts(this.currentPage);
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
    ProductModal,
    DeleteModal,
  },
  mounted() {
    this.getProducts();
  },
};
</script>
