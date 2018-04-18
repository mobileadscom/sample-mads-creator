<template lang="html">
  <div class="workspace">
    <el-row>
      <el-col :span="8" v-if="step === 1">
        <GeneralSettingsBox></GeneralSettingsBox>
        <CommonSettingsBox></CommonSettingsBox>
        <slot name="extra-settings"></slot>
      </el-col>
      <el-col :span="step === 1 ? 16 : 24">
        <PreviewBox v-if="step === 1"></PreviewBox>
        <slot v-if="step !== 2"></slot>
        <CampaignAdvertiserSelectionBox v-if="step === 2"></CampaignAdvertiserSelectionBox>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import GeneralSettingsBox from './GeneralSettingsBox'
import CommonSettingsBox from './CommonSettingsBox'
import CampaignAdvertiserSelectionBox from './CampaignAdvertiserSelectionBox'
import PreviewBox from './PreviewBox'

export default {
  props: [
    'step'
  ],
  components: {
    GeneralSettingsBox,
    CommonSettingsBox,
    CampaignAdvertiserSelectionBox,
    PreviewBox
  }
}
</script>

<style lang="css">
  .workspace {
    border: 1px solid black;
  }
</style>
