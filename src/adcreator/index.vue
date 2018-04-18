<template>
  <div class="adcreator">
    <StepsBox :step="step"></StepsBox>
    <WorkspaceBox :step="step">
      <component :is="type + 'Ad'" @nextStep="nextStep"></component>
      <component :is="type + 'Extra'" slot="extra-settings"></component>
    </WorkspaceBox>
  </div>
</template>

<script>
import WorkspaceBox from './containers/WorkspaceBox'
import StepsBox from './containers/StepsBox'

import htmlAd, { htmlExtra } from './HTMLAd'
import imageAd from './ImageAd'

import { NEXT_STEP } from '@/store/mutations'

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
    step() {
      return this.$store.getters.step
    }
  },
  methods: {
    nextStep() {
      this.$store.dispatch(NEXT_STEP)
    }
  }
}
</script>

<style lang="css">
</style>
