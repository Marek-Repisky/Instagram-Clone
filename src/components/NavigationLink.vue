<script>
export default {
  name: "NavigationLink",
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  computed: {
    iconPath() {
      return new URL(`../assets/icons/${this.icon}.png`, import.meta.url).href
    }
  }
}
</script>

<template>
  <section class="navigation-link">
    <img :src="iconPath" :alt="icon" title="icon">
    <p>{{ icon }}</p>
  </section>
</template>

<style scoped>
  p {
    color: white;
    font-size: 1.5rem;
    margin: 0;
  }
  section {
    display: flex;
    gap: 15px;
    align-items: center;
  }
  img {
    width: 32px;
    height: 32px;
  }
  .navigation-link:hover {
    opacity: 0.8;
    border-radius: 10px;
    background-color: #222;
  }
</style>