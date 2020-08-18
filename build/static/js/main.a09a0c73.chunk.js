(this["webpackJsonpspacex-cargo-planner"]=this["webpackJsonpspacex-cargo-planner"]||[]).push([[0],{18:function(e,a,t){e.exports=t(39)},23:function(e,a,t){},24:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(16),r=t.n(c),o=(t(23),t(6)),i=t(7),s=t(1),u=(t(24),function(e){return l.a.createElement("div",{className:"cargo-list"},l.a.createElement("ul",null,function(){var a=e.searchTerm.replace(/\s+/g," ").trim().toLowerCase(),t=e.data.filter((function(e){return e.name.toLowerCase().match(a)}));return 0!==t.length?t.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement(i.b,{to:"/".concat(e.id)},e.name))})):l.a.createElement("h1",null,"No Results!")}()))}),m=t(9),d=(t(30),function(e,a){switch(a.type){case"INITIAL":return{value:a.val,validity:v(a.val),selectedCargo:a.selectedCargo};case"UPDATE":return Object(m.a)(Object(m.a)({},e),{},{value:a.val,validity:v(a.val)});case"NO-DATA":return Object(m.a)(Object(m.a)({},e),{},{selectedCargo:null});case"TOUCH":return Object(m.a)(Object(m.a)({},e),{},{touched:!0});default:return e}}),v=function(e){if(e){var a=e.trim().split(","),t=new RegExp(/^\s*-?\d+(\.\d{1,2})?\s*$/),n=!0,l=0;for(var c in a)(n=n&&t.test(a[c]))&&(l+=Number(a[c]));return{valid:n,cargoBays:Math.ceil(l/10)}}return{valid:!1,cargoBays:0}},E=function(e){var a=Object(n.useReducer)(d,{value:"",selectedCargo:[],validity:{valid:!1,cargoBays:0},touched:!1}),t=Object(o.a)(a,2),c=t[0],r=t[1],i=Object(s.g)().cargoId,u=e.data;Object(n.useEffect)((function(){if(u&&0!==u.length){var e=u.filter((function(e){return e.id===i}));0!==e.length&&r({type:"INITIAL",val:e[0].boxes?e[0].boxes:0,selectedCargo:e[0]})}else r({type:"NO-DATA"})}),[u,i]);return c.selectedCargo&&0!==c.selectedCargo.length?l.a.createElement("div",{className:"cargo-info"},l.a.createElement("div",{className:"cargo-info-card"},l.a.createElement("div",{className:"header"},l.a.createElement("h1",null,c.selectedCargo.name),l.a.createElement("p",null,c.selectedCargo.email)),l.a.createElement("div",{className:"content"},l.a.createElement("h2",null,"Number of required cargo bays"),l.a.createElement("h3",null,c.validity.cargoBays))),l.a.createElement("form",null,l.a.createElement("label",null,"Cargo boxes"),l.a.createElement("input",{id:"cargo-detail",type:"text",className:c.validity.valid?"":"error",placeholder:"Boxes",value:c.value,onChange:function(e){r({type:"UPDATE",val:e.target.value})},onBlur:function(e){r({type:"TOUCH",val:e.target.value})}}),l.a.createElement("button",{className:"primary",type:"submit",disabled:!c.validity.valid,onClick:function(a){a.preventDefault(),e.saveHandler(c.selectedCargo.id,c.value)}},"SAVE"))):l.a.createElement("h1",{style:{alignSelf:"center",margin:"0 20px"}},"Please select company from the list")},f=(t(31),t(32),function(e){return l.a.createElement("div",{className:"navigation-items"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("div",{className:"button",onClick:e.loadHandler},"Load")),l.a.createElement("li",null,l.a.createElement("div",{className:"button",onClick:e.saveHandler},"Save"))))}),g=(t(33),function(e){return l.a.createElement("div",{className:"navigation-mobile"},l.a.createElement("div",{className:"menu-button ".concat(e.open?"active":"close"),onClick:e.onClick},l.a.createElement("span",{className:"line top"}),l.a.createElement("span",{className:"line middle"}),l.a.createElement("span",{className:"line bottom"})))}),p=(t(34),function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"menu ".concat(e.open&&"active"),id:"drag"},l.a.createElement(g,{open:e.open,onClick:e.onClick}),l.a.createElement(f,{saveHandler:e.saveHandler,loadHandler:e.loadHandler})))}),b=(t(35),function(e){return l.a.createElement("div",{className:"overlay ".concat(e.open?"active":""),onClick:e.onClick})}),h=function(e){var a=Object(n.useState)(!1),t=Object(o.a)(a,2),c=t[0],r=t[1],s=function(){r(!1)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(p,{open:c,onClick:s,saveHandler:e.saveHandler,loadHandler:e.loadHandler}),l.a.createElement(b,{open:c,onClick:s}),l.a.createElement("div",{className:"navigation"},l.a.createElement("div",{className:"brand"},l.a.createElement(i.b,{to:"/"},"spacex")),l.a.createElement("div",{className:"spacex-input"},l.a.createElement("input",{id:"search",type:"text",placeholder:"Search here..",onChange:e.searchHandler})),l.a.createElement("div",{className:"spacer"}),l.a.createElement(f,{saveHandler:e.saveHandler,loadHandler:e.loadHandler}),l.a.createElement(g,{open:c,onClick:function(){r(!0)}})))},N=(t(36),function(){return l.a.createElement("div",{className:"spinner-container"},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null))}),C=(t(37),function(e){return l.a.createElement("div",{className:"modal-container",onClick:e.onDrop},l.a.createElement("div",{className:"message-content",onClick:function(e){return e.stopPropagation()}},e.loading?l.a.createElement(N,null):null,e.error?l.a.createElement("h1",{style:{color:"rgb(240, 82, 43)"}},e.error):l.a.createElement("h1",null,e.message),e.onDecline?l.a.createElement("div",{className:"actions"},l.a.createElement("button",{className:"confirm decline",onClick:e.onDecline},"CANCEL"),l.a.createElement("button",{className:"confirm ok",onClick:e.onAgree},"OK")):l.a.createElement("div",{className:"actions"},l.a.createElement("button",{className:"confirm ok",onClick:e.onAgree},"OK"))))}),y=(t(38),function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(""),m=Object(o.a)(r,2),d=m[0],v=m[1],f=Object(n.useState)(null),g=Object(o.a)(f,2),p=g[0],b=g[1],N=Object(n.useState)(null),y=Object(o.a)(N,2),O=y[0],j=y[1],k=Object(n.useState)(!1),H=Object(o.a)(k,2),x=H[0],A=H[1];Object(n.useEffect)((function(){var e=window.localStorage;if(0!==e.length){var a=JSON.parse(e.getItem("cargo"));c(a)}else b("There is no locally saved data! Hit OK to load new data.")}),[c]);var S=function(e,a){if(a){var n=t.map((function(t){return t.id===e?(t.boxes=a,t):t}));c(n),b("Changes saved successfully.")}else b("All changes saved locally.."),window.localStorage.setItem("cargo",JSON.stringify(t))},w=function(){A(!0),fetch("https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json").then((function(e){if(e.ok)return e.json();throw new Error("Could not load data, try again later!")})).then((function(e){A(!1),j(null),b("Data loaded successfully"),c(e)})).catch((function(e){A(!1),j(e.message),b(e.message)}))};return l.a.createElement(i.a,null,l.a.createElement("header",null,l.a.createElement(h,{searchHandler:function(e){v(e.target.value)},saveHandler:S,loadHandler:w})),0===t.length&&p?l.a.createElement(C,{loading:x,error:O,message:p,onAgree:w}):l.a.createElement("div",{className:"main-container"},p?l.a.createElement(C,{loading:x,error:O,message:p,onAgree:function(){b(null),j(null)},onDrop:function(){j(null),b(null)}}):null,l.a.createElement(u,{data:t,searchTerm:d}),l.a.createElement(s.d,null,l.a.createElement(s.b,{path:"/:cargoId",exact:!0},l.a.createElement(E,{data:t,saveHandler:S})),l.a.createElement(s.a,{to:"/"}))))});r.a.render(l.a.createElement(y,null),document.querySelector("#root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.a09a0c73.chunk.js.map