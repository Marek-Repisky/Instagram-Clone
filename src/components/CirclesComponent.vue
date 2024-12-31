<script>
export default {
  name: "CirclesComponent",
  props: {
    image: {
      type: String,
      required: true
    },
    off: {
      type: Number,
      required: true
    }
  },
  computed: {
    imagePath() {
      return new URL(`../../public/images/${this.image}.jpg`, import.meta.url).href
    },
    computedClass() {
      return this.off === 0 ? 'vertical' : 'horizontal';
    }
  }
}
</script>

<template>
  <section :class="computedClass">
    <img :src="imagePath" alt="Person" title="Person">
    <p v-if="!off">{{ image }}</p>
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
    align-items: center;
    padding-top: 1rem;
  }
  img {
    object-fit: cover;
    max-width: 4rem;
    border-radius: 50%;
    background-image: conic-gradient(red, orange, yellow, red);
    padding: 2px;
  }
</style>