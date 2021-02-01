<template>
  <div id="todos">
    <div :title="title">看一下</div>
    <h2>todos</h2>
    <input 
      id="txt" 
      v-model="todoValue" 
      type="text"><input 
        type="button" 
        value="添加" 
        @click="addTodo">
    <div 
      v-for="todo in todos" 
      :key="todo.id" 
      class="todo"><input 
        :id="todo.id" 
        type="button" 
        value="删除" 
        @click="removeTodo(todo.id)">{{ todo.title }}</div>
  </div>

</template>

<script>
import storage from './../model/storage.js';
export default {
  name: 'Todos',
  data () {
    return {
      title: '我是title',
      todoValue: '',
      todos: [
        {id: 1,
          title: 'todo one',
          completed: false
        },
        {id: 2,
          title: 'todo two',
          completed: true
        }
      ]
    };
  },
  mounted () {
    if (storage.get('list')) {
      var list = JSON.parse(storage.get('list'));
      if (list) {
        this.todos = list;
      }
    }
  },
  methods: {
    addTodo: function () {
      let obj = {};
      obj.id = this.todos.length + 1;
      obj.title = this.todoValue;
      obj.completed = true;
      this.todos.push(obj);
      this.todoValue = '';
      storage.set('list', JSON.stringify(this.todos));
    },
    removeTodo: function (id) {
      const newTodos = [];
      for (const item of this.todos) {
        if (item.id !== id) {
          newTodos.push(item);
        }
      }
      this.todos = newTodos;
      storage.set('list', JSON.stringify(this.todos));
    }
  },
};
</script>
<style>
#todos{text-align: left}
.todo{
  text-align: left;
  background: rgb(216, 16, 50)
  }
</style>
