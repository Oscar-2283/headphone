<template>
  <div class="row g-5 mt-2">
    <div class="col-sm-8 col-12">
      <div class="border border-dark-subtle p-5 bg-white">
        <h3 class="mb-4">訂單資訊</h3>
        <table class="table">
          <tbody>
            <tr>
              <td>訂單編號</td>
              <td>-NQ9Z1sjRIq7J8XYc-Tr</td>
            </tr>
            <tr>
              <td>訂單日期</td>
              <td>2023/3/10</td>
            </tr>
            <tr>
              <td>email</td>
              <td>fake@gmail.com</td>
            </tr>
            <tr>
              <td>收件人姓名</td>
              <td>sdf</td>
            </tr>
            <tr>
              <td>收件人電話</td>
              <td>0912345678</td>
            </tr>
            <tr>
              <td>收件地址</td>
              <td>45456</td>
            </tr>
            <tr>
              <td class="align-middle">訂單金額</td>
              <td><h3 class="align-middle">76,400 元</h3></td>
            </tr>
            <tr>
              <td>備註</td>
              <td><p class="col">456</p></td>
            </tr>
          </tbody>
        </table>

        <div class="row gx-5 mt-4">
          <h3 class="mb-4">付款資訊</h3>
          <div class="col-md-6 col-12">
            <h4>付款方式</h4>
          </div>
          <div class="col-md-6 col-12">
            <div class="form-control d-flex">
              <input
                class="form-check-input"
                type="radio"
                name="pay"
                id="cod"
                value="貨到付款"
                checked
              />
              <label class="form-check-label ms-2 w-100" for="cod">
                貨到付款
              </label>
            </div>
            <div class="form-control mt-4 d-flex">
              <input
                class="form-check-input"
                type="radio"
                name="pay"
                id="credit"
                value="credit"
              />
              <label class="form-check-label ms-2 w-100" for="credit">
                信用卡
              </label>
            </div>
          </div>
        </div>
        <div class="row gx-5 mt-4">
          <div class="mb-3 col-md-6 col-12">
            <label for="credit-number" class="form-label">號碼</label
            ><input
              type="number"
              class="form-control"
              id="credit-number"
              placeholder="216615651"
            />
          </div>
          <div class="mb-3 col-md-6 col-12">
            <label for="credit-last" class="form-label">後三碼</label
            ><input
              type="number"
              class="form-control"
              id="credit-last"
              placeholder="188"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-4 col-12">
      <div class="border border-dark-subtle p-5 bg-white">
        <div class="d-flex justify-content-between w-100">
          <h3>訂購商品</h3>
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
            to="checkOut/123"
            class="btn btn-primary text-white py-3 px-8 w-100"
            >付款/確認訂單</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
