import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import adcreator from './modules/adcreator'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    adcreator
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
