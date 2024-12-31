<script>
import CirclesComponent from "@/components/CirclesComponent.vue";

export default {
  name: "PostComponent",
  components: {CirclesComponent}
}
</script>

<template>
  <article>
    <section class="top-part-of-the-post">
      <CirclesComponent :off="1" image="Person1" />
      <p style="padding-top: 1rem">Person1</p>
      <p style="padding-top: 1rem">1t</p>
      <img src="@/assets/icons/options.png" alt="Options" title="Options" class="options">
    </section>
    <section>
      <img src="../../public/images/PostImage1.jpg" alt="PostImage1" title="PostImage1"
           class="post-Image">
    </section>
    <section>
      <section class="bottom-part-of-the-post-icons">
        <img src="@/assets/icons/heart.png" alt="Heart" title="Heart"
             class="like-and-stuff">
        <img src="@/assets/icons/Comment.png" alt="Comment" title="Comment"
             class="like-and-stuff">
        <img src="@/assets/icons/Direct.png" alt="Share" title="Share"
             class="like-and-stuff">
        <img src="@/assets/icons/Bookmark.png" alt="Bookmark" title="Bookmark"
             class="like-and-stuff bookmark">
      </section>
      <p>16 likes</p>
      <p class="comment">
        <b>Person1</b>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Adipiscing viverra penatibus blandit praesent; neque sed suscipit sem. Maximus faucibus etiam dapibus ac ante placerat. Finibus convallis interdum tellus metus purus iaculis. Egestas convallis facilisis dis aptent interdum ante viverra. Magna fringilla turpis facilisis sodales rhoncus. Finibus eu laoreet mus fames aptent tellus. Sed per hendrerit platea scelerisque sed velit vel. Primis lobortis fusce mauris fames etiam habitant.
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