<template>
  <div class="container">
    <div class="row justify-content-center align-items-center vh-100">
      <div class="col-8">
        <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
        <form id="form" class="form-signin">
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="username" placeholder="name@example.com" required autofocus
              v-model="user.username" />
            <label for="username">Email address</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control" id="password" placeholder="Password" required
              autocomplete="current-password" v-model="user.password" />
            <label for="password">Password</label>
          </div>
          <button class="btn btn-lg btn-primary w-100 mt-3" type="submit" @click.prevent="login">
            登入
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
const { VITE_URL } = import.meta.env;
import LoadingStore from "@/stores/LoadingStore.js";
import { mapActions } from "pinia";

export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      this.$http
        .post(`${VITE_URL}/admin/signin`, this.user)
        .then((res) => {
          const { token, expired } = res.data;
          document.cookie = `myToken=${token}; expires=${new Date(expired)};`;
          this.$router.push("/admin/products");
        })
        .catch((err) => this.$swal(err.response.data.message));
    },
    ...mapActions(LoadingStore, ["hideLoading"]),
  },
  mounted() {
    this.hideLoading();
  },
};
</script>
