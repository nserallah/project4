import Vue from "vue";
import App from "./App.vue";
import router from "./router";
//import store from "./store";
import Vuex from 'vuex';

import "./components";

Vue.use(Vuex);


const store = new Vuex.Store({
  state: {
    count: 0,
    myName: 'nserallah'
  },
  getters: {
    upOne (state) {
      return state.count + '$'
    },
    name (state) {
      return state.myName
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    }
  }
})


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
