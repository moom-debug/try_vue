<template>
    <div>
        <div>学生名称:{{name}}</div>
        <dir>学生成绩:{{grade}}</dir>
    </div>
</template>

<script>
export default {
    name:"Student",
    data(){
        return{
            name:'栋哥',
            grade:'97'
        }
    }
}
</script>

<style scoped lang="less">
    div{
       color:red 
    }
</style>