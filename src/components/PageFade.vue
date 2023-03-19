<template>
  <transition @enter="enter" @leave="leave" :css="false" appear>
    <div class="pageFade" :class="$route.name">
      <div class="center">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>
<script>
import { gsap, Power4 } from "gsap";
export default {
  methods: {
    enter(el, done) {
      const tl = gsap.timeline({
        onComplete: done,
      });

      tl.set(el, {
        autoAlpha: 0,
        scale: 2,
        transformOrigin: "50% 50%",
      });

      tl.to(el, 1, {
        autoAlpha: 1,
        scale: 1,
        ease: Power4.easeOut,
      });
    },
    leave(el, done) {
      gsap.to(el, 1, {
        scale: 0,
        ease: Power4.easeOut,
        onComplete: done,
      });
    },
  },
};
</script>
<style lang="scss" scoped></style>
