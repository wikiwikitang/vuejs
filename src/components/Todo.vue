<template lang="html">
  <div class="listMargin" >
    <b-alert show class="bAlert">
      <span :class=classObj @dblclick="modTodo(idx)">{{todo.content}}</span>
      <b-button size="sm" variant="danger" @click="delTodo(idx)">Del Todo</b-button>
    </b-alert>
  </div>
</template>

<script>
// if class is a array and the element is a computed object, use name directly, otherwise use double quote + name => "name"
export default {
  props: ['modTodo', 'delTodo', 'todo', 'idx'],
  computed: {
    classObj: function(){
      return {
        noUserSelect: true,
        completed: this.todo.isCompleted ? true: false,
        todoMargin: true
      }
    }
  }

}
</script>

<style lang="css" scoped>
  .noUserSelect {
    user-select: none;
  }

  .completed {
    text-decoration: line-through;
  }

  .todoMargin {
    /* //margin-left: 10px; */
    margin-right:10px;
    margin-bottom: 10px;
  }

  .listMargin {
    margin-bottom: 10px;
  }

  .bAlert {
    margin-left: 20px;
    width: fit-content;
  }

  .testMargin {
    margin-left: 100px;
  }

</style>
