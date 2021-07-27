<template>
  <div class="date-selector">
    <span @click="selectPrevious"><</span>
    <span @click="selectCurrent">Today</span>
    <span @click="selectNext">></span>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  name: "CalendarModeSelector",

  props: {
    currentDate: {
      type: String,
      required: true
    },

    selectedDate: {
      type: Object,
      required: true
    }
  },

  methods: {
    selectPrevious() {
      let newSelectedDate = dayjs(this.selectedDate).subtract(1, "month");
      this.$emit("dateSelected", newSelectedDate);
    },

    selectCurrent() {
      let newSelectedDate = dayjs(this.currentDate);
      this.$emit("dateSelected", newSelectedDate);
    },

    selectNext() {
      let newSelectedDate = dayjs(this.selectedDate).add(1, "month");
      this.$emit("dateSelected", newSelectedDate);
    }
  }
};
</script>

<style scoped>
.date-selector {
  justify-content: space-between;
  display: flex;
  width:20 0px;
  color: #999966
}

.date-selector > * {
  cursor: pointer;
  user-select: none;
}
</style>
