<script>
import CirclesComponent from "@/components/CirclesComponent.vue";
import { useBookmarksStore } from "@/stores/bookmarks.js";
import { useLikeStore } from "@/stores/likes.js";
import data from "@/data.json";

export default {
  name: "PostComponent",
  components: {CirclesComponent},
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      bookmark: useBookmarksStore().bookmarks.includes(this.post.id)
          ? 'Bookmarked' : 'Bookmark',
      like: useLikeStore().likes.includes(this.post.id)
          ? 'Liked' : 'Likes',
      bookmarksStore: useBookmarksStore(),
      likesStore: useLikeStore(),
      accounts: data.accounts
    };
  },
  methods: {
    changeBookmark() {
      if (this.bookmark === 'Bookmark') {
        this.bookmark = 'Bookmarked'
        this.bookmarksStore.addBookmark(this.post.id)
      }
      else {
        this.bookmark = 'Bookmark'
        this.bookmarksStore.removeBookmark(this.post.id)
      }
    },
    changeLike() {
      if (this.like === 'Likes') {
        this.like = 'Liked'
        this.likesStore.addLike(this.post.id)
        this.post.likes++
      }
      else {
        this.like = 'Likes'
        this.likesStore.removeLike(this.post.id)
        this.post.likes--
      }
    },
    findAccountById(accountId) {
      return this.accounts.find(account => account.id === accountId);
    }
  },
  computed: {
    iconPath() {
      return new URL(`../assets/icons/${this.bookmark}.png`, import.meta.url).href;
    },
    iconPath2() {
      return new URL(`../assets/icons/${this.like}.png`, import.meta.url).href;
    }
  }
}
</script>

<template>
  <article>
    <section class="top-part-of-the-post">
      <CirclesComponent :off="1" :account="findAccountById(post.accountId)" />
      <RouterLink :to="`/account/` + findAccountById(post.accountId).userName"
        style="text-decoration: none">
        <p style="padding-top: 1rem">{{ findAccountById(post.accountId).userName }}</p>
      </RouterLink>
      <p style="padding-top: 1rem">{{ post.passedTime }}</p>
      <a href="#">
        <img src="@/assets/icons/options.png" alt="Options" title="Options" class="options">
      </a>
    </section>

    <section>
      <img :src="`/images/` + post.image" :alt="post.image" :title="post.image"
           class="post-Image">
    </section>

    <section>
      <section class="bottom-part-of-the-post-icons">
        <img :src="iconPath2" :alt="like" :title="like" class="like-and-stuff" @click="changeLike">
        <img src="@/assets/icons/Comment.png" alt="Comment" title="Comment"
             class="like-and-stuff">
        <img src="@/assets/icons/Messages.png" alt="Share" title="Share"
             class="like-and-stuff">
        <img :src="iconPath" :alt="bookmark" :title="bookmark" class="like-and-stuff bookmark"
             @click="changeBookmark">
      </section>

      <p>{{ post.likes }}</p>
      <p class="comment">
        <b>{{ post.accountName }}</b>
          {{ post.description }}
      </p>
      <input type="text" placeholder="Add comment...">
    </section>
  </article>
</template>

<style scoped>
  p {
    color: white;
    font-size: 1.5rem;
  }
  .top-part-of-the-post {
    display: flex;
    gap: 2rem;
    align-items: center;
    margin-top: 10px;
  }
  .options {
    width: 24px;
    height: 24px;
    padding-top: 5px;
    margin-left: 110px;
  }
  .post-Image {
    margin-top: .8rem;
    border-radius: 5px;
    object-fit: cover;
    max-width: 400px;
    max-height: 600px;
  }
  .bottom-part-of-the-post-icons {
    display: flex;
    gap: 1rem;
  }
  .like-and-stuff {
    margin-top: 5px;
    width: 32px;
    height: 32px;
  }
  .like-and-stuff:hover {
    opacity: .4;
  }
  .bookmark {
    margin-left: 225px;
  }
  .comment {
    font-family: Arial, sans-serif;
    font-size: 1.05rem;
    line-height: 1.2rem;
    text-align: justify;
    text-overflow: ellipsis;
    max-width: 400px;
  }
  input {
    background-color: transparent;
    border: none;
    color: white;
    font-family: Arial, sans-serif;
    font-size: 1.1rem;
    padding: 0 5px;
    max-width: 400px;
    height: 2rem;
    letter-spacing: 1px;
    outline: none;
  }
  article {
    padding-bottom: 10px;
    border-bottom: rgba(255, 255, 255, .15) solid 2px;
  }
</style>