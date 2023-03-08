<style lang="scss" scope>
.text-limit {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
<template>
  <div class="ovf-hidden">
    <div
      class="banner-img d-flex justify-content-center align-items-center"
      style="
        height: 500px;
        background-image: url('/src/assets/img/article-banner.jpg');
      "
    >
      <h1 class="text-white">文章</h1>
    </div>
    <div class="container py-8">
      <div class="row gx-8 gy-4">
        <div
          class="col-lg-4 col-md-6 col-12"
          v-for="article in articles"
          :key="article.id"
        >
          <router-link :to="`/articles/article/${article.id}`" class="card">
            <img
              src="/src/assets/img/article-banner.jpg"
              class="card-img-top"
              alt=""
            />
            <div class="card-body">
              <h5 class="text-title mb-3">
                {{ article.title }}
              </h5>
              <p class="text-text text-limit">
                {{ article.description }}
              </p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      articles: [],
      tempArticle: {},
      pagination: {},
      isLoading: false,
      currentPage: 1,
    };
  },
  methods: {
    getArticles(page = 1) {
      this.$http
        .get(`${VITE_URL}/api/${VITE_PATH}/articles?page=${page}`)
        .then((res) => {
          const { articles, pagination } = res.data;
          this.articles = articles;
          this.pagination = pagination;
        })
        .catch((err) => console.log(err.response.data.message));
    },
  },
  mounted() {
    this.getArticles();
  },
};
</script>
