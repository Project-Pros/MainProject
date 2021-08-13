<!-- calendar page -->

<template>
  <div id="app">
    <p>Backlog: {{arrBackLog}}</p>
    <p>Todo: {{arrTodo}}</p>
    <p>Doing: {{arrDoing}}</p>
    <p>Done: {{arrDone}}</p>

    <CalendarMonth/>
  </div>
</template>

<script>
/**
 * This is the calendar page within the application.
 */
import CalendarMonth from "../components/CalendarMonth";
import {mapState} from 'vuex';

export default {
  name: "Calendar",

  /**
   * Imports the calendar component onto the page
   */
  components: {
    CalendarMonth
  },
  /**
   * Imports the computed arrays from the store to be used in the HTML
   */
  computed: {
    ...mapState(['arrBackLog', 'arrTodo', 'arrDoing', 'arrDone'])
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  font-family: sans-serif;
  font-weight: 100;
  --grey-100: #e4e9f0;
  --grey-200: #cfd7e3;
  --grey-300: #b5c0cd;
  --grey-800: #3e4e63;
  --grid-gap: 1px;
  --day-label-size: 20px;
}

ol,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}

.calendarMonthHeader {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 10px;
}
</style>
