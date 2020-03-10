(this["webpackJsonpproduction-chain"]=this["webpackJsonpproduction-chain"]||[]).push([[0],{363:function(e,t,n){e.exports=n(470)},460:function(e,t){},462:function(e,t){},470:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(18),l=n(30),c=n(24),o=n(39),u=n(40),m=n(41),s=n(500),p=n(236),h=n(301),f=n(177),y=n(493),d=n(501),b=n(80),g=["N/A","ULV","LV","MV","HV","EV","IV","LuV","ZPMV","UV"],E=[{step:1,machineName:"Wiremill",machineTier:2,overclock:!1,rft:24,time:3.15,efficiency:100,inputs:[{name:"Copper Ingot",quantity:1,unit:"b"}],outputs:[{name:"Copper Wire",quantity:2,unit:"b"}],targetMachines:1},{step:2,machineName:"Wiremill",machineTier:2,overclock:!1,rft:24,time:10,efficiency:100,inputs:[{name:"Copper Wire",quantity:1,unit:"b"}],outputs:[{name:"Fine Copper Wire",quantity:4,unit:"b"}],targetMachines:1},{step:3,machineName:"Macerator",machineTier:2,overclock:!1,rft:48,time:10,efficiency:100,inputs:[{name:"Coal",quantity:1,unit:"b"}],outputs:[{name:"Coal Dust",quantity:1,unit:"b"}],targetMachines:1},{step:4,machineName:"Assembler",machineTier:2,overclock:!1,rft:24,time:8,efficiency:100,inputs:[{name:"Fine Copper Wire",quantity:4,unit:"b"},{name:"Coal Dust",quantity:1,unit:"b"}],outputs:[{name:"Resistor",quantity:12,unit:"b"}],targetMachines:1},{step:5,machineName:"Diamond Furnace",machineTier:0,overclock:!1,rft:0,time:1.28,efficiency:100,inputs:[{name:"Aluminium Dust",quantity:1,unit:"b"}],outputs:[{name:"Aluminium Ingot",quantity:1,unit:"b"}],targetMachines:1},{step:6,machineName:"Compressor",machineTier:2,overclock:!1,rft:40,time:5,efficiency:100,inputs:[{name:"Aluminium Ingot",quantity:1,unit:"b"}],outputs:[{name:"Aluminium Plate",quantity:1,unit:"b"}],targetMachines:1},{step:7,machineName:"Cluster Mill",machineTier:2,overclock:!1,rft:96,time:1.3,efficiency:100,inputs:[{name:"Aluminium Plate",quantity:1,unit:"b"}],outputs:[{name:"Aluminium Foil",quantity:4,unit:"b"}],targetMachines:1},{step:8,machineName:"Assembler",machineTier:3,overclock:!1,rft:384,time:4,efficiency:100,inputs:[{name:"Aluminium Foil",quantity:2,unit:"b"},{name:"Polyethylene Sheet",quantity:1,unit:"b"}],outputs:[{name:"Capacitor",quantity:2,unit:"b"}],targetMachines:1},{step:9,machineName:"Compressor",machineTier:2,overclock:!1,rft:40,time:5,efficiency:100,inputs:[{name:"Tin Ingot",quantity:1,unit:"b"}],outputs:[{name:"Tin Plate",quantity:1,unit:"b"}],targetMachines:1},{step:10,machineName:"Cluster Mill",machineTier:2,overclock:!1,rft:96,time:5.9,efficiency:100,inputs:[{name:"Tin Plate",quantity:1,unit:"b"}],outputs:[{name:"Tin Foil",quantity:4,unit:"b"}],targetMachines:1},{step:11,machineName:"Diamond Furnace",machineTier:0,overclock:!1,rft:0,time:1.28,efficiency:100,inputs:[{name:"Silicon Dust",quantity:1,unit:"b"}],outputs:[{name:"Silicon Ingot",quantity:1,unit:"b"}],targetMachines:1},{step:12,machineName:"Compressor",machineTier:2,overclock:!1,rft:40,time:5,efficiency:100,inputs:[{name:"Silicon Ingot",quantity:1,unit:"b"}],outputs:[{name:"Silicon Plate",quantity:1,unit:"b"}],targetMachines:1},{step:13,machineName:"Pyrolyse Oven",machineTier:3,overclock:!1,rft:120,time:30,efficiency:100,inputs:[{name:"Wood",quantity:16,unit:"b"},{name:"Steam",quantity:4e3,unit:"mb"}],outputs:[{name:"Wood Gas",quantity:1500,unit:"mb"}],targetMachines:1},{step:14,machineName:"Distillery",machineTier:3,overclock:!1,rft:256,time:4,efficiency:100,inputs:[{name:"Wood Gas",quantity:1e3,unit:"mb"}],outputs:[{name:"Ethylene",quantity:20,unit:"mb"}],targetMachines:1},{step:15,machineName:"Chemical Reactor",machineTier:2,overclock:!1,rft:120,time:8,efficiency:100,inputs:[{name:"Ethylene",quantity:144,unit:"mb"},{name:"Air",quantity:1e3,unit:"mb"}],outputs:[{name:"Polyethylene",quantity:144,unit:"mb"}],targetMachines:1},{step:16,machineName:"Assembler",machineTier:2,overclock:!1,rft:96,time:4,efficiency:100,inputs:[{name:"Tin Foil",quantity:6,unit:"b"},{name:"Silicon Plate",quantity:1,unit:"b"},{name:"Polyethylene",quantity:144,unit:"mb"}],outputs:[{name:"Transistor",quantity:8,unit:"b"}],targetMachines:1},{step:17,machineName:"Alloy Smelter",machineTier:2,overclock:!1,rft:64,time:5,efficiency:100,inputs:[{name:"Tin Ingot",quantity:1,unit:"b"},{name:"Iron Ingot",quantity:1,unit:"b"}],outputs:[{name:"Tin Alloy Ingot",quantity:2,unit:"b"}],targetMachines:1},{step:18,machineName:"Wiremill",machineTier:2,overclock:!1,rft:32,time:20,efficiency:100,inputs:[{name:"Tin Alloy Ingot",quantity:1,unit:"b"}],outputs:[{name:"Fine Tin Alloy Wire",quantity:8,unit:"b"}],targetMachines:1},{step:19,machineName:"Blast Furnace",machineTier:3,overclock:!1,rft:480,time:300,efficiency:100,inputs:[{name:"Silicon Dust",quantity:32,unit:"b"},{name:"Tiny Pile of Gallium Dust",quantity:1,unit:"b"}],outputs:[{name:"Monocrystalline Silicon Boule",quantity:1,unit:"b"}],targetMachines:1},{step:20,machineName:"Cutting Saw",machineTier:3,overclock:!1,rft:32,time:20,efficiency:100,inputs:[{name:"Water",quantity:5,unit:"mb"},{name:"Monocrystalline Silicon Boule",quantity:1,unit:"b"}],outputs:[{name:"Wafer",quantity:16,unit:"b"}],targetMachines:1},{step:21,machineName:"Precision Laser Engraver",machineTier:3,overclock:!1,rft:480,time:45,efficiency:100,inputs:[{name:"Wafer",quantity:1,unit:"mb"}],outputs:[{name:"CPU Wafer",quantity:1,unit:"b"}],targetMachines:1},{step:22,machineName:"Cutting Saw",machineTier:3,overclock:!1,rft:32,time:60,efficiency:100,inputs:[{name:"Water",quantity:90,unit:"mb"},{name:"CPU Wafer",quantity:1,unit:"b"}],outputs:[{name:"Central Processing Unit",quantity:8,unit:"b"}],targetMachines:1},{step:23,machineName:"Fluid Solidifier",machineTier:2,overclock:!1,rft:32,time:2,efficiency:100,inputs:[{name:"Polyethylene",quantity:144,unit:"mb"}],outputs:[{name:"Polyethylene Sheet",quantity:1,unit:"b"}],targetMachines:1},{step:24,machineName:"Compressor",machineTier:2,overclock:!1,rft:40,time:5,efficiency:100,inputs:[{name:"Copper Ingot",quantity:1,unit:"b"}],outputs:[{name:"Copper Plate",quantity:1,unit:"b"}],targetMachines:1},{step:25,machineName:"Cluster Mill",machineTier:2,overclock:!1,rft:96,time:3.15,efficiency:100,inputs:[{name:"Copper Plate",quantity:1,unit:"b"}],outputs:[{name:"Copper Foil",quantity:4,unit:"b"}],targetMachines:1},{step:26,machineName:"Chemical Reactor",machineTier:2,overclock:!1,rft:40,time:30,efficiency:100,inputs:[{name:"Water",quantity:2e3,unit:"mb"},{name:"Sulfur Dust",quantity:1,unit:"b"}],outputs:[{name:"Sulfuric Acid",quantity:3e3,unit:"mb"}],targetMachines:1},{step:27,machineName:"Chemical Reactor",machineTier:2,overclock:!1,rft:40,time:30,efficiency:100,inputs:[{name:"Polyethylene Sheet",quantity:1,unit:"b"},{name:"Copper Foil",quantity:1,unit:"b"},{name:"Sulfuric Acid",quantity:125,unit:"mb"}],outputs:[{name:"Plastic Circuit Board",quantity:8,unit:"b"}],targetMachines:1},{step:28,machineName:"Fluid Extractor",machineTier:2,overclock:!1,rft:128,time:4,efficiency:100,inputs:[{name:"Soldering Alloy Ingot",quantity:1,unit:"b"}],outputs:[{name:"Soldering Alloy",quantity:144,unit:"mb"}],targetMachines:1},{step:29,machineName:"Assembler",machineTier:3,overclock:!1,rft:240,time:10,efficiency:100,inputs:[{name:"Resistor",quantity:4,unit:"b"},{name:"Capacitor",quantity:4,unit:"b"},{name:"Transistor",quantity:4,unit:"b"},{name:"Fine Tin Alloy Wire",quantity:4,unit:"b"},{name:"Central Processing Unit",quantity:1,unit:"b"},{name:"Plastic Circuit Board",quantity:1,unit:"b"},{name:"Soldering Alloy",quantity:72,unit:"mb"}],outputs:[{name:"Refined Circuit",quantity:4,unit:"b"}],targetMachines:1}],C={typography:{htmlFontSize:16,fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700},palette:{type:"dark",primary:{light:"#58a5f0",main:"#0277bd",dark:"#004c8c",contrastText:"#fff"},secondary:{light:"#ff5c8d",main:"#d81b60",dark:"#a00037",contrastText:"#000"}}},k=n(15),q=n(119),v=n(293),T=n(507),S=n(342),M=n.n(S);function w(e){return i.a.createElement(i.a.Fragment,null,e.items.map((function(t){return i.a.createElement("div",{key:"_"+e.type+t.name+e.step},t.quantity+t.unit+" "+t.name)})))}var N=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={columns:[{title:"Step",field:"step",readonly:!0,width:50,editable:"never"},{title:"Machine Name",field:"machineName",width:125},{title:"Machine Tier",field:"machineTier",lookup:Object.assign({},g),width:100},{title:"Overclock",field:"overclock",width:75,type:"boolean",render:function(e){return e.overclock.toString().charAt(0).toUpperCase()+e.overclock.toString().slice(1)},editComponent:function(e){return i.a.createElement(T.a,{checked:e.overclock,onChange:function(){return null},value:e.overclock,inputProps:{"aria-label":"secondary checkbox"}})}},{title:"RF/t",field:"rft",width:75,type:"numeric"},{title:"Time (s)",field:"time",width:75,type:"numeric"},{title:"Efficiency (%)",field:"efficiency",width:75,editable:"never"},{title:"Base Inputs",field:"inputs",width:150,render:function(e){return i.a.createElement(w,{items:e.inputs,step:e.step,type:"input"})},editComponent:function(){return i.a.createElement(v.a,{variant:"outlined"},"Modify")}},{title:"Base Outputs",field:"outputs",width:150,render:function(e){return i.a.createElement(w,{items:e.outputs,step:e.step,type:"output"})},editComponent:function(){return i.a.createElement(v.a,{variant:"outlined"},"Modify")}}],recipes:Array.from(n.props.recipes)},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(q.a,{variant:"outlined",my:2},i.a.createElement(M.a,{columns:this.state.columns,data:Array.from(this.props.recipes),options:{sorting:!1,paging:!0,pageSizeOptions:[5,10,15,20],tableLayout:"fixed",actionsColumnIndex:-1,maxBodyHeight:"77vh",showTitle:!1},editable:{onRowUpdate:function(t,n){return new Promise((function(a,i){setTimeout((function(){var i=Object(k.a)(e.state.recipes),r=i.indexOf(n);i[r]=t,e.setState({recipes:i},(function(){return a()})),e.props.handleUpdate({recipes:i}),a()}),1e3)}))},onRowDelete:function(t){return new Promise((function(n,a){setTimeout((function(){var a=Object(k.a)(e.state.recipes),i=a.indexOf(t);a.splice(i,1),e.setState({recipes:a},(function(){return n()})),e.props.handleUpdate({recipes:a}),n()}),1e3)}))}}}))}}]),t}(a.Component),O=n(14),P=n(481),A=n(476),W=n(319),j=n(506),F=n(504),I=n(354),x=n.n(I),R=n(350),D=n.n(R),U=n(351),B=n.n(U),V=n(352),z=n.n(V),H=n(353),L=n.n(H),G=n(495),J=n(502),_=n(497),K=n(496),Z=n(503),Q=n(505),X=i.a.memo((function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(Z.a,null,e.title),i.a.createElement(K.a,null,i.a.createElement(J.a,null,"A production chain calculator inspired by the"," ",i.a.createElement(Q.a,{rel:"noopener noreferrer",target:"_blank",href:"https://kirkmcdonald.github.io/"},"Kirk McDonald calculator")," ","for Factorio. Please ask questions and report bugs at"," ",i.a.createElement(Q.a,{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/SimonNguyen/ProductionChain"},"GitHub"),".")),i.a.createElement(_.a,null,i.a.createElement(v.a,{onClick:e.handleClose,color:"default"},"Close")))})),Y=n(316),$=n(245),ee=i.a.memo((function(e){var t=i.a.useState(""),n=Object(O.a)(t,2),a=n[0],r=n[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(Z.a,null,e.title),i.a.createElement(K.a,null,i.a.createElement(J.a,null,"Paste a recipe string below to import a recipe."),i.a.createElement(Y.a,{multiline:!0,fullWidth:!0,size:"medium",rowsMax:"10",variant:"outlined",value:a,onChange:function(e){r(e.target.value)}})),i.a.createElement(_.a,null,i.a.createElement(v.a,{onClick:e.handleClose,color:"default"},"Close"),i.a.createElement(v.a,{onClick:function(){var t=a.split(","),n=Uint8Array.from(t),i=JSON.parse(Object($.decompress)(n));e.handleRecipes(i)},color:"default"},"Import"),i.a.createElement(v.a,{onClick:function(){var t=JSON.stringify(e.recipes),n=Object($.compress)(t);r(n.toString())},color:"default"},"Export")))})),te=i.a.memo((function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(Z.a,null,e.title),i.a.createElement(K.a,null,i.a.createElement(J.a,null,"This action cannot be undone.")),i.a.createElement(_.a,null,i.a.createElement(_.a,null,i.a.createElement(v.a,{onClick:e.handleClose,color:"default"},"Cancel"),i.a.createElement(v.a,{onClick:function(){return e.handleClear()},color:"default"},"Accept"))))})),ne=i.a.memo((function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(Z.a,null,e.title),i.a.createElement(K.a,null,i.a.createElement(J.a,null,"Enter recipes below.")),i.a.createElement(_.a,null,i.a.createElement(v.a,{onClick:e.handleClose,color:"default"},"Add"),i.a.createElement(v.a,{onClick:e.handleClose,color:"default"},"Close")))})),ae=n(8),ie=n(349),re=n(499),le=n(69),ce=i.a.memo((function(e){var t,n=i.a.useState({checked:"dark"===e.themeType}),a=Object(O.a)(n,2),r=a[0],l=a[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(Z.a,null,e.title),i.a.createElement(K.a,null,i.a.createElement(re.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},i.a.createElement(le.a,{color:"textPrimary",variant:"subtitle1"},"DARK THEME"),i.a.createElement(T.a,{checked:r.checked,onChange:(t="checked",function(n){e.handleTheme(),l(Object(ie.a)({},r,Object(ae.a)({},t,n.target.checked)))})}))),i.a.createElement(_.a,null,i.a.createElement(v.a,{onClick:e.handleClose,color:"default"},"Close")))})),oe=function(e){var t=e.contentType,n=e.isOpen,a=e.recipes,r=e.size,l=e.themeType,c=e.title,o=e.handleClose,u=e.handleClear,m=e.handleRecipes,s=e.handleTheme;return i.a.createElement(G.a,{fullWidth:!0,maxWidth:r,open:n,onClose:o},"about"===t?i.a.createElement(X,{title:c,handleClose:o}):"import"===t?i.a.createElement(ee,{title:c,handleClose:o,handleRecipes:m,recipes:a}):"clear"===t?i.a.createElement(te,{title:c,handleClear:u,handleClose:o}):"add"===t?i.a.createElement(ne,{title:c,handleClose:o}):"settings"===t?i.a.createElement(ce,{title:c,handleClose:o,handleTheme:s,themeType:l}):i.a.createElement(J.a,null,"No valid content type selected."))},ue=i.a.memo((function(e){var t=i.a.useState(!1),n=Object(O.a)(t,2),a=n[0],r=n[1],l=i.a.useState(""),c=Object(O.a)(l,2),o=c[0],u=c[1],m=i.a.useState(""),s=Object(O.a)(m,2),p=s[0],h=s[1],f=i.a.useState("xs"),y=Object(O.a)(f,2),d=y[0],b=y[1],g=function(e,t,n){h(e),u(t),b(n),r(!0)};return i.a.createElement(i.a.Fragment,null,i.a.createElement(P.a,null,i.a.createElement(A.a,{button:!0,onClick:function(){return g("about","About","xs")}},i.a.createElement(j.a,null,i.a.createElement(D.a,null)),i.a.createElement(W.a,{primary:"About",primaryTypographyProps:{noWrap:!0}})),i.a.createElement(A.a,{button:!0,onClick:function(){return g("import","Import or export a recipe list","sm")}},i.a.createElement(j.a,null,i.a.createElement(B.a,null)),i.a.createElement(W.a,{primary:"Import/Export Recipe",primaryTypographyProps:{noWrap:!0}})),i.a.createElement(A.a,{button:!0,onClick:function(){return g("clear","Are you sure you want to clear all recipes?","xs")}},i.a.createElement(j.a,null,i.a.createElement(z.a,null)),i.a.createElement(W.a,{primary:"Clear Recipes",primaryTypographyProps:{noWrap:!0}})),i.a.createElement(A.a,{button:!0,onClick:function(){return g("add","Add a recipe","md")}},i.a.createElement(j.a,null,i.a.createElement(L.a,null)),i.a.createElement(W.a,{primary:"Add Recipe",primaryTypographyProps:{noWrap:!0}})),i.a.createElement(F.a,{style:{margin:"12px 0"}}),i.a.createElement(A.a,{button:!0,onClick:function(){return g("settings","Settings","xs")}},i.a.createElement(j.a,null,i.a.createElement(x.a,null)),i.a.createElement(W.a,{primary:"Settings",primaryTypographyProps:{noWrap:!0}}))),i.a.createElement(oe,{contentType:p,isOpen:a,recipes:e.recipes,size:d,themeType:e.themeType,title:o,handleClear:function(){e.handleClear(),r(!1)},handleClose:function(){r(!1)},handleRecipes:e.handleRecipes,handleTheme:e.handleTheme}))})),me=n(5),se=Object(me.a)((function(){return{header:{fontWeight:700,minWidth:0,fontSize:18},grow:{flexGrow:1}}}))((function(e){var t=e.classes;return i.a.createElement(le.a,{noWrap:!0,color:"textPrimary",className:t.header},"Production Chain")})),pe={sidebar:{anchor:"left",width:256,variant:"permanent",collapsible:!0,collapsedWidth:64},content:{persistentBehavior:"fit"},header:{position:"fixed",clipped:!1,persistentBehavior:"fit",offsetHeight:64}},he=function(e){function t(e){var n;Object(l.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).toggleDarkTheme=function(){var e=n.state.theme;"light"===e.palette.type?(window.localStorage.setItem("theme","dark"),e.palette.type="dark"):(window.localStorage.setItem("theme","light"),e.palette.type="light"),n.setState({theme:e})},n.handleCollapse=function(e){window.localStorage.setItem("collapsed",!e),n.setState({collapsed:!e})},n.handleClear=function(){var e=n.state.recipes;e.length=0,n.setState({recipes:e})},n.handleUpdate=function(e){var t=Array.from(e);n.setState({recipes:t})};var a=window.localStorage.getItem("theme"),i=window.localStorage.getItem("collapsed");return null===a?window.localStorage.setItem("theme","dark"):"light"===a?C.palette.type="light":"dark"===a&&(C.palette.type="dark"),null===i&&window.localStorage.setItem("collapsed","false"),n.state={theme:C,headers:Headers,recipes:E,collapsed:"true"===i},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=Object(f.a)(this.state.theme);return i.a.createElement(y.a,{theme:t},i.a.createElement(d.a,null),i.a.createElement(b.e,{theme:t,config:pe,initialCollapsed:this.state.collapsed},(function(t){var n=t.sidebarStyles,a=t.collapsed;return i.a.createElement(i.a.Fragment,null,i.a.createElement(b.d,null,i.a.createElement(h.a,null,i.a.createElement(b.g,{className:b.i.leftTrigger},i.a.createElement(b.h,null)),i.a.createElement(se,null))),i.a.createElement(b.f,null,i.a.createElement("div",{className:n.container},i.a.createElement(ue,{handleTheme:e.toggleDarkTheme,handleRecipes:e.handleUpdate,handleClear:e.handleClear,recipes:e.state.recipes,themeType:e.state.theme.palette.type})),i.a.createElement(b.a,{onClick:function(){return e.handleCollapse(a)}},i.a.createElement(b.b,null))),i.a.createElement(b.c,null,i.a.createElement(s.a,{maxWidth:"xl"},i.a.createElement(p.a,{my:2},i.a.createElement(N,{recipes:e.state.recipes,handleUpdate:e.handleUpdate,onChangeOC:e.handleOverclock,onChangeTier:e.handleTier})))))})))}}]),t}(a.Component);Object(r.render)(i.a.createElement(i.a.Fragment,null,i.a.createElement(he,null)),document.querySelector("#root"))}},[[363,1,2]]]);
//# sourceMappingURL=main.71fc815d.chunk.js.map