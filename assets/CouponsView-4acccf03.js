import{p as L}from"./PaginationView-a07865c8.js";import{M as x,D as k}from"./DeleteModal-dcd15361.js";import{_ as w,o as d,b as p,d as e,w as i,q as c,M as v,t as b,r,f as h,F as C,e as D}from"./index-0203d5f7.js";import"./component-functions-fcac366d.js";const V={props:{coupon:{type:Object,default(){return{}}},isNew:{type:Boolean,default:!1}},data(){return{tempCoupon:{},due_date:"",today:""}},watch:{coupon(){this.tempCoupon=this.coupon;const o=new Date(this.tempCoupon.due_date*1e3).toISOString().split("T");[this.due_date]=o},due_date(){this.tempCoupon.due_date=Math.floor(new Date(this.due_date)/1e3)}},mounted(){this.modal=new x(this.$refs.modal),[this.today]=new Date().toISOString().split("T")}},U={class:"modal fade",id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},N={class:"modal-dialog",role:"document"},T={class:"modal-content"},P={class:"modal-header"},E={class:"modal-title",id:"exampleModalLabel"},I={key:0},S={key:1},B=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),O={class:"modal-body"},R={class:"mb-3"},A=e("label",{for:"title"},"標題",-1),j={class:"mb-3"},F=e("label",{for:"coupon_code"},"優惠碼",-1),H={class:"mb-3"},q=e("label",{for:"due_date"},"到期日",-1),z=["min"],G={class:"mb-3"},J=e("label",{for:"price"},"折扣百分比",-1),K={class:"mb-3"},Q={class:"form-check"},W=e("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),X={class:"modal-footer"},Y=e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Close ",-1);function Z(o,t,u,f,s,l){return d(),p("div",U,[e("div",N,[e("div",T,[e("div",P,[e("h5",E,[u.isNew?(d(),p("span",I,"新增優惠卷")):(d(),p("span",S,"編輯優惠卷"))]),B]),e("div",O,[e("div",R,[A,i(e("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":t[0]||(t[0]=n=>s.tempCoupon.title=n),placeholder:"請輸入標題"},null,512),[[c,s.tempCoupon.title]])]),e("div",j,[F,i(e("input",{type:"text",class:"form-control",id:"coupon_code","onUpdate:modelValue":t[1]||(t[1]=n=>s.tempCoupon.code=n),placeholder:"請輸入優惠碼"},null,512),[[c,s.tempCoupon.code]])]),e("div",H,[q,i(e("input",{type:"date",class:"form-control",min:s.today,id:"due_date","onUpdate:modelValue":t[2]||(t[2]=n=>s.due_date=n)},null,8,z),[[c,s.due_date]])]),e("div",G,[J,i(e("input",{type:"number",class:"form-control",id:"price",min:"0","onUpdate:modelValue":t[3]||(t[3]=n=>s.tempCoupon.percent=n),placeholder:"請輸入折扣百分比"},null,512),[[c,s.tempCoupon.percent,void 0,{number:!0}]])]),e("div",K,[e("div",Q,[i(e("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":t[4]||(t[4]=n=>s.tempCoupon.is_enabled=n),id:"is_enabled"},null,512),[[v,s.tempCoupon.is_enabled]]),W])])]),e("div",X,[Y,e("button",{type:"button",class:"btn btn-primary",onClick:t[5]||(t[5]=n=>o.$emit("updateCoupon",s.tempCoupon))},b(u.isNew?"新增優惠卷":"更新優惠券"),1)])])])],512)}const ee=w(V,[["render",Z]]),{VITE_URL:m,VITE_PATH:_}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"test8283",BASE_URL:"/headphone/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},te={inject:["date"],data(){return{coupons:[],tempCoupon:{},pagination:{},isLoading:!1,isNew:!1,currentPage:1}},methods:{getCoupons(o=1){this.currentPage=o,this.isLoading=!0,this.$http.get(`${m}/api/${_}/admin/coupons?page=${o}`).then(t=>{this.isLoading=!1;const{pagination:u,coupons:f}=t.data;this.pagination=u,this.coupons=f}).catch(t=>{this.isLoading=!1,this.$swal(t.response.data.message)})},openModal(o,t){o?(this.tempCoupon={due_date:new Date().getTime()/1e3},this.isNew=!0):(this.tempCoupon={...t},this.isNew=!1),this.$refs.couponModal.modal.show()},openDelModal(o){this.tempCoupon={...o},this.$refs.delModal.modal.show()},updateCoupon(o){this.isLoading=!0,this.isNew?this.$http.post(`${m}/api/${_}/admin/coupon`,{data:o}).then(t=>{this.isLoading=!1,this.$refs.couponModal.modal.hide(),this.getCoupons(this.currentPage),this.$swal(t.data.message)}).catch(t=>{this.isLoading=!1,this.$swal(t.response.data.message)}):this.$http.put(`${m}/api/${_}/admin/coupon/${o.id}`,{data:o}).then(t=>{this.isLoading=!1,this.$refs.couponModal.modal.hide(),this.getCoupons(this.currentPage),this.$swal(t.data.message)}).catch(t=>{this.isLoading=!1,this.$swal(t.response.data.message)})},deleteCoupon(){this.isLoading=!0,this.$http.delete(`${m}/api/${_}/admin/coupon/${this.tempCoupon.id}`).then(o=>{this.isLoading=!1,this.$refs.delModal.modal.hide(),this.getCoupons(this.currentPage),this.$swal(o.data.message)}).catch(o=>{this.isLoading=!1,this.$swal(o.response.data.message)})}},components:{pagination:L,CouponModal:ee,DeleteModal:k},mounted(){this.getCoupons()}},oe={class:"container"},se={class:"text-end mt-4"},ne={class:"table table-striped border mt-4"},ae=e("thead",{class:"bg-dark"},[e("tr",null,[e("th",{class:"text-white"},"是否啟用"),e("th",{class:"text-white"},"名稱"),e("th",{class:"text-white"},"折扣百分比"),e("th",{class:"text-white"},"到期日"),e("th",{class:"text-white"},"編輯")])],-1),le=["id","onUpdate:modelValue","onChange"],ie=["for"],de={class:"btn-group"},pe=["onClick"],ue=["onClick"];function ce(o,t,u,f,s,l){const n=r("VLoading"),y=r("DeleteModal"),M=r("CouponModal"),$=r("pagination");return d(),p(C,null,[h(n,{active:s.isLoading,"can-cancel":!1,color:"#007bff","is-full-page":!0},null,8,["active"]),h(y,{ref:"delModal",item:s.tempCoupon,onDelItem:l.deleteCoupon},null,8,["item","onDelItem"]),h(M,{ref:"couponModal",coupon:s.tempCoupon,isNew:s.isNew,onUpdateCoupon:l.updateCoupon},null,8,["coupon","isNew","onUpdateCoupon"]),e("div",oe,[e("div",se,[e("button",{class:"btn btn-primary",type:"button",onClick:t[0]||(t[0]=a=>l.openModal(!0))}," 建立新的產品 ")]),e("table",ne,[ae,e("tbody",null,[(d(!0),p(C,null,D(s.coupons,a=>(d(),p("tr",{key:a.id},[e("td",null,[i(e("input",{id:a.title,"onUpdate:modelValue":g=>a.is_enabled=g,"true-value":1,"false-value":0,class:"tgl tgl-light",type:"checkbox",onChange:()=>l.updateCoupon(a)},null,40,le),[[v,a.is_enabled]]),e("label",{for:a.title,class:"tgl-btn"},null,8,ie)]),e("td",null,b(a.title),1),e("td",null,b(a.percent)+" %",1),e("td",null,b(l.date(a.due_date)),1),e("td",null,[e("div",de,[e("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:()=>l.openModal(!1,a)}," 編輯 ",8,pe),e("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:g=>l.openDelModal(a)}," 刪除 ",8,ue)])])]))),128))])])]),h($,{pages:s.pagination,onUpdatePage:l.getCoupons},null,8,["pages","onUpdatePage"])],64)}const be=w(te,[["render",ce]]);export{be as default};