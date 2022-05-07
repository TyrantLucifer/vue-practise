import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


// 响应组件中的动作
const actions = {
    add(context, n) {
        context.commit('ADD', n)
    },
    minus(context, n) {
        context.commit('MINUS', n)
    },
    addOdd(context, n) {
        if (context.state.sum % 2) {
            context.commit('ADD', n)
        }
    },
    waitAdd(context, n) {
        setTimeout(() => {
            context.commit('ADD', n)
        }, 200);
    }
}

// 用于操作数据
const mutations = {
    ADD(state, n) {
        state.sum += n
    },
    MINUS(state, n) {
        state.sum -= n
    }
}

// 用于保存状态
const state = {
    sum: 0
}



const store = new Vuex.Store({
    actions,
    mutations,
    state,
})

export default store

