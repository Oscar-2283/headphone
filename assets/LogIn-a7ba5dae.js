import{_ as l,o as c,b as u,d as s,w as i,q as d,j as m}from"./index-6ad7a0cc.js";const{VITE_URL:p}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"test8283",BASE_URL:"/headphone/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},h={data(){return{user:{username:"",password:""}}},methods:{login(){this.$http.post(`${p}/admin/signin`,this.user).then(t=>{const{token:e,expired:n}=t.data;document.cookie=`myToken=${e}; expires=${new Date(n)};`,this.$router.push("/admin/products")}).catch(t=>this.$swal(t.response.data.message))}}},_={class:"container"},f={class:"row justify-content-center align-items-center vh-100"},w={class:"col-8"},g=s("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1),v={id:"form",class:"form-signin"},b={class:"form-floating mb-3"},x=s("label",{for:"username"},"Email address",-1),E={class:"form-floating"},V=s("label",{for:"password"},"Password",-1);function k(t,e,n,y,r,a){return c(),u("div",_,[s("div",f,[s("div",w,[g,s("form",v,[s("div",b,[i(s("input",{type:"email",class:"form-control",id:"username",placeholder:"name@example.com",required:"",autofocus:"","onUpdate:modelValue":e[0]||(e[0]=o=>r.user.username=o)},null,512),[[d,r.user.username]]),x]),s("div",E,[i(s("input",{type:"password",class:"form-control",id:"password",placeholder:"Password",required:"","onUpdate:modelValue":e[1]||(e[1]=o=>r.user.password=o)},null,512),[[d,r.user.password]]),V]),s("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit",onClick:e[2]||(e[2]=m((...o)=>a.login&&a.login(...o),["prevent"]))}," 登入 ")])])])])}const D=l(h,[["render",k]]);export{D as default};
