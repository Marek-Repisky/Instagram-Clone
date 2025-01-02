<script>
import { RouterLink } from "vue-router";
import CirclesComponent from "@/components/CirclesComponent.vue";
import PostComponent from "@/components/PostComponent.vue";
import AccountComponent from "@/components/AccountComponent.vue";

export default {
  name: "HomeView",
  components: {
    AccountComponent,
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

    <article class="middle">
      <section class="top-part-section">
        <RouterLink to="/" class="top-part">For you</RouterLink>
        <RouterLink to="/" class="top-part">Followed</RouterLink>
      </section>

      <section class="circles">
        <RouterLink to="/" v-for="index in 8" :key="index" style="text-decoration: none">
          <CirclesComponent :image="`Person${index}`" :off=0 />
        </RouterLink>
      </section>
      <PostComponent class="post"/>
    </article>

    <section class="right-side">
      <h2>Suggestions for you</h2>
        <AccountComponent v-for="index in 5" :key="index" :image="`Person${index}`" :off=1 />
      <p>Informácie • Pomoc • Tlačové správy • API • Pracovné príležitosti • Súkromie • Podmienky • Lokality • Jazyk • Meta Verified</p>
      <p class="bottom-text">© 2025 Instagram from Marek</p>
    </section>

  </section>
</template>

<style scoped>
  .top-part-section {
    display: flex;
    gap: 20px;
    border-bottom: rgba(255, 255, 255, .15) solid 2px;
    padding: 10px 0;
    min-width: 100%;
  }
  .top-part {
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
  }
  .circles {
    display: flex;
    gap: 10px;
    text-decoration: none;
    flex-wrap: wrap;
  }
  @media only screen and (max-width: 1080px) {
    .circles {
      flex-direction: column;
    }
  }
  .middle {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .post {
    max-width: 100%;
  }
  .home {
    display: flex;
    justify-content: center;
  }
  .right-side {
    margin: 4rem 0 0 5rem;
    max-width: 300px;
  }
  @media only screen and (max-width: 1460px) {
    .right-side {
      display: none;
    }
  }
  h2 {
    font-family: "Segoe UI", sans-serif;
    font-size: 1.2rem;
    color: rgba(255, 255, 255, .55);
    font-weight: normal;
  }
  p {
    margin-top: 3rem;
    color: rgba(255, 255, 255, .55);
  }
  .bottom-text {
    margin-top: 1.5rem;
  }

</style>