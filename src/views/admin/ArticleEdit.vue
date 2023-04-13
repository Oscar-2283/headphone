<template>
  <VLoading
    :active="isLoading"
    :can-cancel="false"
    :color="'#007bff'"
    :is-full-page="true"
  ></VLoading>
  <DeleteModal
    ref="delModal"
    :item="tempArticle"
    @delItem="deleteArticle"
  ></DeleteModal>
  <ArticleModal
    ref="articleModal"
    :article="tempArticle"
    :isNew="isNew"
    @updateArtice="updateArticle"
  ></ArticleModal>
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
          <th width="120" class="text-white">標題</th>
          <th class="text-white">描述</th>
          <th width="180" class="text-white px-3">主要圖片</th>
          <th width="120" class="text-white">建立時間</th>
          <th width="200" class="text-white">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, num) in articles" :key="item.id">
          <td>
            <input
              :id="item.title"
              v-model="item.isPublic"
              class="tgl tgl-light"
              type="checkbox"
              @change="() => publicEnabled(item.id)"
            />
            <label :for="item.title" class="tgl-btn"></label>
          </td>
          <td>{{ item.title }}</td>
          <td>{{ item.description }}</td>
          <td>
            <img class="img-fluid" :src="item.imageUrl" :alt="'image' + num" />
          </td>
          <td>{{ date(item.create_at) }}</td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-sm"
                type="button"
                @click="() => getArticle(item.id)"
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
  <PaginationView :pages="pagination" @updatePage="getArticles" />
</template>

<script>
const { VITE_URL, VITE_PATH } = import.meta.env;
import PaginationView from "../../components/PaginationView.vue";
import ArticleModal from "../../components/ArticleModal.vue";
import DeleteModal from "../../components/DeleteModal.vue";
export default {
  inject: ["date"],
  data() {
    return {
      articles: [],
      tempArticle: {},
      pagination: {},
      isLoading: false,
      isNew: false,
      currentPage: 1,
    };
  },
  methods: {
    getArticles(page = 1) {
      this.currentPage = page;
      this.isLoading = true;
      this.$http
        .get(`${VITE_URL}/api/${VITE_PATH}/admin/articles?page=${page}`)
        .then((res) => {
          this.isLoading = false;
          const { pagination, articles } = res.data;
          this.pagination = pagination;
          this.articles = articles;
        })
        .catch((err) => {
          this.isLoading = false;
          this.$swal(err.response.data.message);
        });
    },
    getArticle(id) {
      this.isLoading = true;
      this.$http
        .get(`${VITE_URL}/api/${VITE_PATH}/admin/article/${id}`)
        .then((res) => {
          this.isLoading = false;
          this.tempArticle = res.data.article;
          this.$refs.articleModal.modal.show();
        })
        .catch((err) => {
          this.isLoading = false;
          console.log(err);
        });
    },
    publicEnabled(id) {
      this.isLoading = true;
      this.$http
        .get(`${VITE_URL}/api/${VITE_PATH}/admin/article/${id}`)
        .then((res) => {
          this.isLoading = false;
          this.tempArticle = res.data.article;
          this.tempArticle.isPublic = !this.tempArticle.isPublic;
          this.isNew = false;
          this.updateArticle(this.tempArticle);
        })
        .catch((err) => {
          this.isLoading = false;
          this.$swal(err.response.data.message);
        });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempArticle = {
          isPublic: false,
          create_at: new Date().getTime() / 1000,
          tag: [],
        };
        this.isNew = true;
      } else {
        this.tempArticle = { ...item };
        this.isNew = false;
      }
      this.$refs.articleModal.modal.show();
    },
    openDelModal(item) {
      this.tempArticle = { ...item };
      this.$refs.delModal.modal.show();
    },
    updateArticle(item) {
      this.isLoading = true;
      if (this.isNew) {
        this.$http
          .post(`${VITE_URL}/api/${VITE_PATH}/admin/article`, {
            data: item,
          })
          .then((res) => {
            this.isLoading = false;
            this.$refs.articleModal.modal.hide();
            this.getArticles(this.currentPage);
            this.$swal(res.data.message);
          })
          .catch((err) => {
            this.isLoading = false;
            this.$swal(err.response.data.message);
          });
      } else {
        this.$http
          .put(`${VITE_URL}/api/${VITE_PATH}/admin/article/${item.id}`, {
            data: item,
          })
          .then((res) => {
            this.isLoading = false;
            this.$refs.articleModal.modal.hide();
            this.getArticles(this.currentPage);
            this.$swal(res.data.message);
          })
          .catch((err) => {
            this.isLoading = false;
            this.$swal(err.response.data.message);
          });
      }
    },
    deleteArticle() {
      this.isLoading = true;
      this.$http
        .delete(
          `${VITE_URL}/api/${VITE_PATH}/admin/article/${this.tempArticle.id}`
        )
        .then((res) => {
          this.isLoading = false;
          this.$refs.delModal.modal.hide();
          this.getArticles(this.currentPage);
          this.$swal(res.data.message);
        })
        .catch((err) => {
          this.isLoading = false;
          this.$swal(err.response.data.message);
        });
    },
  },
  components: {
    PaginationView,
    ArticleModal,
    DeleteModal,
  },
  mounted() {
    this.getArticles();
  },
};
</script>
