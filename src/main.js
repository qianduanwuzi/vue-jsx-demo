import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
Vue.config.productionTip = false;
import * as WZUI from "wuzi-package";
console.log(WZUI.default);
Vue.use(WZUI.default);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
