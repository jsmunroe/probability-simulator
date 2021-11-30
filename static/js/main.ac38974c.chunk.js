(this["webpackJsonpprobability-simulator"]=this["webpackJsonpprobability-simulator"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(11),r=c.n(i),a=(c(16),c(2)),j=c(8),l=(c(17),c(0));function o(e){var t=e.children;return Object(l.jsxs)("div",{className:"layout",children:[Object(l.jsx)("aside",{children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"monty",children:"Monty Hall"})}),Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"classroom",children:"Classroom"})})]})}),t]})}var b=c(3),h=c(9),d=c(5);function O(e,t){t||(t=e,e=0);var c=[Math.min(e,t),Math.max(e,t)+1];return e=c[0],t=c[1],Math.floor(Math.random()*(t-e))+e}function u(e){var t=(e=Object(d.a)(Object(d.a)({},{size:void 0,minSize:1,maxSize:10,sizeModulo:1,setItem:function(e){return 0},shuffle:!1}),e)).size?e.size:O(e.minSize,e.maxSize);t%e.sizeModulo!==0&&(t+=t%e.sizeModulo);var c=Object(h.a)(Array(t).keys()).map(e.setItem);return e.shuffle?function(e){e=Object(h.a)(e);var t=[];for(;e.length>1;){var c=x(e),n=Object(b.a)(c,2),s=n[0],i=n[1];t=[].concat(Object(h.a)(t),[s]),e=i}return t}(c):c}function x(e){var t=O(0,e.length-1);return[e[t],e.filter((function(e,c){return c!==t}))]}function f(){var e=Object(n.useState)(0),t=Object(b.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(0),r=Object(b.a)(i,2),a=r[0],j=r[1],o=Object(n.useState)(new Date),h=Object(b.a)(o,1)[0],d=Object(n.useState)(0),O=Object(b.a)(d,2),f=O[0],m=O[1];Object(n.useEffect)((function(){setTimeout((function(){for(var e=u({minSize:10,maxSize:100,sizeModulo:2,setItem:function(e){return e%2}}),t=function(){var t=x(e),c=Object(b.a)(t,2),n=c[0],i=x(c[1]),r=Object(b.a)(i,1)[0];if(0!==n&&0!==r)return"continue";var a=0===n?r:n;return s((function(e){return e+1})),j((function(e){return 1===a?e+1:e})),m(Math.floor((new Date-h)/1e3)),"break"};;){var c=t();if("continue"!==c&&"break"===c)break}}),100)}));var v=0!==c?a/c:0;return Object(l.jsxs)("article",{className:"classroom sim",children:[Object(l.jsx)("h2",{children:"Classroom"}),Object(l.jsxs)("p",{children:[Object(l.jsx)("strong",{children:"Question: "}),"Out of a class of equal boys and equal girls two children are selected randomly. You are told that one of them is a boy, what is the chance that a girl was selected?"]}),Object(l.jsx)("h3",{children:"Operations"}),Object(l.jsxs)("ol",{children:[Object(l.jsx)("li",{children:"Generate classroom of random size between 10 and 100 with even boys and girls."}),Object(l.jsx)("li",{children:"Choose 2 children at random from classroom."}),Object(l.jsx)("li",{children:"If a boy is not chosen, do not record."}),Object(l.jsx)("li",{children:'Increment "Total Selections".'}),Object(l.jsx)("li",{children:'If other child is a girl, increment "Girls Selected".'})]}),Object(l.jsx)("h3",{children:"Results"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Total Selections: "}),Object(l.jsx)("span",{children:c})]}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Girls Selected: "}),Object(l.jsx)("span",{children:a})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"% Girls Selected: "}),Object(l.jsxs)("span",{children:[100*v,"%"]})]}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Elapsed Time: "}),Object(l.jsxs)("span",{children:[f," seconds"]})]})]})}function m(){var e=Object(n.useState)(0),t=Object(b.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(0),r=Object(b.a)(i,2),a=r[0],j=r[1],o=Object(n.useState)(0),h=Object(b.a)(o,2),d=h[0],O=h[1],f=Object(n.useState)(0),m=Object(b.a)(f,2),v=m[0],p=m[1],S=Object(n.useState)(new Date),w=Object(b.a)(S,1)[0];Object(n.useEffect)((function(){setTimeout((function(){var e=x(u({size:3,setItem:function(e){return e%2}})),t=Object(b.a)(e,2),c=t[0],n=function(e,t){var c=e.map((function(e,t){return{e:e,i:t}}));"function"===typeof t&&(c=c.filter((function(e){return t(e.e,e.i)})));var n=x(c.map((function(e){return e.i}))),s=Object(b.a)(n,1)[0];return[e[s],e.filter((function(e,t){return t!==s}))]}(t[1],(function(e){return 0===e})),i=Object(b.a)(n,2)[1],r=Object(b.a)(i,1)[0];s((function(e){return e+1})),j((function(e){return c?e+1:e})),O((function(e){return r?e+1:e})),p(Math.floor((new Date-w)/1e3))}),100)}));var y=0===c?0:a/c,g=0===c?0:d/c;return Object(l.jsxs)("article",{className:"monty sim",children:[Object(l.jsx)("h2",{children:"Monty Hall"}),Object(l.jsxs)("p",{children:[Object(l.jsx)("strong",{children:"Question: "}),"A host gives you three doors. Behind 1 is a new car; behind the other 2 is a goat. After selecting a door, the host takes away one of the unselected doors, and offers to let you switch to the remaining unselected door. What is the probability favoring this switch?"]}),Object(l.jsx)("h3",{children:"Operations"}),Object(l.jsxs)("ol",{children:[Object(l.jsx)("li",{children:"Generate 3 doors, 2 with a goat (0) and 1 with a new car (1)."}),Object(l.jsx)("li",{children:"Choose a door at random."}),Object(l.jsx)("li",{children:"Take away an unselected door."}),Object(l.jsx)("li",{children:'Increment "Total Iterations".'}),Object(l.jsx)("li",{children:'If the selected door has the new car, increment "Times No-Switch Wins".'}),Object(l.jsx)("li",{children:'If the other door has the new car, increment "Times Switch Wins".'})]}),Object(l.jsx)("h3",{children:"Results"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Total Iterations: "}),Object(l.jsx)("span",{children:c})]}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Times No-Switch Wins: "}),Object(l.jsx)("span",{children:a})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"% No-Switch Wins: "}),Object(l.jsxs)("span",{children:[100*y,"%"]})]}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Times Switch Wins: "}),Object(l.jsx)("span",{children:d})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"% Switch Wins: "}),Object(l.jsxs)("span",{children:[100*g,"%"]})]}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Elapsed Time: "}),Object(l.jsxs)("span",{children:[v," seconds"]})]})]})}function v(){var e=Object(n.useState)(0),t=Object(b.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(null),r=Object(b.a)(i,2),a=r[0],j=r[1],o=Object(n.useState)(new Date),h=Object(b.a)(o,1)[0],x=Object(n.useState)(0),f=Object(b.a)(x,2),m=f[0],v=f[1];return Object(n.useEffect)((function(){setTimeout((function(){var e=null!==a&&void 0!==a?a:u({size:10,setItem:function(e){return{times:0,percent:0}}}),t=O(0,e.length-1),n=e[t];e[t]=Object(d.a)(Object(d.a)({},n),{},{times:n.times+1}),e=e.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{percent:e.times/c*100})})),s((function(e){return e+1})),j(e),v(Math.floor((new Date-h)/1e3))}),100)})),Object(l.jsxs)("article",{className:"monty sim",children:[Object(l.jsx)("h2",{children:"Flat Distrobution Test"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Iterations: "}),Object(l.jsx)("span",{children:c})]}),null===a||void 0===a?void 0:a.map((function(e,t){return Object(l.jsxs)("div",{children:[Object(l.jsxs)("label",{children:["Times ",t," Chosen: "]}),Object(l.jsx)("span",{children:e.times})," \xa0",Object(l.jsx)("span",{children:e.percent})]})})),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Elapsed Time: "}),Object(l.jsxs)("span",{children:[m," seconds"]})]})]})}var p=function(){return Object(l.jsx)("div",{className:"app",children:Object(l.jsx)(j.a,{children:Object(l.jsx)(o,{children:Object(l.jsxs)(a.c,{children:[Object(l.jsx)(a.a,{exact:!0,path:"/monty",element:Object(l.jsx)(m,{})}),Object(l.jsx)(a.a,{exact:!0,path:"/classroom",element:Object(l.jsx)(f,{})}),Object(l.jsx)(a.a,{exact:!0,path:"/test",element:Object(l.jsx)(v,{})})]})})})})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,20)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),i(e),r(e)}))};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),S()}},[[19,1,2]]]);
//# sourceMappingURL=main.ac38974c.chunk.js.map