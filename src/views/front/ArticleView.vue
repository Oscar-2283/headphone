<template>
  <div class="ovf-hidden pb-10">
    <div class="articleBanner"></div>
    <div class="container">
      <div class="py-8 artice">
        <div style="max-width: 1000px" class="mx-auto">
          <h1 class="mb-4">{{ article.title }}</h1>
          <hr />
          <div
            class="my-5"
            v-html="article.content"
            style="line-height: 1.5"
          ></div>

          <div>
            <img :src="article.imageUrl" alt="" />
          </div>
          <RouterLink to="/articles" class="btn btn-primary text-white mt-5"
            >回上一頁</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const { VITE_URL, VITE_PATH } = import.meta.env;
import { mapActions } from "pinia";
import LoadingStore from "@/stores/LoadingStore.js";
export default {
  data() {
    return {
      article: {},
    };
  },
  methods: {
    ...mapActions(LoadingStore, ["hideLoading", "showLoading"]),
    getArticle() {
      this.showLoading();
      this.$http
        .get(`${VITE_URL}/api/${VITE_PATH}/article/${this.$route.params.id}`)
        .then((res) => {
          const { article } = res.data;
          this.article = article;
          this.article.content = article.content.replace(/&nbsp;/g, "<br>");
          this.hideLoading();
        })
        .catch((err) => alert(err.response.data.message));
    },
  },
  mounted() {
    this.getArticle();
  },
};
</script>
<style lang="scss" scoped>
.container {
  @media (max-width: 576px) {
    padding-left: 0;
    padding-right: 0;
  }
}
.articleBanner {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 400px;
  background-image: url("../../assets/img/article-bg.jpg");
  background-size: cover;
  background-position: center 10%;
  z-index: -1;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 70%;
    background-image: linear-gradient(transparent, rgb(255, 255, 255));
  }
}
.artice {
  padding: 40px;
  margin: -100px auto 0;
  max-width: 1200px;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0rem 0.1875rem 0.375rem;
  border-radius: 10px;
  img {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
