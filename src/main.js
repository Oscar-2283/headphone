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
import "./assets/scss/all.scss";

import { defineRule, Form, Field, ErrorMessage, configure } from "vee-validate";
import AllRules from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n";
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";

import "aos/dist/aos.css";
import "aos/dist/aos.js";
import { date, currency } from "./methods/filters";
import fade from "@/components/PageFade.vue";

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  // 當輸入任何內容直接進行驗證
});
setLocale("zh_TW");

const app = createApp(App);

app
  .use(createPinia())
  .use(router)
  .use(VueAxios, axios)
  .use(CKEditor)
  .use(VueSweetalert2);

app.component("VForm", Form);
app.component("VField", Field);
app.component("ErrorMessage", ErrorMessage);
app.component("VLoading", Loading);
app.component("VFade", fade);
app.provide("date", date);
app.provide("currency", currency);

app.mount("#app");
