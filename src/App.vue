<template>
  <div id="app">
    <el-row type=flex justify=center>
      <el-col :span="12">
        <Adcreator></Adcreator>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Adcreator from './adcreator'

export default {
  name: 'App',
  components: {
    Adcreator
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
