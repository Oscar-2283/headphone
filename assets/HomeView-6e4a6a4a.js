import{_ as b,m as g,A as f,r as n,o as l,b as r,d as t,t as _,f as s,g as c,F as p,e as h,L as y,h as e,n as w}from"./index-195b70bc.js";import{g as E}from"./gsapMixin-a3f9125f.js";import"./ScrollTrigger-852a7d6d.js";const P="/headphone/assets/img-09af2002.png",V="/headphone/assets/img_product1-0a54be18.jpg",A="/headphone/assets/img_product2-5159cb70.png",L="/headphone/assets/img_product3-5d42fec9.jpg",S="/headphone/assets/img_product4-d05ad129.jpg";const{VITE_URL:R,VITE_PATH:j}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"test8283",BASE_URL:"/headphone/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},I={mixins:[E],data(){return{products:[],randomProduct:{title:"",imageUrl:"",instructions:["default"]}}},methods:{...g(y,["hideLoading","showLoading"]),async getProducts(){try{const d=await this.$http.get(`${R}/api/${j}/products/all`);this.hideLoading(),this.products=d.data.products,this.randomProduct=this.products[Math.floor(Math.random()*10)]}catch(d){alert(d.response.data.message)}},onSubscribe(){this.$swal({title:"感謝您的訂閱優惠券代碼為",text:"plate666"})}},created(){this.showLoading()},async mounted(){await this.getProducts(),f.init({duration:1e3,once:!0}),this.initGsap(),this.GsapReval()}},T={class:"main overflow-hidden"},k={class:"home-banner revealBox"},B={class:"pt-8 pb-md-8 pb-5"},U={class:"container"},F={class:"row g-5 justify-content-between align-items-center"},M={class:"col-md-6 col-12"},D={class:"text-title mb-4 banner-title"},G={class:"p2 text-text mb-4 max-w-482md"},H={class:"px-5 px-md-0"},N={class:"col-md-6 col-12 order-md-0 order-first d-flex"},O=["src","alt"],C={class:"uncover"},q={class:"py-md-10 py-8"},z={class:"container"},Y={class:"row gx-4 gy-6 align-items-center"},$=t("div",{"data-aos":"fade-right","data-aos-anchor-placement":"bottom-bottom",class:"col-md-6 col-12"},[t("img",{class:"w-100",src:P,alt:"aboutImg"})],-1),J={class:"col-md-6 col-12"},K={"data-aos":"fade-left","data-aos-anchor-placement":"bottom-bottom","data-aos-delay":"300",class:"ms-md-auto max-w-526"},Q=t("h1",{class:"mb-4 text-title text-md-start text-center"}," 關於我們 ",-1),W=t("p",{class:"p2 mb-md-8 mb-5 text-text"}," AudioAvenue一直以永續經營、站在客人角度思考的理念，為音樂愛好者提供出眾的商品及專業服務。 ",-1),X={class:"px-5 px-md-0"},Z={class:"product py-md-10 py-6"},tt={class:"container"},st=t("h1",{"data-aos":"fade-up",class:"text-center mb-md-8 mb-6"},"產品一覽",-1),et={class:"row gx-4 gy-5"},ot={"data-aos":"fade-up",class:"col-xl-3 col-md-6 col-12"},ct={class:"card"},at=t("div",{class:"card-image"},[t("img",{src:V,alt:"有線耳罩式耳機"})],-1),it={class:"pt-4 pb-5 d-flex justify-content-center"},dt={class:"w-100 px-5"},nt=t("div",{class:"mb-4"},[t("h3",{class:"text-center"},"|有線|"),t("h3",{class:"text-center"},"耳罩式耳機")],-1),lt={"data-aos":"fade-up","data-aos-delay":"150",class:"col-xl-3 col-md-6 col-12"},rt={class:"card"},_t=t("div",{class:"card-image"},[t("img",{src:A,alt:"無線耳罩式耳機"})],-1),pt={class:"pt-4 pb-5 d-flex justify-content-center"},ht={class:"w-100 px-5"},mt=t("div",{class:"mb-4"},[t("h3",{class:"text-center"},"|無線|"),t("h3",{class:"text-center"},"耳罩式耳機")],-1),ut={"data-aos":"fade-up","data-aos-delay":"300",class:"col-xl-3 col-md-6 col-12"},xt={class:"card"},vt=t("div",{class:"card-image"},[t("img",{src:L,alt:"有線耳塞式耳機"})],-1),bt={class:"pt-4 pb-5 d-flex justify-content-center"},gt={class:"w-100 px-5"},ft=t("div",{class:"mb-4"},[t("h3",{class:"text-center"},"|有線|"),t("h3",{class:"text-center"},"耳塞式耳機")],-1),yt={"data-aos":"fade-up","data-aos-delay":"450",class:"col-xl-3 col-md-6 col-12"},wt={class:"card"},Et=t("div",{class:"card-image"},[t("img",{src:S,alt:"無線耳塞式耳機"})],-1),Pt={class:"pt-4 pb-5 d-flex justify-content-center"},Vt={class:"w-100 px-5"},At=t("div",{class:"mb-4"},[t("h3",{class:"text-center"},"|無線|"),t("h3",{class:"text-center"},"耳塞式耳機")],-1),Lt={class:"py-md-10 py-8"},St={class:"container revealBox"},Rt=t("div",{class:"home-intro revealItem"},[t("h1",{class:"text-white mb-6",style:{"max-width":"411px","letter-spacing":"0.04em"}}," BRINGING YOU THE BEST AUDIO GEAR "),t("p",{class:"text-white",style:{"max-width":"528px"}}," 位于台北市中心的AudioAvenue是高端耳機、耳塞和音頻配件的首選商店。我们擁有大型展廳和視聽室，您可以在这里觀看並體驗我们的各種產品。來我們店內，我們有最專業的人員,讓您體驗到最優質的服務。 ")],-1),jt={class:"uncover"},It={class:"home-coupon"},Tt={class:"container"},kt={class:"d-flex justify-content-center align-items-center"},Bt={"data-aos":"fade-up",class:"coupon-body"},Ut=t("h1",{class:"coupon-body-title"},"歡慶開幕",-1),Ft=t("p",{class:"coupon-body-text"},[e(" 按下 "),t("span",{class:"text-primary"},"訂閱"),e(" ，第一時間領取優惠碼及最新活動 ")],-1),Mt={class:"d-flex flex-wrap"},Dt={class:"position-relative width-auto-md"},Gt=t("button",{class:"btn btn-primary text-white"},"訂閱",-1);function Ht(d,Nt,Ot,Ct,o,m){const a=n("RouterLink"),u=n("VField"),x=n("ErrorMessage"),v=n("VForm");return l(),r("main",T,[t("section",k,[t("div",B,[t("div",U,[t("div",F,[t("div",M,[t("h1",D,_(o.randomProduct.title),1),t("p",G,_(o.randomProduct.instructions&&o.randomProduct.instructions.length>0?o.randomProduct.instructions[0]:""),1),t("div",H,[s(a,{to:`/product/${o.randomProduct.id}`,class:"btn btn1 btn-primary text-white py-3 px-8"},{default:c(()=>[e(" 觀看產品 ")]),_:1},8,["to"])])]),t("div",N,[t("img",{class:"mx-auto d-block w-100",src:o.randomProduct.imageUrl,alt:o.randomProduct.title},null,8,O)])]),t("div",C,[(l(),r(p,null,h(3,i=>t("div",{key:i,class:"uncover_slice"})),64))])])])]),t("section",q,[t("div",z,[t("div",Y,[$,t("div",J,[t("div",K,[Q,W,t("div",X,[s(a,{to:"/about",class:"btn btn1 btn-primary text-white py-3 px-8"},{default:c(()=>[e(" 了解更多 ")]),_:1})])])])])])]),t("section",Z,[t("div",tt,[st,t("div",et,[t("div",ot,[t("div",ct,[at,t("div",it,[t("div",dt,[nt,s(a,{to:"/products?category=有線耳罩式耳機&page=1",type:"button",class:"btn btn-title text-white w-100",style:{padding:"12px 20px"}},{default:c(()=>[e(" 進入商店 ")]),_:1})])])])]),t("div",lt,[t("div",rt,[_t,t("div",pt,[t("div",ht,[mt,s(a,{to:"/products?category=無線耳罩式耳機&page=1",type:"button",class:"btn btn-title text-white w-100",style:{padding:"12px 20px"}},{default:c(()=>[e(" 進入商店 ")]),_:1})])])])]),t("div",ut,[t("div",xt,[vt,t("div",bt,[t("div",gt,[ft,s(a,{to:"/products?category=有線耳塞式耳機&page=1",type:"button",class:"btn btn-title text-white w-100",style:{padding:"12px 20px"}},{default:c(()=>[e(" 進入商店 ")]),_:1})])])])]),t("div",yt,[t("div",wt,[Et,t("div",Pt,[t("div",Vt,[At,s(a,{to:"/products?category=無線耳塞式耳機&page=1",type:"button",class:"btn btn-title text-white w-100",style:{padding:"12px 20px"}},{default:c(()=>[e(" 進入商店 ")]),_:1})])])])])])])]),t("section",Lt,[t("div",St,[Rt,t("div",jt,[(l(),r(p,null,h(3,i=>t("div",{key:i,class:"uncover_slice"})),64))])])]),t("section",null,[t("div",It,[t("div",Tt,[t("div",kt,[t("div",Bt,[Ut,Ft,s(v,{ref:"form",onSubmit:m.onSubscribe},{default:c(({errors:i})=>[t("div",Mt,[t("div",Dt,[s(u,{id:"email",name:"email",type:"email",class:w(["form-control email-color",{"is-invalid":i.email}]),rules:"email|required",placeholder:"請輸入 Email"},null,8,["class"]),s(x,{name:"email",class:"invalid-feedback scribe-invaild"})]),Gt])]),_:1},8,["onSubmit"])])])])])])])}const $t=b(I,[["render",Ht]]);export{$t as default};
