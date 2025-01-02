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
          'Home', 'Search', 'Explore', 'Film reels',
          'Messages', 'Likes', 'New Post', 'Account'
      ]
    }
  }
}
</script>

<template>
  <nav>
    <section class="links">
      <RouterLink to="/">
        <h1>Instagram</h1>
      </RouterLink>
    </section>
    <article class="links">
      <RouterLink to="/" class="navigation-link">
        <NavigationLink  v-for="(icon, index) of icons" :key="index" :icon="icon" />
      </RouterLink>
    </article>
  </nav>
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
  nav {
    height: 100%;
    border-right: rgba(255, 255, 255, .15) solid 2px;
    position: fixed;
  }
  @media only screen and (max-width: 1550px) {
    nav {
      width: 5rem;
    }
  }
</style>