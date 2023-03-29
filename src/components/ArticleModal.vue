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
                <label for="author" class="form-label">作者</label>
                <input
                  type="text"
                  class="form-control"
                  id="author"
                  v-model="tempArticle.author"
                  placeholder="請輸入標題"
                />
              </div>
              <div class="mb-3">
                <label for="create_at">文章建立日期</label>
                <input
                  type="date"
                  class="form-control"
                  id="create_at"
                  v-model="create_at"
                />
              </div>
              <div class="mb-3">
                <label for="image" class="form-label">輸入圖片網址</label
                ><input
                  type="text"
                  class="form-control"
                  id="image"
                  v-model="tempArticle.imageUrl"
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
                  @change="() => uploadFile()"
                />
              </div>
              <img
                class="img-fluid"
                :src="tempArticle.imageUrl"
              /><!-- 延伸技巧，多圖 -->
              <div class="mt-5" v-if="tempArticle.imageUrl">
                <div v-for="(image, key) in tempArticle.imagesUrl" :key="key">
                  <input
                    type="text"
                    class="form-control mb-3"
                    id="image"
                    v-model="tempArticle.imagesUrl[key]"
                    placeholder="請輸入圖片連結"
                  />
                  <div class="mb-3">
                    <img class="img-fluid" :src="image" />
                  </div>
                  <button
                    type="button"
                    class="btn btn-outline-danger"
                    @click="tempArticle.imagesUrl.splice(key, 1)"
                  >
                    移除
                  </button>
                </div>
                <div
                  v-if="
                    !tempArticle.imagesUrl.length ||
                    tempArticle.imagesUrl[tempArticle.imagesUrl.length - 1]
                  "
                >
                  <button
                    class="btn btn-outline-primary btn-sm d-block w-100"
                    @click="tempArticle.imagesUrl.push('')"
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
                  v-model="tempArticle.title"
                  placeholder="請輸入標題"
                />
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">描述</label
                ><input
                  type="text"
                  class="form-control"
                  id="description"
                  v-model="tempArticle.description"
                  placeholder="描述"
                />
              </div>

              <hr />
              <!-- 編輯器 -->
              <div class="mb-3">
                <ckeditor
                  class="editor"
                  :editor="editor"
                  :config="editorConfig"
                  v-model="tempArticle.content"
                ></ckeditor>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    v-model="tempArticle.isPublic"
                    id="isPublic"
                  /><label class="form-check-label" for="isPublic">
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
            @click="updateArticle(tempArticle)"
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
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import ImageInsert from "@ckeditor/ckeditor5-image/src/imageinsert";
import Modal from "bootstrap/js/dist/modal";
export default {
  props: ["article", "isNew"],
  data() {
    return {
      introQuantity: 1,
      modal: {},
      tempArticle: {},
      create_at: "",
      editor: ClassicEditor,
      editorConfig: {
        // plugins: [ImageInsert],
        toolbar: ["heading", "|", "bold", "italic", "link", "insertImage"],
        dataProcessor: {
          writer: {
            enter: "<br>",
          },
        },
      },
    };
  },
  methods: {
    uploadFile() {
      const file = this.$refs.file.files[0];
      const formData = new FormData();
      formData.append("file-to-upload", file);
      this.$http
        .post(`${VITE_URL}/api/${VITE_PATH}/admin/upload`, formData)
        .then((res) => {
          this.$refs.file.value = "";
          if (res.data.success) {
            this.tempArticle.imageUrl = res.data.imageUrl;
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          this.$swal(err.response.data.message);
        });
    },
    updateArticle(article) {
      this.$emit("updateArtice", article);
    },
  },
  watch: {
    article() {
      this.tempArticle = this.article;
      if (!this.tempArticle.imagesUrl) {
        this.tempArticle.imagesUrl = [];
      }
      [this.create_at] = new Date(this.tempArticle.create_at * 1000)
        .toISOString()
        .split("T");
    },
    create_at() {
      this.tempArticle.create_at = Math.floor(new Date(this.create_at) / 1000);
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>

<style lang="scss">
.editor {
  ul {
    list-style: disc;
    li {
      list-style: disc;
    }
  }
}
</style>
