<template>
    <div class="all">
        <Calculate></Calculate>
        <Person></Person>
    </div>
</template>

<script>
import Person from './components/Person'
import Calculate from './components/Calculate'

export default {
    name:'App',
    data(){
        return{

        }
    },
    components:{Person,Calculate}
}
</script>

<style>

</style>