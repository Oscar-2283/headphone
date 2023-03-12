<template>
  <div class="row g-5 mt-2">
    <div class="col-sm-8 col-12">
      <div class="border border-dark-subtle p-5 bg-white">
        <div class="row gx-5">
          <h3 class="mb-4">訂購資訊</h3>
          <div class="mb-3 col-md-6 col-12">
            <label for="姓名" class="form-label">姓名</label
            ><input
              type="text"
              class="form-control"
              id="category"
              placeholder="Jacky Chan"
            />
          </div>
          <div class="mb-3 col-md-6 col-12">
            <label for="email" class="form-label">Email</label
            ><input
              type="email"
              class="form-control"
              id="email"
              placeholder="test123@gmail.com"
            />
          </div>
          <div class="mb-3 col-md-6 col-12">
            <label for="tel" class="form-label">電話</label
            ><input
              type="text"
              class="form-control"
              id="tel"
              placeholder="02-35678910"
            />
          </div>
          <div class="mb-3 col-12">
            <label for="address" class="form-label">地址</label
            ><input
              type="text"
              class="form-control"
              id="address"
              placeholder="台北市大同區承德路一段1號"
            />
          </div>
          <div class="mb-3 col-12">
            <label for="message" class="form-label">留言</label
            ><textarea
              class="form-control"
              id="message"
              style="height: 200px"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-4 col-12">
      <div class="border border-dark-subtle p-5 bg-white">
        <div class="d-flex justify-content-between w-100">
          <h3>商品明細</h3>
        </div>
        <div class="mt-4">
          <ul>
            <li class="d-flex gap-4 align-items-center">
              <div class="col-3 p-0">
                <img
                  style="border-radius: 8px"
                  src="@/assets/img/img_product.png"
                  alt=""
                />
              </div>
              <div>
                <h4 class="p2">ATH-W5000</h4>
                <p>$30,000</p>
              </div>

              <div class="ms-auto">X1</div>
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
            to="/cart/payOrder"
            class="btn btn-primary text-white py-3 px-8 w-100"
            >送出訂單</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
