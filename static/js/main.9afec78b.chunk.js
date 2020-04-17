(this["webpackJsonpproduction-chain"]=this["webpackJsonpproduction-chain"]||[]).push([[0],{419:function(e,t,a){e.exports=a(611)},593:function(e,t){},595:function(e,t){},611:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(19),l=a(28),c=a(25),o=a(35),u=a(36),m=a(37),s=a(640),p=a(260),h=a(338),d=a(206),f=a(633),g=a(641),E=a(87),b=["N/A","ULV","LV","MV","HV","EV","IV","LuV","ZPMV","UV"],v=[8,32,128,512,2048,8192,32768,131072,524288],y=[{step:0,machineName:"Macerator",machineTier:2,overclock:!1,rft:40,time:.8,inputs:[{name:"Cobblestone",quantity:1,unit:"b"}],outputs:[{name:"Gravel",quantity:1,unit:"b"}],targetMachines:1},{step:1,machineName:"Macerator",machineTier:2,overclock:!1,rft:40,time:.8,inputs:[{name:"Gravel",quantity:1,unit:"b"}],outputs:[{name:"Sand",quantity:1,unit:"b"}],targetMachines:1},{step:2,machineName:"Macerator",machineTier:2,overclock:!1,rft:40,time:.8,inputs:[{name:"Sand",quantity:1,unit:"b"}],outputs:[{name:"Dust",quantity:1,unit:"b"}],targetMachines:1},{step:3,machineName:"Furnace",machineTier:2,overclock:!0,rft:16,time:6.4,inputs:[{name:"Sand",quantity:1,unit:"b"}],outputs:[{name:"Glass",quantity:1,unit:"b"}],targetMachines:1},{step:4,machineName:"Chemical Reactor",machineTier:2,overclock:!1,rft:60,time:1,inputs:[{name:"Dust",quantity:1,unit:"b"},{name:"Water",quantity:1e3,unit:"mb"}],outputs:[{name:"Clay",quantity:1,unit:"b"}],targetMachines:1},{step:5,machineName:"Electrolyzer",machineTier:2,overclock:!1,rft:40,time:5,inputs:[{name:"Glass",quantity:4,unit:"b"}],outputs:[{name:"Quartz",quantity:1,unit:"b"}],targetMachines:1},{step:6,machineName:"Fluid Extractor",machineTier:2,overclock:!1,rft:128,time:2,inputs:[{name:"Ender Pearl",quantity:1,unit:"b"}],outputs:[{name:"Resonant Ender",quantity:250,unit:"mb"}],targetMachines:1},{step:7,machineName:"Chemical Reactor",machineTier:3,overclock:!1,rft:400,time:5,inputs:[{name:"Quartz",quantity:1,unit:"b"},{name:"Resonant Ender",quantity:250,unit:"mb"}],outputs:[{name:"Resonant Clathrate",quantity:1,unit:"b"}],targetMachines:1},{step:8,machineName:"Furnace",machineTier:2,overclock:!1,rft:40,time:3.2,inputs:[{name:"Resonant Clathrate",quantity:1,unit:"b"}],outputs:[{name:"Pulsating Dust",quantity:1,unit:"b"}],targetMachines:1},{step:9,machineName:"Alloy Smelter",machineTier:2,overclock:!1,rft:96,time:12,inputs:[{name:"Pulsating Dust",quantity:1,unit:"b"},{name:"Clay",quantity:1,unit:"b"}],outputs:[{name:"Polymer Clay",quantity:4,unit:"b"}],targetMachines:1},{step:10,machineName:"Simulation Chamber",machineTier:0,overclock:!1,rft:2048,time:15,inputs:[{name:"Polymer Clay",quantity:1,unit:"b"}],outputs:[{name:"Ender Pristine",quantity:.3,unit:"b"}],targetMachines:1},{step:11,machineName:"Simulation Chamber",machineTier:0,overclock:!1,rft:2048,time:15,inputs:[{name:"Polymer Clay",quantity:1,unit:"b"}],outputs:[{name:"Shulker Pristine",quantity:.3,unit:"b"}],targetMachines:1},{step:12,machineName:"Loot Fabricator",machineTier:0,overclock:!1,rft:0,time:2.7,inputs:[{name:"Ender Pristine",quantity:1,unit:"b"}],outputs:[{name:"Ender Pearl",quantity:6,unit:"b"}],targetMachines:1},{step:13,machineName:"Loot Fabricator",machineTier:0,overclock:!1,rft:0,time:2.7,inputs:[{name:"Shulker Pristine",quantity:1,unit:"b"}],outputs:[{name:"Diamond",quantity:6,unit:"b"}],targetMachines:1},{step:14,machineName:"Numismatic Dynamo",machineTier:0,overclock:!1,rft:0,time:10.32,inputs:[{name:"Diamond",quantity:1,unit:"b"}],outputs:[{name:"RF/t",quantity:12500,unit:"b"}],targetMachines:1}],C={typography:{htmlFontSize:16,fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700},palette:{type:"dark",primary:{light:"#58a5f0",main:"#0277bd",dark:"#004c8c",contrastText:"#fff"},secondary:{light:"#ff5c8d",main:"#d81b60",dark:"#a00037",contrastText:"#000"}}},S={sidebar:{anchor:"left",width:256,variant:"permanent",collapsible:!0,collapsedWidth:64},content:{persistentBehavior:"fit"},header:{position:"fixed",clipped:!1,persistentBehavior:"fit",offsetHeight:64}},O=a(393),k=a(394),j=a(395),N=a.n(j);function w(e){var t=new O.DirectedGraph;t.upgradeToMulti(),e.forEach((function(e){t.addNode(Number(e.step),{inputs:e.inputs,machineName:e.machineName,machineTier:e.machineTier,outputs:e.outputs,targetMachines:1,time:e.overclock?e.timeoc:e.time,visitedCount:0})}));var a=function(e){var t=e;return t.forEachNode((function(e,a){a.outputs.forEach((function(n){t.forEachNode((function(r,i){e!==r&&i.inputs.forEach((function(l){l.name===n.name&&t.addDirectedEdge(e,r,{name:l.name,inputQuantity:l.quantity,inputTime:i.time,outputQuantity:n.quantity,outputTime:a.time})}))}))}))})),t}(t);return function(e){var t=function(e){var t=[];return e.forEachNode((function(e){t[e]=[]})),e.forEachEdge((function(e,a,n,r,i,l){t[n].push(Number(r))})),Object.values(t)}(e),a=N()(t);return a?function(e,t){var a=e,n=!0,r=!1,i=void 0;try{for(var l,c=t[Symbol.iterator]();!(n=(l=c.next()).done);n=!0){var o=l.value,u=o[0],m=o[1];a.edges(u,m).forEach((function(e){a.dropEdge(e)}))}}catch(s){r=!0,i=s}finally{try{n||null==c.return||c.return()}finally{if(r)throw i}}return a}(e,a):e}(Object(k.reverse)(a))}function T(e,t){var a=[],n=[],r=0,i=[],l=[];return"undefined"===typeof e||0===e.length||(i=function(e){var t=[];return e.forEachNode((function(a,n){n.inputs.forEach((function(e){e.name in t||(t[e.name]={node:Number(a),quantity:e.quantity,time:n.time,targetMachines:n.targetMachines})})),e.forEachOutEdge((function(e,a,n,r,i,l){a.name in t&&delete t[a.name]}))})),t.sort()}(t),l=function(e){var t=[];return e.forEachNode((function(a,n){n.outputs.forEach((function(e){e.name in t||(t[e.name]={node:Number(a),quantity:e.quantity,time:n.time,targetMachines:n.targetMachines})})),e.forEachOutEdge((function(e,a,n,r,i,l){a.name in t&&delete t[a.name]}))})),t.sort()}(t),t.forEachNode((function(t,i){var l=b[i.machineTier],c=("N/A"!==l?l+" ":"")+i.machineName,o=e[t],u=o.overclock?o.rftoc:o.rft;a[c]=c in a?a[c]+Math.ceil(i.targetMachines):Math.ceil(i.targetMachines),n[t]=c+" "+i.targetMachines.toFixed(2)+" ("+Math.ceil(i.targetMachines)+")",r+=Math.ceil(i.targetMachines)*u}))),{machineTotals:a,machineSteps:n,rft:r,inputs:i,outputs:l}}var q=a(16),M=a(129),x=a(329),U=a(396),W=a.n(U),D=a(280),F=a.n(D),I=a(635),P=a(642),A=a(637),R=a(636),H=a(643),L=a(645),z=r.a.memo((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,null,e.title),r.a.createElement(R.a,null,r.a.createElement(P.a,null,"A production chain calculator inspired by the"," ",r.a.createElement(L.a,{rel:"noopener noreferrer",target:"_blank",href:"https://kirkmcdonald.github.io/"},"Kirk McDonald calculator")," ","for Factorio. Please ask questions and report bugs at"," ",r.a.createElement(L.a,{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/SimonNguyen/ProductionChain"},"GitHub"),".",r.a.createElement("br",null),r.a.createElement("br",null),"Shortcuts: ",r.a.createElement("br",null),r.a.createElement("code",null,"ESC")," closes dialog menus.")),r.a.createElement(A.a,null,r.a.createElement(x.a,{onClick:e.handleClose,color:"default"},"Close")))})),G=a(9),Q=a(644),V=a(353),B=a(281),J=r.a.memo((function(e){var t=r.a.useState(""),a=Object(G.a)(t,2),n=a[0],i=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,null,e.title),r.a.createElement(R.a,null,r.a.createElement(P.a,null,"Paste a recipe string below to import a recipe.",r.a.createElement("br",null),r.a.createElement("br",null),"Alternatively, you may import a sample recipe:"),r.a.createElement(x.a,{onClick:function(){var t=y;e.handleUpdate(t)},color:"default",variant:"outlined"},"Numismatic Generators"),r.a.createElement(Q.a,{style:{margin:"12px 0"}}),r.a.createElement(V.a,{multiline:!0,fullWidth:!0,size:"medium",rowsMax:"10",variant:"outlined",value:n,onChange:function(e){i(e.target.value)}})),r.a.createElement(A.a,null,r.a.createElement(x.a,{onClick:e.handleClose,color:"default"},"Close"),r.a.createElement(x.a,{onClick:function(){var t=n.split(","),a=Uint8Array.from(t),r=JSON.parse(Object(B.decompress)(a));e.handleUpdate(r)},color:"default"},"Import"),r.a.createElement(x.a,{onClick:function(){var t=JSON.stringify(e.recipes),a=Object(B.compress)(t);i(a.toString())},color:"default"},"Export")))})),$=r.a.memo((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,null,e.title),r.a.createElement(R.a,null,r.a.createElement(P.a,null,"This action cannot be undone.")),r.a.createElement(A.a,null,r.a.createElement(A.a,null,r.a.createElement(x.a,{onClick:e.handleClose,color:"default"},"Cancel"),r.a.createElement(x.a,{onClick:function(){return e.handleClear()},color:"default"},"Accept"))))})),_=a(331),K=a(274),Z=a(639),X=a(275),Y=a(337),ee=a(277),te=a(358),ae=a(386),ne=a(130),re=a.n(ne),ie=a(5),le=/^-?\d+\.?\d*$/,ce=/^\d+$/,oe=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleQuantity=function(e){var t=Number(e.target.value);if(t>=1&&ce.test(t)){var n=a.state.item;n.quantity=t,a.setState({item:n}),a.props.handleUpdateItems(a.props.id,a.state.item)}},a.handleUnit=function(e){var t=e.target.value,n=a.state.item;n.unit=t,a.setState({item:n}),a.props.handleUpdateItems(a.props.id,a.state.item)},a.handleName=function(e){var t=e.target.value,n=a.state.item;n.name=t,a.setState({item:n}),a.props.handleUpdateItems(a.props.id,a.state.item)},a.unitLabelRef=r.a.createRef(),a.state={unitLabelWidth:0,item:a.props.item},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({unitLabelWidth:this.unitLabelRef.current.offsetWidth})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,{className:this.props.classes.formControlSmall},r.a.createElement(V.a,{error:!le.test(this.props.item.quantity),label:"Quantity",required:!0,type:"number",value:this.state.item.quantity.toString(),variant:"outlined",onChange:this.handleQuantity})),r.a.createElement(K.a,{variant:"outlined",className:this.props.classes.formControlSmall},r.a.createElement(X.a,{ref:this.unitLabelRef},"Unit"),r.a.createElement(ee.a,{labelWidth:this.state.unitLabelWidth,label:"Unit",placeholder:"b",value:this.state.item.unit,onChange:this.handleUnit},r.a.createElement(Y.a,{value:"b"},"b"),r.a.createElement(Y.a,{value:"mb"},"mb"))),r.a.createElement(K.a,{className:this.props.classes.formControl},r.a.createElement(V.a,{error:0===this.props.item.name.length,label:"Item Name",required:!0,type:"string",value:this.state.item.name,variant:"outlined",onChange:this.handleName})),r.a.createElement("br",null))}}]),t}(n.Component),ue=Object(ie.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},formControlSmall:{margin:e.spacing(1),maxWidth:100}}}))(oe);function me(e,t){var a=e;if(e.length<t)for(var n=e.length;n<t;n++)a.push({name:"",quantity:1,unit:"b"});else a=a.slice(0,t);return a}var se=Object(_.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},formControlSmall:{margin:e.spacing(1),maxWidth:100}}})),pe=r.a.memo((function(e){var t=se(),a=r.a.useState(!1),n=Object(G.a)(a,2),i=n[0],l=n[1],c=r.a.useState(""),o=Object(G.a)(c,2),u=o[0],m=o[1],s=r.a.useState(0),p=Object(G.a)(s,2),h=p[0],d=p[1],f=r.a.useState(!1),g=Object(G.a)(f,2),E=g[0],v=g[1],y=r.a.useState(0),C=Object(G.a)(y,2),S=C[0],O=C[1],k=r.a.useState(0),j=Object(G.a)(k,2),N=j[0],w=j[1],T=r.a.useState(1),q=Object(G.a)(T,2),M=q[0],U=q[1],W=r.a.useState(1),D=Object(G.a)(W,2),F=D[0],I=D[1],L=r.a.useState(!1),z=Object(G.a)(L,2),B=z[0],J=z[1],$=r.a.useState(!1),_=Object(G.a)($,2),ne=_[0],ie=_[1],le=r.a.useState(!1),ce=Object(G.a)(le,2),oe=ce[0],pe=ce[1],he=r.a.useState(!1),de=Object(G.a)(he,2),fe=de[0],ge=de[1],Ee=r.a.useState([{name:"",quantity:1,unit:"b"}]),be=Object(G.a)(Ee,2),ve=be[0],ye=be[1],Ce=r.a.useState([{name:"",quantity:1,unit:"b"}]),Se=Object(G.a)(Ce,2),Oe=Se[0],ke=Se[1],je=/^-?\d+\.?\d*$/,Ne=/^\d+$/,we=r.a.useRef(null),Te=r.a.useState(0),qe=Object(G.a)(Te,2),Me=qe[0],xe=qe[1];r.a.useEffect((function(){xe(we.current.offsetWidth)}),[]);var Ue=function(e,t){var a=ve;a[e]=t,ye(a);var n=!0;a.forEach((function(e){0===e.name.length&&(n=n&&!1)})),pe(n),De("inputs",n)},We=function(e,t){var a=Oe;a[e]=t,ke(a);var n=!0;Oe.forEach((function(e){0===e.name.length&&(n=n&&!1)})),ge(n),De("outputs",n)},De=function(e,t){J("machineName"===e?t&&oe&&fe:"inputs"===e?ne&&t&&fe:"outputs"===e?ne&&oe&&t:ne&&oe&&fe)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,null,e.title),r.a.createElement(R.a,null,r.a.createElement(P.a,null,"Recipe information:"),r.a.createElement(K.a,{className:t.formControl},r.a.createElement(V.a,{label:"Machine Name",error:0===u.length,placeholder:"Macerator",required:!0,value:u,variant:"outlined",onChange:function(e){return function(e){m(e);var t=0!==e.length;ie(t),De("machineName",t)}(e.target.value)}})),r.a.createElement(K.a,{variant:"outlined",className:t.formControl},r.a.createElement(X.a,{ref:we},"Machine Tier"),r.a.createElement(ee.a,{label:"Machine Tier",labelWidth:Me,value:h,onChange:function(e){return d(e.target.value)}},b.map((function(e,t){return r.a.createElement(Y.a,{key:t,value:t},e)})))),r.a.createElement(te.a,{control:r.a.createElement(ae.a,{checked:!0===E,onChange:function(){return v(!E)},value:E,color:"primary"}),label:"Overclock",labelPlacement:"top"}),r.a.createElement(K.a,{className:t.formControlSmall},r.a.createElement(V.a,{error:!je.test(S),label:i?"EU/t":"RF/t",placeholder:S.toString(),required:!0,type:"number",value:S,variant:"outlined",onChange:function(e){var t;(t=Number(e.target.value))>=0&&O(t)}})),r.a.createElement(te.a,{control:r.a.createElement(ae.a,{checked:!0===i,onChange:function(){return l(!i)},value:i,color:"primary"}),label:"Use EU/t",labelPlacement:"top"}),r.a.createElement(K.a,{className:t.formControlSmall},r.a.createElement(V.a,{error:!je.test(N),label:"Time (s)",placeholder:N.toString(),required:!0,type:"number",value:N,variant:"outlined",onChange:function(e){var t;(t=Number(e.target.value))>=0&&w(t)}})),r.a.createElement(K.a,{className:t.formControlSmall},r.a.createElement(V.a,{error:!Ne.test(M),label:"# Inputs",placeholder:M.toString(),required:!0,type:"number",value:M,variant:"outlined",onChange:function(e){return(t=Number(e.target.value))>=0&&Ne.test(t)&&(U(t),ye((function(e){return me(e,t)})),pe(!1)),void De("inputs",!1);var t}})),r.a.createElement(K.a,{className:t.formControlSmall},r.a.createElement(V.a,{error:!Ne.test(F),label:"# Outputs",placeholder:F.toString(),required:!0,type:"number",value:F,variant:"outlined",onChange:function(e){return(t=Number(e.target.value))>=0&&Ne.test(t)&&(I(t),ke((function(e){return me(e,t)})),ge(!1)),void De("outputs",!1);var t}})),r.a.createElement(Q.a,{style:{margin:"12px 0"}}),r.a.createElement(Z.a,{container:!0,direction:"row",justify:"space-between",alignitems:"center"},r.a.createElement(Z.a,{item:!0,xs:6},r.a.createElement(P.a,null,"Inputs: ",0===ve.length?"This recipe has no inputs.":"")),r.a.createElement(Z.a,{item:!0,xs:6},r.a.createElement(P.a,null,"Outputs:",0===Oe.length?" This recipe has no outputs.":""))),r.a.createElement(Z.a,{container:!0,direction:"row",justify:"space-between",alignitems:"center"},r.a.createElement(Z.a,{item:!0,xs:6},r.a.createElement(re.a,{containerHeight:72*ve.length>3*window.innerHeight/5?3*window.innerHeight/5:0===ve.length?72:72*ve.length,elementHeight:72},ve.map((function(e,t){return r.a.createElement(ue,{key:"input"+t,id:t,item:e,handleUpdateItems:Ue})})))),r.a.createElement(Z.a,{item:!0,xs:6},r.a.createElement(re.a,{containerHeight:72*Oe.length>3*window.innerHeight/5?3*window.innerHeight/5:0===Oe.length?72:72*Oe.length,elementHeight:72},Oe.map((function(e,t){return r.a.createElement(ue,{key:"output"+t,id:t,item:e,handleUpdateItems:We})})))))),r.a.createElement(A.a,null,r.a.createElement(x.a,{onClick:function(){var t=e.recipes,a=t.length;t.push(function(e,t,a,n,r,i,l,c,o){return{step:t,machineName:a,machineTier:n,overclock:r,rft:e?4*i:i,time:l,inputs:c,outputs:o,targetMachines:1}}(i,a,u,h,E,S,N,ve,Oe)),e.handleUpdate(t),e.handleClose()},color:"default",disabled:!B},"Add"),r.a.createElement(x.a,{onClick:e.handleClose,color:"default"},"Close")))})),he=Object(_.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},formControlSmall:{margin:e.spacing(1),maxWidth:100},margin:{margin:e.spacing(1)}}})),de=r.a.memo((function(e){var t=he(),a=r.a.useState(T(e.recipes,e.graph)),n=Object(G.a)(a,2),i=n[0],l=n[1],c=r.a.useState(1),o=Object(G.a)(c,2),u=o[0],m=o[1],s=r.a.useState(0!==Object.keys(i.outputs).length?Object.keys(i.outputs)[0]:""),p=Object(G.a)(s,2),h=p[0],d=p[1],f=r.a.useState(0!==Object.keys(i.outputs).length?i.outputs[h].quantity:0),g=Object(G.a)(f,2),E=g[0],b=g[1],v=r.a.useState(0!==Object.keys(i.outputs).length?E/i.outputs[h].time:0),y=Object(G.a)(v,2),C=y[0],S=y[1],O=r.a.useState(C),k=Object(G.a)(O,2),j=k[0],N=k[1],w=r.a.useState([]),q=Object(G.a)(w,2),M=q[0],U=q[1],W=r.a.useState(0),D=Object(G.a)(W,2),F=D[0],I=D[1],L=r.a.useRef(null);r.a.useEffect((function(){0!==e.recipes.length&&I(L.current.offsetWidth)}),[e.recipes.length]);var z=/^\d+\.?\d*$/;return r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,null,e.title),r.a.createElement(R.a,null,0!==e.recipes.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,null,"The default setting for the calculator is a single machine producing the final product. If you require more or less product, adjust the machines or outputs per second. Once you have set custom targets, press the 'calculate' button to redetermine the requirements for the recipe."),r.a.createElement(Z.a,{container:!0,direction:"row",alignItems:"center"},r.a.createElement(K.a,{className:t.formControl},r.a.createElement(V.a,{error:!z.test(j)||0===j,label:"Output per second",placeholder:"1",required:!0,type:"number",value:j,variant:"outlined",onChange:function(e){return t=Number(e.target.value),N(t),void m(t/C);var t}})),r.a.createElement(K.a,{variant:"outlined",className:t.formControl},r.a.createElement(V.a,{error:!z.test(u)||0===u,label:"Number of machines",placeholder:"1",required:!0,type:"number",value:u,variant:"outlined",onChange:function(e){return t=Number(e.target.value),m(t),void N(t*C);var t}})),r.a.createElement(K.a,{variant:"outlined",className:t.formControl},r.a.createElement(X.a,{ref:L},"Target Output"),r.a.createElement(ee.a,{label:"Target Output",labelWidth:F,value:h,onChange:function(e){return function(e){var t=i.outputs[e].quantity;d(e),b(t),S(t/i.outputs[e].time),"undefined"!==typeof M[e]&&(N(M[e].targetOps),m(M[e].targetMachines))}(e.target.value)}},Object.entries(i.outputs).sort().map((function(e){var t=Object(G.a)(e,2),a=t[0];t[1];return r.a.createElement(Y.a,{key:"select"+a,value:a},a)})))),r.a.createElement("div",null,r.a.createElement(x.a,{className:t.margin,onClick:function(){e.graph.setNodeAttribute(i.outputs[h].node,"targetMachines",u);var t=M;t[h]={targetOps:j,targetMachines:u},U(t)},color:"default",variant:"outlined"},"Set Target"),r.a.createElement(x.a,{className:t.margin,onClick:function(){var t=e.graph.copy();Object.entries(i.outputs).sort().forEach((function(e){var a=Object(G.a)(e,2),n=(a[0],a[1]);return function e(t,a,n){var r=t.getNodeAttributes(a);return"undefined"!==typeof n&&t.setNodeAttribute(a,"targetMachines",n),t.forEachOutNeighbor(a,(function(n,i){return t.edges(a,n).forEach((function(e){var a=t.getEdgeAttributes(e),i=a.inputQuantity/a.inputTime*r.targetMachines/(a.outputQuantity/a.outputTime);t.getNodeAttribute(n,"visitedCount")>0&&t.inDegree(n)>1?(t.updateNodeAttribute(n,"targetMachines",(function(e){return e+i})),t.updateNodeAttribute(n,"visitedCount",(function(e){return e+1}))):(t.setNodeAttribute(n,"targetMachines",i),t.setNodeAttribute(n,"visitedCount",1))})),e(t,n)})),t}(t,n.node)})),l(T(e.recipes,t))},color:"default",variant:"outlined"},"Calculate"))),r.a.createElement(Q.a,{style:{margin:"12px 0"}}),r.a.createElement(Z.a,{container:!0,direction:"row",justify:"space-between",alignitems:"center"},r.a.createElement(Z.a,{item:!0,xs:3},r.a.createElement(P.a,null,"Machines per Step")),r.a.createElement(Z.a,{item:!0,xs:3},r.a.createElement(P.a,null,"Machine Totals")),r.a.createElement(Z.a,{item:!0,xs:2},r.a.createElement(P.a,null,"Inputs/s")),r.a.createElement(Z.a,{item:!0,xs:2},r.a.createElement(P.a,null,"Outputs/s")),r.a.createElement(Z.a,{item:!0,xs:2},r.a.createElement(P.a,null,"Power Consumed"))),r.a.createElement(Z.a,{container:!0,direction:"row",justify:"space-between",alignitems:"center"},r.a.createElement(Z.a,{item:!0,xs:3},Object.entries(i.machineSteps).map((function(e){var t=Object(G.a)(e,2),a=t[0],n=t[1];return r.a.createElement(r.a.Fragment,{key:a},"Step ",a," : ",n," ",r.a.createElement("br",null))}))),r.a.createElement(Z.a,{item:!0,xs:3},Object.entries(i.machineTotals).sort().map((function(e){var t=Object(G.a)(e,2),a=t[0],n=t[1];return r.a.createElement(r.a.Fragment,{key:a},a," : ",n," ",r.a.createElement("br",null))}))),r.a.createElement(Z.a,{item:!0,xs:2},Object.entries(i.inputs).sort().map((function(e){var t=Object(G.a)(e,2),a=t[0],n=t[1];return r.a.createElement(r.a.Fragment,{key:a},a," :"," ",(n.quantity/n.time*n.targetMachines).toFixed(2),r.a.createElement("br",null))}))),r.a.createElement(Z.a,{item:!0,xs:2},Object.entries(i.outputs).sort().map((function(e){var t=Object(G.a)(e,2),a=t[0],n=t[1];return r.a.createElement(r.a.Fragment,{key:a},a," :"," ",(n.quantity/n.time*n.targetMachines).toFixed(2),r.a.createElement("br",null))}))),r.a.createElement(Z.a,{item:!0,xs:2},"RF/t: ",i.rft," ",r.a.createElement("br",null),"EU/t: ",i.rft/4))):r.a.createElement(P.a,null,"No recipe information to calculate.")),r.a.createElement(A.a,null,r.a.createElement(x.a,{onClick:e.handleClose,color:"default"},"Close")))})),fe=Object(_.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},formControlSmall:{margin:e.spacing(1),maxWidth:100}}}));function ge(e,t){var a=e;if(e.length<t)for(var n=e.length;n<t;n++)a.push({name:"",quantity:1,unit:"b"});else a=a.slice(0,t);return a}var Ee=r.a.memo((function(e){var t=fe(),a=r.a.useState(!1),n=Object(G.a)(a,2),i=n[0],l=n[1],c=r.a.useState(e.rowData.machineName),o=Object(G.a)(c,2),u=o[0],m=o[1],s=r.a.useState(e.rowData.machineTier),p=Object(G.a)(s,2),h=p[0],d=p[1],f=r.a.useState(e.rowData.overclock),g=Object(G.a)(f,2),E=g[0],v=g[1],y=r.a.useState(e.rowData.rft),C=Object(G.a)(y,2),S=C[0],O=C[1],k=r.a.useState(e.rowData.time),j=Object(G.a)(k,2),N=j[0],w=j[1],T=r.a.useState(e.rowData.inputs.length),q=Object(G.a)(T,2),M=q[0],U=q[1],W=r.a.useState(e.rowData.outputs.length),D=Object(G.a)(W,2),F=D[0],I=D[1],L=r.a.useState(e.rowData.inputs.slice(0,e.rowData.inputs.length)),z=Object(G.a)(L,2),B=z[0],J=z[1],$=r.a.useState(e.rowData.outputs.slice(0,e.rowData.outputs.length)),_=Object(G.a)($,2),ne=_[0],ie=_[1],le=r.a.useState(!0),ce=Object(G.a)(le,2),oe=ce[0],me=ce[1],se=r.a.useState(!1),pe=Object(G.a)(se,2),he=pe[0],de=pe[1],Ee=r.a.useState(!1),be=Object(G.a)(Ee,2),ve=be[0],ye=be[1],Ce=r.a.useState(!1),Se=Object(G.a)(Ce,2),Oe=Se[0],ke=Se[1],je=/^-?\d+\.?\d*$/,Ne=/^\d+$/,we=r.a.useRef(null),Te=r.a.useState(0),qe=Object(G.a)(Te,2),Me=qe[0],xe=qe[1];r.a.useEffect((function(){xe(we.current.offsetWidth)}),[]);var Ue=function(e,t){var a=B;a[e]=t,J(a);var n=!0;a.forEach((function(e){0===e.name.length&&(n=n&&!1)})),ye(n),De("inputs",n)},We=function(e,t){var a=ne;a[e]=t,ie(a);var n=!0;ne.forEach((function(e){0===e.name.length&&(n=n&&!1)})),ke(n),De("outputs",n)},De=function(e,t){me("machineName"===e?t&&ve&&Oe:"inputs"===e?he&&t&&Oe:"outputs"===e?he&&ve&&t:he&&ve&&Oe)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,null,e.title),r.a.createElement(R.a,null,r.a.createElement(P.a,null,"Recipe information:"),r.a.createElement(K.a,{className:t.formControl},r.a.createElement(V.a,{label:"Machine Name",error:0===u.length,placeholder:"Macerator",required:!0,value:u,variant:"outlined",onChange:function(e){return function(e){m(e);var t=0!==e.length;de(t),De("machineName",t)}(e.target.value)}})),r.a.createElement(K.a,{variant:"outlined",className:t.formControl},r.a.createElement(X.a,{ref:we},"Machine Tier"),r.a.createElement(ee.a,{label:"Machine Tier",labelWidth:Me,value:h,onChange:function(e){return d(e.target.value)}},b.map((function(e,t){return r.a.createElement(Y.a,{key:t,value:t},e)})))),r.a.createElement(te.a,{control:r.a.createElement(ae.a,{checked:!0===E,onChange:function(){return v(!E)},value:E,color:"primary"}),label:"Overclock",labelPlacement:"top"}),r.a.createElement(K.a,{className:t.formControlSmall},r.a.createElement(V.a,{error:!je.test(S),label:i?"EU/t":"RF/t",placeholder:S.toString(),required:!0,type:"number",value:S,variant:"outlined",onChange:function(e){var t;(t=Number(e.target.value))>=0&&O(t)}})),r.a.createElement(te.a,{control:r.a.createElement(ae.a,{checked:!0===i,onChange:function(){return l(!i)},value:i,color:"primary"}),label:"Use EU/t",labelPlacement:"top"}),r.a.createElement(K.a,{className:t.formControlSmall},r.a.createElement(V.a,{error:!je.test(N),label:"Time (s)",placeholder:N.toString(),required:!0,type:"number",value:N,variant:"outlined",onChange:function(e){var t;(t=Number(e.target.value))>=0&&w(t)}})),r.a.createElement(K.a,{className:t.formControlSmall},r.a.createElement(V.a,{error:!Ne.test(M),label:"# Inputs",placeholder:M.toString(),required:!0,type:"number",value:M,variant:"outlined",onChange:function(e){return(t=Number(e.target.value))>=0&&Ne.test(t)&&(U(t),J((function(e){return ge(e,t)})),ye(!1)),void De("inputs",!1);var t}})),r.a.createElement(K.a,{className:t.formControlSmall},r.a.createElement(V.a,{error:!Ne.test(F),label:"# Outputs",placeholder:F.toString(),required:!0,type:"number",value:F,variant:"outlined",onChange:function(e){return(t=Number(e.target.value))>=0&&Ne.test(t)&&(I(t),ie((function(e){return ge(e,t)})),ke(!1)),void De("outputs",!1);var t}})),r.a.createElement(Q.a,{style:{margin:"12px 0"}}),r.a.createElement(Z.a,{container:!0,direction:"row",justify:"space-between",alignitems:"center"},r.a.createElement(Z.a,{item:!0,xs:6},r.a.createElement(P.a,null,"Inputs: ",0===B.length?"This recipe has no inputs.":"")),r.a.createElement(Z.a,{item:!0,xs:6},r.a.createElement(P.a,null,"Outputs:",0===ne.length?" This recipe has no outputs.":""))),r.a.createElement(Z.a,{container:!0,direction:"row",justify:"space-between",alignitems:"center"},r.a.createElement(Z.a,{item:!0,xs:6},r.a.createElement(re.a,{containerHeight:72*B.length>3*window.innerHeight/5?3*window.innerHeight/5:0===B.length?72:72*B.length,elementHeight:72},B.map((function(e,t){return r.a.createElement(ue,{key:"input"+t,id:t,item:e,handleUpdateItems:Ue})})))),r.a.createElement(Z.a,{item:!0,xs:6},r.a.createElement(re.a,{containerHeight:72*ne.length>3*window.innerHeight/5?3*window.innerHeight/5:0===ne.length?72:72*ne.length,elementHeight:72},ne.map((function(e,t){return r.a.createElement(ue,{key:"output"+t,id:t,item:e,handleUpdateItems:We})})))))),r.a.createElement(A.a,null,r.a.createElement(x.a,{onClick:function(){var t=e.recipes,a=t.indexOf(e.rowData);oe&&(t[a]=function(e,t,a,n,r,i,l,c,o){return{step:t,machineName:a,machineTier:n,overclock:r,rft:e?4*i:i,time:l,inputs:c,outputs:o,targetMachines:1}}(i,e.rowData.step,u,h,E,S,N,B,ne),e.handleUpdate(t),e.handleClose())},color:"default",disabled:!oe},"Save"),r.a.createElement(x.a,{onClick:e.handleClose,color:"default"},"Close")))})),be=a(8),ve=a(403),ye=a(647),Ce=a(73),Se=r.a.memo((function(e){var t,a=r.a.useState({checked:"dark"===e.themeType}),n=Object(G.a)(a,2),i=n[0],l=n[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,null,e.title),r.a.createElement(R.a,null,r.a.createElement(Z.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},r.a.createElement(Ce.a,{color:"textPrimary",variant:"subtitle1"},"Dark Theme"),r.a.createElement(ye.a,{checked:i.checked,onChange:(t="checked",function(a){e.handleTheme(),l(Object(ve.a)({},i,Object(be.a)({},t,a.target.checked)))})}))),r.a.createElement(A.a,null,r.a.createElement(x.a,{onClick:e.handleClose,color:"default"},"Close")))})),Oe=function(e){var t=e.contentType,a=e.graph,n=e.isOpen,i=e.recipes,l=e.rowData,c=e.size,o=e.themeType,u=e.title,m=e.handleClose,s=e.handleClear,p=e.handleTheme,h=e.handleUpdate;return r.a.createElement(I.a,{disableBackdropClick:"add"===t||"calculator"===t,fullScreen:"chart"===t,fullWidth:!0,maxWidth:c,open:n,onClose:m},"about"===t?r.a.createElement(z,{title:u,handleClose:m}):"import"===t?r.a.createElement(J,{title:u,handleClose:m,handleUpdate:h,recipes:i}):"clear"===t?r.a.createElement($,{title:u,handleClear:s,handleClose:m}):"add"===t?r.a.createElement(pe,{title:u,recipes:i,handleClose:m,handleUpdate:h}):"settings"===t?r.a.createElement(Se,{title:u,handleClose:m,handleTheme:p,themeType:o}):"calculator"===t?r.a.createElement(de,{title:u,graph:a,recipes:i,handleClose:m,handleUpdate:h}):"edit"===t?r.a.createElement(Ee,{title:u,recipes:i,rowData:l,handleEdit:m,handleClose:m,handleUpdate:h}):r.a.createElement(P.a,null,"No valid content type selected."))};function ke(e){return r.a.createElement(r.a.Fragment,null,e.items.map((function(t){return r.a.createElement("div",{key:"_"+e.type+t.name+e.step},t.quantity+t.unit+" "+t.name)})))}var je=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleDialogOpen=function(e){a.setState({editable:e}),a.setState({dialog:!0})},a.handleDialogClose=function(){a.setState({dialog:!1})},a.state={columns:[{title:"Step",field:"step",readonly:!0,editable:"never",width:100},{title:"Machine Name",field:"machineName",width:200},{title:"Machine Tier",field:"machineTier",lookup:Object.assign({},b),width:200},{title:"Overclock",field:"overclock",type:"boolean",customFilterAndSearch:function(e,t){return t.overclock.toString().toUpperCase()===e.toUpperCase()},width:100},{title:"RF/t",field:"rft",type:"numeric",width:100},{title:"Time (s)",field:"time",type:"numeric",width:100},{title:"Base Inputs",field:"inputs",render:function(e){return r.a.createElement(ke,{items:e.inputs,step:e.step,type:"input"})},editComponent:function(){return r.a.createElement(x.a,{variant:"outlined"},"Modify")},customFilterAndSearch:function(e,t){var a=!1;return t.inputs.forEach((function(t){Object.values(t).forEach((function(t){t.toString().toUpperCase().includes(e.toUpperCase())&&(a=a||!0)}))})),a}},{title:"Base Outputs",field:"outputs",render:function(e){return r.a.createElement(ke,{items:e.outputs,step:e.step,type:"output"})},editComponent:function(){return r.a.createElement(x.a,{variant:"outlined"},"Modify")},customFilterAndSearch:function(e,t){var a=!1;return t.outputs.forEach((function(t){Object.values(t).forEach((function(t){t.toString().toUpperCase().includes(e.toUpperCase())&&(a=a||!0)}))})),a}}],recipes:Array.from(a.props.recipes),dialog:!1,editable:[]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e,t){F()(t.recipes,this.state.recipes)||this.setState({recipes:Array.from(this.props.recipes)}),F()(this.props.recipes,this.state.recipes)||this.setState({recipes:Array.from(this.props.recipes)})}},{key:"render",value:function(){var e=this;return r.a.createElement(M.a,{variant:"outlined",my:2},r.a.createElement(W.a,{actions:[{icon:"arrow_upward",tooltip:"Move up",onClick:function(t,a){var n=Object(q.a)(e.state.recipes),r=n.indexOf(a);if(r>0){var i=n[r-1];n[r-1]=n[r],n[r-1].step=r-1,n[r]=i,n[r].step=r}e.setState({recipes:n}),e.props.handleUpdate(n)}},{icon:"arrow_downward",tooltip:"Move down",onClick:function(t,a){var n=Object(q.a)(e.state.recipes),r=n.indexOf(a);if(r<n.length-1){var i=n[r+1];n[r+1]=n[r],n[r+1].step=r+1,n[r]=i,n[r].step=r}e.setState({recipes:n}),e.props.handleUpdate(n)}},{icon:"edit",tooltip:"Edit Recipe",onClick:function(t,a){e.handleDialogOpen(a)}}],columns:this.state.columns,data:Array.from(this.props.recipes),editable:{onRowDelete:function(t){return new Promise((function(a,n){setTimeout((function(){var n=Object(q.a)(e.state.recipes);n.splice(t.step,1),n.forEach((function(e,t){e.step=t})),e.setState({recipes:n},(function(){return a()})),e.props.handleUpdate(n),a()}),0)}))}},localization:{body:{emptyDataSourceMessage:"No recipes to display"}},options:{actionsColumnIndex:-1,maxBodyHeight:"77vh",paging:!0,pageSizeOptions:[5,10,15,20],showTitle:!1,sorting:!1,tableLayout:"auto"}}),r.a.createElement(Oe,{contentType:"edit",size:"lg",title:"Edit a recipe",recipes:this.state.recipes,rowData:this.state.editable,isOpen:this.state.dialog,handleClose:this.handleDialogClose,handleUpdate:this.props.handleUpdate}))}}]),t}(n.Component),Ne=a(622),we=a(617),Te=a(356),qe=a(646),Me=a(409),xe=a.n(Me),Ue=a(404),We=a.n(Ue),De=a(405),Fe=a.n(De),Ie=a(406),Pe=a.n(Ie),Ae=a(407),Re=a.n(Ae),He=a(408),Le=a.n(He),ze=a(410),Ge=a.n(ze),Qe=r.a.memo((function(e){var t=r.a.useState(!1),a=Object(G.a)(t,2),n=a[0],i=a[1],l=r.a.useState(""),c=Object(G.a)(l,2),o=c[0],u=c[1],m=r.a.useState(""),s=Object(G.a)(m,2),p=s[0],h=s[1],d=r.a.useState("xs"),f=Object(G.a)(d,2),g=f[0],E=f[1],b=function(e,t,a){E(a),u(t),h(e),i(!0)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ne.a,null,r.a.createElement(we.a,{button:!0,onClick:function(){return b("about","About","xs")}},r.a.createElement(qe.a,null,r.a.createElement(We.a,null)),r.a.createElement(Te.a,{primary:"About",primaryTypographyProps:{noWrap:!0}})),r.a.createElement(we.a,{button:!0,onClick:function(){return b("import","Import or export a recipe list","sm")}},r.a.createElement(qe.a,null,r.a.createElement(Fe.a,null)),r.a.createElement(Te.a,{primary:"Import/Export Recipe",primaryTypographyProps:{noWrap:!0}})),r.a.createElement(we.a,{button:!0,onClick:function(){return b("clear","Are you sure you want to clear all recipes?","xs")}},r.a.createElement(qe.a,null,r.a.createElement(Pe.a,null)),r.a.createElement(Te.a,{primary:"Clear All Recipes",primaryTypographyProps:{noWrap:!0}})),r.a.createElement(we.a,{button:!0,onClick:function(){return b("add","Add a recipe","lg")}},r.a.createElement(qe.a,null,r.a.createElement(Re.a,null)),r.a.createElement(Te.a,{primary:"Add Recipe",primaryTypographyProps:{noWrap:!0}})),r.a.createElement(we.a,{button:!0,onClick:function(){return b("calculator","Calculated requirements for this recipe","lg")}},r.a.createElement(qe.a,null,r.a.createElement(Le.a,null)),r.a.createElement(Te.a,{primary:"Calculator",primaryTypographyProps:{noWrap:!0}})),r.a.createElement(Q.a,{style:{margin:"12px 0"}}),r.a.createElement(we.a,{button:!0,onClick:function(){return b("settings","Settings","xs")}},r.a.createElement(qe.a,null,r.a.createElement(xe.a,null)),r.a.createElement(Te.a,{primary:"Settings",primaryTypographyProps:{noWrap:!0}})),r.a.createElement(we.a,{button:!0,onClick:function(){return window.open("https://github.com/SimonNguyen/ProductionChain/","_blank")}},r.a.createElement(qe.a,null,r.a.createElement(Ge.a,null)),r.a.createElement(Te.a,{primary:"GitHub",primaryTypographyProps:{noWrap:!0}}))),r.a.createElement(Oe,{contentType:p,graph:e.graph,recipes:e.recipes,size:g,themeType:e.themeType,title:o,isOpen:n,handleClear:function(){e.handleClear(),i(!1)},handleClose:function(){i(!1)},handleUpdate:e.handleUpdate,handleTheme:e.handleTheme}))})),Ve=window.location.href,Be=Object(ie.a)((function(){return{header:{fontWeight:700,minWidth:0,fontSize:18},grow:{flexGrow:1}}}))((function(e){var t=e.classes;return r.a.createElement(Ce.a,{noWrap:!0,color:"textPrimary",className:t.header},r.a.createElement(L.a,{href:Ve.substring(0,Ve.indexOf("?")),color:"inherit"},"Production Chain"))}));function Je(e){return e.forEach((function(e){var t=function(e,t,a){var n=b.indexOf(b[t])-1,r=e,i=a,l=0;if(v[n]<=e||0===n||-1===n||0===e)return{eut:r,ticks:i};if(e<=16)return{eut:r=e*(1<<(l=e<=8?n:n-1))*(1<<l),ticks:i=a/(1<<l)};for(;i>=3&&r<=v[t-1];)r*=4,i/=2.8;return{eut:r,ticks:Math.ceil(i)}}(e.rft/4,e.machineTier,e.time);e.rftoc=4*t.eut,e.timeoc=t.ticks})),e}var $e=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).toggleDarkTheme=function(){var e=a.state.theme;"light"===e.palette.type?(window.localStorage.setItem("theme","dark"),e.palette.type="dark"):(window.localStorage.setItem("theme","light"),e.palette.type="light"),a.setState({theme:e})},a.handleCollapse=function(e){window.localStorage.setItem("collapsed",!e),a.setState({collapsed:!e})},a.handleClear=function(){var e=a.state.recipes;e.length=0,a.setState({recipes:e}),window.localStorage.setItem("recipes",JSON.stringify(e))},a.handleUpdate=function(e){var t=Je(e),n=w(t);a.setState({recipes:t}),a.setState({graph:n}),window.localStorage.setItem("recipes",JSON.stringify(t))};var n=window.localStorage.getItem("theme"),r=window.localStorage.getItem("collapsed"),i=JSON.parse(window.localStorage.getItem("recipes"));null===n?window.localStorage.setItem("theme","dark"):"light"===n?C.palette.type="light":"dark"===n&&(C.palette.type="dark"),null===r&&window.localStorage.setItem("collapsed","false"),null===i&&(window.localStorage.setItem("recipes","[]"),i=[]);var c=Je(i.slice(0,i.length)),m=w(c);return a.state={theme:C,headers:Headers,recipes:c,collapsed:"true"===r,graph:m},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=Object(d.a)(this.state.theme);return r.a.createElement(f.a,{theme:t},r.a.createElement(g.a,null),r.a.createElement(E.e,{theme:t,config:S,initialCollapsed:this.state.collapsed},(function(t){var a=t.sidebarStyles,n=t.collapsed;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.d,null,r.a.createElement(h.a,null,r.a.createElement(E.g,{className:E.i.leftTrigger},r.a.createElement(E.h,null)),r.a.createElement(Be,null))),r.a.createElement(E.f,null,r.a.createElement("div",{className:a.container},r.a.createElement(Qe,{graph:e.state.graph,handleTheme:e.toggleDarkTheme,handleClear:e.handleClear,recipes:e.state.recipes,handleUpdate:e.handleUpdate,themeType:e.state.theme.palette.type})),r.a.createElement(E.a,{onClick:function(){return e.handleCollapse(n)}},r.a.createElement(E.b,null))),r.a.createElement(E.c,null,r.a.createElement(s.a,{maxWidth:"xl"},r.a.createElement(p.a,{my:2},r.a.createElement(je,{recipes:e.state.recipes,handleUpdate:e.handleUpdate,onChangeOC:e.handleOverclock,onChangeTier:e.handleTier})))))})))}}]),t}(n.Component);Object(i.render)(r.a.createElement(r.a.Fragment,null,r.a.createElement($e,null)),document.querySelector("#root"))}},[[419,1,2]]]);
//# sourceMappingURL=main.9afec78b.chunk.js.map