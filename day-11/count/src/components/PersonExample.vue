<template>
  <div>
    <h1>人员列表</h1>
    <input
      type="text"
      placeholder="请输入名字"
      v-model="name"
    >
    <button @click="addPerson">添加</button>
    <ul>
      <li
        v-for="p in persons"
        :key="p.id"
      >{{p.name}}</li>
    </ul>
    <h2>上方组件的求和：{{sum}}</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'PersonExample',
  data() {
    return {
      name: ''
    }
  },
  computed: {
    ...mapState(['persons', 'sum'])
  },
  methods: {
    addPerson() {
      this.$store.dispatch('addPerson', this.name)
      this.name = ''
    }
  },
}
</script>

<style>
</style>