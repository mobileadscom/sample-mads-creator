<template>
  <div class="adcreator">
    <StepsBox :step="step"></StepsBox>
    <WorkspaceBox :step="step">
      <component :is="type + 'Ad'" @nextStep="nextStep"></component>
      <component :is="type + 'Extra'" slot="extra-settings"></component>
    </WorkspaceBox>
    <div class="sample-images" v-loading="images.loading">
      <img :src="image.url" style="display:inline-block;width:200px;" :key="image.id" v-for="image in images.items.slice(0, 5)" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import WorkspaceBox from './containers/WorkspaceBox'
import StepsBox from './containers/StepsBox'

import htmlAd, { htmlExtra } from './HTMLAd'
import imageAd from './ImageAd'

import { NEXT_STEP, GET_IMAGES } from '@/store/mutations'

export default {
  components: {
    WorkspaceBox,
    StepsBox,
    htmlAd,
    imageAd,
    htmlExtra
  },
  data () {
    return {
      type: 'html'
    }
  },
  computed: {
    ...mapGetters([
      'images'
    ]),
    step() {
      return this.$store.getters.step
    }
  },
  methods: {
    nextStep() {
      this.$store.dispatch(NEXT_STEP)
    }
  },
  mounted() {
    this.$store.dispatch(GET_IMAGES)
  }
}
</script>

<style lang="css">
</style>
