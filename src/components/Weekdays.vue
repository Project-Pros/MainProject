<template>
  <ol class="dayOfWeek">
    <li v-for="weekday in weekdays" :key="weekday">{{ weekday }}</li>
  </ol>
</template>

<script>
const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default {
  name: "Weekdays",

  computed: {
    weekdays() {
      return WEEKDAYS;
    }
  }
};
</script>

<style>
.dayOfWeek {
  display: grid;
  grid-template-columns: repeat(7, .5fr);
}

.dayOfWeek > * {
  text-align: right;
  padding-right: 6px;
}
</style>
