"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[373],{438:function(n,e,t){t.d(e,{$:function(){return r}});var r="2954afe7c35181c36bf30aa4bc9ce527"},373:function(n,e,t){t.r(e),t.d(e,{default:function(){return g}});var r,i=t(861),a=t(439),c=t(168),o=t(757),s=t.n(o),u=t(87),l=t(689),f=t(791),d=t(263),h=t(444),p="TrendingMovies_movieList__tjzHe",m=t(438),v=t(184),k=(0,h.ZP)(u.rU)(r||(r=(0,c.Z)(["\n  color: darkblue;\n\n  font-size: 20px;\n  font-weight: 500;\n\n  :hover {\n    color: orangered;\n  }\n  transition-duration: 250ms;\n"])));function x(){var n=(0,f.useState)([]),e=(0,a.Z)(n,2),t=e[0],r=e[1],c=(0,l.TH)(),o=function(){var n=(0,i.Z)(s().mark((function n(){var e,t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,d.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(m.$));case 3:e=n.sent,t=e.data.results.map((function(n){return{id:n.id,title:n.title}})),r(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();return(0,f.useEffect)((function(){o()}),[]),(0,v.jsx)("ul",{className:p,children:t.map((function(n){return(0,v.jsx)("li",{children:(0,v.jsx)(k,{to:"movies/".concat(n.id),state:{from:c},children:n.title})},n.id)}))})}var g=function(){return(0,v.jsxs)("main",{children:[(0,v.jsx)("h1",{children:"Trending today"}),(0,v.jsx)(x,{})]})}}}]);
//# sourceMappingURL=373.64ee04ea.chunk.js.map