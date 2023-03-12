<template>
  <div
    class="position-fixed end-0 p-5 aslideCart"
    style="z-index: 20; background: #f5f5f5"
  >
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
        <li class="row g-4 align-items-center">
          <div class="col-3 p-0">
            <img
              style="border-radius: 8px"
              src="@/assets/img/img_product.png"
              alt=""
            />
          </div>
          <div class="col-4">
            <h4 class="p2">ATH-W5000</h4>
            <p>$30,000</p>
          </div>
          <div class="col-4 d-flex carNum">
            <button style="background: transparent">
              <span class="material-symbols-outlined"> add </span>
            </button>
            <input min="1" type="number" value="1" />
            <button style="background: transparent">
              <span class="material-symbols-outlined"> remove </span>
            </button>
          </div>
          <div class="col-1">
            <span class="material-symbols-outlined" style="cursor: pointer">
              delete
            </span>
          </div>
        </li>
      </ul>
    </div>
    <div class="mt-5">
      <div class="d-flex justify-content-between w-100">
        <h3>Total</h3>
        <h3>$60000</h3>
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
</template>
<script>
export default {};
</script>
<style lang="scss">
.aslideCart {
  top: 0;
  box-shadow: 0px 0px 10px rgba(121, 161, 179, 0.5);
  width: 100%;
  height: 100vh;
  @media (min-width: 768px) {
    top: 100px;
    width: 705px;
    height: auto;
  }
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
