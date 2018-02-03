import Vue from "vue";
import BootstrapVue from 'bootstrap-vue'
import App from "./App.vue";

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

//new model
// new Vue({
//   render: h => h(App)
// }).$mount('#app')

//old model
new Vue({
  el: "#app",
  render: h => h(App)
});
