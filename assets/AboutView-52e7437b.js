import{g as c,S as r}from"./ScrollTrigger-010257a6.js";import{_ as l}from"./_plugin-vue_export-helper-c27b6911.js";import{o as t,c as o,a as s,s as d,F as h,k as _,e as m}from"./index-0958e378.js";const p="/headphone/assets/about-banner-d8a13a98.jpg",a="/headphone/assets/products-banner-e1295836.jpg",g="/headphone/assets/technica-cc4e7f17.png";c.registerPlugin(r);const u={data(){return{bannerImg:p}},methods:{initGsap(){document.querySelectorAll("[data-scroll]").forEach(e=>{c.to(e,{scrollTrigger:{trigger:e,start:"top 70%",onEnter:()=>{e.classList.add("is-inview")}}})})}},mounted(){this.initGsap()}},v={class:"ovf-hidden"},f=s("h1",{class:"text-white"},"關於我們",-1),b=[f],w={class:"container py-8"},y=m('<div class="row gx-4 gy-10 align-items-center position-relative text-bg"><div class="col-6"><img src="'+a+'" alt=""></div><div class="col-6"><h2 class="mb-3">Audio Avenue 起源</h2><p class="lh-15"> 我們的耳機店由一群對音樂和音質有熱誠的年輕人創立，他們希望通過提供優質的耳機產品，幫助人們更好地享受音樂。自成立以來，我們一直致力於這一目標，並且通過不斷努力和創新，為客戶提供最好的體驗。 </p></div><div class="col-6"><h2 class="mb-3">我們的歷史</h2><p class="lh-15"> 我們是一家專門銷售高品質耳機的店鋪，我們的使命是為客戶提供最好的音質和最舒適的體驗。我們的店鋪位於市中心，擁有豐富的商品選擇和專業的銷售團隊。 </p></div><div class="col-6"><img src="'+a+'" alt=""></div></div>',1),x={class:"py-8 mx-auto",style:{"max-width":"1000px"}},S=s("div",{class:"mb-6"},[s("h2",{class:"text-center mb-3"},"合作品牌"),s("p",{class:"text-center"}," 我們與多家優質耳機品牌合作，共同推廣卓越的音質體驗和優異的品質，讓您在聆聽音樂、觀看影片和打電話時都能感受到耳機帶來的音質和使用體驗的良好。 ")],-1),k={class:"row gx-8 gy-4"},z=s("img",{src:g,alt:""},null,-1),A=[z],j=s("div",{style:{height:"400px"}},[s("iframe",{class:"w-100 h-100",src:"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d28920.94406924319!2d121.53402431267422!3d25.030068959605366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z5Y-w5YyX5biC5pS_5bqc!5e0!3m2!1szh-TW!2stw!4v1677572598657!5m2!1szh-TW!2stw",width:"600",height:"450",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})],-1);function I(e,T,V,$,i,B){return t(),o("div",v,[s("div",{class:"banner-img d-flex justify-content-center align-items-center",style:d([{height:"500px"},{backgroundImage:`url(${i.bannerImg})`}])},b,4),s("div",w,[y,s("div",x,[S,s("div",k,[(t(),o(h,null,_(8,n=>s("div",{key:n,class:"col-3 d-flex justify-content-center"},A)),64))])])]),j])}const C=l(u,[["render",I]]);export{C as default};
