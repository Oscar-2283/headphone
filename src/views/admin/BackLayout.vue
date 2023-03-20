<script>
const { VITE_URL } = import.meta.env;
import { mapActions } from "pinia";
import LoadingStore from "@/stores/LoadingStore.js";
import BackNav from "../../components/BackNav.vue";
export default {
  data() {
    return {
      status: false,
    };
  },
  methods: {
    ...mapActions(LoadingStore, ["hideLoading", "showLoading"]),
  },
  components: {
    BackNav,
  },
  mounted() {
    this.hideLoading();
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    this.$http.defaults.headers.common.Authorization = `${token}`;
    const api = `${VITE_URL}/api/user/check`;
    this.$http
      .post(api)
      .then(() => {
        this.status = true;
      })
      .catch((error) => {
        this.$router.push("/login");
        this.$swal(error.response.data.message);
      });
  },
};
</script>
<style lang="scss">
.btn {
  &:hover {
    color: white;
  }
}
</style>
<template>
  <BackNav></BackNav>

  <div style="padding-left: 250px">
    <router-view v-if="status"></router-view>
  </div>
</template>
