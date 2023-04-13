<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark bg-dark vh-100 position-fixed top-0 start-0"
    style="width: 250px"
  >
    <div class="container-fluid flex-column">
      <routerLink to="/" class="navbar-brand w-100 text-center m-0"
        >首頁</routerLink
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav d-block">
          <routerLink
            to="/admin"
            ref="productLink"
            class="nav-link w-100 text-center"
            >產品</routerLink
          >
          <routerLink to="/admin/orders" class="nav-link w-100 text-center"
            >訂單</routerLink
          >
          <routerLink to="/admin/coupons" class="nav-link w-100 text-center"
            >優惠券</routerLink
          >
          <routerLink to="/admin/article" class="nav-link w-100 text-center"
            >貼文</routerLink
          >
          <a
            href="#"
            @click.prevent="() => logOut()"
            class="nav-link w-100 text-center"
            >登出</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logOut() {
      this.$http
        .post(`${import.meta.env.VITE_URL}/logout`)
        .then((res) => {
          if (res.data.success) {
            this.$router.push("/");
          }
        })
        .catch((err) => this.$swal(err.response.data.message));
    },
  },
  mounted() {},
  watch: {
    $route: {
      handler(val) {
        if (val.name !== "adminProduct") {
          this.$refs.productLink.$el.classList.remove("active");
        }
      },
      deep: true,
    },
  },
};
</script>
