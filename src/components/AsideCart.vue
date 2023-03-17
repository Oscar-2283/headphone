<template>
  <div class="position-fixed end-0 p-5 aslideCart" style="background: #f5f5f5">
    <div>
      <div class="d-flex justify-content-between w-100">
        <h3>購物車</h3>
        <button
          @click="() => $emit('closeAsideCart')"
          style="background: transparent"
        >
          <span class="material-symbols-outlined"> close </span>
        </button>
      </div>
      <div class="mt-4">
        <ul>
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
              <button
                style="background: transparent"
                class="d-flex align-items-center"
              >
                <span
                  class="material-symbols-outlined"
                  @click="() => updateCartItemQty(item, 1)"
                >
                  add
                </span>
              </button>
              <input
                min="1"
                max="10"
                type="number"
                class="w-100"
                v-model="item.qty"
              />

              <button
                style="background: transparent"
                class="d-flex align-items-center"
                @click="() => updateCartItemQty(item, -1)"
              >
                <span class="material-symbols-outlined"> remove </span>
              </button>
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
      </div>
      <div class="mt-5">
        <div class="d-flex justify-content-between w-100">
          <h3>Total</h3>
          <h3>${{ total }}</h3>
        </div>
      </div>
      <div class="mt-4">
        <RouterLink
          to="/cart"
          @click="() => $emit('closeAsideCart')"
          class="btn btn-primary text-white py-3 px-8 w-100"
          >前往結帳</RouterLink
        >
      </div>
    </div>
  </div>
  <!-- <div class="overlay"></div> -->
</template>
<script>
import { mapActions, mapState } from "pinia";
import cartStore from "../stores/cart";
export default {
  methods: {
    ...mapActions(cartStore, [
      "getCart",
      "updateCart",
      "deleteCart",
      "updateCartItemQty",
    ]),
  },
  computed: {
    ...mapState(cartStore, ["carts", "total"]),
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
  border: 1px solid #d5d8e0;
  border-radius: 10px;
  padding: 12px;
  input {
    background: transparent;
    text-align: center;
    min-width: 50px;
  }
}
</style>
