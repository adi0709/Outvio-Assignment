(this["webpackJsonpqa-test"]=this["webpackJsonpqa-test"]||[]).push([[0],{53:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),r=n(15),o=n.n(r),a=n(70),s=n(13),l=n(67),p=n(71),d=n(2);var u=function(e){var t=e.onOrder;return Object(d.jsx)(p.a,{variant:"contained","data-e2e-button":"order",color:"primary",onClick:t,children:"Order your \ud83c\udf55"})},j=n(14),b=n(27),O=n(68),f=n(69);var x=function(e){var t=e.onAdd,n=e.disabled;return Object(d.jsx)(p.a,{fullWidth:!0,onClick:t,variant:"contained",color:"secondary",disabled:n,children:"Add pizza"})},h=n(11),g=n(12),m=Object(l.a)((function(e){return{container:{width:"100%",margin:e.spacing(2,0),display:"grid",gridColumnGap:e.spacing(1),gridTemplateColumns:"repeat(auto-fit, minmax(100px, 1fr))"}}}));var v=function(e){var t=e.children,n=m();return Object(d.jsx)("div",{className:n.container,children:t})},y=Object(l.a)({paperRoot:{height:"80px",backgroundColor:"#F3F4F6",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:"pointer",userSelect:"none","& > *":{marginBottom:"4px","&:last-child":{marginBottom:0}}}});var C=function(e){var t=e.active,n=void 0!==t&&t,c=e.onClick,i=e.children,r=y();return Object(d.jsx)(O.a,{classes:{root:r.paperRoot},elevation:n?4:0,onClick:c,children:i})},k=Object(l.a)((function(e){return{paperRoot:{position:"relative",width:"100%",marginBottom:e.spacing(2),padding:e.spacing(1,2),display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"flex-start"},removeHolder:{position:"absolute",top:"6px",right:"8px",fontSize:"20px","&:hover":{cursor:"pointer",color:"#DC2626"}}}}));var z=function(e){var t=e.data,n=e.index,c=e.onRemove,i=e.onUpdate,r=e.disabled,o=k();return Object(d.jsxs)(O.a,{classes:{root:o.paperRoot},elevation:3,children:[!r&&Object(d.jsx)("div",{className:o.removeHolder,children:Object(d.jsx)(h.a,{icon:g.e,onClick:c})}),Object(d.jsxs)(f.a,{children:["Pizza #",n+1]}),Object(d.jsxs)(v,{children:[Object(d.jsxs)(C,{onClick:function(){r||i(n,{size:"small"})},active:"small"===t.size,children:[Object(d.jsx)(h.a,{icon:g.d,style:{fontSize:"14px"}}),Object(d.jsx)("span",{children:"small"})]}),Object(d.jsxs)(C,{onClick:function(){r||i(n,{size:"medium"})},active:"medium"===t.size,children:[Object(d.jsx)(h.a,{icon:g.d,onClick:c}),Object(d.jsx)("span",{children:"medium"})]}),Object(d.jsxs)(C,{onClick:function(){r||i(n,{size:"large"})},active:"large"===t.size,children:[Object(d.jsx)(h.a,{icon:g.d,style:{fontSize:"24px"}}),Object(d.jsx)("span",{children:"large"})]})]}),Object(d.jsxs)(v,{children:[Object(d.jsxs)(C,{onClick:function(){r||i(n,{topping:"cheese"})},active:t.toppings.includes("cheese"),children:[Object(d.jsx)(h.a,{icon:g.b,style:{fontSize:"24px"}}),Object(d.jsx)("span",{children:"cheese"})]}),Object(d.jsxs)(C,{onClick:function(){r||i(n,{topping:"bacon"})},active:t.toppings.includes("bacon"),children:[Object(d.jsx)(h.a,{icon:g.a,style:{fontSize:"24px"}}),Object(d.jsx)("span",{children:"bacon"})]}),Object(d.jsxs)(C,{onClick:function(){r||i(n,{topping:"egg"})},active:t.toppings.includes("egg"),children:[Object(d.jsx)(h.a,{icon:g.c,style:{fontSize:"24px"}}),Object(d.jsx)("span",{children:"egg"})]})]})]})},S=n(30),w=n.n(S),T=n(36),R=function(e){return"".concat("http://localhost:3001").concat(e)},E=function(){return new Headers({Accept:"application/json","Content-Type":"application/json"})};function I(){return(I=Object(T.a)(w.a.mark((function e(t){var n,c,i,r,o,a=arguments;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:"GET",c=a.length>2&&void 0!==a[2]?a[2]:null,e.prev=2,i=E(),r=R(t),e.next=7,fetch(r,{method:n,headers:i,body:"GET"!==n?JSON.stringify(c):null});case 7:if((o=e.sent).ok){e.next=10;break}throw new Error(o.statusText);case 10:return e.next=12,o.json();case 12:return e.abrupt("return",e.sent);case 15:throw e.prev=15,e.t0=e.catch(2),new Error("Oops, an error happened.");case 18:case"end":return e.stop()}}),e,null,[[2,15]])})))).apply(this,arguments)}var A=function(e){return I.apply(this,arguments)},B=Object(l.a)((function(e){return{paperRoot:{width:"100%",maxWidth:"600px",padding:e.spacing(2),display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start"}}}));var D=function(e){var t=e.onOrdered,n=B(),i=Object(c.useState)([]),r=Object(s.a)(i,2),o=r[0],a=r[1],l=Object(c.useState)(null),u=Object(s.a)(l,2),h=u[0],g=u[1],m=Object(c.useState)(!0),v=Object(s.a)(m,2),y=v[0],C=v[1],k=Object(c.useState)(null),S=Object(s.a)(k,2),w=S[0],T=S[1];Object(c.useEffect)((function(){A("/api/order","GET").then((function(e){g(e.orderId),C(!1)})).catch((function(e){T(e.message||e.toString()),C(!1)}))}),[]);var R=Object(c.useCallback)((function(e){return a((function(t){var n=Object(b.a)(t);return n.splice(e,1),n}))}),[]),E=Object(c.useCallback)((function(e,t){a((function(n){return n.map((function(n,c){return c===e?"undefined"!==typeof t.topping?n.toppings.includes(t.topping)?Object(j.a)(Object(j.a)({},n),{},{toppings:n.toppings.filter((function(e){return e!==t.topping}))}):Object(j.a)(Object(j.a)({},n),{},{toppings:[].concat(Object(b.a)(n.toppings),[t.topping])}):Object(j.a)(Object(j.a)({},n),t):n}))}))}),[]),I=Object(c.useCallback)((function(){var e;C(!0),(e={pizzas:o,orderId:h},A("/api/order","POST",e)).then((function(){t()})).catch((function(e){T(e.message||e.toString()),C(!1)}))}),[o,h,t]),D=0===o.length||o.some((function(e){return""===e.size||0===e.toppings.length}));return Object(d.jsxs)(O.a,{elevation:3,classes:{root:n.paperRoot},children:[Object(d.jsx)(f.a,{variant:"h5",component:"h1",gutterBottom:!0,children:"Assemble your pizza(s)"}),o.map((function(e,t){return Object(d.jsx)(z,{data:e,index:t,onRemove:R,onUpdate:E,disabled:y},t)})),Object(d.jsx)(x,{onAdd:function(){return a((function(e){return[].concat(Object(b.a)(e),[{size:"",toppings:[]}])}))},disabled:o.length>=3||y}),null!==w&&Object(d.jsx)("p",{style:{color:"#DC2626",marginTop:"24px"},children:w}),Object(d.jsx)(p.a,{fullWidth:!0,variant:"contained",color:"primary",disabled:D||y,onClick:I,style:{marginTop:"24px"},children:"submit order"})]})};var G=function(){return Object(d.jsx)(f.a,{children:"Thank you for your order!"})},N=Object(l.a)({container:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}});var F=function(){var e=N(),t=Object(c.useState)("intro"),n=Object(s.a)(t,2),i=n[0],r=n[1];return Object(d.jsxs)("div",{className:e.container,children:["intro"===i&&Object(d.jsx)(u,{onOrder:function(){return r("assembly")}}),"assembly"===i&&Object(d.jsx)(D,{onOrdered:function(){return r("confirm")}}),"confirm"===i&&Object(d.jsx)(G,{})]})};o.a.render(Object(d.jsxs)(i.a.StrictMode,{children:[Object(d.jsx)(a.a,{}),Object(d.jsx)(F,{})]}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.52272d3c.chunk.js.map