<template>
  <div>
    <input-box :addTodo="addTodo"></input-box>
    <todo-list :modTodo="modTodo" :delTodo="delTodo" :todos="todos"></todo-list>
  </div>
</template>

<script>
import InputBox from "./components/InputBox.vue";
import TodoList from "./components/TodoList.vue";
import { v4 } from "node-uuid";

export default {
  name: "app",
  components: {
    inputBox: InputBox,
    todoList: TodoList
  },
  data: function() {
    return {
      todos: []
    };
  },
  methods: {
    addTodo(content) {
      this.todos.push({
        content,
        isCompleted: false,
        id: v4()
      });
    },
    modTodo(idx) {
      this.$set(this.todos, idx, {
        ...this.todos[idx],
        isCompleted: !this.todos[idx].isCompleted
      });
      //this.todos.splice(idx, 1, {...this.todos[idx], isCompleted: !this.todos[idx].isCompleted})
    },
    delTodo(idx) {
      this.todos = [...this.todos.slice(0, idx), ...this.todos.slice(idx + 1)];
    }
  }
};
</script>

<style>

</style>
