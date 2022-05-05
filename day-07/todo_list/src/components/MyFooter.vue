<template>
  <div class="todo-footer" v-show="getCount.total">
    <label>
      <input type="checkbox" :checked="hasDoneAll" @change="checkAll"/>
    </label>
    <span>
          <span>已完成 {{getCount.done}}</span> / 全部 {{getCount.total}}
        </span>
    <button class="btn btn-danger" @click="handleClear">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: 'MyFooter',
  computed: {
    getCount() {
      const total = this.todos.length
      const done = this.todos.filter(todo => todo.done).length
      return {total: total, done: done}
    },
    hasDoneAll() {
      const res = this.getCount
      return res.done === res.total && res.total > 0
    }
  },
  props: ['todos', 'clearDone'],
  methods: {
    checkAll(event) {
      this.todos.forEach(todo => todo.done = event.target.checked)
    },
    handleClear() {
      this.clearDone() 
    }
  },
}
</script>

<style>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>