<template>
  <div id="app">
    <h1>Project Management</h1>
    <span class="card" v-for="task in tasks" :key="task.number">
          <card :number="task.number" :title="task.title" :description="task.description"></card>
    </span>
    <div>
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
    tasks: [{number: 1, title: 'Build bed frame', description: '72in x 72in'},
      {number: 2, title: 'Paint Walls', description: 'Gray'},
      {number: 3, title: 'Install Trim', description: 'paint it white first'}],
    count: 0
  };
},
  components: {
    card
  },
  methods: {
    addTask: function(type) {
      this.tasks.push({
        'type': type,
        id: this.count++
      });
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
  display: block;
  float: right;
  background-color: #008CBA;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
