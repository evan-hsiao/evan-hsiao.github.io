import{r as n,o as r,c as _,b as e,i as s,v as l,j as m,k as h,a as v,h as b,d as u}from"./app.ee1d1b16.js";const f={class:"box"},x=e("label",{for:"name"},"名字：",-1),y={class:"box"},T=e("label",{for:"email"},"電子郵件：",-1),V={class:"box"},g=e("label",{for:"option"},"選項：",-1),k=e("option",{value:""},"請選擇",-1),B=e("option",{value:"o1"},"選項1",-1),E=e("option",{value:"o2"},"選項2",-1),I=e("option",{value:"o3"},"選項3",-1),N=[k,B,E,I],S=v('<div class="box"><label for="">Radio</label><input type="radio" id="radio1" name="radioTest" value="data1"><input type="radio" id="radio2" name="radioTest" value="data2"><input type="radio" id="radio3" name="radioTest" value="data3"></div>',1),C=["onClick"],U={__name:"example_btn",setup(c){const d=n(""),i=n(""),a=n("");function p(){a.value=="o1"?(document.getElementById("radio1").checked=!0,document.getElementById("radio2").disabled=!0):a.value=="o2"&&(document.getElementById("radio1").disabled=!0,document.getElementById("radio2").checked=!0)}return(P,t)=>(r(),_("form",null,[e("div",f,[x,s(e("input",{type:"text",id:"name","onUpdate:modelValue":t[0]||(t[0]=o=>d.value=o)},null,512),[[l,d.value]])]),e("div",y,[T,s(e("input",{type:"email",id:"email","onUpdate:modelValue":t[1]||(t[1]=o=>i.value=o)},null,512),[[l,i.value]])]),e("div",V,[g,s(e("select",{id:"option","onUpdate:modelValue":t[2]||(t[2]=o=>a.value=o)},N,512),[[m,a.value]])]),S,e("button",{type:"submit",onClick:h(p,["prevent"])},"提交",8,C)]))}},A=e("h1",{id:"輸入元件測試",tabindex:"-1"},[u("輸入元件測試 "),e("a",{class:"header-anchor",href:"#輸入元件測試","aria-hidden":"true"},"#")],-1),D=e("h2",{id:"other",tabindex:"-1"},[u("other "),e("a",{class:"header-anchor",href:"#other","aria-hidden":"true"},"#")],-1),j=JSON.parse('{"title":"輸入元件測試","description":"","frontmatter":{},"headers":[{"level":2,"title":"other","slug":"other","link":"#other","children":[]}],"relativePath":"frontend_develop/vue/example_btn.md","lastUpdated":1687825922000}'),M={name:"frontend_develop/vue/example_btn.md"},w=Object.assign(M,{setup(c){return(d,i)=>(r(),_("div",null,[A,b(U),D]))}});export{j as __pageData,w as default};
