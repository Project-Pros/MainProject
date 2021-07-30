<template>
  <div class="date-selector">
    <span @click="selectPrevious"><b-icon icon="arrow-left"></b-icon></span>
    <span @click="selectCurrent">Today</span>
    <span @click="selectNext"> <b-icon icon="arrow-right"></b-icon></span>
  </div>
</template>

<script>
import dayjs from "dayjs";
import Vue  from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

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
  width:20px;
  color: #999966
}

.date-selector > * {
  cursor: pointer;
  user-select: none;
}
</style>
