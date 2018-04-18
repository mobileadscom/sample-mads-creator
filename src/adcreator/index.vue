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
      type: 'html',
      step: 0
    }
  },
  methods: {
    nextStep() {
      if (this.step++ > 2) {
        this.step = 0
      }
    }
  }
}
</script>

<style lang="css">
</style>
