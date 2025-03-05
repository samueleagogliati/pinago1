<template>
  <div class="sfondo">
    <div
      class="contents d-flex flex-column align-items-center justify-content-center vh-100 text-center"
    >
      <h1 class="display-1 fw-bold text-white">PARRUCCHIERE</h1>
      <router-link to="/booking">
        <button class="btn btn-outline-light text-white btn-lg mt-5 px-5 py-2">
          Prenota
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style scoped>
.sfondo {
  position: relative;
  background: url('/public/img/pexels-krivitskiy-12683776.jpg') no-repeat center;
  background-size: cover;
  height: 100vh;
}

.sfondo::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(20, 20, 20, 0.4);
}

.contents {
  position: relative;
  z-index: 1000;
}
</style>
