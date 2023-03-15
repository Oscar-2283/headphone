<template>
  <div
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span v-if="isNew">新增產品</span>
            <span v-else>編輯產品</span>
          </h5>

          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="image" class="form-label">輸入圖片網址</label
                ><input
                  type="text"
                  class="form-control"
                  id="image"
                  v-model="productData.imageUrl"
                  placeholder="請輸入圖片連結"
                />
              </div>
              <div class="mb-3">
                <label for="customFile" class="form-label">或 上傳圖片 </label
                ><input
                  type="file"
                  id="customFile"
                  class="form-control"
                  ref="file"
                  @change="uploadFile()"
                />
              </div>
              <img
                class="img-fluid"
                :src="productData.imageUrl"
              /><!-- 延伸技巧，多圖 -->
              <div class="mt-5" v-if="productData.imageUrl">
                <div v-for="(image, key) in productData.imagesUrl" :key="key">
                  <input
                    type="text"
                    class="form-control mb-3"
                    id="image"
                    v-model="productData.imagesUrl[key]"
                    placeholder="請輸入圖片連結"
                  />
                  <div class="mb-3">
                    <img class="img-fluid" :src="image" />
                  </div>
                  <button
                    type="button"
                    class="btn btn-outline-danger"
                    @click="productData.imagesUrl.splice(key, 1)"
                  >
                    移除
                  </button>
                </div>
                <div
                  v-if="
                    !productData.imagesUrl.length ||
                    productData.imagesUrl[productData.imagesUrl.length - 1]
                  "
                >
                  <button
                    class="btn btn-outline-primary btn-sm d-block w-100"
                    @click="productData.imagesUrl.push('')"
                  >
                    新增圖片
                  </button>
                </div>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label
                ><input
                  type="text"
                  class="form-control"
                  id="title"
                  v-model="productData.title"
                  placeholder="請輸入標題"
                />
              </div>
              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">分類</label>
                  <select
                    id="category"
                    class="form-control"
                    v-model="productData.category"
                  >
                    <option value="有線耳罩式耳機">有線耳罩式耳機</option>
                    <option value="無線耳罩式耳機">無線耳罩式耳機</option>
                    <option value="有線耳塞式耳機">有線耳塞式耳機</option>
                    <option value="無線耳塞式耳機">無線耳塞式耳機</option>
                  </select>
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">單位</label
                  ><input
                    type="text"
                    class="form-control"
                    id="unit"
                    v-model="productData.unit"
                    placeholder="請輸入單位"
                  />
                </div>
              </div>
              <div class="row gx-2 mb-3">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">原價</label
                  ><input
                    type="number"
                    class="form-control"
                    id="origin_price"
                    v-model="productData.origin_price"
                    min="0"
                    placeholder="請輸入原價"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">售價</label
                  ><input
                    type="number"
                    class="form-control"
                    id="price"
                    v-model="productData.price"
                    min="0"
                    placeholder="請輸入售價"
                  />
                </div>
              </div>
              <div
                class="d-flex justify-content-between align-items-center mb-3"
              >
                <h3 class="mb-3">產品簡介</h3>
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="() => addInstruction()"
                >
                  新增簡介
                </button>
              </div>
              <div
                v-for="(item, num) in productData.instructions"
                :key="'intro' + num"
              >
                <div class="mb-3">
                  <label :for="'instructions' + num" class="form-label">{{
                    "產品簡介" + (num * 1 + 1)
                  }}</label
                  ><textarea
                    type="text"
                    class="form-control"
                    :id="'instructions' + num"
                    placeholder="請輸入產品描述"
                    v-model="productData.instructions[num]"
                  ></textarea>
                </div>
              </div>
              <hr />
              <div class="d-flex justify-content-between align-items-center">
                <h3 class="mb-3">產品介紹</h3>
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="() => addIntro()"
                >
                  新增介紹
                </button>
              </div>
              <div
                v-for="(item, num) in productData.introQuantity"
                :key="'intro' + num"
              >
                <div class="mb-3">
                  <label :for="'description' + num" class="form-label">{{
                    "產品描述" + (num * 1 + 1)
                  }}</label>
                  <textarea
                    type="text"
                    class="form-control"
                    :id="'description' + num"
                    placeholder="請輸入產品描述"
                    v-model="item.intro"
                  ></textarea>
                </div>
                <div class="mb-3">
                  <label :for="'content' + num" class="form-label">{{
                    "說明內容" + (num * 1 + 1)
                  }}</label
                  ><textarea
                    type="text"
                    class="form-control"
                    :id="'content' + num"
                    v-model="item.description"
                    placeholder="請輸入產品說明內容"
                  ></textarea>
                </div>
              </div>

              <div class="mb-3">
                <div class="row gx-2">
                  <div class="mb-3 col-md-6">
                    <label for="headPhoneType" class="form-label"
                      >耳機類型</label
                    ><input
                      type="text"
                      class="form-control"
                      id="headPhoneType"
                      v-model="productData.headPhoneType"
                      placeholder="耳機類型"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="drive" class="form-label">驅動單體</label
                    ><input
                      type="text"
                      class="form-control"
                      id="drive"
                      v-model="productData.drive"
                      placeholder="驅動單體"
                    />
                  </div>

                  <div class="mb-3 col-md-6">
                    <label for="feq" class="form-label">頻率響應</label
                    ><input
                      type="text"
                      class="form-control"
                      id="feq"
                      v-model="productData.feq"
                      placeholder="頻率響應"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="dB" class="form-label">靈敏度 (dB/mW)</label
                    ><input
                      type="text"
                      class="form-control"
                      id="dB"
                      v-model="productData.dB"
                      placeholder="dB/mW"
                    />
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    true-value="1"
                    false-value="0"
                    v-model="productData.is_enabled"
                    id="is_enabled"
                  /><label class="form-check-label" for="is_enabled">
                    是否啟用
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消</button
          ><button
            type="button"
            class="btn btn-primary"
            @click="updateProduct(productData)"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const { VITE_URL, VITE_PATH } = import.meta.env;
import Modal from "bootstrap/js/dist/modal";
export default {
  props: ["tempProduct", "isNew"],
  data() {
    return {
      modal: {},
      productData: {},
    };
  },
  methods: {
    addIntro() {
      this.productData.introQuantity.push({
        intro: "",
        description: "",
      });
    },
    addInstruction() {
      this.productData.instructions.push("");
    },

    uploadFile() {
      const file = this.$refs.file.files[0];
      const formData = new FormData();
      formData.append("file-to-upload", file);
      this.$http
        .post(`${VITE_URL}/api/${VITE_PATH}/admin/upload`, formData)
        .then((res) => {
          this.$refs.file.value = "";
          if (res.data.success) {
            this.productData.imageUrl = res.data.imageUrl;
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateProduct(product) {
      this.$emit("updateProduct", product);
    },
  },
  watch: {
    tempProduct() {
      this.productData = {
        ...this.tempProduct,
      };
      if (!this.productData.imagesUrl) {
        this.productData.imagesUrl = [];
      }
      if (!this.productData.introQuantity) {
        this.productData.introQuantity = [
          {
            intro: "",
            description: "",
          },
        ];
      }
      if (!this.productData.instructions) {
        this.productData.instructions = [""];
      }
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>
