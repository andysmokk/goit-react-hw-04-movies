(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[7],{40:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var s=n(31),c=n(0),i=n(41),o=n.n(i),a=n(32),r=n(1);function u(e){var t=e.movieId,n=Object(c.useState)([]),i=Object(s.a)(n,2),u=i[0],l=i[1];return Object(c.useEffect)((function(){a.a.fetchMovieReviews(t).then((function(e){return l(e.results)}))}),[t]),console.log(u.length),console.log(t),0!==u.length?Object(r.jsx)("ul",{className:o.a.list,children:u&&u.map((function(e){return Object(r.jsxs)("li",{children:[Object(r.jsx)("p",{className:o.a.author,children:e.author}),Object(r.jsx)("p",{className:o.a.content,children:e.content}),Object(r.jsx)("hr",{})]},e.id)}))}):Object(r.jsx)("p",{className:o.a.text,children:"We don't have any reviews for this movie"})}},41:function(e,t,n){e.exports={list:"Reviews_list__28Gzj",author:"Reviews_author__3P_Qu",content:"Reviews_content__2uQdO",text:"Reviews_text__3eY1G"}}}]);
//# sourceMappingURL=reviews_page.5a906cb9.chunk.js.map