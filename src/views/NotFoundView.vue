<script>

export default {
  name: "NotFoundView",
}
</script>

<template>
  <section class="NotFoundView">

    <section class="middle">
      <h2>Sorry, this page is not available.</h2>
      <p>The link you clicked on may be damaged or the page has already been removed.
        <RouterLink to="/" style="color: white; text-decoration: none">
          Back to Instagram
        </RouterLink>
      </p>
    </section>
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
</template>

<style scoped>
  .middle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 160%;
  }
  h2 {
    font-size: 1.7rem;
  }
  p {
    font-size: 1.2rem;
    font-family: "Segoe UI", sans-serif;
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
  .NotFoundView {
    max-width: 70%;
  }
</style>