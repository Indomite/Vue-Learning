import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    // 组件状态
    state: {
        count: 0
    },
    // 改变状态的方法集
    mutations: {
        increase() {
            this.state.count++
        }
    },
    actions: {

    }
})