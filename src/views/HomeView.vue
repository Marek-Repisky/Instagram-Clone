<script>
import { RouterLink } from "vue-router";
import CirclesComponent from "@/components/CirclesComponent.vue";
import PostComponent from "@/components/PostComponent.vue";

export default {
  name: "HomeView",
  components: {
    CirclesComponent,
    PostComponent
  },
  data() {
    return {
    }
  }
}
</script>

<template>
  <section class="home">
    <section class="top-part-section">
      <RouterLink to="/" class="top-part">For you</RouterLink>
      <RouterLink to="/" class="top-part">Followed</RouterLink>
    </section>
    <section class="circles">
      <RouterLink to="/" v-for="index in 8" :key="index" style="text-decoration: none">
        <CirclesComponent :image="`Person${index}`" :off=0></CirclesComponent>
      </RouterLink>
    </section>
    <PostComponent class="post"/>
  </section>
</template>

<style scoped>
  .top-part-section {
    display: flex;
    gap: 20px;
    border-bottom: rgba(255, 255, 255, .15) solid 2px;
    padding: 10px 0;
    min-width: 37%;
  }
  .top-part {
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
  }
  .circles {
    display: flex;
    gap: 20px;
    text-decoration: none;
  }
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .post {
    max-width: 35%;
  }

</style>