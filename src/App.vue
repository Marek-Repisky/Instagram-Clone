<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navigation from "@/components/NavigationComponent.vue";
</script>

<template>
  <Navigation />
  <!--    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>-->

  <RouterView />
</template>

<style scoped>


</style>
