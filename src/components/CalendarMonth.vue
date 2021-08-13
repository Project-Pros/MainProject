
<!-- This components is the main component of the calendar -->
<template>
  <div class="calendarMonth">
    <div class="calendarMonthHeader">
      <DateIndicator
        :selectedDate="selectedDate"
        class="calendarMonthHeaderSelectedMonth"
      />
      <DateSelector
        :currentDate="Today"
        :selectedDate="selectedDate"
        @dateSelected="selectDate"
      />
    </div>

    <Weekdays/>

    <ol class="gridDays">
      <MonthDay
        v-for="day in days"
        :key="day.date"
        :day="day"
        :is-today="day.date === today"
      />
    </ol>
  </div>
</template>

<script>
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import weekOfYear from "dayjs/plugin/weekOfYear";
import MonthDay from "./MonthDay";
import DateIndicator from "./DateIndicator";
import DateSelector from "./DateSelector";
import Weekdays from "./Weekdays";

dayjs.extend(weekday);
dayjs.extend(weekOfYear);

export default {
  name: "Calendar",

  components: {
    MonthDay,
    DateIndicator,
    DateSelector,
    Weekdays
  },

  data() {
    return {
      selectedDate: dayjs()
    };
  },

  computed: {
    days() {
      return [
        ...this.previousMonthDays,
        ...this.currentMonthDays,
        ...this.nextMonthDays
      ];
    },


// Add dates to current month
    numberOfDaysInMonth() {
      return dayjs(this.selectedDate).daysInMonth();
    },
    today() {
      return dayjs().format("YYYY-MM-DD");
    },

    year() {
      return Number(this.selectedDate.format("YYYY"));
    },

    month() {
      return Number(this.selectedDate.format("M"));
    },



// Check if a date is the current day and month
    currentMonthDays() {
      return [...Array(this.numberOfDaysInMonth)].map((day, index) => {
        return {
          date: dayjs(`${this.year}-${this.month}-${index + 1}`).format(
            "YYYY-MM-DD"
          ),
          isCurrentMonth: true
        };
      });
    },


// adding dates from previous month
    previousMonthDays() {
      const firstOfTheMonthWeekday = this.getWeekday(
        this.currentMonthDays[0].date
      );
      const previousMonth = dayjs(`${this.year}-${this.month}-01`).subtract(
        1,
        "month"
      );


      const numberOfDaysFromPreviousMonth = firstOfTheMonthWeekday
        ? firstOfTheMonthWeekday - 1
        : 6;

      const previousMonthLastMonday = dayjs(
        this.currentMonthDays[0].date
      )
        .subtract(numberOfDaysFromPreviousMonth, "day")
        .date();

      return [...Array(numberOfDaysFromPreviousMonth)].map(
        (day, index) => {
          return {
            date: dayjs(
              `${previousMonth.year()}-${previousMonth.month() +
                1}-${previousMonthLastMonday + index}`
            ).format("YYYY-MM-DD"),
            isCurrentMonth: false
          };
        }
      );
    },

// adding dates from upcoming month
    nextMonthDays() {
      const lastDayOfWeekday = this.getWeekday(
        `${this.year}-${this.month}-${this.currentMonthDays.length}`
      );

      const upcomingMonth = dayjs(`${this.year}-${this.month}-01`).add(1, "month");

      const visibleNumberOfDaysFromNextMonth = lastDayOfWeekday
        ? 7 - lastDayOfWeekday
        : lastDayOfWeekday;

      return [...Array(visibleNumberOfDaysFromNextMonth)].map((day, index) => {
        return {
          date: dayjs(
            `${upcomingMonth.year()}-${upcomingMonth.month() + 1}-${index + 1}`
          ).format("YYYY-MM-DD"),
          isCurrentMonth: false
        };
      });
    }
  },

  methods: {
    getWeekday(date) {
      return dayjs(date).weekday();
    },

    selectDate(newSelectedDate) {
      this.selectedDate = newSelectedDate;
    }
  }
};
</script>

<style>
.calendarMonth {
  position: relative;
  background-color: #B8B8B8;
  border: solid 2px  #000033;
}

.day-of-week {
  padding-bottom: 4px;
  padding-top: 12px;
  color: #000033;
  font-size: 19px;
  background-color: #fff;

}

.day-of-week,
.gridDays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.day-of-week > * {
  text-align: right;
  padding-right: 5px;
}

.gridDays {
 grid-column-gap: var(--grid-gap);
  grid-row-gap: var(--grid-gap);
  height: 100%;
  position: relative;


}
</style>
