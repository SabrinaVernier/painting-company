<script setup></script>

<template>
  <div class="moving-div">
    <div class="swatch">
      <div class="transform"></div>
      <div class="transform"></div>
      <div class="transform"></div>
      <div class="transform"></div>
      <div class="transform"></div>
      <div class="transform"></div>
    </div>
  </div>
</template>

<style scoped>
/* .moving-div {
  background: rebeccapurple;

} */

.swatch {
  /* border: 1px solid black; */
  display: block;
  text-align: center;
  position: relative;
  margin: 100px;
  /* padding-bottom: 200px; */

  div {
    width: 70px;
    height: 225px;
    position: absolute;
    top: 0px;
    border-radius: 5px;
    border-top: solid 2px rgba(0, 0, 0, 0.2);
    border-left: solid 3px rgba(255, 255, 255, 0.2);
    border-bottom: solid 3px rgba(0, 0, 0, 0.2);
    text-align: center;
    box-sizing: border-box;
    transform-origin: center 90%;
    display: inline-block;
    backface-visibility: hidden;
    margin-left: -35px;
    transform: rotate(0deg);
  }

  div:before {
    width: 16px;
    height: 16px;
    content: '';
    background-color: var(--white);
    display: inline-block;
    border-radius: 8px;
    bottom: 10px;
    position: absolute;
    margin-left: -8px;
  }

  div:nth-child(1) {
    background-color: var(--purple-chart);
    animation: swatch-purple-motion 5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
  div:nth-child(2) {
    background-color: var(--blue-chart);
    animation: swatch-blue-motion 5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
  div:nth-child(3) {
    background-color: var(--green-chart);
    animation: swatch-green-motion 5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
  div:nth-child(4) {
    background-color: var(--yellow-chart);
    animation: swatch-yellow-motion 5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
  div:nth-child(5) {
    background-color: var(--orange-chart);
    animation: swatch-orange-motion 5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
  div:nth-child(6) {
    background-color: var(--red-chart);
    animation: swatch-red-motion 5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
}

@keyframes swatch-purple-motion {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(-65deg);
  }
}

@keyframes swatch-blue-motion {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(-40deg);
  }
}

@keyframes swatch-green-motion {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(-15deg);
  }
}

@keyframes swatch-yellow-motion {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(15deg);
  }
}

@keyframes swatch-orange-motion {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(40deg);
  }
}

@keyframes swatch-red-motion {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(65deg);
  }
}

/* -----responsove----- */
@media (max-width: 700px) {
  .swatch {
    margin: 50px;
  }
}

@media (max-width: 500px) {
  .swatch {
    margin: 40px;
    scale: 70%;
  }
}
</style>
