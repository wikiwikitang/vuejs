<template lang="html">
  <div class="displayFlex">
    <b-form-input
      type="text"
      v-model="newTodo"
      @keyup.enter.native="handleAddTodo"
      class="inputboxStyle"
      placeholder="Type To Add New Todo">
    </b-form-input>
    <b-button size="sm" variant="primary" @click="handleAddTodo">Add New Todo</b-button>

  </div>
</template>
<!-- Since this is a custom vue component, it doesn't natively emit native browser events (like a native input would).
To trap native evnets, you need to use the .native event modifier. -->
<script>
export default {
  props: ["addTodo"],
  data: function() {
    return {
      newTodo: ""
    };
  },
  methods: {
    handleAddTodo() {
      if (this.newTodo.trim().length === 0) {
        return;
      }

      this.addTodo(this.newTodo);
      this.newTodo = "";
    }
  }
};
</script>

<style lang="css" scoped>
  .displayFlex {
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .inputboxStyle {
    margin-left:20px;
    margin-right: 10px;
    width: 500px;
  }
</style>
