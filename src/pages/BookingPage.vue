<template>
  <div class="mt-6 container calendar w-100">
    <div class="header">
      <button @click="goToPreviousMonth" class="fs-1 ms-2 calendar-button">
        &lt;
      </button>
      <h2 class="month">{{ currentMonth }}</h2>
      <button @click="goToNextMonth" class="fs-1 me-2 calendar-button">
        &gt;
      </button>
    </div>

    <div class="days mt-1">
      <div
        v-for="(day, index) in days"
        :key="index"
        class="day m-1 text-center position-relative"
      >
        <button
          class="w-100 calendar-button"
          @click="openModal(day)"
          data-bs-toggle="modal"
          data-bs-target="#dayModal"
        >
          {{ day }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns'
import { it } from 'date-fns/locale'
export default {
  name: 'BookingPage',
  data() {
    return {
      total: 0,
      selectedDate: null,
      currentDate: new Date(),
      selectedDay: null,
      showSelect: false,
      expenses: [],
      categories: [],
      totalOfDays: [],
      typeMessage: null,
      message: null,
      showAlertMessage: false,
      user: null,
      editedExpenses: [],
      validation: null,
      isSaving: false,
      disabledSaveButton: true,
      selectedCategory: null,
    }
  },
  props: {},
  computed: {
    currentMonth() {
      const monthName = format(this.currentDate, 'MMMM', { locale: it })
      const capitalizedMonthName =
        monthName.charAt(0).toUpperCase() + monthName.slice(1)
      return (
        capitalizedMonthName +
        ' ' +
        format(this.currentDate, 'yyyy', { locale: it })
      )
    },
    days() {
      const startDate = startOfMonth(this.currentDate)
      const endDate = endOfMonth(this.currentDate)
      const allDaysOfMonth = eachDayOfInterval({
        start: startDate,
        end: endDate,
      })
      return allDaysOfMonth.map((day) => format(day, 'd', { locale: it }))
    },
  },
  methods: {
    goToPreviousMonth() {
      const previousMonth = new Date(this.currentDate)
      previousMonth.setMonth(previousMonth.getMonth() - 1)
      this.currentDate = previousMonth
    },
    goToNextMonth() {
      const nextMonth = new Date(this.currentDate)
      nextMonth.setMonth(nextMonth.getMonth() + 1)
      this.currentDate = nextMonth
    },
  },

  async mounted() {},
}
</script>

<style scoped>
.calendar-button {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  border: none;
  background: none;
}

.header {
  display: flex;
  justify-content: space-between;
}

.days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.day {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 10%;
}
.day:hover {
  background-color: #cccccc84;
}
</style>
