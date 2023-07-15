import { createApp } from "vue";
import "./assets/tailwind.css";
import App from "./App.vue";
import { router } from "./router/router";
import Vue from "vue";
import VueFormulate from "@braid/vue-formulate";

Vue.use(VueFormulate);
const app = createApp(App);

app.use(router);

app.mount("#app");
