(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{31:function(e,t,n){"use strict";var r="80c40df4ca7e037eb588a248bc1cafa9",c="https://api.themoviedb.org/3";var o={fetchTrendingMovies:function(){return fetch("".concat(c,"/trending/movie/day?api_key=").concat(r)).then((function(e){return e.json()}))},fetchMovie:function(e){return fetch("".concat(c,"/search/movie?query=").concat(e,"&language=en-US&api_key=").concat(r)).then((function(e){return e.json()}))},fetchMovieDetail:function(e){return fetch("".concat(c,"/movie/").concat(e,"?language=en-US&api_key=").concat(r)).then((function(e){return e.json()}))},fetchMovieCast:function(e){return fetch("".concat(c,"/movie/").concat(e,"/credits?language=en-US&api_key=").concat(r)).then((function(e){return e.json()}))},fetchMovieReviews:function(e){return fetch("".concat(c,"/movie/").concat(e,"/reviews?language=en-US&api_key=").concat(r)).then((function(e){return e.json()}))}};t.a=o},32:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,c=!1,o=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(u){c=!0,o=u}finally{try{r||null==i.return||i.return()}finally{if(c)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return c}))},38:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.r(t),n.d(t,"default",(function(){return h}));var a=n(32),i=n(0),u=n(2),s=n(8),l=n(31),f=n(1);function h(){var e=Object(u.f)(),t=Object(u.g)(),n=Object(i.useState)(""),r=Object(a.a)(n,2),c=r[0],h=r[1],b=Object(i.useState)([]),p=Object(a.a)(b,2),j=p[0],v=p[1];console.log(e),console.log(t);var g=new URLSearchParams(t.search).get("query");console.log(g),console.log(t.search),Object(i.useEffect)((function(){g&&l.a.fetchMovie(g).then((function(e){return v(e.results)})).catch((function(e){return console.log(e)}))}),[g]);return console.log(c),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("form",{onSubmit:function(n){n.preventDefault(),n.target[0].value&&(h(n.target[0].value),e.push(o(o({},t),{},{search:"query=".concat(n.target[0].value)})),l.a.fetchMovie(n.target[0].value).then((function(e){return v(e.results)})).catch((function(e){return console.log(e)})).finally(n.target[0].value=""))},children:[Object(f.jsx)("input",{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie"}),Object(f.jsx)("button",{type:"submit",children:Object(f.jsx)("span",{children:"Search"})})]}),Object(f.jsx)("ul",{children:j&&j.map((function(e){return Object(f.jsx)("li",{children:Object(f.jsxs)(s.b,{to:{pathname:"/movies/".concat(e.id),state:{from:{location:t,label:"GO MOVIES PAGE"}}},children:[e.title," ",e.release_date?"(".concat(e.release_date.substring(0,4),")"):e.release_date]})},e.id)}))})]})}}}]);
//# sourceMappingURL=movies_page.2411de87.chunk.js.map