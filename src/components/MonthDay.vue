
<!-- This component represents a single day -->

<template>
  <li
    class="calendarDay"
    :class="{
      'calendar-day--not-current': !day.isCurrentMonth,
      'calendar-day--today': isToday
    }"
  >
    <span>{{ label }}</span>
  </li>
</template>

<script>
import dayjs from "dayjs";

export default {
  name: "CalendarMonthDayItem",

  props: {

     isCurrentMonth: {
        type: Boolean,
        default: false
      },
    day: {
      type: Object,
      required: true
    },

    isToday: {
      type: Boolean,
      default: false
    }
  },

// format received date
  computed: {
    label() {
      return dayjs(this.day.date).format("D");
    }
  }
};
</script>

<style>
.calendarDay {
  position: relative;
  min-height: 100px;
  font-size: 19px;
  background-color: #fff;
  color: #000033;
  padding: 5px;
}

.calendarDay > span {
  display: flex;
  justify-content: center;
  position: absolute;
  right: 2px;
  align-items: center;
}

.calendar-day--not-current {
  background-color: #E0E0E0;
  color: #C8C8C8;
}

.calendar-day--today {
  padding-top: 4px;
}

.calendar-day--today > span {
  color: #fff;
  border-radius: 9999px;
  background-color:#191970 ;
}
</style>
