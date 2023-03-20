<template>
  <main class="main" style="background: #fafafa">
    <div class="my-5 container">
      <RouterView name="timeline" ref="progress"></RouterView>
      <RouterView name="info"></RouterView>
    </div>
  </main>
</template>
<script>
import { mapActions, mapState } from "pinia";
import LoadingStore from "@/stores/LoadingStore.js";
import cartStore from "@/stores/cart";
// import Toast from "@/mixin/toast.js";

export default {
  methods: {
    ...mapActions(LoadingStore, ["hideLoading"]),

    setProgress(width, activeSteps) {
      const progressBar =
        this.$refs.progress.$el.querySelector(".progress-bar");
      progressBar.style.width = `${width}%`;
      const steps = progressBar.querySelectorAll(".step");
      steps.forEach((step, index) => {
        step.classList.toggle("active", activeSteps.includes(index));
      });
    },
    checkProgress() {
      const pathArray = this.$route.path.split("/");
      const lastPath = pathArray[pathArray.length - 2];

      switch (lastPath) {
        case "payOrder":
          this.setProgress(66.67, [0, 1]);
          break;
        case "checkOut":
          this.setProgress(100, [0, 1, 2]);
          break;
        default:
          this.setProgress(33.33, [0]);

          break;
      }
    },
  },
  components: {
    // Progreess,
  },
  mounted() {
    this.checkProgress();
    this.hideLoading();
  },
  computed: {
    ...mapState(cartStore, ["carts"]),
  },
  watch: {
    $route() {
      this.checkProgress();
    },
  },
};
</script>
<style lang="scss">
.orderList {
  li {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 10px;
    padding: 5px 0;
    gap: 10px;
    border-bottom: 1px solid #dee2e6;
    p {
      &:first-child {
        flex: 0 0 100%;
        @media (min-width: 768px) {
          flex: 0 0 150px;
        }
      }
      &:last-child {
        @media (max-width: 768px) {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
