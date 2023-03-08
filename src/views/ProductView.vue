<template>
  <main class="main overflow-hidden">
    <div class="container py-8">
      <div class="row justify-content-center align-items-center g-3">
        <div class="col-md-6 col-sm-10 col-12">
          <img
            class="w-100 object-fit-cover"
            src="/src/assets/img/img_product.png"
            alt=""
            style="height: 400px; object-fit: cover"
          />
        </div>
        <div class="col-md-6 col-sm-10 col-12">
          <h2 class="mb-4">ATH-W5000</h2>
          <p class="mb-3">長時間舒適輕薄佩戴</p>
          <p class="mb-3">NT30,000</p>
          <div class="row gx-5 gy-2 align-items-center mb-3">
            <div class="col-md-6 col-12">
              <select
                class="w-100 p-2 border border-dark rounded-3 bg-primary bg-opacity-50"
              >
                <option value="" v-for="i in 10" :key="i">{{ i }}</option>
              </select>
            </div>
            <div class="col-md-6 col-12">
              <button
                type="button"
                class="btn btn-primary text-white p-2 w-100"
              >
                加入購物車
              </button>
            </div>
          </div>
          <p style="font-size: 18px">小記NT30000</p>
        </div>
      </div>
      <!-- 內容 -->
      <div class="py-5">
        <div class="row justify-content-center">
          <div class="col-md-12 col-sm-10 col-12">
            <ul class="nav nav-tabs mb-3" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="pills-intro-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-intro"
                  type="button"
                  role="tab"
                  aria-controls="pills-intro"
                  aria-selected="true"
                >
                  產品介紹
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  產品規格
                </button>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-intro"
                role="tabpanel"
                aria-labelledby="pills-intro-tab"
              >
                <h2 class="mb-5 text-center">產品介紹</h2>
                <div class="mb-4">
                  <h3 class="mb-2">Nova聲學系統</h3>
                  <p>
                    藉助一流的 Nova
                    聲學系統和功能強大的自訂設計不失真驅動程式，挑戰您對遊戲耳機的認知。驅動器與
                    SteelSeries Sonar
                    音訊軟體套件配合使用時，您會聽到清脆無比的高音、精準的中音和深沉的低音。
                  </p>
                </div>
                <div class="mb-4">
                  <h3 class="mb-2">多平台支援，同時無線</h3>
                  <p>
                    用自己的方式玩遊戲和溝通。使用袖珍型 USB-C
                    硬體鎖在多台裝置之間無縫切換，為您的 PC、Mac、PlayStation 或
                    Switch 帶來 2.4GHz 無線網路。
                  </p>
                </div>
                <div class="mb-4">
                  <h3 class="mb-2">ComfortMAX 系統</h3>
                  <p>
                    Arctis Nova 7
                    無線耳機非常適合長時間使用，具有擴充的配件選項和 4
                    個調整點。使用全新高度可調的旋轉耳罩、彈性頭戴式耳帶和透氣的
                    AirWeave 記憶泡沫耳墊，輕鬆找到完美貼合感。全新設計圍繞 PVD
                    塗層鋼製頭帶構建，比前幾代產品輕 14%。
                  </p>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <h2 class="mb-5 text-center">產品介紹</h2>
                <div class="mx-auto" style="max-width: 1000px">
                  <table class="table table-striped">
                    <tbody>
                      <tr>
                        <td class="w-25">耳機類型</td>
                        <td class="w-75">開放式耳罩</td>
                      </tr>
                      <tr>
                        <td>輸出感度</td>
                        <td>耳機：100dB/mW；麥克風：-57dB</td>
                      </tr>
                      <tr>
                        <td>耳機類型</td>
                        <td>開放式耳罩</td>
                      </tr>
                      <tr>
                        <td>重量</td>
                        <td>264g</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style lang="scss">
.nav-tabs {
  .nav-link {
    color: #233749;
    &.active {
      color: #fc6e07;
    }
  }
}
.table.table-striped {
  tbody {
    tr {
      td:first-child {
        border-right: 1px solid #dee2e6;
      }
    }
  }
}
</style>
