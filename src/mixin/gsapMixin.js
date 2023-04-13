import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  methods: {
    initGsap() {
      const scrollItems = document.querySelectorAll("[data-scroll]");

      if (!scrollItems) {
        return Promise.reject(new Error("scrollItems not found"));
      }
      scrollItems.forEach((item) => {
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
      return Promise.resolve();
    },
    GsapReval() {
      const revealBox = document.querySelectorAll(".revealBox");

      revealBox.forEach((item) => {
        const tl = gsap.timeline();
        const uncoverSlices = item.querySelectorAll(".uncover_slice");

        tl.to(uncoverSlices, 2, {
          scaleX: 0,
          ease: "power4.InOut",
          stagger: { amount: 1 },
        })
          .to(item.querySelectorAll(".revealItem"), 1, {
            ease: "power4.InOut",
          })
          .set(item.querySelector(".uncover"), {
            display: "none",
          });

        ScrollTrigger.create({
          trigger: item,
          animation: tl,
          toggleActions: "play none none reverse",
          start: "top 80%",
          end: "bottom 20%",
        });
      });
    },
    initParallax() {
      const parallaxElemsX = document.querySelectorAll("[data-parallax-x]");
      const parallaxElemsY = document.querySelectorAll("[data-parallax-y]");

      parallaxElemsX.forEach((elem) => {
        const parallaxX = window.innerWidth * elem.dataset.parallaxX;
        gsap.to(elem, {
          scrollTrigger: {
            trigger: elem,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
          x: parallaxX,
          ease: "none",
        });
      });

      parallaxElemsY.forEach((elem) => {
        const parallaxY = window.innerHeight * elem.dataset.parallaxY;
        gsap.to(elem, {
          scrollTrigger: {
            trigger: elem,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
          y: parallaxY,
          ease: "none",
        });
      });
    },
  },
};
