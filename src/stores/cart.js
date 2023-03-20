import { defineStore } from "pinia";

import axios from "axios";
import Toast from "@/mixin/toast.js";
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
          if (res.data.success) {
            const { carts, total, final_total } = res.data.data;
            this.carts = carts;
            this.total = total;
            this.final_total = final_total;
          }
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    updateCart(item) {
      const data = {
        product_id: item.product.id,
        qty: item.qty,
      };
      axios
        .put(`${VITE_URL}/api/${VITE_PATH}/cart/${item.id}`, { data })
        .then((res) => {
          Toast.fire({
            icon: "success",
            title: res.data.message,
            width: 250,
          });
          this.getCart();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    deleteCart(id) {
      axios
        .delete(`${VITE_URL}/api/${VITE_PATH}/cart/${id}`)
        .then((res) => {
          Toast.fire({
            icon: "success",
            title: res.data.message,
            width: 250,
          });
          this.getCart();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    deleteAllCart() {
      axios
        .delete(`${VITE_URL}/api/${VITE_PATH}/carts`)
        .then((res) => {
          Toast.fire({
            icon: "success",
            title: res.data.message,
            width: 250,
          });
          this.getCart();
        })
        .catch((err) => {
          alert(err.response.data.message);
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
