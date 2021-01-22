<template>
  <div>
    <!-- <h3>当前最新的count值为：</h3> -->
    <h3>{{ $store.getters.showNum }}</h3>
    <h3>{{showNum2}}</h3>

    <!-- <button @click="sub1">sub1</button>
    <button @click="subN2">subN2</button>
    <button @click="subAsync3">subAsync3</button>
    <button @click="subNAsync4">subNAsync4</button> -->
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default{
    data () {
      return {
        
      }
    },
    computed: {
      ...mapGetters(['showNum2'])
    }
  }
</script>