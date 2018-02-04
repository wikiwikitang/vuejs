<template lang="html">
  <div class="">
    <transition-group name="list">
      <todo v-for="(todo, idx) in todos" :key="todo.id" :modTodo='modTodo' :delTodo='delTodo' :idx="idx" :todo="todo"></todo>
    </transition-group>
  </div>
</template>

<script>
import Todo from "./Todo.vue";

export default {
  props: ["todos", "delTodo", "modTodo"],
  components: {
    todo: Todo
  }
};
</script>

<style lang="css" scoped>

  .list-enter-active, .list-leave-active {
    transition: all .5s
  }

  .list-enter, .list-leave-to {
    opacity: 0;
  }
</style>
