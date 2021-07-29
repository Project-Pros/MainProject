<template>
<div id="card" class="container">
  <span>
      <h5>{{this.number}}. Title: {{this.title}}</h5>
  </span>
  <span>
      <h6>Description:</h6>
      <p>{{ this.description }}</p>
  </span>
<!--  <span>-->
<!--    <h6>Date to be completed by: </h6>-->
<!--    <p>{{this.date}}</p>-->
<!--  </span>-->
  <button>Edit</button>
</div>
</template>

<script>
export default {
  name: 'Card',
  props: [  'title',
    'description',
    'number',
      'date'
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
  word-wrap: break-word;


}
h5{
  text-align: left;
  margin-top: 3px;
}
h6{
  text-align: left;
  margin:0px;
  font-weight: bold;
}
p{
  margin-bottom: 5px;
  text-align: left;
}
button {
  background-color: #555555;
  border: none;
  color: white;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-flex;
  font-size: 12px;
  border-radius: 8px;
}
</style>