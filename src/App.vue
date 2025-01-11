<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navigation from "@/components/NavigationComponent.vue";
</script>

<template>
  <section>
    <Navigation />
    <RouterLink to="/" />
    <!--<RouterLink to="/about">About</RouterLink>-->

    <div>
      <RouterView />

    </div>
  </section>
</template>

<style scoped>
  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
</style>
