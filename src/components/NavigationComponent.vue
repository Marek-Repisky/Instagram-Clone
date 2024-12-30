<script>
import NavigationLink from "@/components/NavigationLink.vue";

export default {
  name: "Navigation",
  components: {
    NavigationLink
  },
  data() {
    return {
      icons: [
          'Domov', 'Search', 'Compass', 'Clapper',
          'Direct', 'Heart', 'New Post', 'Account'
      ]
    }
  }
}
</script>

<template>
  <article class="nav">
    <section class="links">
      <h1>Instagram</h1>
    </section>
    <article class="links">
      <RouterLink to="#" class="navigation-link">
        <NavigationLink  v-for="(icon, index) of icons" :key="index" :icon="icon" />
      </RouterLink>
    </article>
  </article>
  <div class="vl"></div>
</template>

<style scoped>
  @font-face {
    font-family: 'Geraldine';
    src: url('@/assets/fonts/Geraldine.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  h1 {
    color: white;
    font-size: 2rem;
    font-family: 'Geraldine', sans-serif;
    margin: 0;
    padding-left: 13px;
  }
  .navigation-link {
    text-decoration: none;
    padding: 15px 10px;
  }
  .links {
    padding: 10px 15px;
  }
  .nav {
    min-width: 13rem;
    min-width: 20.5rem;
    height: 100%;
    border-right: rgba(255, 255, 255, .15) solid 2px;
    position: fixed;
  }
</style>