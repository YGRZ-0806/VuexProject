import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add(state){
      state.count++
    },
    addN(state,step){
      state.count += step
    }
  },
  actions: {
    addAsync(context){
      setTimeout(() => {
        context.commit ( 'add' )
      }, 1000);
    },
    addNAsync(context,step){
      setTimeout(() => {
        context.commit ( 'addN',step )
      }, 1000);
    }
  },
  //Getter可以对 Store中已有的数据加工处理之后形成新的数据，类似Vue的计算属性
  getters: {
    showNum: state => {
      return '当前最新的数量是【' + state.count + '】'
    },
    showNum2: state => {
      //return 'Getter可以对 state 中的数据进行加工展示:  ' + state.count +' '
      return `Getter可以对 state 中的数据进行加工展示:  ${state.count} `
    }
  },
  modules: {
  }
})
