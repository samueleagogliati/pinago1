<template>
  <div class="sfondo h-100 d-flex align-items-center justify-content-center">
    <div class="contents d-flex align-items-center flex-column text-white">
      <div
        class="header w-100 d-flex align-items-center mb-3 justify-content-between"
      >
        <button
          @click="goToPreviousMonth"
          class="fs-4 calendar-button text-white"
        >
          &lt;
        </button>
        <h1 class="month text-uppercase text-white m-0">
          {{ currentMonth }}
        </h1>
        <button @click="goToNextMonth" class="fs-4 calendar-button text-white">
          &gt;
        </button>
      </div>
      <div class="mt-6 calendar p-5 w-100 h-100">
        <div class="days">
          <div
            v-for="(day, index) in days"
            :key="index"
            class="day m-1 text-center position-relative p-4"
          >
            <button
              class="w-100 calendar-button text-white"
              @click="openModal(day)"
              data-bs-toggle="modal"
              data-bs-target="#dayModal"
            >
              {{ day }}
            </button>
          </div>
        </div>
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
.sfondo {
  background: url('/public/img/pexels-krivitskiy-12683776.jpg') no-repeat center;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
}

.calendar-button {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  border: none;
  background: none;
}

.month {
  font-size: 40px;
  letter-spacing: -3px;
  transform: scaleX(1.4);
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
  border-radius: 5%;
}
.day:hover {
  background-color: #cccccc84;
}
</style>
