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
          'Home', 'Search', 'Explore',
          'Film reels', 'New Post'
      ]
    }
  }
}
</script>

<template>
  <nav>
    <section class="links">
      <RouterLink to="/" class="navigation-link">
        <h1>Instagram</h1>
      </RouterLink>
    </section>

    <article class="links">
      <RouterLink to="/" class="navigation-link" v-for="(icon, index) of icons" :key="index">
        <NavigationLink :icon="icon" />
      </RouterLink>
      <RouterLink to="/bookmarks/" class="navigation-link">
        <NavigationLink :icon="'Bookmark'" />
      </RouterLink>
      <RouterLink to="/likes/" class="navigation-link">
        <NavigationLink :icon="'Likes'" />
      </RouterLink>
      <RouterLink to="/account/myAccount">
        <NavigationLink :icon="'Account'" />
      </RouterLink>
    </article>
  </nav>
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
  @media only screen and (max-width: 1550px) {
    h1 {
      display: none;
    }
  }
  .navigation-link {
    text-decoration: none;
    padding: 7px 10px;
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