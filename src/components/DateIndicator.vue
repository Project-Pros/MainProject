
<!-- This components shows the current month -->

<template>
  <div class="date-indicator">{{ selectedMonth }}</div>
</template>

<script>
export default {
  props: {
    selectedDate: {
      type: Object,
      required: true
    }
  },
// Format the current date and display it to the user
  computed: {
    selectedMonth() {
      return this.selectedDate.format("MMMM YYYY");
    }
  }
};
</script>

<style >
.date-indicator {
  font-size: 20px;
  font-weight: 500;

}
</style>

