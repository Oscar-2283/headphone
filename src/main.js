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
import "./assets/all.scss";
import { date, currency } from "./methods/filters";
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);
app.use(CKEditor);
app.use(VueSweetalert2);

app.component("VLoading", Loading);

app.provide("date", date);
app.provide("currency", currency);

app.mount("#app");
