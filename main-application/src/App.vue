<template>
  <div id="app">
    <h1>Project Management</h1>
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
      <button class="add-button" type="button" v-on:click="addTask()">Add Task</button>
    </div>

  </div>
</template>

<script>
import card from './components/Card.vue'

export default {
  name: 'App',
  data: function() {
  return {
    tasks: [
      //   {number: 1, title: 'Build bed frame', description: '72in x 72in'},
      // {number: 2, title: 'Paint Walls', description: 'Gray'},
      // {number: 3, title: 'Install Trim', description: 'paint it white first'}
    ],
    count: 1,
    taskTitle: '',
    taskDescription: ''
  };
},
  components: {
    card
  },
  methods: {
    addTask() {
      this.tasks.push({
        number: this.count++,
        title: this.taskTitle,
        description: this.taskDescription
      });
      this.taskTitle = '',
      this.taskDescription = ''
    }
  }
}
</script>

<style>
#app {
  font-family: Calibri, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
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
