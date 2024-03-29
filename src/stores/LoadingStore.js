import { defineStore } from "pinia";

export default defineStore("LoadingStore", {
  state: () => ({
    isLoading: true,
  }),
  actions: {
    showLoading() {
      this.isLoading = true;
      document.body.classList.add("overflow-hidden");
    },

    hideLoading(time = 0) {
      setTimeout(() => {
        this.isLoading = false;
        document.body.classList.remove("overflow-hidden");
      }, time);
    },
  },
});
