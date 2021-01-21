<template>
  <div>
    <!-- 第一种访问 state 中 值得方式
    <h3>当前最新的count值为：{{$store.state.count}}</h3> -->
    <h3>当前最新的count值为：{{count}}</h3>

    <!-- 使用 mutation 修改 state 中的值 -->
    <button @click="add1">+1</button>
    <button @click="addN1">+ N</button>
    <button @click="add">+1</button>
    <button @click="addN(5)">+ N</button>

    <!-- 使用 action 异步修改 state 中的值 -->
    <button @click="handel1">dispatch+1</button>
    <button @click="handel2">dispatch+ N</button>
    <button @click="addAsync">add</button>
    <button @click="addNAsync(5)">addN</button>
  </div>
</template>
<script>
  import { mapState, mapMutations, mapActions } from "vuex";
  export default{
    data () {
      return {
        
      }
    },
    computed: {
      //state 第二种访问方式 ，使用 vuex 中 mapState 函数映射为当前组件的计算属性
      ...mapState(['count']) //***注意写法
    },
    methods: {
      // 第二种访问 mutations 中的方式，使用 vuex 中 commit 
      add1(){
        this.$store.commit('add')
      },
      addN1(){
        this.$store.commit('addN', 3)
      },
      // 第二种访问 mutations 中的方式，使用 vuex 中 mapMutations 函数映射为当前组件的方法
      ...mapMutations(['add','addN']), //***注意写法

      // 第一种访问 actions 中的方式，使用 vuex 中 dispatch
      handel1(){
        this.$store.dispatch('addAsync')
      },
      handel2(){
        this.$store.dispatch('addNAsync',8)
      },
      // 第二种访问 actions 中的方式，使用 vuex 中 mapActions 函数映射为当前组件的方法
      ...mapActions(['addAsync','addNAsync']) //***注意写法
    
    }
  }
</script>