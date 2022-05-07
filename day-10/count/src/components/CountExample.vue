<template>
  <div>
    <h1>当前求和为：{{$store.state.sum}}</h1>
    <select
      name=""
      id=""
      v-model.number="n"
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">+</button>
    <button @click="minus">-</button>
    <button @click="addOdd">当前求和为奇数再加</button>
    <button @click="waitAdd">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: 'CountExample',
  data() {
    return {
      n: 1,
    }
  },
  methods: {
    add() {
      this.$store.dispatch('add', this.n)
    },
    minus() {
      this.$store.dispatch('minus', this.n)
    },
    addOdd() {
      this.$store.dispatch('addOdd', this.n)
    },
    waitAdd() {
      this.$store.dispatch('waitAdd', this.n)
    }
  },
}
</script>

<style>
button {
  margin-left: 5px;
}
</style>