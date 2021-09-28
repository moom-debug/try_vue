import Vue from "vue"
import { hunhe } from "./mixins"

export default{
    install(Vue){
        Vue.filter('mySlice',function(value){
            return value.slice(0,4)
        })


        Vue.directive("fbind",{
            bind(element,binding){
                element.value=binding.value
            },
            inserted(element,binding){
                element.focus()
            },
            update(element,binding) {
                element.value=binding.value
            },
        })

        Vue.mixin(hunhe)
    }

    
}