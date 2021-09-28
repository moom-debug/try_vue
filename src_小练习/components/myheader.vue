<template>
  
    <div class="header">
      <input type="text"  @keyup.enter="addtodo" class="header_text" placeholder="请输入待办事项" v-model="thing"/>
    </div>
  
</template>

<script>
export default {
  name: "MyHeader",
  data() {
    return {
      thing:''
    };
  },
  methods:{
    addtodo(){
      this.$store.dispatch("addtodo",this.thing.trim());
      this.thing=""
    }
  },
  

};
</script>

<style>
    .header{
            width: 95%;
            margin: 0 auto;
        }
        .header_text{
            width: 100%;
            border: 1px solid rgb(230, 230, 230);
            color:rgb(136, 125, 125);
        }
</style>