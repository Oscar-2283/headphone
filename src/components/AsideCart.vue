<template>
  <div
    class="offcanvas offcanvas-end"
    data-bs-scroll="true"
    tabindex="-1"
    id="offcanvas"
    aria-labelledby="offcanvasLabel"
    ref="bsCart"
  >
    <div class="offcanvas-header">
      <h3 class="offcanvas-title" id="offcanvasLabel">購物車</h3>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <ul class="mb-2">
        <li
          class="grid g-4 align-items-center"
          v-for="item in carts"
          :key="item.id"
        >
          <div class="g-col-3 p-0">
            <img
              style="border-radius: 8px"
              :src="item.product.imageUrl"
              alt=""
            />
          </div>
          <div class="g-col-4">
            <h4 style="font-size: 16px">{{ item.product.title }}</h4>
            <p style="font-size: 16px">${{ item.product.price }}</p>
          </div>
          <div class="g-col-4 d-flex carNum">
            <select class="w-100" v-model="item.qty" @change="updateCart(item)">
              <option v-for="i in 10" :key="'cart' + i" :value="i">
                {{ i }}
              </option>
            </select>
          </div>
          <div class="g-col-1">
            <button
              class="btn btn-outline-danger btn-sm d-flex align-items-center"
            >
              <span
                class="material-symbols-outlined"
                style="cursor: pointer"
                @click="() => deleteCart(item.id)"
              >
                delete
              </span>
            </button>
          </div>
        </li>
      </ul>
      <hr />
      <button
        type="button"
        class="btn btn-outline-danger"
        style="font-size: 14px"
        @click="deleteAllCart()"
      >
        清空購物車
      </button>
      <div class="mt-4">
        <div class="d-flex justify-content-between w-100">
          <h3>Total</h3>
          <h3>${{ total }}</h3>
        </div>
      </div>

      <div class="mt-4">
        <RouterLink
          to="/cart"
          @click="() => closeAsideCart()"
          class="btn btn-primary text-white py-3 px-8 w-100"
          >前往結帳</RouterLink
        >
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "pinia";
import cartStore from "../stores/cart";
import Offcanvas from "bootstrap/js/dist/offcanvas";
export default {
  data() {
    return {
      bsCart: "",
    };
  },
  methods: {
    ...mapActions(cartStore, [
      "getCart",
      "updateCart",
      "deleteCart",
      "updateCartItemQty",
      "deleteAllCart",
    ]),
    closeAsideCart() {
      this.bsCart.hide();
    },
  },
  computed: {
    ...mapState(cartStore, ["carts", "total"]),
  },
  mounted() {
    this.bsCart = new Offcanvas(this.$refs.bsCart);
  },
};
</script>
<style lang="scss">
.aslideCart {
  top: 0;
  box-shadow: 0px 0px 10px rgba(121, 161, 179, 0.5);
  width: 100%;
  height: 100vh;
  z-index: 30;
  @media (min-width: 768px) {
    top: 100px;
    width: 500px;
    height: auto;
  }
}
.overlay {
  position: fixed;
  right: 0;
  top: 0;
  width: 0;
  width: 100%;
  height: 100vh;
  background: rgba(33, 37, 41, 0.6);
  transition: opacity 0.3s linear;
  z-index: 20;
}
.carNum {
  select {
    border: 1px solid #d5d8e0;
    border-radius: 10px;

    background: transparent;
    text-align: center;
    min-width: 50px;
  }
}
</style>
