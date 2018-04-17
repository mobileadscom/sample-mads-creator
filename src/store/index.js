import Vue from 'vue'
import Vuex from 'vuex'
import htmlad from './modules/htmlad'
import createLogger from 'vuex/src/plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.store({
  // modules: {
  //   htmlad
  // },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
