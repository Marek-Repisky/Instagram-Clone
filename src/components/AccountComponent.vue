<script>
export default {
  name: "AccountComponent",
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
    <RouterLink :to="`/account/` + account.userName">
      <img :src="imagePath" :alt="account.image" :title="account.image">
    </RouterLink>

    <p v-if="!off">{{ account.userName }}</p>
    <div class="middle">
      <RouterLink :to="`/account/` + account.userName" style="text-decoration: none">
        <p>{{ account.userName }}</p>
      </RouterLink>
      <p style="font-size: 1rem; color: rgba(255, 255, 255, .55)">Suggested for you</p>
    </div>
    <div>
      <button type="button">Follow</button>
    </div>
  </section>
</template>

<style scoped>
  p {
    color: white;
    font-size: 1.1rem;
  }
  section {
    display: flex;
    gap: 1rem;
    align-items: center;
    padding-top: 1rem;
  }
  img {
    object-fit: cover;
    max-width: 3.5rem;
    border-radius: 50%;
    background-image: conic-gradient(red, orange, yellow, red);
    padding: 2px;
  }
  .middle p {
    margin: 5px;
  }
  button {
    background: none;
    border: none;
    color: deepskyblue;
    font-family: "Segoe UI", sans-serif;
    cursor: pointer;
  }

</style>