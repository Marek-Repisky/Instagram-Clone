<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navigation from "@/components/NavigationComponent.vue";
</script>

<template>
  <section>
    <Navigation />
    <RouterLink to="/" />
    <!--<RouterLink to="/about">About</RouterLink>-->

    <RouterView />
  </section>
</template>

<style scoped>
</style>
