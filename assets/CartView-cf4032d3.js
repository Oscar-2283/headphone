import{g as n,S as h}from"./ScrollTrigger-010257a6.js";import{_ as i}from"./_plugin-vue_export-helper-c27b6911.js";import{o as l,c as p,e as u,r as c,a as m,b as a}from"./index-61c48db7.js";const f={},v={class:"progress"},y=u('<div class="progress-bar"><div class="step1 step"><span class="material-symbols-outlined"> check_circle </span></div><div class="step2 step"><span class="material-symbols-outlined"> check_circle </span></div><div class="step3 step"><span class="material-symbols-outlined"> check_circle </span></div></div>',1),P=[y];function $(s,e){return l(),p("div",v,P)}const k=i(f,[["render",$]]);n.registerPlugin(h);const b={methods:{initGsap(){document.querySelectorAll("[data-scroll]").forEach(s=>{n.to(s,{scrollTrigger:{trigger:s,start:"top 70%",onEnter:()=>{s.classList.add("is-inview")}}})})},setProgress(s,e){const t=this.$refs.progress.$el.querySelector(".progress-bar");t.style.width=`${s}%`,t.querySelectorAll(".step").forEach((r,o)=>{r.classList.toggle("active",e.includes(o))})},checkProgress(){const s=this.$route.path.split("/"),e=s[s.length-1];switch(console.log(e),e){case"cart":this.setProgress(33.33,[0]);break;case"payOrder":this.setProgress(66.67,[0,1]);break;default:this.setProgress(100,[0,1,2]);break}}},components:{Progreess:k},mounted(){this.initGsap(),this.checkProgress()},watch:{$route(){this.checkProgress()}}},S={class:"main",style:{background:"#fafafa"}},w={class:"my-5 container"};function V(s,e,t,d,r,o){const _=c("Progreess"),g=c("RouterView");return l(),p("main",S,[m("div",w,[a(_,{ref:"progress"},null,512),a(g)])])}const q=i(b,[["render",V]]);export{q as default};
