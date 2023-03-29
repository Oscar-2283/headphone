<template>
  <div class="ovf-hidden">
    <div
      class="banner-img d-flex justify-content-center align-items-center"
      style="height: 500px"
      :style="{ backgroundImage: `url(${bannerImg})` }"
    >
      >
      <h1 class="text-white banner-title">好文分享</h1>
    </div>
    <div class="container py-8">
      <div class="row gx-8 gy-4">
        <div
          class="col-lg-4 col-md-6 col-12"
          v-for="article in articles"
          :key="article.id"
        >
          <routerLink :to="`/articles/article/${article.id}`" class="card">
            <div class="card-image">
              <img
                :src="article.imageUrl"
                class="card-img-top obj-cover"
                style="height: 230px"
                alt=""
              />
            </div>
            <div class="card-body d-flex flex-column">
              <h5 class="text-title mb-3">
                {{ article.title }}
              </h5>
              <p class="text-text text-limit mt-auto">
                {{ article.description }}
              </p>
            </div>
          </routerLink>
        </div>
        <PaginationView
          v-if="pagination.total_pages !== 1"
          :pages="pagination"
          @updatePage="getArticles"
        />
      </div>
    </div>
  </div>
</template>

<script>
import bannerImg from "@/assets/img/article-banner.jpg";
const { VITE_URL, VITE_PATH } = import.meta.env;
import PaginationView from "@/components/PaginationView.vue";
import { mapActions } from "pinia";

import LoadingStore from "@/stores/LoadingStore.js";
export default {
  data() {
    return {
      bannerImg: bannerImg,
      articles: [],
      tempArticle: {},
      pagination: {},
      currentPage: 1,
    };
  },
  methods: {
    ...mapActions(LoadingStore, ["hideLoading", "showLoading"]),
    getArticles(page = 1) {
      this.$http
        .get(`${VITE_URL}/api/${VITE_PATH}/articles?page=${page}`)
        .then((res) => {
          const { articles, pagination } = res.data;
          this.articles = articles;
          this.pagination = pagination;
          this.hideLoading();
        })
        .catch((err) => alert(err.response.data.message));
    },
  },
  components: {
    PaginationView,
  },
  mounted() {
    this.showLoading();
    this.getArticles();
  },
};
</script>

<style lang="scss" scope>
.text-limit {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
