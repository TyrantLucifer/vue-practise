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
    },
    addPerson(context, name) {
        if (name) {
            context.commit('ADD_PERSON', name)
        } else {
            alert('name could not by emptyed')
        }
    }
}

// 用于操作数据
const mutations = {
    ADD(state, n) {
        state.sum += n
    },
    MINUS(state, n) {
        state.sum -= n
    },
    ADD_PERSON(state, name) {
        const person = {}
        person.name = name
        person.id = state.persons.length + 1
        console.log('person :>> ', person);
        state.persons.push(person)
    }
}

// 用于保存状态
const state = {
    sum: 0,
    name: 'tyrantlucifer',
    age: 26,
    persons: [
        { id: 1, name: 'zhangsan' },
        { id: 2, name: 'lisi' },
        { id: 3, name: 'wangwu' }
    ]
}

const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}


const store = new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})

export default store

