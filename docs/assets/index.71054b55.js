import{e as t}from"./index.0d551f0d.js";import{f as a,j as e,o as r,c as n,a as s,t as d}from"./vendor.08da2969.js";const o={setup(){let r=a([]),n=e().path;return(a=>t({url:"/template/list.json",method:"get",data:a}))().then((t=>{r.value=t.data})),{data:r,route:n}}};o.render=function(t,a,e,o,l,u){return r(),n("div",null,[s("h1",null,d(o.route),1),s("span",null,d(o.data),1)])};export default o;