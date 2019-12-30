import Vue from "vue";
import vueCounter from "./components/vueCounter";
import vueModal from "./components/vueModal";
import VModal from 'vue-js-modal'


Vue.component("v-counter", vueCounter);
Vue.component("v-modal", vueModal);
Vue.use(VModal);