<script setup>
import { RouterView } from 'vue-router'
import Navigation from "@/components/NavigationComponent.vue";
</script>

<template>
  <section>
    <Navigation />

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
