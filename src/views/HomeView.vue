<script setup>
import Home from '../components/Home.vue'
import NavTop from '../components/NavTop.vue'
import NavBottom from '../components/NavBottom.vue'
import Profile from '../components/Profile.vue'
</script>

<template>
  <main>
    <div>
      <NavTop />
      <div class='anima'>
        <Profile/>
        <Home />
      </div>
      <NavBottom />
    </div>
  </main>
</template>
