import{p as m,x as v,t as x,a as c,y as j,r as h,u as C,_ as f,l as r,n as y,o as M,z as B,k as _,A as T,v as I,B as A}from"./index.f9820164.js";import{u as W}from"./useFetch.97498c31.js";const F=t=>{let o;return t<1?o=5.11916*t**2:o=4.5*Math.log(t+1)+2,(o/100).toFixed(2)},P=F;function O(t){return m("MuiPaper",t)}v("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const D=["className","component","elevation","square","variant"],q=t=>{const{square:o,elevation:e,variant:a,classes:i}=t,s={root:["root",a,!o&&"rounded",a==="elevation"&&`elevation${e}`]};return M(s,O,i)},E=x("div",{name:"MuiPaper",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.root,o[e.variant],!e.square&&o.rounded,e.variant==="elevation"&&o[`elevation${e.elevation}`]]}})(({theme:t,ownerState:o})=>{var e;return c({backgroundColor:(t.vars||t).palette.background.paper,color:(t.vars||t).palette.text.primary,transition:t.transitions.create("box-shadow")},!o.square&&{borderRadius:t.shape.borderRadius},o.variant==="outlined"&&{border:`1px solid ${(t.vars||t).palette.divider}`},o.variant==="elevation"&&c({boxShadow:(t.vars||t).shadows[o.elevation]},!t.vars&&t.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${j("#fff",P(o.elevation))}, ${j("#fff",P(o.elevation))})`},t.vars&&{backgroundImage:(e=t.vars.overlays)==null?void 0:e[o.elevation]}))}),z=h.exports.forwardRef(function(o,e){const a=C({props:o,name:"MuiPaper"}),{className:i,component:s="div",elevation:l=1,square:n=!1,variant:p="elevation"}=a,u=f(a,D),g=c({},a,{component:s,elevation:l,square:n,variant:p}),d=q(g);return r.exports.jsx(E,c({as:s,ownerState:g,className:y(d.root,i),ref:e},u))}),L=z;function G(t){return m("MuiTypography",t)}v("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const V=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],H=t=>{const{align:o,gutterBottom:e,noWrap:a,paragraph:i,variant:s,classes:l}=t,n={root:["root",s,t.align!=="inherit"&&`align${B(o)}`,e&&"gutterBottom",a&&"noWrap",i&&"paragraph"]};return M(n,G,l)},J=x("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.root,e.variant&&o[e.variant],e.align!=="inherit"&&o[`align${B(e.align)}`],e.noWrap&&o.noWrap,e.gutterBottom&&o.gutterBottom,e.paragraph&&o.paragraph]}})(({theme:t,ownerState:o})=>c({margin:0},o.variant==="inherit"&&{font:"inherit"},o.variant!=="inherit"&&t.typography[o.variant],o.align!=="inherit"&&{textAlign:o.align},o.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},o.gutterBottom&&{marginBottom:"0.35em"},o.paragraph&&{marginBottom:16})),w={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},K={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Q=t=>K[t]||t,X=h.exports.forwardRef(function(o,e){const a=C({props:o,name:"MuiTypography"}),i=Q(a.color),s=_(c({},a,{color:i})),{align:l="inherit",className:n,component:p,gutterBottom:u=!1,noWrap:g=!1,paragraph:d=!1,variant:b="body1",variantMapping:R=w}=s,$=f(s,V),N=c({},s,{align:l,color:i,className:n,component:p,gutterBottom:u,noWrap:g,paragraph:d,variant:b,variantMapping:R}),k=p||(d?"p":R[b]||w[b])||"span",U=H(N);return r.exports.jsx(J,c({as:k,ref:e,ownerState:N,className:y(U.root,n)},$))}),S=X;function Y(t){return m("MuiCard",t)}v("MuiCard",["root"]);const Z=["className","raised"],tt=t=>{const{classes:o}=t;return M({root:["root"]},Y,o)},ot=x(L,{name:"MuiCard",slot:"Root",overridesResolver:(t,o)=>o.root})(()=>({overflow:"hidden"})),et=h.exports.forwardRef(function(o,e){const a=C({props:o,name:"MuiCard"}),{className:i,raised:s=!1}=a,l=f(a,Z),n=c({},a,{raised:s}),p=tt(n);return r.exports.jsx(ot,c({className:y(p.root,i),elevation:s?8:void 0,ref:e,ownerState:n},l))}),at=et;function rt(t){return m("MuiCardActions",t)}v("MuiCardActions",["root","spacing"]);const st=["disableSpacing","className"],nt=t=>{const{classes:o,disableSpacing:e}=t;return M({root:["root",!e&&"spacing"]},rt,o)},it=x("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.root,!e.disableSpacing&&o.spacing]}})(({ownerState:t})=>c({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),ct=h.exports.forwardRef(function(o,e){const a=C({props:o,name:"MuiCardActions"}),{disableSpacing:i=!1,className:s}=a,l=f(a,st),n=c({},a,{disableSpacing:i}),p=nt(n);return r.exports.jsx(it,c({className:y(p.root,s),ownerState:n,ref:e},l))}),lt=ct;function pt(t){return m("MuiCardContent",t)}v("MuiCardContent",["root"]);const dt=["className","component"],ut=t=>{const{classes:o}=t;return M({root:["root"]},pt,o)},gt=x("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(t,o)=>o.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),mt=h.exports.forwardRef(function(o,e){const a=C({props:o,name:"MuiCardContent"}),{className:i,component:s="div"}=a,l=f(a,dt),n=c({},a,{component:s}),p=ut(n);return r.exports.jsx(gt,c({as:s,className:y(p.root,i),ownerState:n,ref:e},l))}),vt=mt;function xt(t){return m("MuiCardMedia",t)}v("MuiCardMedia",["root","media","img"]);const ht=["children","className","component","image","src","style"],Ct=t=>{const{classes:o,isMediaComponent:e,isImageComponent:a}=t;return M({root:["root",e&&"media",a&&"img"]},xt,o)},ft=x("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:e}=t,{isMediaComponent:a,isImageComponent:i}=e;return[o.root,a&&o.media,i&&o.img]}})(({ownerState:t})=>c({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})),yt=["video","audio","picture","iframe","img"],Mt=["picture","img"],bt=h.exports.forwardRef(function(o,e){const a=C({props:o,name:"MuiCardMedia"}),{children:i,className:s,component:l="div",image:n,src:p,style:u}=a,g=f(a,ht),d=yt.indexOf(l)!==-1,b=!d&&n?c({backgroundImage:`url("${n}")`},u):u,R=c({},a,{component:l,isMediaComponent:d,isImageComponent:Mt.indexOf(l)!==-1}),$=Ct(R);return r.exports.jsx(ft,c({className:y($.root,s),as:l,role:!d&&n?"img":void 0,ref:e,style:b,ownerState:R,src:d?n||p:void 0},g,{children:i}))}),Rt=bt,jt=()=>{const t=T(),{pathname:o}=I(),{data:e}=W(o),a=()=>{t("/character",{replace:!0})};return r.exports.jsx(r.exports.Fragment,{children:typeof e>"u"?r.exports.jsxs("div",{children:[r.exports.jsx("p",{children:'"\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445"'}),r.exports.jsx(A,{variant:"outlined",onClick:a,children:"\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u0441\u043F\u0438\u0441\u043A\u0443"})]}):r.exports.jsx(r.exports.Fragment,{children:r.exports.jsxs(at,{sx:{maxWidth:345},children:[r.exports.jsx(Rt,{component:"img",alt:e.name+" logo",image:e.image}),r.exports.jsxs(vt,{children:[r.exports.jsx(S,{gutterBottom:!0,variant:"h5",component:"div",children:e.name}),r.exports.jsxs(S,{variant:"body2",color:"text.secondary",children:[r.exports.jsxs("p",{className:"card-text",children:["Gender - ",e.gender]}),r.exports.jsxs("p",{className:"card-text",children:["Species - ",e.species]}),r.exports.jsxs("p",{className:"card-text",children:["Status - ",e.status]})]}),r.exports.jsx(lt,{children:r.exports.jsx(A,{variant:"outlined",size:"small",onClick:a,children:"\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u0441\u043F\u0438\u0441\u043A\u0443"})})]})]})})})};export{jt as default};
