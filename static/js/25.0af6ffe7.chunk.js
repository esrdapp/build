(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[25],{182:function(e,t,a){"use strict";var n=a(19),s=a(20),r=a(2),i=a.n(r),o=a(5),c=a.n(o),l=a(43),d=a.n(l),f=a(34),u=c.a.oneOfType([c.a.number,c.a.string]),b=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:u,order:u,offset:u})]),p={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:f.o,className:c.a.string,cssModule:c.a.object,xs:b,sm:b,md:b,lg:b,xl:b,widths:c.a.array},m={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},j=function(e){var t=e.className,a=e.cssModule,r=e.hidden,o=e.widths,c=e.tag,l=e.check,u=e.size,b=e.for,p=Object(s.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),m=[];o.forEach((function(t,n){var s=e[t];if(delete p[t],s||""===s){var r,i=!n;if(Object(f.i)(s)){var o,c=i?"-":"-"+t+"-";r=h(i,t,s.size),m.push(Object(f.k)(d()(((o={})[r]=s.size||""===s.size,o["order"+c+s.order]=s.order||0===s.order,o["offset"+c+s.offset]=s.offset||0===s.offset,o))),a)}else r=h(i,t,s),m.push(r)}}));var j=Object(f.k)(d()(t,!!r&&"sr-only",!!l&&"form-check-label",!!u&&"col-form-label-"+u,m,!!m.length&&"col-form-label"),a);return i.a.createElement(c,Object(n.a)({htmlFor:b},p,{className:j}))};j.propTypes=p,j.defaultProps=m,t.a=j},183:function(e,t,a){"use strict";var n=a(19),s=a(20),r=a(45),i=a(44),o=a(2),c=a.n(o),l=a(5),d=a.n(l),f=a(43),u=a.n(f),b=a(34),p={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:b.o,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},m=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.focus=a.focus.bind(Object(r.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.type,i=e.bsSize,o=e.valid,l=e.invalid,d=e.tag,f=e.addon,p=e.plaintext,m=e.innerRef,h=Object(s.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),j=["radio","checkbox"].indexOf(r)>-1,g=new RegExp("\\D","g"),O=d||("select"===r||"textarea"===r?r:"input"),v="form-control";p?(v+="-plaintext",O=d||"input"):"file"===r?v+="-file":"range"===r?v+="-range":j&&(v=f?null:"form-check-input"),h.size&&g.test(h.size)&&(Object(b.r)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=h.size,delete h.size);var x=Object(b.k)(u()(t,l&&"is-invalid",o&&"is-valid",!!i&&"form-control-"+i,v),a);return("input"===O||d&&"function"===typeof d)&&(h.type=r),h.children&&!p&&"select"!==r&&"string"===typeof O&&"select"!==O&&(Object(b.r)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),c.a.createElement(O,Object(n.a)({},h,{ref:m,className:x,"aria-invalid":l}))},t}(c.a.Component);m.propTypes=p,m.defaultProps={type:"text"},t.a=m},279:function(e,t,a){"use strict";var n=a(19),s=a(20),r=a(45),i=a(44),o=a(2),c=a.n(o),l=a(5),d=a.n(l),f=a(43),u=a.n(f),b=a(34),p={children:d.a.node,inline:d.a.bool,tag:b.o,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},m=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.submit=a.submit.bind(Object(r.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.inline,i=e.tag,o=e.innerRef,l=Object(s.a)(e,["className","cssModule","inline","tag","innerRef"]),d=Object(b.k)(u()(t,!!r&&"form-inline"),a);return c.a.createElement(i,Object(n.a)({},l,{ref:o,className:d}))},t}(o.Component);m.propTypes=p,m.defaultProps={tag:"form"},t.a=m},784:function(e,t,a){},845:function(e,t,a){"use strict";a.r(t);var n=a(10),s=a(2),r=a.n(s),i=a(102),o=a(5),c=a.n(o);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var f=Object(s.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,s=e.size,i=void 0===s?24:s,o=d(e,["color","size"]);return r.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),r.a.createElement("polyline",{points:"15 18 9 12 15 6"}))}));f.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},f.displayName="ChevronLeft";var u=f,b=a(823),p=a(824),m=a(279),h=a(801),j=a(182),g=a(183),O=a(87),v=a(99),x=a(48),y=(a(784),a(6));t.default=function(){var e=Object(s.useState)(""),t=Object(n.a)(e,2),a=t[0],r=t[1],o=Object(s.useState)(!1),c=Object(n.a)(o,2),l=c[0],d=c[1];return Object(y.jsx)("div",{className:"ForgotPassword",children:Object(y.jsxs)(b.a,{className:"justify-content-center",children:[Object(y.jsx)(v.a,{title:"Forgot Password",className:"m-t-40 w-100"}),Object(y.jsx)(p.a,{className:"d-flex align-items-center auth-bg px-2",lg:"5",sm:"12",children:Object(y.jsxs)(p.a,{className:"px-xl-2 mx-auto",sm:"8",md:"6",lg:"12",children:[Object(y.jsxs)(m.a,{className:"auth-login-form mt-2",onSubmit:function(e){e.preventDefault(),d(!0),x.a.auth().sendPasswordResetEmail(a).then((function(){d(!1),alert("An email has been sent to you!")})).catch((function(e){d(!1),alert(e.message)}))},children:[Object(y.jsxs)(h.a,{children:[Object(y.jsx)(j.a,{className:"form-label",for:"login-email",children:"Email"}),Object(y.jsx)(g.a,{type:"email",id:"login-email",placeholder:"john@example.com",name:"email",onChange:function(e){return r(e.target.value)},autoFocus:!0})]}),Object(y.jsxs)(O.a.Ripple,{type:"submit",color:"primary",block:!0,className:"mt-2 flex justify-content-center align-items-center",children:[l&&Object(y.jsx)("span",{className:"spinner-border spinner-border-sm mr-1",role:"status","aria-hidden":"true"}),"Submit"]})]}),Object(y.jsx)("p",{className:"text-center mt-2",children:Object(y.jsxs)(i.b,{to:"/signin",children:[Object(y.jsx)(u,{className:"mr-25",size:14}),Object(y.jsx)("span",{className:"align-middle",children:"Back to Login"})]})})]})})]})})}},99:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(6);function s(e){var t=e.title,a=e.className,s=a?"basr-heading  has-border ".concat(a):"basr-heading  has-border";return Object(n.jsx)("div",{className:s,children:Object(n.jsxs)("div",{className:"basr-heading-inner",children:[Object(n.jsx)("div",{className:"h-b4-1",children:Object(n.jsx)("span",{className:"diagonal"})}),Object(n.jsx)("div",{className:"text",children:Object(n.jsx)("h2",{className:"h",children:Object(n.jsx)("strong",{children:t?t.toUpperCase():"SUBTITLE"})})}),Object(n.jsx)("div",{className:"h-after-border",children:Object(n.jsx)("span",{className:"diagonal"})})]})})}}}]);
//# sourceMappingURL=25.0af6ffe7.chunk.js.map