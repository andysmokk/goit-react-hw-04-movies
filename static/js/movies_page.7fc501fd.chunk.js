(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[5],{40:function(e,t,r){"use strict";function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.r(t),r.d(t,"default",(function(){return f}));var a=r(31),s=r(0),u=r(2),i=r(8),l=r(32),b=r(1);function f(){var e=Object(u.f)(),t=Object(u.g)(),r=Object(s.useState)(""),c=Object(a.a)(r,2),n=c[0],f=c[1],j=Object(s.useState)([]),O=Object(a.a)(j,2),h=O[0],p=O[1];console.log(e),console.log(t);var g=new URLSearchParams(t.search).get("query");console.log(g),console.log(t.search),Object(s.useEffect)((function(){g&&l.a.fetchMovie(g).then((function(e){return p(e.results)})).catch((function(e){return console.log(e)}))}),[g]);return console.log(n),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("form",{onSubmit:function(r){r.preventDefault(),r.target[0].value&&(f(r.target[0].value),e.push(o(o({},t),{},{search:"query=".concat(r.target[0].value)})),l.a.fetchMovie(r.target[0].value).then((function(e){return p(e.results)})).catch((function(e){return console.log(e)})).finally(r.target[0].value=""))},children:[Object(b.jsx)("input",{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie"}),Object(b.jsx)("button",{type:"submit",children:Object(b.jsx)("span",{children:"Search"})})]}),Object(b.jsx)("ul",{children:h&&h.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsxs)(i.b,{to:{pathname:"/movies/".concat(e.id),state:{from:{location:t,label:"GO MOVIES PAGE"}}},children:[e.title," ",e.release_date?"(".concat(e.release_date.substring(0,4),")"):e.release_date]})},e.id)}))})]})}}}]);
//# sourceMappingURL=movies_page.7fc501fd.chunk.js.map