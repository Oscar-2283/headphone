import{p as a,q as o}from"./index-61c48db7.js";const{VITE_URL:e,VITE_PATH:s}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"test8283",BASE_URL:"/headphone/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},c=a("cart",{state:()=>({carts:[],total:0,final_total:0}),actions:{getCart(){o.get(`${e}/api/${s}/cart`).then(t=>{console.log(t.data),this.carts=t.data.data.carts,this.total=t.data.data.total,this.final_total=t.data.data.final_total}).catch(t=>console.error(t.data))}},getters:{}});export{c};
