<template>
  <div
    class="d-flex flex-column align-items-center justify-content-center vh-100 text-center"
  >
    <h1 class="display-1 fw-bold">Benvenuto!</h1>
    <button
      class="btn btn-outline-dark btn-lg mt-5 px-5 py-2"
      @click="goToBookingPage"
    >
      Prenota
    </button>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  methods: {
    goToBookingPage() {
      console.log('ciao')
    },
  },
}
</script>
