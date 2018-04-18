<template lang="html">
  <div class="htmlad-type">
    <h1>You're in HTML Ad</h1>
    <el-button @click="$emit('nextStep')">next</el-button>
  </div>
</template>

<script>
export default {
  props: [
    'activeComponent'
  ],
  data() {
    return {}
  }
}
</script>

<style lang="css">
  .htmlad-type {
    text-align: center;
  }
</style>
