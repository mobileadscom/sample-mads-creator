import { getImages } from '@/api/image'
import { NEXT_STEP, GET_IMAGES } from '@/store/mutations'

const state = {
  step: 0,
  images: {
    loading: false,
    errors: [],
    items: []
  }
}

const getters = {
  step: state => state.step,
  images: state => state.images
}

const actions = {
  [NEXT_STEP] ({ commit, state }) {
    commit('INCREMENT_STEP')
  },
  async [GET_IMAGES] ({ commit, state }) {
    try {
      commit('IMAGES_FETCHING')
      const result = await getImages()
      commit('IMAGES_FETCHED', result)
    } catch (error) {
      commit('IMAGES_FETCH_ERROR', error.message)
    }
  }
}

const mutations = {
  INCREMENT_STEP (state) {
    if (state.step++ > 2) {
      state.step = 0
    }
  },
  IMAGES_FETCHING (state) {
    state.images.loading = true
  },
  IMAGES_FETCHED (state, { data }) {
    state.images.items = data
    state.images.loading = false
  },
  IMAGES_FETCH_ERROR (state, error) {
    state.images.errors = [error]
    state.images.loading = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
