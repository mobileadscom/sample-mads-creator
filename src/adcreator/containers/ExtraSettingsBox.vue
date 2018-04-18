<template lang="html">
  <div class="extra-settings-box">
    extra settings (dynamic according to ad type)
    <slot></slot>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
  .extra-settings-box {
    border: 1px solid black;
  }
</style>
