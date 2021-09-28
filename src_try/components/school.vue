

<template>
    <div>
        <div>学校名称:{{name}}</div>
        <div @click="showmixins">学校地址:{{place}}</div>
        <Student></Student>
    </div>
</template>

<script>
import Student from './student'

// import {hunhe} from '../mixins'
export default {
    
    name:"School",
    data(){
        return{
            name:"三小",
            place:"汤坑"
        }
    },
    components:{
        Student
    },
    // mixins:[hunhe]
}
</script>