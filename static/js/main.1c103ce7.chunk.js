(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{38:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var r={};c.r(r),c.d(r,"setActiveTab",(function(){return h}));var s=c(0),n=c.n(s),l=c(27),o=c.n(l),a=(c(38),c(7)),i=c(5),d=c(2),b=function(){return Object(d.jsx)("div",{children:"Hello from Contact"})},j=c.p+"static/media/undrawShop2.468a12fe.svg",m=c(22),x=c(18),h=function(e){return function(t){t({type:"CHANGE_TAB",payload:e})}},p=function(){var e=Object(m.b)(),t=Object(x.b)(r,e).setActiveTab;return Object(d.jsxs)("div",{className:"flex flex-col md:flex-row items-center text-center justify-center md:items-start md:text-left font-roboto md:h-93v",children:[Object(d.jsxs)("div",{className:"flex flex-col md:w-4/12 md:ml-8 lg:ml-16 justify-center md:h-90v",children:[Object(d.jsx)("span",{className:"text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-9xl font-bold text-gray-700 tracking-wide mt-8 md:mt-13 ",children:"The all-in-one website for all your buying needs"}),Object(d.jsx)("span",{className:"text-xl md:text-4xl 3xl:text-7xl font-bold text-coat tracking-wide mt-3 md:mt-8  ",children:"Start spending today!"}),Object(d.jsx)("div",{className:"mt-5 md:mt-10",children:Object(d.jsx)(a.b,{to:"/Shopping-cart/shop",className:"rounded-full  bg-primary px-4 md:px-8 py-2 md:py-4 text-gray-100 text-center text-lg md:text-xl font-semibold",onClick:function(){return t("shop")},children:"Shop"})})]}),Object(d.jsx)("div",{className:"m-5 md:h-90v flex items-center",children:Object(d.jsx)("img",{className:"transform md:scale-50 lg:scale-55 xl:scale-60 2xl:scale-65 3xl:scale-75 md:-mt-8",src:j,alt:"React Logo"})})]})},u=c(19),f=c.p+"static/media/suit.a65e5c9e.svg",O=c.p+"static/media/necklace.506c987c.svg",g=c.p+"static/media/dress.f15adde4.svg",y=c.p+"static/media/electronics.d2b8f3bd.svg",w=c.p+"static/media/all.98e21768.svg",v=function(e){var t=e.itemImg,c=e.itemTitle,r=e.itemPrice;return Object(d.jsxs)("div",{className:"w-36 h-72 md:w-80 md:h-96 m-4 flex flex-col rounded-sm pt-4 border border-opacity-50 cursor-pointer overflow-hidden shadow-md transform hover:scale-95 ease-in duration-150",children:[Object(d.jsx)("img",{src:t,alt:"",className:"w-full h-3/4 md:h-3/4 mb-2 p-4  object-contain"}),Object(d.jsxs)("div",{className:"h-full md:h-28 w-full bg-gray-600 font-roboto text-gray-100 px-4 py-2 flex flex-col",children:[Object(d.jsx)("span",{className:"truncate text-sm pb-2",children:c}),Object(d.jsxs)("span",{className:"text-sm font-semibold",children:["$",r]})]})]})},N=function(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1],n=Object(s.useState)("all"),l=Object(u.a)(n,2),o=l[0],i=l[1],b=Object(s.useState)(!0),j=Object(u.a)(b,2),m=j[0],x=j[1];return Object(s.useEffect)((function(){x(!0),console.log("hello"),"all"===o?fetch("https://fakestoreapi.com/products").then((function(e){return e.json()})).then((function(e){r(e),x(!1)})):fetch("https://fakestoreapi.com/products/category/".concat(o)).then((function(e){return e.json()})).then((function(e){r(e),x(!1)}))}),[o]),Object(d.jsxs)("div",{className:"flex flex-col md:flex-row  h-93v 3xl:h-95v  relative",children:[Object(d.jsx)("div",{className:"flex items-center justify-center w-full md:w-24 md:h-full",children:Object(d.jsxs)("ul",{className:"flex justify-center md:h-full md:flex-col w-full pt-2 md:pt-0 font-roboto text-sm border-b md:border-b-0 md:border-r",children:[Object(d.jsxs)("li",{className:"flex flex-col items-center justify-center px-3 cursor-pointer border-b-2 md:border-r-2  md:border-b-0 md:py-2 ".concat("all"===o?"border-coat":"border-transparent"," "),onClick:function(){i("all")},children:[Object(d.jsx)("img",{className:"h-10",src:w,alt:""}),Object(d.jsx)("span",{className:"pb-2 md:pb-0",children:"All"})]}),Object(d.jsxs)("li",{className:"flex flex-col items-center justify-center px-3 cursor-pointer border-b-2 md:border-r-2   md:border-b-0 border-transparent md:py-2 ".concat("men's clothing"===o?" border-coat":""),onClick:function(){i("men's clothing")},children:[Object(d.jsx)("img",{className:"h-10",src:f,alt:""}),Object(d.jsx)("span",{className:"pb-2 md:pb-0",children:"Mens"})]}),Object(d.jsxs)("li",{className:"flex flex-col items-center justify-center px-3 cursor-pointer border-b-2 md:border-r-2  md:border-b-0 border-transparent md:py-2 ".concat("women's clothing"===o?"border-coat":""),onClick:function(){i("women's clothing")},children:[Object(d.jsx)("img",{className:"h-10",src:g,alt:""}),Object(d.jsx)("span",{className:"pb-2 md:pb-0",children:"Womens"})]}),Object(d.jsxs)("li",{className:"flex flex-col items-center justify-center px-3 cursor-pointer border-b-2 md:border-r-2  md:border-b-0 border-transparent md:py-2 ".concat("jewelery"===o?"border-coat":""),onClick:function(){i("jewelery")},children:[Object(d.jsx)("img",{className:"h-10",src:O,alt:""}),Object(d.jsx)("span",{className:"pb-2 md:pb-0",children:"Jewelery"})]}),Object(d.jsxs)("li",{className:"flex flex-col items-center justify-center px-3 cursor-pointer border-b-2 md:border-r-2  md:border-b-0 border-transparent md:py-2 ".concat("electronics"===o?"border-coat":""),onClick:function(){i("electronics")},children:[Object(d.jsx)("img",{className:"h-10",src:y,alt:""}),Object(d.jsx)("span",{className:"pb-2 md:pb-0",children:"Electronics"})]})]})}),m?Object(d.jsx)("div",{className:"h-93v w-full flex items-center justify-center",children:Object(d.jsxs)("svg",{class:"animate-spin h-16 w-16 md:h-32 md:w-32 text-gray-500",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[Object(d.jsx)("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),Object(d.jsx)("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}):Object(d.jsx)("div",{className:"overflow-y-auto flex flex-wrap w-full justify-center",children:c.map((function(e){return Object(d.jsx)(a.b,{to:"/Shopping-cart/shop/".concat(e.id),children:Object(d.jsx)(v,{itemImg:e.image,itemTitle:e.title,itemPrice:e.price},e.id)})}))}),Object(d.jsx)("div",{className:"absolute bottom-0 right-0 m-4 mb-14 md:hidden",children:Object(d.jsx)(a.b,{to:"/Shopping-cart/cart",className:"h-16 w-16 rounded-full bg-primary shadow-md flex items-center justify-center text-gray-100 font-roboto",children:Object(d.jsxs)("li",{className:"relative list-none",children:[Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})}),Object(d.jsx)("div",{className:"absolute -top-2 -right-3 rounded-full h-5 w-5 bg-purple-700 text-center text-sm",children:Object(d.jsx)("span",{children:"0"})})]})})})]})},k=c(49),C=c(48),S=function(){var e=Object(s.useState)(!1),t=Object(u.a)(e,2),c=t[0],n=t[1],l=Object(m.c)((function(e){return e.tabReducer})),o=Object(m.b)(),i=Object(x.b)(r,o).setActiveTab;return console.log(l),Object(d.jsxs)("div",{className:"relative",children:[Object(d.jsxs)("div",{className:"flex justify-between items-center px-8 py-2 h-7v 3xl:h-5v bg-primary text-gray-100 md:rounded-b-lg font-roboto ",children:[Object(d.jsx)(a.b,{to:"/Shopping-cart",onClick:function(){return i("home")},children:Object(d.jsx)("h3",{className:"text-xl font-bold",children:"ALLMART"})}),Object(d.jsxs)("ul",{className:"hidden md:flex items-center",children:[Object(d.jsx)(a.b,{to:"/Shopping-cart",className:"".concat("home"===l?"bg-secondary":"bg-primary"," px-3 rounded-md py-2"),onClick:function(){return i("home")},children:Object(d.jsx)("li",{children:"Home"})}),Object(d.jsx)(a.b,{to:"/Shopping-cart/shop",className:"".concat("shop"===l?"bg-secondary":"bg-primary"," px-3 rounded-md py-2"),onClick:function(){return i("shop")},children:Object(d.jsx)("li",{children:"Shop"})}),Object(d.jsx)(a.b,{to:"/Shopping-cart/contact",className:"".concat("contact"===l?"bg-secondary":"bg-primary"," px-3 rounded-md py-2"),onClick:function(){return i("contact")},children:Object(d.jsx)("li",{children:"Contact"})}),Object(d.jsx)(a.b,{to:"/Shopping-cart/cart",className:"px-3",onClick:function(){return i("")},children:Object(d.jsxs)("li",{className:"relative",children:[Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})}),Object(d.jsx)("div",{className:"absolute -top-2 -right-3 rounded-full h-5 w-5 bg-purple-600 text-center text-sm",children:Object(d.jsx)("span",{children:"0"})})]})})]}),Object(d.jsxs)("div",{className:"md:hidden",onClick:function(){return n(!c)},children:[!c&&Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})}),c&&Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})]})]}),Object(d.jsx)("div",{className:"md:hidden w-full",children:Object(d.jsx)(k.a,{children:c&&Object(d.jsxs)(C.a.div,{className:"w-full flex flex-col items-center justify-center bg-primary text-gray-100 font-roboto",initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.15},children:[Object(d.jsx)(a.b,{to:"/Shopping-cart",className:"px-3 py-1 w-full border-b text-center border-t border-gray-200 border-opacity-30",onClick:function(){return n(!1)},children:Object(d.jsx)("li",{className:"list-none",children:"Home"})}),Object(d.jsx)(a.b,{to:"/Shopping-cart/shop",className:"px-3 py-1 w-full border-b text-center border-gray-200 border-opacity-30",onClick:function(){return n(!1)},children:Object(d.jsx)("li",{className:"list-none",children:"Shop"})}),Object(d.jsx)(a.b,{to:"/Shopping-cart/cart",className:"px-3 py-1 w-full border-b flex justify-center border-gray-200 border-opacity-30",onClick:function(){return n(!1)},children:Object(d.jsx)("li",{className:"list-none flex",children:"Cart"})}),Object(d.jsx)(a.b,{to:"/Shopping-cart/contact",className:"px-3 py-1 w-full border-b text-center border-gray-200 border-opacity-30",onClick:function(){return n(!1)},children:Object(d.jsx)("li",{className:"list-none",children:"Contact"})})]})})})]})},M=function(e){var t=e.match,c=Object(s.useState)({}),r=Object(u.a)(c,2),n=r[0],l=r[1],o=Object(s.useState)(!0),a=Object(u.a)(o,2),i=a[0],b=a[1];return Object(s.useEffect)((function(){fetch("https://fakestoreapi.com/products/".concat(t.params.id)).then((function(e){return e.json()})).then((function(e){l(e),b(!1)}))}),[]),Object(d.jsx)("div",{children:i?Object(d.jsx)("div",{className:"h-93v w-full flex items-center justify-center",children:Object(d.jsxs)("svg",{class:"animate-spin h-16 w-16 md:h-32 md:w-32 text-gray-500",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[Object(d.jsx)("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),Object(d.jsx)("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}):Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:n.title})})})};var L=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(a.a,{children:[Object(d.jsx)(S,{}),Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{path:"/Shopping-cart",exact:!0,component:p}),Object(d.jsx)(i.a,{path:"/Shopping-cart/shop",exact:!0,component:N}),Object(d.jsx)(i.a,{path:"/Shopping-cart/contact",exact:!0,component:b}),Object(d.jsx)(i.a,{path:"/Shopping-cart/shop/:id",component:M})]})]})})},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"home",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_TAB":return t.payload;default:return e}},H=Object(x.c)({tabReducer:A}),B=c(33),T=Object(x.d)(H,{},Object(x.a)(B.a));o.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(m.a,{store:T,children:Object(d.jsx)(L,{})})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.1c103ce7.chunk.js.map