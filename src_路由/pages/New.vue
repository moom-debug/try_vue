<template>
  <ul>
      <h1 :style="{opacity:opa}">nihao</h1>
    <li>news001</li><input type="text">
    <li>news002</li><input type="text">
    <li>news003</li><input type="text">
  </ul>
</template>

<script>
export default {
  name: "New",
  data() {
    return {
        opa:1
    };
  },
  activated(){
      this.timer=setInterval(()=>{
          this.opa-=0.1
          if(this.opa<=0) this.opa=1
      },16)
  },
  deactivated(){
      clearInterval(this.timer)
  }
};
</script>

<style>
</style>