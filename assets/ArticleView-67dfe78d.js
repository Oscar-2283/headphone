import{_ as c,m as n,r,o as l,b as d,d as t,t as _,f as h,g as p,L as u,h as m,u as g,x as v}from"./index-0203d5f7.js";const{VITE_URL:L,VITE_PATH:x}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"test8283",BASE_URL:"/headphone/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},f={data(){return{article:{}}},methods:{...n(u,["hideLoading","showLoading"]),getArticle(){this.showLoading(),this.$http.get(`${L}/api/${x}/article/${this.$route.params.id}`).then(e=>{const{article:s}=e.data;this.article=s,this.article.content=s.content.replace(/&nbsp;/g,"<br>"),this.hideLoading()}).catch(e=>alert(e.response.data.message))}},mounted(){this.getArticle()}},i=e=>(g("data-v-75de181e"),e=e(),v(),e),V={class:"ovf-hidden pb-10"},T=i(()=>t("div",{class:"articleBanner"},null,-1)),w={class:"container"},y={class:"py-8 artice"},A={style:{"max-width":"1000px"},class:"mx-auto"},E={class:"mb-4"},I=i(()=>t("hr",null,null,-1)),S=["innerHTML"],b=["src"];function R(e,s,$,B,o,k){const a=r("RouterLink");return l(),d("div",V,[T,t("div",w,[t("div",y,[t("div",A,[t("h1",E,_(o.article.title),1),I,t("div",{class:"my-5",innerHTML:o.article.content,style:{"line-height":"1.5"}},null,8,S),t("div",null,[t("img",{src:o.article.imageUrl,alt:""},null,8,b)]),h(a,{to:"/articles",class:"btn btn-primary text-white mt-5"},{default:p(()=>[m("回上一頁")]),_:1})])])])])}const H=c(f,[["render",R],["__scopeId","data-v-75de181e"]]);export{H as default};