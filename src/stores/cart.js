import { defineStore } from "pinia";
import axios from "axios";
const { VITE_URL, VITE_PATH } = import.meta.env;
const cartStore = defineStore("cart", {
  state: () => {
    return {
      carts: [],
      total: 0,
      final_total: 0,
    };
  },
  actions: {
    getCart() {
      axios
        .get(`${VITE_URL}/api/${VITE_PATH}/cart`)
        .then((res) => {
          console.log(res.data);
          this.carts = res.data.data.carts;
          this.total = res.data.data.total;
          this.final_total = res.data.data.final_total;
        })
        .catch((err) => console.error(err.data));
    },
  },
  getters: {},
});
export default cartStore;
