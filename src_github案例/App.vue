<template>
<div id="ap">
  <div class="container">
    <MySearch></MySearch>
    <MyList></MyList>
  </div>
</div>
</template>

<script>
import MySearch from './components/mySearch'
import MyList from './components/myList'
// import { component } from 'vue/types/umd'
export default {
    name:'App',
    data(){
        return{

        }
    },
    components:{
        MySearch,
        MyList
    }
}
</script>

<style>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}


</style>