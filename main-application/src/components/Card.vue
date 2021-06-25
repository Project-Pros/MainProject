<template>
<div id="card" class="container">
  <span>
      <h3>{{this.number}}. Title: {{this.title}}</h3>
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
  name: 'Card',
  props: [  'title',
    'description',
    'number'
  ]
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
  background:  #e7e7e7;
  color: black;
  word-wrap: break-word;
  font-family: Calibri;
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