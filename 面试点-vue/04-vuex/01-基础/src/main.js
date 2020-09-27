import Vue from "vue";
import App from "./App";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Vuex from "vuex";

Vue.use(Vuex);

Vue.config.productionTip = false;
Vue.use(ElementUI);

const store = new Vuex.Store({
  state: {
    count: 0,
    name: "小刚"
  },
  mutations: {
    increment(state) {
      state.count++;
      state.name = "小刚" + state.count;
    },
    changeName(state, name) {
      //state.name = name;
      setTimeout(() => {
        state.name = name;
        console.log(111);
      }, 5000);
    }
  },
  actions: {
    changeName(context, name) {
      //for (var i = 0; i < 10000000000; i++) {}
      //context.commit("changeName", name);
      setTimeout(() => {
        context.commit("changeName", name);
      }, 5000);
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: {
    App
  },
  template: "<App/>"
});
