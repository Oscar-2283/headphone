import{_ as V,m as v,a as L,r as _,o as n,b as l,d as t,p as I,w as g,q as b,f as m,g as y,n as P,F as x,e as w,v as q,t as u,s as U,k as E,L as R,h as k,j as N,u as B,x as D}from"./index-a08efcfc.js";import{c as C}from"./cart-e8949d7d.js";import{p as j}from"./PaginationView-8ed39009.js";import{T as A}from"./toast-2236d0eb.js";const M="/headphone/assets/products-banner-e1295836.jpg";const{VITE_URL:p,VITE_PATH:h}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"test8283",BASE_URL:"/headphone/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},z={inject:["currency"],data(){return{bannerImg:M,products:[],filteredProducts:[],selectedCategory:this.$route.query.category,categories:[],selectedSort:"價格高到低",minPrice:null,maxPrice:null,pagination:{}}},methods:{...v(R,["showLoading","hideLoading"]),getProducts(){this.$http.get(`${p}/api/${h}/products/all`).then(s=>{this.products=s.data.products,this.getCategories()}).catch(s=>alert(s.response.data.message))},filterProducts(s=1){let e=`${p}/api/${h}/products?page=${s}`;const i=this.$route.query.category;i&&i!=="全部"&&(e=`${p}/api/${h}/products?page=${s}&category=${i}`),this.$http.get(e).then(a=>{this.filteredProducts=a.data.products,this.pagination=a.data.pagination,this.$router.push({path:"products",query:{category:i,page:s}}),this.hideLoading()}).catch(a=>alert(a.response.data.message))},getCategories(){const s=[...new Set(this.products.map(e=>e.category))];this.categories=s},addToCart(s,e=1){const i={product_id:s,qty:e};this.$http.post(`${p}/api/${h}/cart`,{data:i}).then(a=>{this.getCart(),A.fire({icon:"success",title:a.data.message,width:250})}).catch(a=>alert(a.response.data.message))},sortProducts(){let s=this.$route.query.category==="全部"?this.products:this.products.filter(e=>e.category===this.$route.query.category);this.minPrice!==null&&(s=s.filter(e=>e.price>=this.minPrice)),this.maxPrice!==null&&(s=s.filter(e=>e.price<=this.maxPrice)),this.selectedSort==="價格高到低"?this.filteredProducts=s.sort((e,i)=>i.price-e.price):this.selectedSort==="價格低到高"?this.filteredProducts=s.sort((e,i)=>e.price-i.price):this.filteredProducts=s},...v(C,["getCart"])},components:{pagination:j},mounted(){this.getProducts(),this.filterProducts()},computed:{...L(C,["carts"])},created(){this.showLoading()},watch:{$route:{handler(s){this.showLoading(),s.name==="products"&&this.filterProducts(this.$route.query.page),this.selectedCategory=s.query.category},deep:!0}}},d=s=>(B("data-v-90433510"),s=s(),D(),s),F={class:"container py-8"},H={class:"row gx-4 gy-3"},O={class:"col-lg-3 col-12"},$={class:"p-2 border border-2 rounded-3 position-sticky product-menu",style:{top:"12%"}},G={class:"mb-4 d-md-block d-none"},J=d(()=>t("div",{class:"product-title"},[t("h4",null,"價格")],-1)),K={class:"d-flex gap-3"},Q=d(()=>t("span",null,"-",-1)),W=d(()=>t("div",{class:"product-title"},[t("h4",null,"商品類型")],-1)),X={class:"px-3 w-md-auto w-100"},Y={class:"mb-1"},Z={class:"col-lg-9 col-12"},tt={class:"row gy-2 align-items-center pt-2 pb-3 px-md-0 px-3"},et={class:"col-md-4 col-12"},st=d(()=>t("option",{value:"照順序排列"},"照順序排列",-1)),ot=d(()=>t("option",{value:"價格低到高"},"價格低到高",-1)),rt=d(()=>t("option",{value:"價格高到低"},"價格高到低",-1)),it=[st,ot,rt],ct={class:"col-md-8 col-12"},at=d(()=>t("hr",null,null,-1)),nt={key:0},dt={class:"row gy-4 py-2"},lt={style:{position:"relative",background:"#f1f1f1"}},ut=["src"],pt=["onClick"],ht={class:"card-body d-flex flex-column"},_t={class:"mb-2 text-title"},gt={class:"text-text mb-2 fs-6"},mt={class:"d-flex align-items-center gap-3 mt-auto mb-2"},yt={class:"text-title text-muted fs-6"},ft={class:"text-title fs-6"},vt={key:1},bt=d(()=>t("div",{class:"text-center mt-4"},[t("h3",null,"找不到產品")],-1)),Pt=[bt];function xt(s,e,i,a,r,c){const f=_("router-link"),S=_("RouterLink"),T=_("pagination");return n(),l("main",null,[t("div",{class:"banner-img d-flex justify-content-center align-items-center",style:I([{height:"500px"},{backgroundImage:`url(${r.bannerImg})`}])},null,4),t("div",F,[t("div",H,[t("div",O,[t("div",$,[t("div",G,[J,t("div",K,[t("div",null,[g(t("input",{class:"w-100 border-bottom border-dark bg-transparent p-2",type:"number","onUpdate:modelValue":e[0]||(e[0]=o=>r.minPrice=o),onChange:e[1]||(e[1]=(...o)=>c.sortProducts&&c.sortProducts(...o)),placeholder:"最低"},null,544),[[b,r.minPrice]])]),Q,t("div",null,[g(t("input",{class:"w-100 border-bottom border-dark bg-transparent p-2",type:"number","onUpdate:modelValue":e[2]||(e[2]=o=>r.maxPrice=o),onChange:e[3]||(e[3]=(...o)=>c.sortProducts&&c.sortProducts(...o)),placeholder:"最高"},null,544),[[b,r.maxPrice]])])])]),t("div",null,[W,t("ul",X,[t("li",Y,[m(f,{to:{query:{category:"全部",page:1}},class:P({selected:r.selectedCategory==="全部"})},{default:y(()=>[k(" 全部 ")]),_:1},8,["class"])]),(n(!0),l(x,null,w(r.categories,o=>(n(),l("li",{class:"mb-1",key:o},[m(f,{to:{query:{category:o,page:1}},class:P({selected:r.selectedCategory===o})},{default:y(()=>[k(u(o),1)]),_:2},1032,["to","class"])]))),128))])])])]),t("div",Z,[t("div",tt,[t("div",et,[g(t("select",{class:"w-100 p-2 border border-dark rounded-3","onUpdate:modelValue":e[4]||(e[4]=o=>r.selectedSort=o),onChange:e[5]||(e[5]=(...o)=>c.sortProducts&&c.sortProducts(...o))},it,544),[[q,r.selectedSort]])]),t("div",ct,[t("h4",null,u(r.selectedCategory==="全部"?"":r.selectedCategory),1)])]),at,r.filteredProducts[r.filteredProducts.length-1]?(n(),l("div",nt,[t("div",dt,[(n(!0),l(x,null,w(r.filteredProducts,o=>(n(),l("div",{class:"col-lg-4 col-md-6 col-12",key:o.id},[m(S,{to:`/product/${o.id}`,class:"card overflow-hidden"},{default:y(()=>[t("div",lt,[t("img",{src:o.imageUrl,class:"card-img-top",alt:""},null,8,ut),t("button",{type:"button",onClick:N(()=>c.addToCart(o.id),["prevent"]),class:"btn btn-primary text-white position-absolute bottom-0 end-0 card-button"}," 加入購物車 ",8,pt)]),t("div",ht,[t("h4",_t,u(o.title),1),t("h4",gt,u(o.description1),1),t("div",mt,[t("del",yt,"NT$ "+u(c.currency(o.origin_price)),1),t("p",ft," NT$ "+u(c.currency(o.price)),1)])])]),_:2},1032,["to"])]))),128))]),r.pagination.total_pages!==1?(n(),U(T,{key:0,pages:r.pagination,onUpdatePage:c.filterProducts},null,8,["pages","onUpdatePage"])):E("",!0)])):(n(),l("div",vt,Pt))])])])])}const Tt=V(z,[["render",xt],["__scopeId","data-v-90433510"]]);export{Tt as default};
