(this.webpackJsonpcrowdfund=this.webpackJsonpcrowdfund||[]).push([[0],{26:function(t,e,a){},27:function(t,e,a){},46:function(t,e,a){"use strict";a.r(e);var n=a(1),l=a.n(n),c=a(15),s=a.n(c),i=(a(26),a(27),a(2)),o=a(11),d=(a.p,a.p+"static/media/logo.e6f12bc6.svg"),r=a(0),u=function(){var t=Object(n.useState)(!1),e=Object(i.a)(t,2),a=e[0],l=e[1];return Object(r.jsx)("div",{children:Object(r.jsx)("div",{id:"hero",className:"w-full h-80",children:Object(r.jsxs)("nav",{className:"flex justify-between items-center py-8 md:py-14 px-5",children:[Object(r.jsx)("div",{className:"logo",children:Object(r.jsx)(o.b,{to:"/crowdfund/",children:Object(r.jsx)("img",{src:d,alt:""})})}),Object(r.jsx)("div",{className:"text-white text-2xl md:hidden text-right",onClick:function(){l(!a)},children:"\u2630"}),Object(r.jsxs)("ul",{id:"navTouch",className:a?"flex Navbar__Link-toggle":"text-sm w-56 justify-evenly hidden md:flex",children:[Object(r.jsx)("li",{className:"text-white hover:text-gray-300",children:Object(r.jsx)("a",{href:"#about",children:"About"})}),Object(r.jsx)("hr",{className:"lg:hidden"}),Object(r.jsx)("li",{className:"text-white hover:text-gray-300",children:Object(r.jsx)("a",{href:"#discover",children:"Discover"})}),Object(r.jsx)("hr",{className:"lg:hidden"}),Object(r.jsx)("li",{className:"text-white hover:text-gray-300",children:Object(r.jsx)("a",{href:"#discover",children:"Get Started"})})]})]})})})},m=a(3),j={bamboo:{name:"Bamboo Stand",amount:25,description:"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you\u2019ll be added to a special Backer member list.",totalQuantity:150,quantitySold:49},black:{name:"Black Edition Stand",amount:75,description:"You get a Black Special Edition computer stand and a personal thank you. You\u2019ll be added to our Backer member list. Shipping is included.",totalQuantity:25,quantitySold:10},mahogany:{name:"Mahogany Special Edition",amount:200,description:"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You\u2019ll be added to our Backer member list. Shipping is included.",totalQuantity:50,quantitySold:50},volunteer:{name:"Pledge with no reward",amount:1,totalQuantity:1e3,quantitySold:0,description:"Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to recieve product updates via email."}},b=Object(n.createContext)(),x=function(t){var e=t.children,a=Object(n.useState)(1e5),l=Object(i.a)(a,2),c=l[0],s=l[1],o=Object(n.useState)(899914),d=Object(i.a)(o,2),u=d[0],m=d[1],x=Object(n.useState)(5007),h=Object(i.a)(x,2),y=h[0],g=h[1],O=Object(n.useState)(56),p=Object(i.a)(O,2),f=p[0],v=p[1],N=Object(n.useState)(j),k=Object(i.a)(N,2),w=k[0],S=(k[1],Object(n.useState)(j.bamboo.totalQuantity)),q=Object(i.a)(S,2),C=(q[0],q[1],Object(n.useState)(j.black.totalQuantity)),Q=Object(i.a)(C,2),B=(Q[0],Q[1],Object(n.useState)(j.mahogany.totalQuantity)),L=Object(i.a)(B,2),M=(L[0],L[1],Object(n.useState)(j.bamboo.quantitySold)),R=Object(i.a)(M,2),F=(R[0],R[1],Object(n.useState)(j.black.quantitySold)),P=Object(i.a)(F,2),Y=(P[0],P[1],Object(n.useState)(j.mahogany.quantitySold)),A=Object(i.a)(Y,2),T=(A[0],A[1],Object(n.useState)(j.bamboo.amount)),E=Object(i.a)(T,2),I=(E[0],E[1],Object(n.useState)(j.black.amount)),$=Object(i.a)(I,2),H=($[0],$[1],Object(n.useState)(j.mahogany.amount)),z=Object(i.a)(H,2);z[0],z[1];return Object(r.jsx)(b.Provider,{value:{fundRequired:c,setfundRequired:s,fundCollected:u,setFundCollected:m,totalBackers:y,settotalBackers:g,daysLeft:f,setdaysLeft:v,pledge:w},children:e})},h=a(10),y=a.n(h),g=function(t){return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"my-12 lg:px-4 lg:py-8 lg:mx-8 lg:mt-4 lg:mb-6  cursor-pointer select-none",children:[Object(r.jsx)("input",{id:t.radio,type:"radio",name:"radio",className:"hidden",disabled:0===t.quantityLeft}),Object(r.jsxs)("label",{htmlFor:t.radio,className:"flex justify-around p-2 border-2 border-gray-400 rounded-lg cursor-pointer",children:[Object(r.jsx)("span",{className:"w-16 h-4 lg:w-12 lg:h-8  inline-block lg:mr-3 rounded-full border border-grey"}),t.children]})]})})},O={overlay:{backgroundColor:"rgba(0,0,0,0.7)"},content:{width:"50%",height:"50%",top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},p=a.p+"static/media/icon-check.bdee5269.svg",f=function(t){var e=t.setModalIsOpen;return Object(r.jsxs)("div",{className:"flex flex-col justify-center items-center px-2 lg:px-5 m-auto",children:[Object(r.jsx)("img",{src:p,alt:""}),Object(r.jsx)("h1",{className:"text-md lg:text-3xl font-bold mt-4 m-auto text-center",children:"Thanks for your support"}),Object(r.jsx)("p",{className:"text-center my-6",children:"Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed."}),Object(r.jsx)("button",{className:"bg-cyan-moderate hover:bg-cyan-dark text-white rounded-full px-6 py-2 lg:py-4",onClick:function(){return e(!1)},children:"Got it!"})]})},v=function(t){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),l=a[0],c=a[1],s=Object(n.useContext)(b),o=(s.fundRequired,s.fundCollected),d=s.setFundCollected,u=s.totalBackers,m=s.settotalBackers,j=(s.daysLeft,Object(n.useState)(!1)),x=Object(i.a)(j,2),h=x[0],g=x[1],p=t.name,v=t.amount,N=t.description,k=t.totalQuantity,w=t.quantitySold,S=k&&k-w,q=Object(n.useState)(v),C=Object(i.a)(q,2),Q=C[0],B=C[1];return Object(r.jsx)("div",{className:0!==S?"opacity-100":"opacity-50",children:Object(r.jsx)("div",{className:"bg-white",children:Object(r.jsx)("div",{className:"",children:Object(r.jsxs)("div",{className:"modal",onClick:function(){c(!0)},children:[Object(r.jsxs)("div",{className:"modal-header",children:[Object(r.jsxs)("div",{className:"flex justify-between items-start",children:[Object(r.jsxs)("div",{className:"flex flex-col text-left text-md lg:text-xl font-bold items-center lg:items-start lg:flex-row",style:{alignItems:"start"},children:[Object(r.jsx)("h1",{className:"m-0 lg:mr-4",children:p}),Object(r.jsxs)("h4",{className:"text-cyan-moderate",children:["Pledge $",v," or more"]})]}),Object(r.jsxs)("div",{className:k?"hidden lg:flex items-center":"hidden",children:[Object(r.jsx)("h1",{className:" text-3xl md:text-3xl font-bold mr-2",children:S}),Object(r.jsx)("p",{className:"text-sm text-gray-500",children:"left"})]})]}),Object(r.jsx)("p",{className:"text-gray-500 text-md lg:text-xl my-4",children:N}),Object(r.jsxs)("div",{className:k?"flex lg:hidden items-center":"hidden",children:[Object(r.jsx)("h1",{className:" text-3xl md:text-3xl font-bold mr-2",children:S}),Object(r.jsx)("p",{className:"text-sm text-gray-500",children:"left"})]}),Object(r.jsx)("div",{className:"border-b"})]}),Object(r.jsxs)("div",{className:l?"modal-footer flex flex-col lg:flex-row justify-between items-center mt-2 ":"hidden ",children:[Object(r.jsx)("h4",{className:"text-md lg:text-xl text-gray-700",children:"Enter your pledge"}),Object(r.jsxs)("div",{className:"modal-footer-2 flex justify-between items-center items-center",children:[Object(r.jsxs)("div",{className:"flex justify-center items-center border-4 rounded-full text-md lg:text-2xl py-1 lg:py-2  mr-8 border-cyan-dark w-24 lg:w-40 min-w-min",children:[Object(r.jsx)("label",{className:"",children:"$"}),Object(r.jsx)("input",{type:"number",name:"price-input",value:Q,onChange:function(t){B(t.target.value)},className:"focus:outline-none w-1/2 lg:w-4/6","aria-label":"Bamboo Stand Price Input"})]}),Object(r.jsx)("button",{"data-toggle":"modal","data-target":"#exampleModalLong",onClick:function(t){g(!0),d(o+ +Q),m(u+1)},disabled:0===S,className:S?"cursor-pointer bg-cyan-moderate hover:bg-cyan-dark text-white rounded-full p-2 my-2 lg:px-6 lg:py-4 lg:my-6 text -sm lg:text-xl":"cursor-not-allowed bg-gray-400 text-white rounded-full p-2 my-2 lg:px-6 lg:py-4 lg:my-6 text -sm lg:text-xl",children:0===S?"Out of Stock":"Continue"}),Object(r.jsx)(y.a,{isOpen:h,ariaHideApp:!1,onRequestClose:function(){return g(!1)},style:O,children:Object(r.jsx)(f,{setModalIsOpen:g})})]})]})]})})})})},N=function(t){var e=Object(n.useContext)(b),a=e.pledge,l=a.volunteer,c=a.bamboo,s=a.black,o=a.mahogany,d=(e.fundCollected,e.setFundCollected,Object(n.useState)(!1)),u=Object(i.a)(d,2),m=u[0],x=u[1],h=t.name,O=t.amount,p=t.description,f=t.totalQuantity,N=t.quantitySold,k=f&&f-N,w=function(t){};return Object(r.jsxs)("div",{className:k?"opacity-100":"opacity-50",id:"discover",children:[Object(r.jsx)("div",{className:" bg-white border-2 rounded px-4 py-2 my-6",children:Object(r.jsxs)("div",{className:"",children:[Object(r.jsx)("h1",{className:"text-md md:text-3xl font-bold pt-8",children:h}),Object(r.jsxs)("h4",{className:"text-md text-cyan-moderate",children:["Pledge $",O," or more"]}),Object(r.jsx)("p",{className:"text-gray-500 my-4",children:p}),Object(r.jsxs)("div",{className:"lg:flex lg:justify-between",children:[Object(r.jsxs)("div",{className:f?"flex items-center":"hidden",children:[Object(r.jsx)("h1",{className:"text-3xl md:text-3xl font-bold mr-2",children:k}),Object(r.jsx)("p",{className:"text-sm text-gray-500",children:"left"})]}),Object(r.jsx)("button",{"data-toggle":"modal","data-target":"#exampleModalLong",disabled:0===k,onClick:function(){return x(!0)},className:k?"cursor-pointer bg-cyan-moderate hover:bg-cyan-dark text-white rounded-full px-6 py-2 my-6":"cursor-not-allowed bg-gray-400 text-white rounded-full px-6 py-2 my-6",children:0===k?"Out of Stock":"Select Reward"})]})]})}),Object(r.jsxs)(y.a,{isOpen:m,ariaHideApp:!1,onRequestClose:function(){return x(!1)},style:{overlay:{backgroundColor:"rgba(0,0,0,0.7)"},content:{color:"gray",width:"80vw",margin:"auto"}},children:[Object(r.jsx)("div",{className:"flex justify-end items-start sticky top-10 right-0",children:Object(r.jsx)("button",{className:"p-1 rounded-full border-2",onClick:function(){return x(!1)},children:"\u274c"})}),Object(r.jsx)("h1",{className:"text-xl lg:text-4xl font-bold m-1 lg:mx-8 lg:mt-8 lg:mb-6",children:"Back this project"}),Object(r.jsx)("p",{className:"m-1 text-sm lg:text-xl lg:mx-8",children:"Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?"}),Object(r.jsx)(g,{radio:"radio1",quantityLeft:j.bamboo.totalQuantity-j.bamboo.quantitySold,children:Object(r.jsx)(v,{name:l.name,amount:l.amount,totalQuantity:l.totalQuantity,quantitySold:l.quantitySold,description:l.description,onClick:w})}),Object(r.jsx)(g,{radio:"radio2",quantityLeft:j.bamboo.totalQuantity-j.bamboo.quantitySold,children:Object(r.jsx)(v,{name:c.name,amount:c.amount,description:c.description,totalQuantity:c.totalQuantity,quantitySold:c.quantitySold,onClick:w})}),Object(r.jsx)(g,{radio:"radio3",quantityLeft:j.black.totalQuantity-j.black.quantitySold,children:Object(r.jsx)(v,{name:s.name,amount:s.amount,description:s.description,totalQuantity:s.totalQuantity,quantitySold:s.quantitySold,onClick:w})}),Object(r.jsx)(g,{radio:"radio4",quantityLeft:j.mahogany.totalQuantity-j.mahogany.quantitySold,children:Object(r.jsx)(v,{name:o.name,amount:o.amount,description:o.description,totalQuantity:o.totalQuantity,quantitySold:o.quantitySold,onClick:w})})]})]})},k=function(){var t=Object(n.useContext)(b).pledge,e=t.bamboo,a=t.black,l=t.mahogany;return Object(r.jsx)("div",{className:"my-16",id:"about",children:Object(r.jsxs)("div",{className:"w-5/6 md:w-1/2 m-auto bg-white rounded px-10 py-6",children:[Object(r.jsxs)("div",{className:"",children:[Object(r.jsx)("h1",{className:"text-2xl md:text-3xl font-bold pt-8",children:"About this project"}),Object(r.jsx)("p",{className:"text-gray-500 my-6",children:"The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand."}),Object(r.jsx)("p",{className:"text-gray-500 my-6",children:"Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand."})]}),Object(r.jsx)(N,{name:e.name,amount:e.amount,description:e.description,totalQuantity:e.totalQuantity,quantitySold:e.quantitySold}),Object(r.jsx)(N,{name:a.name,amount:a.amount,description:a.description,totalQuantity:a.totalQuantity,quantitySold:a.quantitySold}),Object(r.jsx)(N,{name:l.name,amount:l.amount,description:l.description,totalQuantity:l.totalQuantity,quantitySold:l.quantitySold})]})})},w=function(){var t=Object(n.useContext)(b),e=t.fundRequired,a=t.fundCollected,l=t.totalBackers,c=t.daysLeft,s=10-Math.ceil((e-a)/e*10);return Object(r.jsx)("div",{className:"my-16",children:Object(r.jsxs)("div",{className:"w-5/6 md:w-1/2 m-auto bg-white rounded px-10 py-6",children:[Object(r.jsxs)("div",{className:"flex flex-col items-center text-center divide-y divide-gray-400 lg:flex-row lg:justify-around lg:divide-x lg:divide-y-0",children:[Object(r.jsxs)("div",{className:"py-6 lg:w-1/3",children:[Object(r.jsxs)("h1",{className:"text-3xl tracking-tight font-bold",children:["$",a]}),Object(r.jsxs)("p",{className:"text-gray2",children:["of $",e," backed"]})]}),Object(r.jsxs)("div",{className:"py-6 lg:w-1/3",children:[Object(r.jsx)("h1",{className:"text-3xl tracking-tight font-bold",children:l}),Object(r.jsx)("p",{className:"text-gray2",children:"total backers"})]}),Object(r.jsxs)("div",{className:"py-6 lg:w-1/3",children:[Object(r.jsx)("h1",{className:"text-3xl tracking-tight font-bold",children:c}),Object(r.jsx)("p",{className:"text-gray2",children:"days left"})]})]}),Object(r.jsxs)("div",{className:"my-6 h-3 relative  rounded-full overflow-hidden",children:[Object(r.jsx)("div",{className:"w-full h-full bg-gray-200 rounded-full absolute"}),Object(r.jsx)("div",{className:"h-full bg-cyan-moderate absolute rounded-full",style:{width:"".concat(s,"%")}})]})]})})},S=a.p+"static/media/logo-mastercraft.dca2a831.svg",q=function(){var t=Object(n.useState)(!1),e=Object(i.a)(t,2),a=e[0],l=e[1],c=Object(n.useState)("Bookmark"),s=Object(i.a)(c,2),o=s[0],d=s[1],u=Object(n.useState)(!1),m=Object(i.a)(u,2),j=m[0],x=m[1],h=function(){"Bookmark"===o?(d("Bookmarked"),x(!j)):(d("Bookmark"),x(!j))},O=Object(n.useContext)(b).pledge,p=O.volunteer,f=O.bamboo,N=O.black,k=O.mahogany,w=function(t){console.log("popupClicked")};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"text-center",children:[Object(r.jsx)("div",{className:"flex justify-center items-center",children:Object(r.jsx)("div",{className:"",children:Object(r.jsx)("img",{className:"-mt-7",src:S,alt:""})})}),Object(r.jsx)("h1",{className:"text-2xl md:text-3xl font-bold pt-8",children:"Mastercraft Bamboo Monitor Riser"}),Object(r.jsx)("p",{className:"text-gray2 text-sm mt-5",children:"A beautiful & handcrafted monitor stand to reduce neck and eye strain."})]}),Object(r.jsxs)("div",{className:"flex justify-between items-center mt-5",children:[Object(r.jsx)("button",{className:"\r bg-cyan-moderate\r hover:bg-cyan-dark\r text-white\r rounded-full px-3 font-bold text-xs lg:text-lg py-4 lg:py-4 lg:px-5",onClick:function(){return l(!0)},children:"Back this project"}),Object(r.jsxs)(y.a,{isOpen:a,ariaHideApp:!1,onRequestClose:function(){return l(!1)},style:{overlay:{backgroundColor:"rgba(0,0,0,0.7)"},content:{color:"gray",width:"80vw",margin:"auto"}},children:[Object(r.jsx)("div",{className:"flex justify-end items-start sticky top-10 right-0",children:Object(r.jsx)("button",{className:"p-1 rounded-full border-2",onClick:function(){return l(!1)},children:"\u274c"})}),Object(r.jsx)("h1",{className:"text-xl lg:text-4xl font-bold m-1 lg:mx-8 lg:mt-8 lg:mb-6",children:"Back this project"}),Object(r.jsx)("p",{className:"m-1 text-sm lg:text-xl lg:mx-8",children:"Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?"}),Object(r.jsx)(g,{radio:"radio1",quantityLeft:f.totalQuantity-f.quantitySold,children:Object(r.jsx)(v,{name:p.name,amount:p.amount,description:p.description,onClick:w})}),Object(r.jsx)(g,{radio:"radio2",quantityLeft:f.totalQuantity-f.quantitySold,children:Object(r.jsx)(v,{name:f.name,amount:f.amount,description:f.description,totalQuantity:f.totalQuantity,quantitySold:f.quantitySold,onClick:w})}),Object(r.jsx)(g,{radio:"radio3",quantityLeft:N.totalQuantity-N.quantitySold,children:Object(r.jsx)(v,{name:N.name,amount:N.amount,description:N.description,totalQuantity:N.totalQuantity,quantitySold:N.quantitySold,onClick:w})}),Object(r.jsx)(g,{radio:"radio4",quantityLeft:k.totalQuantity-k.quantitySold,children:Object(r.jsx)(v,{name:k.name,amount:k.amount,description:k.description,totalQuantity:k.totalQuantity,quantitySold:k.quantitySold,onClick:w})})]}),Object(r.jsxs)("div",{id:"bookmark",className:"flex items-center",children:[Object(r.jsx)("div",{id:"icon",className:"mr-neg15 z-0",children:Object(r.jsx)("svg",{width:"56",height:"56",xmlns:"http://www.w3.org/2000/svg",onClick:h,children:Object(r.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[Object(r.jsx)("circle",{fill:j?"hsl(176, 72%, 28%)":"#2F2F2F",cx:"28",cy:"28",r:"28"}),Object(r.jsx)("path",{fill:j?"#fff":"#B1B1B1",d:"M23 19v18l5-5.058L33 37V19z"})]})})}),Object(r.jsx)("button",{id:"text",className:j?"rounded-r-full py-3 px-6 -ml-5 font-bold hidden md:block text-cyan-dark bg-gray-200":"rounded-r-full py-3 px-6 -ml-5 font-bold hidden md:block bg-gray-300",onClick:h,children:o})]})]})]})},C=function(){var t=Object(n.useContext)(b),e=t.pledge,a=(e.bamboo,e.black,e.mahogany,t.fundRequired),l=(t.setfundRequired,t.fundCollected),c=(t.setFundCollected,t.totalBackers),s=(t.settotalBackers,t.daysLeft);t.setdaysLeft;return Object(r.jsxs)("div",{className:"",children:[Object(r.jsx)("div",{className:"relative w-5/6 md:w-1/2 mx-auto bg-white rounded-lg px-10 pb-16 mb-6 -mt-20",children:Object(r.jsx)(q,{})}),Object(r.jsx)(w,{fundRequired:a,fundCollected:l,totalBackers:c,daysLeft:s}),Object(r.jsx)(k,{}),Object(r.jsx)("div",{className:"flex justify-end",children:Object(r.jsx)("a",{href:"#hero",className:"btn mb-10 rounded-full p-4 bg-cyan-dark text-white mr-5 align-left",children:"Top"})})]})};var Q=function(){return Object(r.jsxs)(o.a,{children:[Object(r.jsx)(u,{}),Object(r.jsx)(m.a,{path:"/crowdfund/",children:Object(r.jsx)(C,{})})]})},B=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,47)).then((function(e){var a=e.getCLS,n=e.getFID,l=e.getFCP,c=e.getLCP,s=e.getTTFB;a(t),n(t),l(t),c(t),s(t)}))};s.a.render(Object(r.jsx)(l.a.StrictMode,{children:Object(r.jsx)(x,{children:Object(r.jsx)(Q,{})})}),document.getElementById("root")),B()}},[[46,1,2]]]);
//# sourceMappingURL=main.95c93fb8.chunk.js.map