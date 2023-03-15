import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import "bootstrap";
import CKEditor from "@ckeditor/ckeditor5-vue";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./assets/all.scss";
import { date, currency } from "./methods/filters";

const app = createApp(App);

app
  .use(createPinia())
  .use(router)
  .use(VueAxios, axios)
  .use(CKEditor)
  .use(VueSweetalert2);

app.component("VLoading", Loading);

app.provide("date", date);
app.provide("currency", currency);

app.mount("#app");
