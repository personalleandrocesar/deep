<script setup>
import Terapias from '../components/Terapias.vue'
import NavTopTwo from '../components/NavTopTwo.vue'
import NavBottom from '../components/NavBottom.vue'
</script>
<template>
  <div>
    <NavTopTwo/>
    <NavBottom/>
    <div class='anima'>
    <Terapias/>
    </div>
    <RouterView/>
  </div>
</template>