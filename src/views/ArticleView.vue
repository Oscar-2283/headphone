<template>
  <div class="ovf-hidden">
    <div
      class="banner-img d-flex justify-content-center align-items-center"
      style="height: 500px"
      :style="`background-image: url('${article.imageUrl}');`"
    >
      <h1 class="text-white">{{ article.title }}</h1>
    </div>
    <div class="container py-8">
      <h1 class="mb-4">{{ article.description }}</h1>
      <div v-html="article.content"></div>
    </div>
  </div>
</template>
<script>
const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      article: {},
      isLoading: false,
    };
  },
  methods: {
    getArticle() {
      this.$http
        .get(`${VITE_URL}/api/${VITE_PATH}/article/${this.$route.params.id}`)
        .then((res) => {
          const { article } = res.data;
          this.article = article;
          this.article.content = article.content.replace(/&nbsp;/g, "<br>");
        })
        .catch((err) => console.log(err.response.data.message));
    },
  },
  mounted() {
    this.getArticle();
  },
};
</script>
<style lang="scss">
p {
  line-height: 1.5;
}
</style>
