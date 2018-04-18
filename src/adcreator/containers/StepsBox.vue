<template lang="html">
  <el-steps :active="step" finish-status="success">
    <el-step title="Step 1"></el-step>
    <el-step title="Step 2"></el-step>
    <el-step title="Step 3"></el-step>
  </el-steps>
</template>

<script>
export default {
  props: [
    'step'
  ],
  data () {
    return {
    }
  }
}
</script>

<style lang="css">
</style>
