<template>
  <div class="row hero">
    <picture class="hero__image">
      <source type="image/webp" srcset="../assets/images/sticker.webp">
      <img src="../assets/images/sticker.png" alt="meme" loading="lazy" width="180" height="250">
    </picture>
    <picture class="hero__image visible">
      <source type="image/webp" srcset="../assets/images/profile@1x.webp 1x, ../assets/images/profile@2x.webp 2x, ../assets/images/profile@2x.webp 4x">
      <img src="../assets/images/profile@2x.jpg" alt="Siro profile picture" loading="lazy" width="270" height="360">
    </picture>
  </div>
</template>

<script>

export default {
  name: 'Heading', 
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
.hero.alternate {
  background-color: #ffffff00;
  transition: background-color 4.5 ease-in;
}
.hero__image {
  display: inline-flex;
  align-items: flex-end;
  visibility:hidden;
  height:0; 
}

.hero__image.visible {
  visibility: visible;
  height: 100%;
}



@keyframes spin {
0% {
transform-origin: 0 0;
transform: translate(-100%,50%) rotate(180deg);
}
100% {
transform-origin: 0 0;
transform: rotate(360deg);
}
}

.spin-off {
  opacity: 1;
  animation: spin 1.7s normal;
}
</style>