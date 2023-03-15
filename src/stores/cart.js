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
      this.isLoading = true;
      axios
        .get(`${VITE_URL}/api/${VITE_PATH}/cart`)
        .then((res) => {
          if (res.data.success) {
            const { carts, total, final_total } = res.data.data;
            this.carts = carts;
            this.total = total;
            this.final_total = final_total;
          }
        })
        .catch((err) => {
          this.$swal(err.response.data.message);
        });
    },
    updateCart(item) {
      this.isLoading = true;
      const data = {
        product_id: item.product.id,
        qty: item.qty,
      };
      axios
        .put(`${VITE_URL}/api/${VITE_PATH}/cart/${item.id}`, { data })
        .then((res) => {
          console.log(res.data);
          this.getCart();
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    deleteCart(id) {
      this.isLoading = true;
      axios
        .delete(`${VITE_URL}/api/${VITE_PATH}/cart/${id}`)
        .then((res) => {
          console.log(res.data);
          this.getCart();
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    updateCartItemQty(item, num) {
      if (item.qty + num > 10) {
        item.qty = 10;
      } else if (item.qty + num < 1) {
        item.qty = 1;
      } else {
        item.qty += num;
      }
      this.updateCart(item);
    },
  },
  getters: {},
});
export default cartStore;
