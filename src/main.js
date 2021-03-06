import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/assets.css";
import "animate.css";

Vue.config.productionTip = false;
Vue.use(BootstrapVueIcons)
Vue.use(BootstrapVue);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
