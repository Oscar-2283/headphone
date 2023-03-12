<template>
  <main class="main" style="background: #fafafa">
    <div class="my-5 container">
      <Progreess ref="progress"></Progreess>
      <RouterView></RouterView>
    </div>
  </main>
</template>
<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Progreess from "@/components/PayProgress.vue";
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
    setProgress(width, activeSteps) {
      const progressBar =
        this.$refs.progress.$el.querySelector(".progress-bar");
      progressBar.style.width = `${width}%`;
      const steps = progressBar.querySelectorAll(".step");
      steps.forEach((step, index) => {
        step.classList.toggle("active", activeSteps.includes(index));
      });
    },
    checkProgress() {
      const pathArray = this.$route.path.split("/");
      const lastPath = pathArray[pathArray.length - 1];
      console.log(lastPath);
      switch (lastPath) {
        case "cart":
          this.setProgress(33.33, [0]);
          break;
        case "payOrder":
          this.setProgress(66.67, [0, 1]);
          break;
        default:
          this.setProgress(100, [0, 1, 2]);
          break;
      }
    },
  },
  components: {
    Progreess,
  },
  mounted() {
    this.initGsap();
    this.checkProgress();
  },
  watch: {
    $route() {
      this.checkProgress();
    },
  },
};
</script>
