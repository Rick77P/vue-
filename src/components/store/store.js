import Vue from 'vue'
import Vuex from 'vuex'

import headerStore from './modules/header_p'
Vue.use(Vuex);

const store = new Vuex.Store({
  modules:{
    headerStore: headerStore
  }
  });

  export default store;