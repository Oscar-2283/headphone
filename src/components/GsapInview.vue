<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  methods: {
    initGsap() {
      document.querySelectorAll("[data-scroll]").forEach((item) => {
        gsap.to(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 70%",
            onEnter: () => {
              item.classList.add("is-inview");
            },
          },
        });
      });
    },
  },
  mounted() {
    this.initGsap();
  },
};
</script>
<template>
  <div>test123</div>
</template>
