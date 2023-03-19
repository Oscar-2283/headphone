<script setup>
import { RouterView } from "vue-router";
</script>
<script>
import { mapState } from "pinia";
import LoadingStore from "./stores/LoadingStore.js";
export default {
  computed: {
    ...mapState(LoadingStore, ["isLoading"]),
  },
};
</script>
<template>
  <VLoading :active="isLoading">
    <div class="blur-background"></div>
    <div class="loader">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
    <p class="text-uppercase text-center opacity-80 loading-text">loading...</p>
  </VLoading>

  <RouterView />
</template>

<style lang="scss">
.blur-background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  backdrop-filter: blur(5px); /* 模糊效果 */
}
$background-color_1: var(--color);

@keyframes spin {
  0% {
    transform: scale(1) rotate(0);
  }
  20%,
  25% {
    transform: scale(1.3) rotate(90deg);
  }
  45%,
  50% {
    transform: scale(1) rotate(180deg);
  }
  70%,
  75% {
    transform: scale(1.3) rotate(270deg);
  }
  95%,
  100% {
    transform: scale(1) rotate(360deg);
  }
}
.loader {
  --dim: 3rem;
  width: var(--dim);
  height: var(--dim);
  position: relative;
  animation: spin 2s linear infinite;
  .circle {
    --color: #333;
    --dim: 1.2rem;
    width: var(--dim);
    height: var(--dim);
    background-color: $background-color_1;
    border-radius: 50%;
    position: absolute;
    &:nth-child(1) {
      top: 0;
      left: 0;
    }
    &:nth-child(2) {
      top: 0;
      right: 0;
    }
    &:nth-child(3) {
      bottom: 0;
      left: 0;
    }
    &:nth-child(4) {
      bottom: 0;
      right: 0;
    }
  }
}
.loading-text {
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translate(-45%, 65%);
}
</style>
