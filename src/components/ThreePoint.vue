<script setup></script>

<template>
  <div class="loader">
    <span class="loader__element"></span>
    <span class="loader__element"></span>
    <span class="loader__element"></span>
  </div>
</template>

<style scoped>
.loader {
  background-color: var(--main-color);
  overflow: hidden;
  /* width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0; */
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  z-index: 100000;
}

.loader__element {
  border-radius: 100%;
  border: var(--size) solid var(--green-blue);
  margin: calc(var(--size) * 2);
}

.loader__element:nth-child(1) {
  animation: preloader 0.6s ease-in-out alternate infinite;
}
.loader__element:nth-child(2) {
  animation: preloader 0.6s ease-in-out alternate 0.2s infinite;
}

.loader__element:nth-child(3) {
  animation: preloader 0.6s ease-in-out alternate 0.4s infinite;
}

@keyframes preloader {
  100% {
    transform: scale(2);
  }
}
</style>
