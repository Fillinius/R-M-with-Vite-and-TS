import{v as p,l as s,L as x,r as n}from"./index.f9820164.js";import{u as N}from"./useSearchData.4685f333.js";const f=({data:t,lastNodeRef:o})=>{const{pathname:a}=p();return s.exports.jsx("div",{className:"card",children:s.exports.jsx("ul",{className:"card-list",children:t.map((e,r)=>t.length===r+1?s.exports.jsx("li",{ref:o,className:"card-list--location",children:s.exports.jsxs(x,{to:a+"/"+e.id,className:"card-link",children:[s.exports.jsx("h2",{className:"card-title",children:e.name}),s.exports.jsxs("p",{className:"card-text",children:["Air_data - ",e.air_date]}),s.exports.jsxs("p",{className:"card-text",children:["Episode - ",e.episode]})]})},e.id):s.exports.jsx("li",{className:"card-list--location",children:s.exports.jsxs(x,{to:a+"/"+e.id,className:"card-link",children:[s.exports.jsx("h2",{className:"card-title",children:e.name}),s.exports.jsxs("p",{className:"card-text",children:["Air_data - ",e.air_date]}),s.exports.jsxs("p",{className:"card-text",children:["Episode - ",e.episode]})]})},e.id))})})},E=()=>{const{pathname:t}=p(),o=t,[a,e]=n.exports.useState(1),{data:r,isLoading:u,error:i,hasMore:l}=N(a,o),c=n.exports.useRef(null),h=n.exports.useCallback(d=>{u||(c.current&&c.current.disconnect(),c.current=new IntersectionObserver(j=>{j[0].isIntersecting&&l&&(e(m=>m+1),console.log("visible"))}),d&&c.current.observe(d))},[u,l]);return s.exports.jsxs(s.exports.Fragment,{children:[i&&s.exports.jsx("p",{children:" \u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445"}),u&&s.exports.jsx("h1",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0434\u0430\u043D\u043D\u044B\u0445"}),r&&!u&&!i&&(r.length===0?"\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0443\u0441\u0442":s.exports.jsx(f,{data:r,lastNodeRef:h}))]})};export{E as default};
