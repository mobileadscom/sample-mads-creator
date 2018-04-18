import { NEXT_STEP } from '@/store/mutations'

const state = {
  step: 0
}

const getters = {
  step: state => state.step
}

const actions = {
  [NEXT_STEP] ({ commit, state }) {
    commit('incrementStep')
  }
}

const mutations = {
  incrementStep(state) {
    if (state.step++ > 2) {
      state.step = 0
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
