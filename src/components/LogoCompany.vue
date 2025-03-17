<script setup></script>

<template>
  <div class="logo">
    <div class="div-img">
      <img src="../assets/Imgs/Image2-logo.png" alt="" />
    </div>
    <p>GAU Peinture</p>
  </div>
</template>

<style scoped>
.logo {
  border: 5px groove var(--orange);
  height: fit-content;
  width: fit-content;
  border-radius: 10px;
  margin: 20px;
  align-items: center;
  background-color: var(--orange);
}

.div-img {
  border-radius: 10px 10px 0 0;
  height: 50px;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo p {
  font-family: 'Rock Salt', serif;
  font-size: 18px;
  line-height: 22px;
  color: white;
  text-align: center;
  padding: 10px;
}

img {
  height: 100%;
}
</style>
