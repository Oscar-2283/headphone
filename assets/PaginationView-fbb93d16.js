import{o as s,c as n,b as a,n as l,h as o,F as _,d as g,t as d}from"./index-6af05389.js";import{_ as p}from"./_plugin-vue_export-helper-c27b6911.js";const u={props:["pages"],methods:{updatePage(c){this.$emit("updatePage",c)}}},h={"aria-label":"Page navigation "},k={class:"pagination justify-content-center"},m=a("span",{"aria-hidden":"true"},"上一頁",-1),f=[m],v={key:0,class:"page-link"},P=["onClick"],b=a("span",{"aria-hidden":"true"},"下一頁",-1),x=[b];function y(c,i,e,C,B,r){return s(),n("nav",h,[a("ul",k,[a("li",{class:l(["page-item",{disabled:!e.pages.has_pre}])},[a("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:i[0]||(i[0]=o(()=>r.updatePage(e.pages.current_page-1),["prevent"]))},f)],2),(s(!0),n(_,null,g(e.pages.total_pages,t=>(s(),n("li",{class:l(["page-item",{active:e.pages.current_page===t}]),key:t},[t===e.pages.current_page?(s(),n("span",v,d(t),1)):(s(),n("a",{key:1,class:"page-link",href:"#",onClick:o(()=>r.updatePage(t),["prevent"])},d(t),9,P))],2))),128)),a("li",{class:l(["page-item",{disabled:!e.pages.has_next}])},[a("a",{class:"page-link",href:"#","aria-label":"Next",onClick:i[1]||(i[1]=o(()=>r.updatePage(e.pages.current_page+1),["prevent"]))},x)],2)])])}const j=p(u,[["render",y]]);export{j as p};
