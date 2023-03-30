import{_ as c,r as i,o as d,b as a,d as e,t,n as _,f as u,g as p,I as h,h as m}from"./index-a8024802.js";const{VITE_URL:f,VITE_PATH:g}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"test8283",BASE_URL:"/headphone/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},x={inject:["currency","date"],data(){return{order:{user:"",address:"",email:"",name:"",tel:""}}},methods:{getOrder(){this.$http.get(`${f}/api/${g}/order/${this.$route.params.id}`).then(l=>{const{order:o}=l.data;this.order=o}).catch(l=>alert(l.response.data.message))}},mounted(){this.getOrder()}},b={class:"row g-5 mt-2 justify-content-center"},y=h('<div class="col-sm-8 col-12"><div class="d-flex justify-content-center mb-2"><span class="material-symbols-outlined text-success" style="font-size:64px;"> check_circle </span></div><p class="fz-6 text-success text-center mb-2">訂單成立 已完成付款</p><p class="fz-6 text-success text-center">感謝您的支持</p></div>',1),v={class:"col-sm-8 col-12"},V={class:"border border-dark-subtle p-5 bg-white"},E=e("h3",{class:"mb-4"},"訂單資訊",-1),k={class:"orderList"},T=e("p",null,"訂單編號",-1),L=e("p",null,"訂單日期",-1),I=e("p",null,"email",-1),O=e("p",null,"收件人姓名",-1),R=e("p",null,"收件人電話",-1),S=e("p",null,"收件地址",-1),j=e("p",{class:"align-middle"},"付款狀態",-1),w=e("p",{class:"align-middle"},"訂單金額",-1),z={class:"align-middle"},B=e("p",null,"備註",-1),C={class:"col"},D={style:{border:"none"},class:"justify-content-end"};function N(l,o,A,P,s,r){const n=i("routerLink");return d(),a("div",b,[y,e("div",v,[e("div",V,[E,e("ul",k,[e("li",null,[T,e("p",null,t(s.order.id),1)]),e("li",null,[L,e("p",null,t(r.date(s.order.paid_date)),1)]),e("li",null,[I,e("p",null,t(s.order.user.email),1)]),e("li",null,[O,e("p",null,t(s.order.user.name),1)]),e("li",null,[R,e("p",null,t(s.order.user.tel),1)]),e("li",null,[S,e("p",null,t(s.order.user.address),1)]),e("li",null,[j,e("p",null,[e("strong",{class:_({"text-success":s.order.is_paid,"text-danger":!s.order.is_paid})},t(s.order.is_paid?"已付款":"未付款"),3)])]),e("li",null,[w,e("h3",z,t(r.currency(s.order.total))+" 元",1)]),e("li",null,[B,e("p",C,t(s.order.message),1)]),e("li",D,[u(n,{to:"/products?category=全部&page=1",class:"btn btn-primary text-white"},{default:p(()=>[m("繼續選購商品")]),_:1})])])])])])}const H=c(x,[["render",N]]);export{H as default};