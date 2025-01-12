<script>
export default {
  name: "CirclesComponent",
  props: {
    account: {
      type: Object,
      required: true
    },
    off: {
      type: Number,
      required: true
    }
  },
  computed: {
    imagePath() {
      return new URL(`/public/images/${this.account.image}`, import.meta.url).href
    }
  }
}
</script>

<template>
  <section>
    <RouterLink style="text-decoration: none" :to="`/account/` + account.userName">
      <img :src="imagePath" :alt="account.image" :title="account.image">
      <p v-if="!off">{{ account.userName }}</p>
    </RouterLink>
  </section>
</template>

<style scoped>
  p {
    color: white;
    font-size: 1.5rem;
    margin-top: 10px;
  }
  section {
    display: flex;
    flex-direction: column;
    gap: 0;
    align-items: baseline;
    justify-content: center;
    padding-top: 1rem;
  }
  img {
    object-fit: cover;
    max-width: 3.5rem;
    border-radius: 50%;
    background-image: conic-gradient(red, orange, yellow, red);
    padding: 2px;
  }

</style>