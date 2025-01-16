<script>
import data from "@/data.json";

export default {
  name: "AccountView",
  components: {
  },
  props: {
    username: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      account: null,
      posts: [],
    }
  },
  watch: {
    username: {
      immediate: true,
      handler(newUsername) {
        this.account = data.accounts.find(account => account.userName === newUsername);
        this.posts = this.account ? data.posts.filter(post => post.accountId === this.account.id) : [];
      }
    }
  }
}
</script>

<template>
  <section class="accountView">

    <section class="top">
      <div class="account-image">
        <a href="#"><img :src="`/images/${this.account.image}`" :alt="account.image"
                         :title="account.image"></a>
      </div>

      <section class="top-right">
        <div class="top-right-top">
          <a href="#">
            <h2>{{ account.userName }}</h2>
          </a>
          <button type="button" class="follow-button">Follow</button>
          <button type="button" class="plus-person-button">
            <img src="@/assets/icons/Add%20person.png" alt="Person" title="Person">
          </button>
          <a href="#"><img src="@/assets/icons/options.png" alt="Options" title="Options" class="options"></a>
        </div>
        <div class="top-right-middle">
          <p><span>{{ this.posts.length }}</span> post</p>
          <a href="#"><p>Followers <span>{{ account.followers }}</span></p></a>
          <a href="#"><p>Following <span>{{ account.following }}</span></p></a>
        </div>
        <p>{{ account.fullName }}</p>
      </section>
    </section>

    <section>
      <div class="middle-top">
        <a href="#">
          <div>
            <img src="@/assets/icons/Grid.png" alt="Grid" title="Grid">
            <p>POSTS</p>
          </div>
        </a>
        <a href="#">
          <div>
            <img src="@/assets/icons/Marked.png" alt="Marked" title="Marked">
            <p>MARKED</p>
          </div>
        </a>
      </div>

      <article>
        <img v-for="post in posts" :key="post.id" :src="`/images/${post.image}`"
             :alt="post.image" :title="post.image">
      </article>

      <footer>
        <section>
          <p>Meta</p>
          <p>Information</p>
          <p>Blog</p>
          <p>Work opportunities</p>
          <p>Help</p>
          <p>API</p>
          <p>Privacy</p>
          <p>Terms</p>
          <p>Localities</p>
          <p>Instagram Lite</p>
          <p>Threads</p>
          <p>Upload contacts and non-users</p>
          <p>Meta Verified</p>
        </section>
        <section>
          <p>Slovak</p>
          <p>© 2025 Instagram from Meta</p>
        </section>
      </footer>
    </section>
  </section>
</template>

<style scoped>
  .account-image img {
    object-fit: cover;
    max-width: 12rem;
    border-radius: 50%;
  }
  .options {
    width: 24px;
    height: 24px;
    padding-top: 5px;
  }
  .top {
    display: flex;
    gap: 8rem;
    padding-top: 1rem;
    max-width: 70%;
  }
  .top-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .top-right-top {
    display: flex;
    gap: 20px;
    align-items: center;
  }
  h2 {
    font-weight: normal;
    font-size: 1.4rem;
  }
  .follow-button {
    background-color: #0095f6;
    color: white;
    border-radius: 10px;
    border: none;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 1px;
    height: 2rem;
    padding: 0 1.4rem;
    cursor: pointer;
  }
  .plus-person-button {
    background-color: #333;
    color: white;
    border-radius: 10px;
    border: none;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 1px;
    height: 2rem;
    padding: 0 1.4rem;
    cursor: pointer;
  }
  button:hover {
    opacity: 0.8;
  }
  button img {
    width: 25px;
    height: 25px;
    padding-top: 2px;
  }
  .top-right-middle {
    display: flex;
    gap: 15%;
  }
  span {
    font-weight: 600;
  }
  p {
    font-size: 1.2rem;
    font-family: "Segoe UI", sans-serif;
  }
  .middle-top {
    border-top: rgba(255, 255, 255, .15) solid 2px;
    display: flex;
    gap: 4rem;
    justify-content: center;
  }
  .middle-top div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .middle-top img {
    width: 16px;
    height: 16px;
  }
  .middle-top p {
    letter-spacing: 2px;
    font-size: 1rem;
    opacity: .5;
  }
  .middle-top p:first-child {
    opacity: 1;
  }
  a {
    text-decoration: none;
    color: white;
  }
  article {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
  }
  article img {
    max-width: 310px;
    object-fit: cover;
  }
  footer section{
    display: flex;
    gap: 10px;
    opacity: .5;
    justify-content: center;
    flex-wrap: wrap;
  }
  footer section p {
    height: .8rem;
  }
  .accountView {
    max-width: 70%;
  }
</style>