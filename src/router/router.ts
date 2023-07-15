import { createRouter, createWebHashHistory } from "vue-router";
import Dashboard from "../pages/Dashboard/Dashboard.vue";
import LoginPage from "../pages/LoginPage/LoginPage.vue";
import RegisterPage from "../pages/RegisterPage/RegisterPage.vue";

import SettingsPanel from "../pages/SettingsPanel/SettingsPanel.vue";

const routes = [
  { path: "/", name: "Dashboard", component: Dashboard },
  { path: "/login", name: "Login", component: LoginPage },
  { path: "/register", name: "Register", component: RegisterPage },
  { path: "/settings", name: "SettingsPanel", component: SettingsPanel },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
