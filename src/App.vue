<template>
  <div> 
    <my-addition></my-addition>
     <p>----------------------</p>
     <my-subtraction></my-subtraction>
  </div>
</template>
<script>
  import Addition from './components/Addition.vue'
  import Subtraction from './components/Subtraction.vue'
  export default{
    components: {
      //别名
      'my-addition':Addition,
      'my-subtraction':Subtraction
    },
    data () {
      return {
        
      }
    }
  }
</script>