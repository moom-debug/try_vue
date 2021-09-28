
<template>
  <div>
    <School ref="sch" @click="showsch"></School>
  </div>
</template>

<script>
import School from './components/school'

export default {
  name: 'App',
  components: {
    School
  },
  methods:{
    showsch(){
      console.log(this.$refs.sch)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
