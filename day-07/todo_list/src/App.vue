<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :receive="receive"></MyHeader>
        <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"></MyList>
        <MyFooter :todos="todos" :clearDone="clearDone"></MyFooter>
      </div>
    </div>
  </div>
</template>

<script>
import MyList from './components/MyList.vue'
import MyFooter from './components/MyFooter.vue'
import MyHeader from './components/MyHeader.vue'

export default {
  name: 'App',
  components: {
    MyList,
    MyFooter,
    MyHeader
  },
  data() {
    return {
      todos: [
        {id: 1, title: '吃饭', done: true},
        {id: 2, title: '睡觉', done: false},
        {id: 3, title: '打游戏', done: true},
      ]
    }
  },
  methods: {
    // 添加一个todo
    receive(todoObj) {
      if (!todoObj.title.trim()) {
        alert("todo内容不能为空")
      } else {
        this.todos.push(todoObj)
      }
    },
    //更改todo的状态
    checkTodo(id) {
      this.todos.forEach(todo => {
        if (todo.id === id) {
          todo.done = !todo.done
        }
      })
    },
    //删除todo
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    clearDone() {
      this.todos = this.todos.filter(todo => todo.done === false)
    }
  }
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
