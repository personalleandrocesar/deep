<script setup>
import Sindromes from '../components/Sindromes.vue'
import NavTopTwo from '../components/NavTopTwo.vue'
import NavBottom from '../components/NavBottom.vue'
</script>
<template>
  <div>
    <NavTopTwo/>
    <NavBottom/>
    <div class='anima'>
    <Sindromes/>
    </div>
    <RouterView/>
  </div>
</template>