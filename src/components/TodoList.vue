<template lang="html">
  <div class="">
    <transition-group name="fade">
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

  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
    position: absolute;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .fade-move {
    transition: transform 0.5s;
  }
</style>
