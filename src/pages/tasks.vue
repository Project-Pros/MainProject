<template>
  <div>
 <span class="card" v-for="task in tasks" :key="task.number">
          <card :number="task.number" :title="task.title" :description="task.description"></card>
    </span>
  <div>
      <span class="input-boxes">
        <p>Title: </p>
        <input v-model="taskTitle" placeholder="title">
      </span>
    <br/>
    <span class="input-boxes">
        <p>Description: </p>
        <input v-model="taskDescription" placeholder="description">
      </span>
    <br />
<!--    <span class="input-boxes">-->
<!--        <p>Due Date: </p>-->
<!--        <datepicker v-model="taskDueDate"></datepicker>-->
<!--      </span>-->
<!--    <br />-->
    <button class="add-button" type="button" v-on:click="addTask()">Add Task</button>
  </div>
  </div>
</template>

<script>

import card from '../components/Card.vue'
// import Datepicker from 'vuejs-datepicker';


export default {
  name: "tasks.vue",
  data: function() {
    return {
      tasks: [],
      count: 1,
      taskTitle: '',
      taskDescription: '',
      taskDueDate: ''
    };
  },
  components: {
    card,
    // Datepicker
  },
  methods: {
    addTask() {
      this.tasks.push({
        number: this.count++,
        title: this.taskTitle,
        description: this.taskDescription,
      });
      this.taskTitle = '',
          this.taskDescription = ''
    }
  }
}
</script>

<style scoped>
.card {
  margin-bottom: 5px;
  margin-left: 5px;
  display: inline-flex;
}
.add-button {
  background-color: #555555;
  border: none;
  color: white;
  padding: 15px 32px;
  margin: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-flex;
  font-size: 16px;
  border-radius: 8px;
}
input {
  border-radius: 8px;
  font-family: Calibri, sans-serif;
  padding: 10px;
  margin: 5px
}
.input-boxes {
  display: inline-flex;
}
</style>