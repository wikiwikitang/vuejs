<template lang="html">
  <div class="">
    <todo v-for="(todo, idx) in todos" :key="idx" :modTodo='modTodo' :delTodo='delTodo' :idx="idx" :todo="todo"></todo>
  </div>
</template>

<script>
import Todo from "./Todo.vue";

export default {
  props:['todos','delTodo', 'modTodo'],
  components:{
    todo: Todo
  }
};
</script>

<style lang="css">
</style>
