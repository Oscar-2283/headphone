import{i as a}from"./index-165c4d4d.js";import{S as l}from"./ScrollTrigger-852a7d6d.js";a.registerPlugin(l);const c={methods:{initGsap(){const t=document.querySelectorAll("[data-scroll]");return t?(t.forEach(r=>{a.to(r,{scrollTrigger:{trigger:r,start:"top 70%",onEnter:()=>{r.classList.add("is-inview")}}})}),Promise.resolve()):Promise.reject(new Error("scrollItems not found"))},GsapReval(){document.querySelectorAll(".revealBox").forEach(r=>{const e=a.timeline(),o=r.querySelectorAll(".uncover_slice");e.to(o,2,{scaleX:0,ease:"power4.InOut",stagger:{amount:1}}).to(r.querySelectorAll(".revealItem"),1,{ease:"power4.InOut"}).set(r.querySelector(".uncover"),{display:"none"}),l.create({trigger:r,animation:e,toggleActions:"play none none reverse",start:"top 80%",end:"bottom 20%"})})},initParallax(){const t=document.querySelectorAll("[data-parallax-x]"),r=document.querySelectorAll("[data-parallax-y]");t.forEach(e=>{const o=window.innerWidth*e.dataset.parallaxX;a.to(e,{scrollTrigger:{trigger:e,start:"top bottom",end:"bottom top",scrub:1},x:o,ease:"none"})}),r.forEach(e=>{const o=window.innerHeight*e.dataset.parallaxY;console.log(o),a.to(e,{scrollTrigger:{trigger:e,start:"top bottom",end:"bottom top",scrub:1},y:o,ease:"none"})})}}};export{c as g};
