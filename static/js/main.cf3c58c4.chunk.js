(this["webpackJsonpproduction-chain"]=this["webpackJsonpproduction-chain"]||[]).push([[0],{363:function(e,t,a){e.exports=a(470)},460:function(e,t){},462:function(e,t){},470:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(18),l=a(26),o=a(23),c=a(33),u=a(34),m=a(35),s=a(500),p=a(236),h=a(301),d=a(177),f=a(493),b=a(501),y=a(80),g=["N/A","ULV","LV","MV","HV","EV","IV","LuV","ZPMV","UV"],E=[{step:1,machineName:"Wiremill",machineTier:2,overclock:!1,rft:24,time:3.15,inputs:[{name:"Copper Ingot",quantity:1,unit:"b"}],outputs:[{name:"Copper Wire",quantity:2,unit:"b"}],targetMachines:1},{step:2,machineName:"Wiremill",machineTier:2,overclock:!1,rft:24,time:10,inputs:[{name:"Copper Wire",quantity:1,unit:"b"}],outputs:[{name:"Fine Copper Wire",quantity:4,unit:"b"}],targetMachines:1},{step:3,machineName:"Macerator",machineTier:2,overclock:!1,rft:48,time:10,inputs:[{name:"Coal",quantity:1,unit:"b"}],outputs:[{name:"Coal Dust",quantity:1,unit:"b"}],targetMachines:1},{step:4,machineName:"Assembler",machineTier:2,overclock:!1,rft:24,time:8,inputs:[{name:"Fine Copper Wire",quantity:4,unit:"b"},{name:"Coal Dust",quantity:1,unit:"b"}],outputs:[{name:"Resistor",quantity:12,unit:"b"}],targetMachines:1},{step:5,machineName:"Diamond Furnace",machineTier:0,overclock:!1,rft:0,time:1.28,inputs:[{name:"Aluminium Dust",quantity:1,unit:"b"}],outputs:[{name:"Aluminium Ingot",quantity:1,unit:"b"}],targetMachines:1},{step:6,machineName:"Compressor",machineTier:2,overclock:!1,rft:40,time:5,inputs:[{name:"Aluminium Ingot",quantity:1,unit:"b"}],outputs:[{name:"Aluminium Plate",quantity:1,unit:"b"}],targetMachines:1},{step:7,machineName:"Cluster Mill",machineTier:2,overclock:!1,rft:96,time:1.3,inputs:[{name:"Aluminium Plate",quantity:1,unit:"b"}],outputs:[{name:"Aluminium Foil",quantity:4,unit:"b"}],targetMachines:1},{step:8,machineName:"Assembler",machineTier:3,overclock:!1,rft:384,time:4,inputs:[{name:"Aluminium Foil",quantity:2,unit:"b"},{name:"Polyethylene Sheet",quantity:1,unit:"b"}],outputs:[{name:"Capacitor",quantity:2,unit:"b"}],targetMachines:1},{step:9,machineName:"Compressor",machineTier:2,overclock:!1,rft:40,time:5,inputs:[{name:"Tin Ingot",quantity:1,unit:"b"}],outputs:[{name:"Tin Plate",quantity:1,unit:"b"}],targetMachines:1},{step:10,machineName:"Cluster Mill",machineTier:2,overclock:!1,rft:96,time:5.9,inputs:[{name:"Tin Plate",quantity:1,unit:"b"}],outputs:[{name:"Tin Foil",quantity:4,unit:"b"}],targetMachines:1},{step:11,machineName:"Diamond Furnace",machineTier:0,overclock:!1,rft:0,time:1.28,inputs:[{name:"Silicon Dust",quantity:1,unit:"b"}],outputs:[{name:"Silicon Ingot",quantity:1,unit:"b"}],targetMachines:1},{step:12,machineName:"Compressor",machineTier:2,overclock:!1,rft:40,time:5,inputs:[{name:"Silicon Ingot",quantity:1,unit:"b"}],outputs:[{name:"Silicon Plate",quantity:1,unit:"b"}],targetMachines:1},{step:13,machineName:"Pyrolyse Oven",machineTier:3,overclock:!1,rft:120,time:30,inputs:[{name:"Wood",quantity:16,unit:"b"},{name:"Steam",quantity:4e3,unit:"mb"}],outputs:[{name:"Wood Gas",quantity:1500,unit:"mb"}],targetMachines:1},{step:14,machineName:"Distillery",machineTier:3,overclock:!1,rft:256,time:4,inputs:[{name:"Wood Gas",quantity:1e3,unit:"mb"}],outputs:[{name:"Ethylene",quantity:20,unit:"mb"}],targetMachines:1},{step:15,machineName:"Chemical Reactor",machineTier:2,overclock:!1,rft:120,time:8,inputs:[{name:"Ethylene",quantity:144,unit:"mb"},{name:"Air",quantity:1e3,unit:"mb"}],outputs:[{name:"Polyethylene",quantity:144,unit:"mb"}],targetMachines:1},{step:16,machineName:"Assembler",machineTier:2,overclock:!1,rft:96,time:4,inputs:[{name:"Tin Foil",quantity:6,unit:"b"},{name:"Silicon Plate",quantity:1,unit:"b"},{name:"Polyethylene",quantity:144,unit:"mb"}],outputs:[{name:"Transistor",quantity:8,unit:"b"}],targetMachines:1},{step:17,machineName:"Alloy Smelter",machineTier:2,overclock:!1,rft:64,time:5,inputs:[{name:"Tin Ingot",quantity:1,unit:"b"},{name:"Iron Ingot",quantity:1,unit:"b"}],outputs:[{name:"Tin Alloy Ingot",quantity:2,unit:"b"}],targetMachines:1},{step:18,machineName:"Wiremill",machineTier:2,overclock:!1,rft:32,time:20,inputs:[{name:"Tin Alloy Ingot",quantity:1,unit:"b"}],outputs:[{name:"Fine Tin Alloy Wire",quantity:8,unit:"b"}],targetMachines:1},{step:19,machineName:"Blast Furnace",machineTier:3,overclock:!1,rft:480,time:300,inputs:[{name:"Silicon Dust",quantity:32,unit:"b"},{name:"Tiny Pile of Gallium Dust",quantity:1,unit:"b"}],outputs:[{name:"Monocrystalline Silicon Boule",quantity:1,unit:"b"}],targetMachines:1},{step:20,machineName:"Cutting Saw",machineTier:3,overclock:!1,rft:32,time:20,inputs:[{name:"Water",quantity:5,unit:"mb"},{name:"Monocrystalline Silicon Boule",quantity:1,unit:"b"}],outputs:[{name:"Wafer",quantity:16,unit:"b"}],targetMachines:1},{step:21,machineName:"Precision Laser Engraver",machineTier:3,overclock:!1,rft:480,time:45,inputs:[{name:"Wafer",quantity:1,unit:"mb"}],outputs:[{name:"CPU Wafer",quantity:1,unit:"b"}],targetMachines:1},{step:22,machineName:"Cutting Saw",machineTier:3,overclock:!1,rft:32,time:60,inputs:[{name:"Water",quantity:90,unit:"mb"},{name:"CPU Wafer",quantity:1,unit:"b"}],outputs:[{name:"Central Processing Unit",quantity:8,unit:"b"}],targetMachines:1},{step:23,machineName:"Fluid Solidifier",machineTier:2,overclock:!1,rft:32,time:2,inputs:[{name:"Polyethylene",quantity:144,unit:"mb"}],outputs:[{name:"Polyethylene Sheet",quantity:1,unit:"b"}],targetMachines:1},{step:24,machineName:"Compressor",machineTier:2,overclock:!1,rft:40,time:5,inputs:[{name:"Copper Ingot",quantity:1,unit:"b"}],outputs:[{name:"Copper Plate",quantity:1,unit:"b"}],targetMachines:1},{step:25,machineName:"Cluster Mill",machineTier:2,overclock:!1,rft:96,time:3.15,inputs:[{name:"Copper Plate",quantity:1,unit:"b"}],outputs:[{name:"Copper Foil",quantity:4,unit:"b"}],targetMachines:1},{step:26,machineName:"Chemical Reactor",machineTier:2,overclock:!1,rft:40,time:30,inputs:[{name:"Water",quantity:2e3,unit:"mb"},{name:"Sulfur Dust",quantity:1,unit:"b"}],outputs:[{name:"Sulfuric Acid",quantity:3e3,unit:"mb"}],targetMachines:1},{step:27,machineName:"Chemical Reactor",machineTier:2,overclock:!1,rft:40,time:30,inputs:[{name:"Polyethylene Sheet",quantity:1,unit:"b"},{name:"Copper Foil",quantity:1,unit:"b"},{name:"Sulfuric Acid",quantity:125,unit:"mb"}],outputs:[{name:"Plastic Circuit Board",quantity:8,unit:"b"}],targetMachines:1},{step:28,machineName:"Fluid Extractor",machineTier:2,overclock:!1,rft:128,time:4,inputs:[{name:"Soldering Alloy Ingot",quantity:1,unit:"b"}],outputs:[{name:"Soldering Alloy",quantity:144,unit:"mb"}],targetMachines:1},{step:29,machineName:"Assembler",machineTier:3,overclock:!1,rft:240,time:10,inputs:[{name:"Resistor",quantity:4,unit:"b"},{name:"Capacitor",quantity:4,unit:"b"},{name:"Transistor",quantity:4,unit:"b"},{name:"Fine Tin Alloy Wire",quantity:4,unit:"b"},{name:"Central Processing Unit",quantity:1,unit:"b"},{name:"Plastic Circuit Board",quantity:1,unit:"b"},{name:"Soldering Alloy",quantity:72,unit:"mb"}],outputs:[{name:"Refined Circuit",quantity:4,unit:"b"}],targetMachines:1}],v={typography:{htmlFontSize:16,fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700},palette:{type:"dark",primary:{light:"#58a5f0",main:"#0277bd",dark:"#004c8c",contrastText:"#fff"},secondary:{light:"#ff5c8d",main:"#d81b60",dark:"#a00037",contrastText:"#000"}}},C=a(15),q=a(121),S=a(293),k=a(342),T=a.n(k);function O(e){return i.a.createElement(i.a.Fragment,null,e.items.map((function(t){return i.a.createElement("div",{key:"_"+e.type+t.name+e.step},t.quantity+t.unit+" "+t.name)})))}var N=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={columns:[{title:"Step",field:"step",readonly:!0,editable:"never",width:100},{title:"Machine Name",field:"machineName",width:200},{title:"Machine Tier",field:"machineTier",lookup:Object.assign({},g),width:200},{title:"Overclock",field:"overclock",type:"boolean",customFilterAndSearch:function(e,t){return t.overclock.toString().toUpperCase()===e.toUpperCase()},width:100},{title:"RF/t",field:"rft",type:"numeric",width:100},{title:"Time (s)",field:"time",type:"numeric",width:100},{title:"Base Inputs",field:"inputs",render:function(e){return i.a.createElement(O,{items:e.inputs,step:e.step,type:"input"})},editComponent:function(){return i.a.createElement(S.a,{variant:"outlined"},"Modify")},customFilterAndSearch:function(e,t){var a=!1;return t.inputs.forEach((function(t){Object.values(t).forEach((function(t){t.toString().toUpperCase().includes(e.toUpperCase())&&(a=a||!0)}))})),a}},{title:"Base Outputs",field:"outputs",render:function(e){return i.a.createElement(O,{items:e.outputs,step:e.step,type:"output"})},editComponent:function(){return i.a.createElement(S.a,{variant:"outlined"},"Modify")},customFilterAndSearch:function(e,t){var a=!1;return t.outputs.forEach((function(t){Object.values(t).forEach((function(t){t.toString().toUpperCase().includes(e.toUpperCase())&&(a=a||!0)}))})),a}}],recipes:Array.from(a.props.recipes)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(q.a,{variant:"outlined",my:2},i.a.createElement(T.a,{columns:this.state.columns,data:Array.from(this.props.recipes),options:{actionsColumnIndex:-1,maxBodyHeight:"77vh",paging:!0,pageSizeOptions:[5,10,15,20],showTitle:!1,sorting:!1,tableLayout:"auto"},editable:{onRowUpdate:function(t,a){return new Promise((function(n,i){setTimeout((function(){var i=e.state.recipes,r=i.indexOf(a);i[r]=t,e.setState({recipes:i},(function(){return n()})),e.props.handleUpdate(i),n()}),1e3)}))},onRowDelete:function(t){return new Promise((function(a,n){setTimeout((function(){var n=Object(C.a)(e.state.recipes),i=n.indexOf(t);n.splice(i,1),n.forEach((function(e,t){e.step=t+1})),e.setState({recipes:n},(function(){return a()})),e.props.handleUpdate(n),a()}),1e3)}))}},actions:[{icon:"arrow_upward",tooltip:"Move up",onClick:function(t,a){var n=Object(C.a)(e.state.recipes),i=n.indexOf(a);if(i>0){var r=n[i-1];n[i-1]=n[i],n[i]=r}e.setState({recipes:n}),e.props.handleUpdate(n)}},{icon:"arrow_downward",tooltip:"Move down",onClick:function(t,a){var n=Object(C.a)(e.state.recipes),i=n.indexOf(a);if(i<n.length-1){var r=n[i+1];n[i+1]=n[i],n[i]=r}e.setState({recipes:n}),e.props.handleUpdate(n)}}]}))}}]),t}(n.Component),M=a(11),j=a(481),w=a(476),W=a(319),A=a(506),P=a(504),I=a(354),U=a.n(I),x=a(350),F=a.n(x),R=a(351),D=a.n(R),B=a(352),L=a.n(B),V=a(353),z=a.n(V),H=a(495),G=a(502),_=a(497),J=a(496),Q=a(503),K=a(505),$=i.a.memo((function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(Q.a,null,e.title),i.a.createElement(J.a,null,i.a.createElement(G.a,null,"A production chain calculator inspired by the"," ",i.a.createElement(K.a,{rel:"noopener noreferrer",target:"_blank",href:"https://kirkmcdonald.github.io/"},"Kirk McDonald calculator")," ","for Factorio. Please ask questions and report bugs at"," ",i.a.createElement(K.a,{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/SimonNguyen/ProductionChain"},"GitHub"),".")),i.a.createElement(_.a,null,i.a.createElement(S.a,{onClick:e.handleClose,color:"default"},"Close")))})),Z=a(316),X=a(245),Y=i.a.memo((function(e){var t=i.a.useState(""),a=Object(M.a)(t,2),n=a[0],r=a[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(Q.a,null,e.title),i.a.createElement(J.a,null,i.a.createElement(G.a,null,"Paste a recipe string below to import a recipe."),i.a.createElement(Z.a,{multiline:!0,fullWidth:!0,size:"medium",rowsMax:"10",variant:"outlined",value:n,onChange:function(e){r(e.target.value)}})),i.a.createElement(_.a,null,i.a.createElement(S.a,{onClick:e.handleClose,color:"default"},"Close"),i.a.createElement(S.a,{onClick:function(){var t=n.split(","),a=Uint8Array.from(t),i=JSON.parse(Object(X.decompress)(a));e.handleRecipes(i)},color:"default"},"Import"),i.a.createElement(S.a,{onClick:function(){var t=JSON.stringify(e.recipes),a=Object(X.compress)(t);r(a.toString())},color:"default"},"Export")))})),ee=i.a.memo((function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(Q.a,null,e.title),i.a.createElement(J.a,null,i.a.createElement(G.a,null,"This action cannot be undone.")),i.a.createElement(_.a,null,i.a.createElement(_.a,null,i.a.createElement(S.a,{onClick:e.handleClose,color:"default"},"Cancel"),i.a.createElement(S.a,{onClick:function(){return e.handleClear()},color:"default"},"Accept"))))})),te=a(295),ae=a(239),ne=a(499),ie=a(240),re=a(300),le=a(242),oe=a(321),ce=a(335),ue=a(5),me=/^-?\d+\.?\d*$/,se=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleQuantity=function(e){var t=Number(e.target.value),n=a.state.item;n.quantity=t,a.setState({item:n}),a.props.handleUpdateItems(a.props.id,a.state.item)},a.handleUnit=function(e){var t=e.target.value,n=a.state.item;n.unit=t,a.setState({item:n}),a.props.handleUpdateItems(a.props.id,a.state.item)},a.handleName=function(e){var t=e.target.value,n=a.state.item;n.name=t,a.setState({item:n}),a.props.handleUpdateItems(a.props.id,a.state.item)},a.unitLabelRef=i.a.createRef(),a.state={unitLabelWidth:0,item:{quantity:1,unit:"b",name:""}},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({unitLabelWidth:this.unitLabelRef.current.offsetWidth})}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(ae.a,{className:this.props.classes.formControlSmall},i.a.createElement(Z.a,{error:!me.test(this.props.item.quantity),label:"Quantity",required:!0,type:"number",value:this.state.item.quantity.toString(),variant:"outlined",onChange:this.handleQuantity})),i.a.createElement(ae.a,{variant:"outlined",className:this.props.classes.formControlSmall},i.a.createElement(ie.a,{ref:this.unitLabelRef},"Unit"),i.a.createElement(le.a,{labelWidth:this.state.unitLabelWidth,label:"Unit",placeholder:"b",value:this.state.item.unit,onChange:this.handleUnit},i.a.createElement(re.a,{value:"b"},"b"),i.a.createElement(re.a,{value:"mb"},"mb"))),i.a.createElement(ae.a,{className:this.props.classes.formControl},i.a.createElement(Z.a,{error:!me.test(this.props.item.name),label:"Item Name",required:!0,type:"string",value:this.state.item.name,variant:"outlined",onChange:this.handleName})),i.a.createElement("br",null))}}]),t}(n.Component),pe=Object(ue.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},formControlSmall:{margin:e.spacing(1),maxWidth:100}}}))(se),he=Object(te.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},formControlSmall:{margin:e.spacing(1),maxWidth:100}}}));function de(e,t){var a=e;if(e.length<t)for(var n=e.length;n<t;n++)a.push({name:"",quantity:1,unit:"b"});else a=a.slice(0,t);return a}var fe=i.a.memo((function(e){var t=he(),a=i.a.useState(!1),n=Object(M.a)(a,2),r=n[0],l=n[1],o=i.a.useState(""),c=Object(M.a)(o,2),u=c[0],m=c[1],s=i.a.useState(0),p=Object(M.a)(s,2),h=p[0],d=p[1],f=i.a.useState(0),b=Object(M.a)(f,2),y=b[0],E=b[1],v=i.a.useState(0),C=Object(M.a)(v,2),q=C[0],k=C[1],T=i.a.useState(1),O=Object(M.a)(T,2),N=O[0],j=O[1],w=i.a.useState(1),W=Object(M.a)(w,2),A=W[0],I=W[1],U=i.a.useState([{name:"",quantity:1,unit:"b"}]),x=Object(M.a)(U,2),F=x[0],R=x[1],D=i.a.useState([{name:"",quantity:1,unit:"b"}]),B=Object(M.a)(D,2),L=B[0],V=B[1],z=/^-?\d+\.?\d*$/,H=i.a.useRef(null),K=i.a.useState(0),$=Object(M.a)(K,2),X=$[0],Y=$[1];i.a.useEffect((function(){Y(H.current.offsetWidth)}),[]);var ee=function(e,t){var a=F;a[e]=t,R(a)},te=function(e,t){var a=F;a[e]=t,V(a)};return i.a.createElement(i.a.Fragment,null,i.a.createElement(Q.a,null,e.title),i.a.createElement(J.a,null,i.a.createElement(G.a,null,"Recipe information:"),i.a.createElement(ae.a,{className:t.formControl},i.a.createElement(Z.a,{label:"Machine Name",error:0===u.length,placeholder:"Macerator",required:!0,value:u,variant:"outlined",onChange:function(e){return m(e.target.value)}})),i.a.createElement(ae.a,{variant:"outlined",className:t.formControl},i.a.createElement(ie.a,{ref:H},"Machine Tier"),i.a.createElement(le.a,{label:"Machine Tier",labelWidth:X,value:h,onChange:function(e){return d(e.target.value)}},g.map((function(e,t){return i.a.createElement(re.a,{key:t,value:t},e)})))),i.a.createElement(ae.a,{className:t.formControlSmall},i.a.createElement(Z.a,{error:!z.test(y),label:r?"EU/t":"RF/t",placeholder:y.toString(),required:!0,type:"number",value:y,variant:"outlined",onChange:function(e){return E(Number(e.target.value))}})),i.a.createElement(ae.a,{className:t.formControlSmall},i.a.createElement(Z.a,{error:!z.test(q),label:"Time (s)",placeholder:q.toString(),required:!0,type:"number",value:q,variant:"outlined",onChange:function(e){return k(Number(e.target.value))}})),i.a.createElement(ae.a,{className:t.formControlSmall},i.a.createElement(Z.a,{error:!z.test(N),label:"# Inputs",placeholder:N.toString(),required:!0,type:"number",value:N,variant:"outlined",onChange:function(e){var t;(t=Number(e.target.value))>=0&&(j(t),R((function(e){return de(e,t)})))}})),i.a.createElement(ae.a,{className:t.formControlSmall},i.a.createElement(Z.a,{error:!z.test(A),label:"# Outputs",placeholder:A.toString(),required:!0,type:"number",value:A,variant:"outlined",onChange:function(e){var t;(t=Number(e.target.value))>=0&&(I(t),V((function(e){return de(e,t)})))}})),i.a.createElement(oe.a,{control:i.a.createElement(ce.a,{checked:!0===r,onChange:function(){return l(!r)},value:r,color:"primary"}),label:"Use EU/t",labelPlacement:"top"}),i.a.createElement(P.a,{style:{margin:"12px 0"}}),i.a.createElement(ne.a,{container:!0,direction:"row",justify:"space-between",alignitems:"center"},i.a.createElement(ne.a,{item:!0,xs:6},i.a.createElement(G.a,null,"Inputs: ",0===F.length?"This recipe has no inputs.":"")),i.a.createElement(ne.a,{item:!0,xs:6},i.a.createElement(G.a,null,"Outputs:"," ",0===L.length?"This recipe has no outputs.":""))),i.a.createElement(ne.a,{container:!0,direction:"row",justify:"space-between",alignitems:"center"},i.a.createElement(ne.a,{item:!0,xs:6},F.map((function(e,t){return i.a.createElement(pe,{key:"input"+t,id:t,item:e,handleUpdateItems:ee})}))),i.a.createElement(ne.a,{item:!0,xs:6},L.map((function(e,t){return i.a.createElement(pe,{key:"output"+t,id:t,item:e,handleUpdateItems:te})}))))),i.a.createElement(_.a,null,i.a.createElement(S.a,{onClick:e.handleClose,color:"default"},"Add"),i.a.createElement(S.a,{onClick:e.handleClose,color:"default"},"Close")))})),be=a(8),ye=a(349),ge=a(507),Ee=a(69),ve=i.a.memo((function(e){var t,a=i.a.useState({checked:"dark"===e.themeType}),n=Object(M.a)(a,2),r=n[0],l=n[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(Q.a,null,e.title),i.a.createElement(J.a,null,i.a.createElement(ne.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},i.a.createElement(Ee.a,{color:"textPrimary",variant:"subtitle1"},"DARK THEME"),i.a.createElement(ge.a,{checked:r.checked,onChange:(t="checked",function(a){e.handleTheme(),l(Object(ye.a)({},r,Object(be.a)({},t,a.target.checked)))})}))),i.a.createElement(_.a,null,i.a.createElement(S.a,{onClick:e.handleClose,color:"default"},"Close")))})),Ce=function(e){var t=e.contentType,a=e.isOpen,n=e.recipes,r=e.size,l=e.themeType,o=e.title,c=e.handleClose,u=e.handleClear,m=e.handleRecipes,s=e.handleTheme;return i.a.createElement(H.a,{disableBackdropClick:"add"===t,fullWidth:!0,maxWidth:r,open:a,onClose:c},"about"===t?i.a.createElement($,{title:o,handleClose:c}):"import"===t?i.a.createElement(Y,{title:o,handleClose:c,handleRecipes:m,recipes:n}):"clear"===t?i.a.createElement(ee,{title:o,handleClear:u,handleClose:c}):"add"===t?i.a.createElement(fe,{title:o,handleClose:c}):"settings"===t?i.a.createElement(ve,{title:o,handleClose:c,handleTheme:s,themeType:l}):i.a.createElement(G.a,null,"No valid content type selected."))},qe=i.a.memo((function(e){var t=i.a.useState(!1),a=Object(M.a)(t,2),n=a[0],r=a[1],l=i.a.useState(""),o=Object(M.a)(l,2),c=o[0],u=o[1],m=i.a.useState(""),s=Object(M.a)(m,2),p=s[0],h=s[1],d=i.a.useState("xs"),f=Object(M.a)(d,2),b=f[0],y=f[1],g=function(e,t,a){h(e),u(t),y(a),r(!0)};return i.a.createElement(i.a.Fragment,null,i.a.createElement(j.a,null,i.a.createElement(w.a,{button:!0,onClick:function(){return g("about","About","xs")}},i.a.createElement(A.a,null,i.a.createElement(F.a,null)),i.a.createElement(W.a,{primary:"About",primaryTypographyProps:{noWrap:!0}})),i.a.createElement(w.a,{button:!0,onClick:function(){return g("import","Import or export a recipe list","sm")}},i.a.createElement(A.a,null,i.a.createElement(D.a,null)),i.a.createElement(W.a,{primary:"Import/Export Recipe",primaryTypographyProps:{noWrap:!0}})),i.a.createElement(w.a,{button:!0,onClick:function(){return g("clear","Are you sure you want to clear all recipes?","xs")}},i.a.createElement(A.a,null,i.a.createElement(L.a,null)),i.a.createElement(W.a,{primary:"Clear Recipes",primaryTypographyProps:{noWrap:!0}})),i.a.createElement(w.a,{button:!0,onClick:function(){return g("add","Add a recipe","lg")}},i.a.createElement(A.a,null,i.a.createElement(z.a,null)),i.a.createElement(W.a,{primary:"Add Recipe",primaryTypographyProps:{noWrap:!0}})),i.a.createElement(P.a,{style:{margin:"12px 0"}}),i.a.createElement(w.a,{button:!0,onClick:function(){return g("settings","Settings","xs")}},i.a.createElement(A.a,null,i.a.createElement(U.a,null)),i.a.createElement(W.a,{primary:"Settings",primaryTypographyProps:{noWrap:!0}}))),i.a.createElement(Ce,{contentType:p,isOpen:n,recipes:e.recipes,size:b,themeType:e.themeType,title:c,handleClear:function(){e.handleClear(),r(!1)},handleClose:function(){r(!1)},handleRecipes:e.handleRecipes,handleTheme:e.handleTheme}))})),Se=Object(ue.a)((function(){return{header:{fontWeight:700,minWidth:0,fontSize:18},grow:{flexGrow:1}}}))((function(e){var t=e.classes;return i.a.createElement(Ee.a,{noWrap:!0,color:"textPrimary",className:t.header},"Production Chain")})),ke={sidebar:{anchor:"left",width:256,variant:"permanent",collapsible:!0,collapsedWidth:64},content:{persistentBehavior:"fit"},header:{position:"fixed",clipped:!1,persistentBehavior:"fit",offsetHeight:64}},Te=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).toggleDarkTheme=function(){var e=a.state.theme;"light"===e.palette.type?(window.localStorage.setItem("theme","dark"),e.palette.type="dark"):(window.localStorage.setItem("theme","light"),e.palette.type="light"),a.setState({theme:e})},a.handleCollapse=function(e){window.localStorage.setItem("collapsed",!e),a.setState({collapsed:!e})},a.handleClear=function(){var e=a.state.recipes;e.length=0,a.setState({recipes:e})},a.handleUpdate=function(e){var t=e;a.setState({recipes:t})};var n=window.localStorage.getItem("theme"),i=window.localStorage.getItem("collapsed");return null===n?window.localStorage.setItem("theme","dark"):"light"===n?v.palette.type="light":"dark"===n&&(v.palette.type="dark"),null===i&&window.localStorage.setItem("collapsed","false"),a.state={theme:v,headers:Headers,recipes:E,collapsed:"true"===i},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=Object(d.a)(this.state.theme);return i.a.createElement(f.a,{theme:t},i.a.createElement(b.a,null),i.a.createElement(y.e,{theme:t,config:ke,initialCollapsed:this.state.collapsed},(function(t){var a=t.sidebarStyles,n=t.collapsed;return i.a.createElement(i.a.Fragment,null,i.a.createElement(y.d,null,i.a.createElement(h.a,null,i.a.createElement(y.g,{className:y.i.leftTrigger},i.a.createElement(y.h,null)),i.a.createElement(Se,null))),i.a.createElement(y.f,null,i.a.createElement("div",{className:a.container},i.a.createElement(qe,{handleTheme:e.toggleDarkTheme,handleRecipes:e.handleUpdate,handleClear:e.handleClear,recipes:e.state.recipes,themeType:e.state.theme.palette.type})),i.a.createElement(y.a,{onClick:function(){return e.handleCollapse(n)}},i.a.createElement(y.b,null))),i.a.createElement(y.c,null,i.a.createElement(s.a,{maxWidth:"xl"},i.a.createElement(p.a,{my:2},i.a.createElement(N,{recipes:e.state.recipes,handleUpdate:e.handleUpdate,onChangeOC:e.handleOverclock,onChangeTier:e.handleTier})))))})))}}]),t}(n.Component);Object(r.render)(i.a.createElement(i.a.Fragment,null,i.a.createElement(Te,null)),document.querySelector("#root"))}},[[363,1,2]]]);
//# sourceMappingURL=main.cf3c58c4.chunk.js.map