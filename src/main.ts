import { createApp } from "vue";
import "./assets/styles/output.css";
import App from "./App.vue";
import { router } from "./router/router";
import { createAuth0 } from "@auth0/auth0-vue";

const app = createApp(App);
const auth0 = await createAuth0({
  domain: "dev-g1bhcqsmrrs13y88.us.auth0.com",
  clientId: "gLepZNR2tvgxKMy5QpkJvLxBRarQNkcq",
  authorizationParams: {
    redirect_uri: `${window.location.origin}/#/dashboard`,
  },
});
app.use(auth0);

app.use(router);

app.mount("#app");
