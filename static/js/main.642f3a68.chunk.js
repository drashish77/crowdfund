(this.webpackJsonpcrowdfund=this.webpackJsonpcrowdfund||[]).push([[0],{26:function(t,e,a){},27:function(t,e,a){},46:function(t,e,a){"use strict";a.r(e);var n=a(1),l=a.n(n),c=a(15),i=a.n(c),s=(a(26),a(27),a(4)),o=a(11),r=a.p+"static/media/logo.e6f12bc6.svg",d=a(0),u=function(){var t=Object(n.useState)(!1),e=Object(s.a)(t,2),a=e[0],l=e[1];return Object(d.jsx)("div",{className:"",children:Object(d.jsx)("div",{id:"hero",className:"w-full",style:{height:"25rem"},children:Object(d.jsxs)("nav",{className:"flex justify-between items-center py-8 md:py-14 px-8 lg:px-20",children:[Object(d.jsx)("div",{className:"logo",children:Object(d.jsx)(o.b,{to:"/crowdfund",children:Object(d.jsx)("img",{src:r,alt:""})})}),Object(d.jsx)("div",{className:"text-white text-2xl md:hidden text-right",onClick:function(){l(!a)},children:"\u2630"}),Object(d.jsxs)("ul",{id:"navTouch",className:a?"flex Navbar__Link-toggle":"text-sm w-56 justify-evenly hidden md:flex",children:[Object(d.jsx)("li",{className:"text-white hover:text-gray-300",children:Object(d.jsx)("a",{href:"#about",children:"About"})}),Object(d.jsx)("hr",{className:"lg:hidden"}),Object(d.jsx)("li",{className:"text-white hover:text-gray-300",children:Object(d.jsx)("a",{href:"#discover",children:"Discover"})}),Object(d.jsx)("hr",{className:"lg:hidden"}),Object(d.jsx)("li",{className:"text-white hover:text-gray-300",children:Object(d.jsx)("a",{href:"#discover",children:"Get Started"})})]})]})})})},m=a(2),j={bamboo:{name:"Bamboo Stand",amount:25,description:"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you\u2019ll be added to a special Backer member list.",totalQuantity:150,quantitySold:49},black:{name:"Black Edition Stand",amount:75,description:"You get a Black Special Edition computer stand and a personal thank you. You\u2019ll be added to our Backer member list. Shipping is included.",totalQuantity:25,quantitySold:10},mahogany:{name:"Mahogany Special Edition",amount:200,description:"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You\u2019ll be added to our Backer member list. Shipping is included.",totalQuantity:50,quantitySold:50},volunteer:{name:"Pledge with no reward",amount:1,totalQuantity:1e3,quantitySold:0,description:"Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to recieve product updates via email."}},b=Object(n.createContext)(),x=function(t){var e=t.children,a=Object(n.useState)(1e5),l=Object(s.a)(a,2),c=l[0],i=l[1],o=Object(n.useState)(89914),r=Object(s.a)(o,2),u=r[0],m=r[1],x=Object(n.useState)(5007),h=Object(s.a)(x,2),y=h[0],g=h[1],p=Object(n.useState)(56),f=Object(s.a)(p,2),O=f[0],v=f[1],N=Object(n.useState)(j),k=Object(s.a)(N,1)[0];return Object(d.jsx)(b.Provider,{value:{fundRequired:c,setfundRequired:i,fundCollected:u,setFundCollected:m,totalBackers:y,settotalBackers:g,daysLeft:O,setdaysLeft:v,pledge:k},children:e})},h=a(10),y=a.n(h),g=function(t){return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"my-12 lg:px-4 lg:py-8 lg:mx-8 lg:mt-4 lg:mb-6  cursor-pointer select-none",children:[Object(d.jsx)("input",{id:t.radio,type:"radio",name:"radio",className:"hidden",disabled:0===t.quantityLeft}),Object(d.jsxs)("label",{htmlFor:t.radio,className:"flex justify-around p-2 border-2 border-gray-400 rounded-lg cursor-pointer",children:[Object(d.jsx)("span",{className:"w-16 h-4 lg:w-12 lg:h-8  inline-block lg:mr-3 rounded-full border border-grey"}),t.children]})]})})},p={overlay:{backgroundColor:"rgba(0,0,0,0.7)"},content:{width:"50%",height:"50%",top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},f=a.p+"static/media/icon-check.bdee5269.svg",O=function(t){var e=t.setModalIsOpen;return Object(d.jsxs)("div",{className:"flex flex-col justify-center items-center px-2 lg:px-5 m-auto",children:[Object(d.jsx)("img",{src:f,alt:""}),Object(d.jsx)("h1",{className:"text-md lg:text-3xl font-bold mt-4 m-auto text-center",children:"Thanks for your support"}),Object(d.jsx)("p",{className:"text-center my-6",children:"Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed."}),Object(d.jsx)("button",{className:"bg-cyan-moderate hover:bg-cyan-dark text-white rounded-full px-6 py-2 lg:py-4",onClick:function(){return e(!1)},children:"Got it!"})]})},v=function(t){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),l=a[0],c=a[1],i=Object(n.useContext)(b),o=i.fundCollected,r=i.setFundCollected,u=i.totalBackers,m=i.settotalBackers,j=Object(n.useState)(!1),x=Object(s.a)(j,2),h=x[0],g=x[1],f=t.name,v=t.amount,N=t.description,k=t.totalQuantity,w=t.quantitySold,S=k&&k-w,q=Object(n.useState)(v),C=Object(s.a)(q,2),Q=C[0],B=C[1];return Object(d.jsx)("div",{className:0!==S?"opacity-100":"opacity-50",children:Object(d.jsx)("div",{className:"bg-white",children:Object(d.jsx)("div",{className:"",children:Object(d.jsxs)("div",{className:"modal",onClick:function(){c(!0)},children:[Object(d.jsxs)("div",{className:"modal-header",children:[Object(d.jsxs)("div",{className:"flex justify-between items-start",children:[Object(d.jsxs)("div",{className:"flex flex-col text-left text-md lg:text-xl font-bold items-center lg:items-start lg:flex-row",style:{alignItems:"start"},children:[Object(d.jsx)("h1",{className:"m-0 lg:mr-4",children:f}),Object(d.jsxs)("h4",{className:"text-cyan-moderate",children:["Pledge $",v," or more"]})]}),Object(d.jsxs)("div",{className:k?"hidden lg:flex items-center":"hidden",children:[Object(d.jsx)("h1",{className:" text-3xl md:text-3xl font-bold mr-2",children:S}),Object(d.jsx)("p",{className:"text-sm text-gray-500",children:"left"})]})]}),Object(d.jsx)("p",{className:"text-gray-500 text-md lg:text-xl my-4",children:N}),Object(d.jsxs)("div",{className:k?"flex lg:hidden items-center":"hidden",children:[Object(d.jsx)("h1",{className:" text-3xl md:text-3xl font-bold mr-2",children:S}),Object(d.jsx)("p",{className:"text-sm text-gray-500",children:"left"})]}),Object(d.jsx)("div",{className:"border-b"})]}),Object(d.jsxs)("div",{className:l?"modal-footer flex flex-col lg:flex-row justify-between items-center mt-2 ":"hidden ",children:[Object(d.jsx)("h4",{className:"text-md lg:text-xl text-gray-700",children:"Enter your pledge"}),Object(d.jsxs)("div",{className:"modal-footer-2 flex justify-between items-center items-center",children:[Object(d.jsxs)("div",{className:"flex justify-center items-center border-4 rounded-full text-md lg:text-2xl py-1 lg:py-2  mr-8 border-cyan-dark w-24 lg:w-40 min-w-min",children:[Object(d.jsx)("label",{className:"",children:"$"}),Object(d.jsx)("input",{type:"number",name:"price-input",value:Q,onChange:function(t){B(t.target.value)},className:"focus:outline-none w-1/2 lg:w-4/6","aria-label":"Bamboo Stand Price Input"})]}),Object(d.jsx)("button",{"data-toggle":"modal","data-target":"#exampleModalLong",onClick:function(t){g(!0),r(o+ +Q),m(u+1)},disabled:0===S,className:S?"cursor-pointer bg-cyan-moderate hover:bg-cyan-dark text-white rounded-full p-2 my-2 lg:px-6 lg:py-4 lg:my-6 text -sm lg:text-xl":"cursor-not-allowed bg-gray-400 text-white rounded-full p-2 my-2 lg:px-6 lg:py-4 lg:my-6 text -sm lg:text-xl",children:0===S?"Out of Stock":"Continue"}),Object(d.jsx)(y.a,{isOpen:h,ariaHideApp:!1,onRequestClose:function(){return g(!1)},style:p,children:Object(d.jsx)(O,{setModalIsOpen:g})})]})]})]})})})})},N=function(t){var e=Object(n.useContext)(b).pledge,a=e.volunteer,l=e.bamboo,c=e.black,i=e.mahogany,o=Object(n.useState)(!1),r=Object(s.a)(o,2),u=r[0],m=r[1],x=t.name,h=t.amount,p=t.description,f=t.totalQuantity,O=t.quantitySold,N=f&&f-O,k=function(t){};return Object(d.jsxs)("div",{className:N?"opacity-100":"opacity-50",id:"discover",children:[Object(d.jsx)("div",{className:" bg-white border-2 rounded px-4 py-2 my-6",children:Object(d.jsxs)("div",{className:"",children:[Object(d.jsx)("h1",{className:"text-md md:text-3xl font-bold pt-8",children:x}),Object(d.jsxs)("h4",{className:"text-md text-cyan-moderate",children:["Pledge $",h," or more"]}),Object(d.jsx)("p",{className:"text-gray-500 my-4",children:p}),Object(d.jsxs)("div",{className:"lg:flex lg:justify-between",children:[Object(d.jsxs)("div",{className:f?"flex items-center":"hidden",children:[Object(d.jsx)("h1",{className:"text-3xl md:text-3xl font-bold mr-2",children:N}),Object(d.jsx)("p",{className:"text-sm text-gray-500",children:"left"})]}),Object(d.jsx)("button",{"data-toggle":"modal","data-target":"#exampleModalLong",disabled:0===N,onClick:function(){return m(!0)},className:N?"cursor-pointer bg-cyan-moderate hover:bg-cyan-dark text-white rounded-full px-6 py-2 my-6":"cursor-not-allowed bg-gray-400 text-white rounded-full px-6 py-2 my-6",children:0===N?"Out of Stock":"Select Reward"})]})]})}),Object(d.jsxs)(y.a,{isOpen:u,ariaHideApp:!1,onRequestClose:function(){return m(!1)},style:{overlay:{backgroundColor:"rgba(0,0,0,0.7)"},content:{color:"gray",width:"80vw",margin:"auto"}},children:[Object(d.jsx)("div",{className:"flex justify-end items-start sticky top-10 right-0",children:Object(d.jsx)("button",{className:"p-1 rounded-full border-2",onClick:function(){return m(!1)},children:"\u274c"})}),Object(d.jsx)("h1",{className:"text-xl lg:text-4xl font-bold m-1 lg:mx-8 lg:mt-8 lg:mb-6",children:"Back this project"}),Object(d.jsx)("p",{className:"m-1 text-sm lg:text-xl lg:mx-8",children:"Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?"}),Object(d.jsx)(g,{radio:"radio1",quantityLeft:j.bamboo.totalQuantity-j.bamboo.quantitySold,children:Object(d.jsx)(v,{name:a.name,amount:a.amount,totalQuantity:a.totalQuantity,quantitySold:a.quantitySold,description:a.description,onClick:k})}),Object(d.jsx)(g,{radio:"radio2",quantityLeft:j.bamboo.totalQuantity-j.bamboo.quantitySold,children:Object(d.jsx)(v,{name:l.name,amount:l.amount,description:l.description,totalQuantity:l.totalQuantity,quantitySold:l.quantitySold,onClick:k})}),Object(d.jsx)(g,{radio:"radio3",quantityLeft:j.black.totalQuantity-j.black.quantitySold,children:Object(d.jsx)(v,{name:c.name,amount:c.amount,description:c.description,totalQuantity:c.totalQuantity,quantitySold:c.quantitySold,onClick:k})}),Object(d.jsx)(g,{radio:"radio4",quantityLeft:j.mahogany.totalQuantity-j.mahogany.quantitySold,children:Object(d.jsx)(v,{name:i.name,amount:i.amount,description:i.description,totalQuantity:i.totalQuantity,quantitySold:i.quantitySold,onClick:k})})]})]})},k=function(){var t=Object(n.useContext)(b).pledge,e=t.bamboo,a=t.black,l=t.mahogany;return Object(d.jsx)("div",{className:"my-16",id:"about",children:Object(d.jsxs)("div",{className:"w-5/6 md:w-1/2 m-auto bg-white rounded px-10 py-6",children:[Object(d.jsxs)("div",{className:"",children:[Object(d.jsx)("h1",{className:"text-2xl md:text-3xl font-bold pt-8",children:"About this project"}),Object(d.jsx)("p",{className:"text-gray-500 my-6",children:"The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand."}),Object(d.jsx)("p",{className:"text-gray-500 my-6",children:"Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand."})]}),Object(d.jsx)(N,{name:e.name,amount:e.amount,description:e.description,totalQuantity:e.totalQuantity,quantitySold:e.quantitySold}),Object(d.jsx)(N,{name:a.name,amount:a.amount,description:a.description,totalQuantity:a.totalQuantity,quantitySold:a.quantitySold}),Object(d.jsx)(N,{name:l.name,amount:l.amount,description:l.description,totalQuantity:l.totalQuantity,quantitySold:l.quantitySold})]})})},w=function(){var t=Object(n.useContext)(b),e=t.fundRequired,a=t.fundCollected,l=t.totalBackers,c=t.daysLeft;console.log(a);var i=(100-Math.ceil((e-a)/e*100)).toLocaleString();return Object(d.jsx)("div",{className:"my-16",children:Object(d.jsxs)("div",{className:"w-5/6 md:w-1/2 m-auto bg-white rounded px-10 py-6",children:[Object(d.jsxs)("div",{className:"flex flex-col items-center text-center divide-y divide-gray-400 lg:flex-row lg:justify-around lg:divide-x lg:divide-y-0",children:[Object(d.jsxs)("div",{className:"py-6 lg:w-1/3",children:[Object(d.jsxs)("h1",{className:"text-3xl tracking-tight font-bold",children:["$",a]}),Object(d.jsxs)("p",{className:"text-gray2",children:["of $",e," backed"]})]}),Object(d.jsxs)("div",{className:"py-6 lg:w-1/3",children:[Object(d.jsx)("h1",{className:"text-3xl tracking-tight font-bold",children:l}),Object(d.jsx)("p",{className:"text-gray2",children:"total backers"})]}),Object(d.jsxs)("div",{className:"py-6 lg:w-1/3",children:[Object(d.jsx)("h1",{className:"text-3xl tracking-tight font-bold",children:c}),Object(d.jsx)("p",{className:"text-gray2",children:"days left"})]})]}),Object(d.jsxs)("div",{className:"my-6 h-3 relative  rounded-full overflow-hidden",children:[Object(d.jsx)("div",{className:"w-full h-full bg-gray-200 rounded-full absolute"}),Object(d.jsx)("div",{className:"h-full bg-cyan-moderate absolute rounded-full",style:{width:"".concat(i,"%")}})]})]})})},S=a.p+"static/media/logo-mastercraft.dca2a831.svg",q=function(){var t=Object(n.useState)(!1),e=Object(s.a)(t,2),a=e[0],l=e[1],c=Object(n.useState)("Bookmark"),i=Object(s.a)(c,2),o=i[0],r=i[1],u=Object(n.useState)(!1),m=Object(s.a)(u,2),j=m[0],x=m[1],h=function(){"Bookmark"===o?(r("Bookmarked"),x(!j)):(r("Bookmark"),x(!j))},p=Object(n.useContext)(b).pledge,f=p.volunteer,O=p.bamboo,N=p.black,k=p.mahogany,w=function(t){console.log("popupClicked")};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"text-center",children:[Object(d.jsx)("div",{className:"flex justify-center items-center",children:Object(d.jsx)("div",{className:"",children:Object(d.jsx)("img",{className:"-mt-7",src:S,alt:""})})}),Object(d.jsx)("h1",{className:"text-2xl md:text-3xl font-bold pt-8",children:"Mastercraft Bamboo Monitor Riser"}),Object(d.jsx)("p",{className:"text-gray2 text-sm mt-5",children:"A beautiful & handcrafted monitor stand to reduce neck and eye strain."})]}),Object(d.jsxs)("div",{className:"flex justify-between items-center mt-5",children:[Object(d.jsx)("button",{className:"\r bg-cyan-moderate\r hover:bg-cyan-dark\r text-white\r rounded-full px-5 font-bold text-xs lg:text-lg py-4 lg:py-4 lg:px-5",onClick:function(){return l(!0)},children:"Back this project"}),Object(d.jsxs)(y.a,{isOpen:a,ariaHideApp:!1,onRequestClose:function(){return l(!1)},style:{overlay:{backgroundColor:"rgba(0,0,0,0.7)"},content:{color:"gray",width:"80vw",margin:"auto"}},children:[Object(d.jsx)("div",{className:"flex justify-end items-start sticky top-10 right-0",children:Object(d.jsx)("button",{className:"p-1 rounded-full border-2",onClick:function(){return l(!1)},children:"\u274c"})}),Object(d.jsx)("h1",{className:"text-xl lg:text-4xl font-bold m-1 lg:mx-8 lg:mt-8 lg:mb-6",children:"Back this project"}),Object(d.jsx)("p",{className:"m-1 text-sm lg:text-xl lg:mx-8",children:"Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?"}),Object(d.jsx)(g,{radio:"radio1",quantityLeft:O.totalQuantity-O.quantitySold,children:Object(d.jsx)(v,{name:f.name,amount:f.amount,description:f.description,onClick:w})}),Object(d.jsx)(g,{radio:"radio2",quantityLeft:O.totalQuantity-O.quantitySold,children:Object(d.jsx)(v,{name:O.name,amount:O.amount,description:O.description,totalQuantity:O.totalQuantity,quantitySold:O.quantitySold,onClick:w})}),Object(d.jsx)(g,{radio:"radio3",quantityLeft:N.totalQuantity-N.quantitySold,children:Object(d.jsx)(v,{name:N.name,amount:N.amount,description:N.description,totalQuantity:N.totalQuantity,quantitySold:N.quantitySold,onClick:w})}),Object(d.jsx)(g,{radio:"radio4",quantityLeft:k.totalQuantity-k.quantitySold,children:Object(d.jsx)(v,{name:k.name,amount:k.amount,description:k.description,totalQuantity:k.totalQuantity,quantitySold:k.quantitySold,onClick:w})})]}),Object(d.jsxs)("div",{id:"bookmark",className:"flex items-center",children:[Object(d.jsx)("div",{id:"icon",className:"mr-neg15 z-0",children:Object(d.jsx)("svg",{width:"56",height:"56",xmlns:"http://www.w3.org/2000/svg",onClick:h,children:Object(d.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[Object(d.jsx)("circle",{fill:j?"hsl(176, 72%, 28%)":"#2F2F2F",cx:"28",cy:"28",r:"28"}),Object(d.jsx)("path",{fill:j?"#fff":"#B1B1B1",d:"M23 19v18l5-5.058L33 37V19z"})]})})}),Object(d.jsx)("button",{id:"text",className:j?"rounded-r-full py-3 px-6 -ml-5 font-bold hidden md:block text-cyan-dark bg-gray-200":"rounded-r-full py-3 px-6 -ml-5 font-bold hidden md:block bg-gray-300",onClick:h,children:o})]})]})]})},C=function(){var t=Object(n.useContext)(b),e=t.fundRequired,a=t.fundCollected,l=t.totalBackers,c=t.daysLeft;return Object(d.jsxs)("div",{className:"",children:[Object(d.jsx)("div",{className:"relative w-5/6 md:w-1/2 mx-auto bg-white rounded-lg px-10 pb-16 mb-6 -mt-20",children:Object(d.jsx)(q,{})}),Object(d.jsx)(w,{fundRequired:e,fundCollected:a,totalBackers:l,daysLeft:c}),Object(d.jsx)(k,{}),Object(d.jsx)("div",{className:"flex justify-end",children:Object(d.jsx)("a",{href:"#hero",className:"btn mb-10 rounded-full p-4 bg-cyan-dark text-white mr-5 align-left",children:"Top"})})]})};var Q=function(){return Object(d.jsxs)(o.a,{children:[Object(d.jsx)(u,{}),Object(d.jsx)(m.a,{path:"/crowdfund",component:C})]})},B=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,47)).then((function(e){var a=e.getCLS,n=e.getFID,l=e.getFCP,c=e.getLCP,i=e.getTTFB;a(t),n(t),l(t),c(t),i(t)}))};i.a.render(Object(d.jsx)(l.a.StrictMode,{children:Object(d.jsx)(x,{children:Object(d.jsx)(Q,{})})}),document.getElementById("root")),B()}},[[46,1,2]]]);
//# sourceMappingURL=main.642f3a68.chunk.js.map