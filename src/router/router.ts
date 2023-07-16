import { createRouter, createWebHashHistory } from "vue-router";
import Dashboard from "../views/Dashboard/Dashboard.vue";
import LoginPage from "../views/LoginPage/LoginPage.vue";
import RegisterPage from "../views/RegisterPage/RegisterPage.vue";
import SettingsPanel from "../views/SettingsPanel/SettingsPanel.vue";
import NotFound404 from "../views/404/NotFound404.vue";

const routes = [
  { path: "/", name: "Dashboard", component: Dashboard },
  { path: "/login", name: "Login", component: LoginPage },
  { path: "/register", name: "Register", component: RegisterPage },
  { path: "/settings", name: "SettingsPanel", component: SettingsPanel },
  { path: "/:cathAll(.*)*", name: "404NotFound", component: NotFound404 },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
