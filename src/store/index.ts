// @ts-ignore
import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null
  },
  mutations: {
    // @ts-ignore
    SET_USER(state, user) {
      state.user = user
    }
  },
  actions: {

  },
  modules: {

  }
})