import{r as l,o as i,c as p,a as s,b as a,w as o,d as n,g as m,i as f,h as k,F as g}from"./index-61c48db7.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";const x={methods:{logOut(){this.$http.post("https://vue3-course-api.hexschool.io/v2/logout").then(e=>{e.data.success&&this.$router.push("/")}).catch(e=>this.$swal(e.response.data.message))}}},$={class:"navbar navbar-expand-lg navbar-dark bg-dark vh-100 position-fixed top-0 start-0",style:{width:"250px"}},b={class:"container-fluid flex-column"},w=s("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[s("span",{class:"navbar-toggler-icon"})],-1),B={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},N={class:"navbar-nav d-block"};function y(e,r,c,h,d,u){const t=l("router-link");return i(),p("nav",$,[s("div",b,[a(t,{to:"/",class:"navbar-brand w-100 text-center m-0"},{default:o(()=>[n("首頁")]),_:1}),w,s("div",B,[s("div",N,[a(t,{to:"/admin/products",class:"nav-link w-100 text-center"},{default:o(()=>[n("產品")]),_:1}),a(t,{to:"/admin/orders",class:"nav-link w-100 text-center"},{default:o(()=>[n("訂單")]),_:1}),a(t,{to:"/admin/coupons",class:"nav-link w-100 text-center"},{default:o(()=>[n("優惠券")]),_:1}),a(t,{to:"/admin/article",class:"nav-link w-100 text-center"},{default:o(()=>[n("貼文")]),_:1}),s("a",{href:"#",onClick:r[0]||(r[0]=m(()=>u.logOut(),["prevent"])),class:"nav-link w-100 text-center"},"登出"),a(t,{to:"/articles",class:"nav-link w-100 text-center"},{default:o(()=>[n("貼文測試")]),_:1})])])])])}const V=_(x,[["render",y]]);const{VITE_URL:E}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"test8283",BASE_URL:"/headphone/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},T={data(){return{status:!1}},components:{BackNav:V},mounted(){const e=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=`${e}`;const r=`${E}/api/user/check`;this.$http.post(r).then(()=>{this.status=!0}).catch(c=>{this.$router.push("/login"),this.$swal(c.response.data.message)})}},A={style:{"padding-left":"250px"}};function L(e,r,c,h,d,u){const t=l("BackNav"),v=l("router-view");return i(),p(g,null,[a(t),s("div",A,[d.status?(i(),f(v,{key:0})):k("",!0)])],64)}const C=_(T,[["render",L]]);export{C as default};
