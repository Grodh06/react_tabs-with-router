(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{17:function(t,e,a){"use strict";a.r(e);var c=a(8),s=a.n(c),n=a(4),i=(a(14),a(15),a(1)),b=a(9),j=a.n(b),r=(a(0),a(2)),l=function(t){var e,a=t.tabs,c=Object(i.h)().tabId;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"title",children:"Tabs page"}),Object(r.jsx)("div",{className:"tabs is-boxed",children:Object(r.jsx)("ul",{children:a.map((function(t){return Object(r.jsx)("li",{"data-cy":"tab",className:j()({"is-active":c===t.id}),children:Object(r.jsx)(n.b,{to:"/tabs/".concat(t.id),children:t.title})},t.id)}))})}),Object(r.jsx)("div",{className:"block","data-cy":"tab-content",children:(null===(e=a.find((function(t){return c===t.id})))||void 0===e?void 0:e.content)||"Please select a tab"})]})},d=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],o=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("nav",{className:"navbar is-fixed-top has-background-light","data-cy":"nav",children:Object(r.jsx)("div",{className:"navbar-menu",children:Object(r.jsxs)("div",{className:"navbar-start",children:[Object(r.jsx)(n.c,{to:"/",className:function(t){return t.isActive?"navbar-item is-active":"navbar-item"},children:"Home"}),Object(r.jsx)(n.c,{to:"tabs",className:function(t){return t.isActive?"navbar-item is-active":"navbar-item"},children:"Tabs"})]})})}),Object(r.jsx)("div",{className:"section",children:Object(r.jsxs)(i.d,{children:[Object(r.jsx)(i.b,{path:"/",element:Object(r.jsx)("h1",{className:"title",children:"Home page"})}),Object(r.jsx)(i.b,{path:"/home",element:Object(r.jsx)(i.a,{to:"/"})}),Object(r.jsx)(i.b,{path:"/tabs",element:Object(r.jsx)(l,{tabs:d}),children:Object(r.jsx)(i.b,{path:":tabId",element:Object(r.jsx)(l,{tabs:d})})}),Object(r.jsx)(i.b,{path:"*",element:Object(r.jsx)("h1",{className:"title",children:"Page not found"})})]})})]})};s.a.render(Object(r.jsx)(n.a,{children:Object(r.jsx)(o,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.77693adf.chunk.js.map