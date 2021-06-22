<template>
<div id="card" class="container">
  <span>
      <h3>Title: {{this.title}}</h3>
  </span>
  <span>
      <h4>Description:</h4>
      <p>{{ this.description }}</p>
  </span>
  <button>Edit</button>
</div>
</template>

<script>
export default {
  name: "Card",
  data:() => ({
    title: "Task 1",
    description: "do this"
  })
}
</script>

<style scoped>
#card{
  padding: 20px;
  width: 200px;
  height: 150px;
  border:2px solid;
  border-color:black;
  border-radius: 25px;
  background: gray;
  color: white;
  word-wrap: break-word;
}
h3{
  text-align: left;
  margin-top: 3px;
}
h4{
  text-align: left;
  margin:0px;
}
p{
  margin-bottom: 5px;
  text-align: left;
}
</style>