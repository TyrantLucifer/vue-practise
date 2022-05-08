<template>
  <div>
    <h1>当前求和为：{{sum}}</h1>
    <h2>当前姓名：{{name}}</h2>
    <h2>当前年龄：{{age}}</h2>
    <h2>当前求和的十倍：{{bigSum}}</h2>
    <h2>下方组件的总人数：{{persons.length}}</h2>
    <select
      name=""
      id=""
      v-model.number="n"
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add(n)">+</button>
    <button @click="minus(n)">-</button>
    <button @click="addOdd(n)">当前求和为奇数再加</button>
    <button @click="waitAdd(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'CountExample',
  data() {
    return {
      n: 1,
    }
  },
  methods: {
    // add() {
    //   this.$store.dispatch('add', this.n)
    // },
    // minus() {
    //   this.$store.dispatch('minus', this.n)
    // },
    // addOdd() {
    //   this.$store.dispatch('addOdd', this.n)
    // },
    // waitAdd() {
    //   this.$store.dispatch('waitAdd', this.n)
    // }
    ...mapActions(['add', 'minus', 'addOdd', 'waitAdd']), // 等价于上面那一坨

    ...mapMutations(['ADD', 'MINUS'])

  },
  computed: {
    // 简写写法
    ...mapState(['sum', 'name', 'age', 'persons']),
    // 标准写法
    // ...mapState{{sum: 'sum', name: 'name', age: 'age'}}

    // 简写写法
    ...mapGetters(['bigSum'])
    // 标准写法
    // ...mapGetters({bigSum: 'bigSum'})
  }
}
</script>

<style>
button {
  margin-left: 5px;
}
</style>