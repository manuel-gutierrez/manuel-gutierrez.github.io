<template>
  <div class="row hero">
    <picture class="hero__image">
      <source type="image/webp" srcset="../assets/images/profile@1x.webp 1x, ../assets/images/profile@2x.webp 2x, ../assets/images/profile@2x.webp 4x">
      <img src="../assets/images/profile@2x.jpg" alt="Siro profile picture" loading="lazy" width="135" height="180">
    </picture>
  </div>
</template>

<script>
export default {
  name: 'Heading'
}
</script>

<style scoped>
.hero {
  background-color: #070707;
  width: 100vw;
  height: 80vh;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  margin-top: -10vh;
}

.hero__image {
  display: inline-flex;
  align-items: flex-end;
}
</style>