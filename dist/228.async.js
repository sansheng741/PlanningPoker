(self.webpackChunk=self.webpackChunk||[]).push([[228],{43863:function(O,k,f){"use strict";f.d(k,{C:function(){return At}});var a=f(67294),G=f(94184),j=f.n(G),ce=f(9220),K=f(42550),q=f(74443),H=f(53124),Ae=f(98675),Ne=f(68821),_=a.createContext({}),ee=f(14747),fe=f(67968),te=f(45503);const Ie=e=>{const{antCls:t,componentCls:o,iconCls:r,avatarBg:n,avatarColor:s,containerSize:c,containerSizeLG:l,containerSizeSM:u,textFontSize:g,textFontSizeLG:v,textFontSizeSM:p,borderRadius:d,borderRadiusLG:y,borderRadiusSM:x,lineWidth:w,lineType:N}=e,T=(P,S,L)=>({width:P,height:P,lineHeight:`${P-w*2}px`,borderRadius:"50%",[`&${o}-square`]:{borderRadius:L},[`${o}-string`]:{position:"absolute",left:{_skip_check_:!0,value:"50%"},transformOrigin:"0 center"},[`&${o}-icon`]:{fontSize:S,[`> ${r}`]:{margin:0}}});return{[o]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,ee.Wf)(e)),{position:"relative",display:"inline-block",overflow:"hidden",color:s,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:n,border:`${w}px ${N} transparent`,["&-image"]:{background:"transparent"},[`${t}-image-img`]:{display:"block"}}),T(c,g,d)),{["&-lg"]:Object.assign({},T(l,v,y)),["&-sm"]:Object.assign({},T(u,p,x)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},Re=e=>{const{componentCls:t,groupBorderColor:o,groupOverlapping:r,groupSpace:n}=e;return{[`${t}-group`]:{display:"inline-flex",[`${t}`]:{borderColor:o},["> *:not(:first-child)"]:{marginInlineStart:r}},[`${t}-group-popover`]:{[`${t} + ${t}`]:{marginInlineStart:n}}}};var be=(0,fe.Z)("Avatar",e=>{const{colorTextLightSolid:t,colorTextPlaceholder:o}=e,r=(0,te.TS)(e,{avatarBg:o,avatarColor:t});return[Ie(r),Re(r)]},e=>{const{controlHeight:t,controlHeightLG:o,controlHeightSM:r,fontSize:n,fontSizeLG:s,fontSizeXL:c,fontSizeHeading3:l,marginXS:u,marginXXS:g,colorBorderBg:v}=e;return{containerSize:t,containerSizeLG:o,containerSizeSM:r,textFontSize:Math.round((s+c)/2),textFontSizeLG:l,textFontSizeSM:n,groupSpace:g,groupOverlapping:-u,groupBorderColor:v}}),ze=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(o[r[n]]=e[r[n]]);return o};const Be=(e,t)=>{const[o,r]=a.useState(1),[n,s]=a.useState(!1),[c,l]=a.useState(!0),u=a.useRef(null),g=a.useRef(null),v=(0,K.sQ)(t,u),{getPrefixCls:p,avatar:d}=a.useContext(H.E_),y=a.useContext(_),x=()=>{if(!g.current||!u.current)return;const C=g.current.offsetWidth,$=u.current.offsetWidth;if(C!==0&&$!==0){const{gap:B=4}=e;B*2<$&&r($-B*2<C?($-B*2)/C:1)}};a.useEffect(()=>{s(!0)},[]),a.useEffect(()=>{l(!0),r(1)},[e.src]),a.useEffect(x,[e.gap]);const w=()=>{const{onError:C}=e;(C==null?void 0:C())!==!1&&l(!1)},{prefixCls:N,shape:T,size:P,src:S,srcSet:L,icon:E,className:V,rootClassName:Z,alt:ge,draggable:me,children:X,crossOrigin:ae}=e,Y=ze(e,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),A=(0,Ae.Z)(C=>{var $,B;return(B=($=P!=null?P:y==null?void 0:y.size)!==null&&$!==void 0?$:C)!==null&&B!==void 0?B:"default"}),U=Object.keys(typeof A=="object"?A||{}:{}).some(C=>["xs","sm","md","lg","xl","xxl"].includes(C)),J=(0,Ne.Z)(U),ve=a.useMemo(()=>{if(typeof A!="object")return{};const C=q.c4.find(B=>J[B]),$=A[C];return $?{width:$,height:$,lineHeight:`${$}px`,fontSize:$&&(E||X)?$/2:18}:{}},[J,A]),R=p("avatar",N),[se,le]=be(R),he=j()({[`${R}-lg`]:A==="large",[`${R}-sm`]:A==="small"}),ye=a.isValidElement(S),Xe=T||(y==null?void 0:y.shape)||"circle",Fe=j()(R,he,d==null?void 0:d.className,`${R}-${Xe}`,{[`${R}-image`]:ye||S&&c,[`${R}-icon`]:!!E},V,Z,le),Ge=typeof A=="number"?{width:A,height:A,lineHeight:`${A}px`,fontSize:E?A/2:18}:{};let F;if(typeof S=="string"&&c)F=a.createElement("img",{src:S,draggable:me,srcSet:L,onError:w,alt:ge,crossOrigin:ae});else if(ye)F=S;else if(E)F=E;else if(n||o!==1){const C=`scale(${o}) translateX(-50%)`,$={msTransform:C,WebkitTransform:C,transform:C},B=typeof A=="number"?{lineHeight:`${A}px`}:{};F=a.createElement(ce.Z,{onResize:x},a.createElement("span",{className:`${R}-string`,ref:g,style:Object.assign(Object.assign({},B),$)},X))}else F=a.createElement("span",{className:`${R}-string`,style:{opacity:0},ref:g},X);return delete Y.onError,delete Y.gap,se(a.createElement("span",Object.assign({},Y,{style:Object.assign(Object.assign(Object.assign(Object.assign({},Ge),ve),d==null?void 0:d.style),Y.style),className:Fe,ref:v}),F))};var xe=a.forwardRef(Be),Le=f(50344);const oe=e=>e?typeof e=="function"?e():e:null;var Ce=f(33603);function Se(e){var t=e.children,o=e.prefixCls,r=e.id,n=e.overlayInnerStyle,s=e.className,c=e.style;return a.createElement("div",{className:j()("".concat(o,"-content"),s),style:c},a.createElement("div",{className:"".concat(o,"-inner"),id:r,role:"tooltip",style:n},typeof t=="function"?t():t))}var Me=f(87462),i=f(1413),h=f(91),b=f(40228),m={shiftX:64,adjustY:1},I={adjustX:1,shiftY:!0},z=[0,0],Oe={left:{points:["cr","cl"],overflow:I,offset:[-4,0],targetOffset:z},right:{points:["cl","cr"],overflow:I,offset:[4,0],targetOffset:z},top:{points:["bc","tc"],overflow:m,offset:[0,-4],targetOffset:z},bottom:{points:["tc","bc"],overflow:m,offset:[0,4],targetOffset:z},topLeft:{points:["bl","tl"],overflow:m,offset:[0,-4],targetOffset:z},leftTop:{points:["tr","tl"],overflow:I,offset:[-4,0],targetOffset:z},topRight:{points:["br","tr"],overflow:m,offset:[0,-4],targetOffset:z},rightTop:{points:["tl","tr"],overflow:I,offset:[4,0],targetOffset:z},bottomRight:{points:["tr","br"],overflow:m,offset:[0,4],targetOffset:z},rightBottom:{points:["bl","br"],overflow:I,offset:[4,0],targetOffset:z},bottomLeft:{points:["tl","bl"],overflow:m,offset:[0,4],targetOffset:z},leftBottom:{points:["br","bl"],overflow:I,offset:[-4,0],targetOffset:z}},re=null,We=["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle","arrowContent","overlay","id","showArrow"],pe=function(t,o){var r=t.overlayClassName,n=t.trigger,s=n===void 0?["hover"]:n,c=t.mouseEnterDelay,l=c===void 0?0:c,u=t.mouseLeaveDelay,g=u===void 0?.1:u,v=t.overlayStyle,p=t.prefixCls,d=p===void 0?"rc-tooltip":p,y=t.children,x=t.onVisibleChange,w=t.afterVisibleChange,N=t.transitionName,T=t.animation,P=t.motion,S=t.placement,L=S===void 0?"right":S,E=t.align,V=E===void 0?{}:E,Z=t.destroyTooltipOnHide,ge=Z===void 0?!1:Z,me=t.defaultVisible,X=t.getTooltipContainer,ae=t.overlayInnerStyle,Y=t.arrowContent,A=t.overlay,U=t.id,J=t.showArrow,ve=J===void 0?!0:J,R=(0,h.Z)(t,We),se=(0,a.useRef)(null);(0,a.useImperativeHandle)(o,function(){return se.current});var le=(0,i.Z)({},R);"visible"in t&&(le.popupVisible=t.visible);var he=function(){return a.createElement(Se,{key:"content",prefixCls:d,id:U,overlayInnerStyle:ae},A)};return a.createElement(b.Z,(0,Me.Z)({popupClassName:r,prefixCls:d,popup:he,action:s,builtinPlacements:Oe,popupPlacement:L,ref:se,popupAlign:V,getPopupContainer:X,onPopupVisibleChange:x,afterPopupVisibleChange:w,popupTransitionName:N,popupAnimation:T,popupMotion:P,defaultPopupVisible:me,autoDestroy:ge,mouseLeaveDelay:g,popupStyle:v,mouseEnterDelay:l,arrow:ve},le),y)},ke=(0,a.forwardRef)(pe),De=ke,M=f(21770);const Ve=(e,t,o,r,n)=>{const s=e/2,c=0,l=s,u=o*1/Math.sqrt(2),g=s-o*(1-1/Math.sqrt(2)),v=s-t*(1/Math.sqrt(2)),p=o*(Math.sqrt(2)-1)+t*(1/Math.sqrt(2)),d=2*s-v,y=p,x=2*s-u,w=g,N=2*s-c,T=l,P=s*Math.sqrt(2)+o*(Math.sqrt(2)-2),S=o*(Math.sqrt(2)-1);return{pointerEvents:"none",width:e,height:e,overflow:"hidden","&::before":{position:"absolute",bottom:0,insetInlineStart:0,width:e,height:e/2,background:r,clipPath:{_multi_value_:!0,value:[`polygon(${S}px 100%, 50% ${S}px, ${2*s-S}px 100%, ${S}px 100%)`,`path('M ${c} ${l} A ${o} ${o} 0 0 0 ${u} ${g} L ${v} ${p} A ${t} ${t} 0 0 1 ${d} ${y} L ${x} ${w} A ${o} ${o} 0 0 0 ${N} ${T} Z')`]},content:'""'},"&::after":{content:'""',position:"absolute",width:P,height:P,bottom:0,insetInline:0,margin:"auto",borderRadius:{_skip_check_:!0,value:`0 0 ${t}px 0`},transform:"translateY(50%) rotate(-135deg)",boxShadow:n,zIndex:0,background:"transparent"}}},we=8;function D(e){const t=we,{contentRadius:o,limitVerticalRadius:r}=e,n=o>12?o+2:12;return{dropdownArrowOffset:n,dropdownArrowOffsetVertical:r?t:n}}function ne(e,t){return e?t:{}}function $e(e,t){const{componentCls:o,sizePopupArrow:r,borderRadiusXS:n,borderRadiusOuter:s,boxShadowPopoverArrow:c}=e,{colorBg:l,contentRadius:u=e.borderRadiusLG,limitVerticalRadius:g,arrowDistance:v=0,arrowPlacement:p={left:!0,right:!0,top:!0,bottom:!0}}=t,{dropdownArrowOffsetVertical:d,dropdownArrowOffset:y}=D({contentRadius:u,limitVerticalRadius:g});return{[o]:Object.assign(Object.assign(Object.assign(Object.assign({[`${o}-arrow`]:[Object.assign(Object.assign({position:"absolute",zIndex:1,display:"block"},Ve(r,n,s,l,c)),{"&:before":{background:l}})]},ne(!!p.top,{[[`&-placement-top ${o}-arrow`,`&-placement-topLeft ${o}-arrow`,`&-placement-topRight ${o}-arrow`].join(",")]:{bottom:v,transform:"translateY(100%) rotate(180deg)"},[`&-placement-top ${o}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(100%) rotate(180deg)"},[`&-placement-topLeft ${o}-arrow`]:{left:{_skip_check_:!0,value:y}},[`&-placement-topRight ${o}-arrow`]:{right:{_skip_check_:!0,value:y}}})),ne(!!p.bottom,{[[`&-placement-bottom ${o}-arrow`,`&-placement-bottomLeft ${o}-arrow`,`&-placement-bottomRight ${o}-arrow`].join(",")]:{top:v,transform:"translateY(-100%)"},[`&-placement-bottom ${o}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(-100%)"},[`&-placement-bottomLeft ${o}-arrow`]:{left:{_skip_check_:!0,value:y}},[`&-placement-bottomRight ${o}-arrow`]:{right:{_skip_check_:!0,value:y}}})),ne(!!p.left,{[[`&-placement-left ${o}-arrow`,`&-placement-leftTop ${o}-arrow`,`&-placement-leftBottom ${o}-arrow`].join(",")]:{right:{_skip_check_:!0,value:v},transform:"translateX(100%) rotate(90deg)"},[`&-placement-left ${o}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(100%) rotate(90deg)"},[`&-placement-leftTop ${o}-arrow`]:{top:d},[`&-placement-leftBottom ${o}-arrow`]:{bottom:d}})),ne(!!p.right,{[[`&-placement-right ${o}-arrow`,`&-placement-rightTop ${o}-arrow`,`&-placement-rightBottom ${o}-arrow`].join(",")]:{left:{_skip_check_:!0,value:v},transform:"translateX(-100%) rotate(-90deg)"},[`&-placement-right ${o}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(-100%) rotate(-90deg)"},[`&-placement-rightTop ${o}-arrow`]:{top:d},[`&-placement-rightBottom ${o}-arrow`]:{bottom:d}}))}}function He(e,t,o,r){if(r===!1)return{adjustX:!1,adjustY:!1};const n=r&&typeof r=="object"?r:{},s={};switch(e){case"top":case"bottom":s.shiftX=t.dropdownArrowOffset*2+o,s.shiftY=!0,s.adjustY=!0;break;case"left":case"right":s.shiftY=t.dropdownArrowOffsetVertical*2+o,s.shiftX=!0,s.adjustX=!0;break}const c=Object.assign(Object.assign({},s),n);return c.shiftX||(c.adjustX=!0),c.shiftY||(c.adjustY=!0),c}const Pe={left:{points:["cr","cl"]},right:{points:["cl","cr"]},top:{points:["bc","tc"]},bottom:{points:["tc","bc"]},topLeft:{points:["bl","tl"]},leftTop:{points:["tr","tl"]},topRight:{points:["br","tr"]},rightTop:{points:["tl","tr"]},bottomRight:{points:["tr","br"]},rightBottom:{points:["bl","br"]},bottomLeft:{points:["tl","bl"]},leftBottom:{points:["br","bl"]}},ue={topLeft:{points:["bl","tc"]},leftTop:{points:["tr","cl"]},topRight:{points:["br","tc"]},rightTop:{points:["tl","cr"]},bottomRight:{points:["tr","bc"]},rightBottom:{points:["bl","cr"]},bottomLeft:{points:["tl","bc"]},leftBottom:{points:["br","cl"]}},at=new Set(["topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]);function st(e){const{arrowWidth:t,autoAdjustOverflow:o,arrowPointAtCenter:r,offset:n,borderRadius:s,visibleFirst:c}=e,l=t/2,u={};return Object.keys(Pe).forEach(g=>{const v=r&&ue[g]||Pe[g],p=Object.assign(Object.assign({},v),{offset:[0,0],dynamicInset:!0});switch(u[g]=p,at.has(g)&&(p.autoArrow=!1),g){case"top":case"topLeft":case"topRight":p.offset[1]=-l-n;break;case"bottom":case"bottomLeft":case"bottomRight":p.offset[1]=l+n;break;case"left":case"leftTop":case"leftBottom":p.offset[0]=-l-n;break;case"right":case"rightTop":case"rightBottom":p.offset[0]=l+n;break}const d=D({contentRadius:s,limitVerticalRadius:!0});if(r)switch(g){case"topLeft":case"bottomLeft":p.offset[0]=-d.dropdownArrowOffset-l;break;case"topRight":case"bottomRight":p.offset[0]=d.dropdownArrowOffset+l;break;case"leftTop":case"rightTop":p.offset[1]=-d.dropdownArrowOffset-l;break;case"leftBottom":case"rightBottom":p.offset[1]=d.dropdownArrowOffset+l;break}p.overflow=He(g,d,t,o),c&&(p.htmlRegion="visibleFirst")}),u}var je=f(96159),lt=f(27288),it=f(4173),ct=f(46605),Qe=f(50438);const de=["blue","purple","cyan","green","magenta","pink","red","orange","yellow","volcano","geekblue","lime","gold"];function ft(e,t){return de.reduce((o,r)=>{const n=e[`${r}1`],s=e[`${r}3`],c=e[`${r}6`],l=e[`${r}7`];return Object.assign(Object.assign({},o),t(r,{lightColor:n,lightBorderColor:s,darkColor:c,textColor:l}))},{})}const pt=e=>{const{componentCls:t,tooltipMaxWidth:o,tooltipColor:r,tooltipBg:n,tooltipBorderRadius:s,zIndexPopup:c,controlHeight:l,boxShadowSecondary:u,paddingSM:g,paddingXS:v,tooltipRadiusOuter:p}=e;return[{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,ee.Wf)(e)),{position:"absolute",zIndex:c,display:"block",width:"max-content",maxWidth:o,visibility:"visible",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","&-hidden":{display:"none"},"--antd-arrow-background-color":n,[`${t}-inner`]:{minWidth:l,minHeight:l,padding:`${g/2}px ${v}px`,color:r,textAlign:"start",textDecoration:"none",wordWrap:"break-word",backgroundColor:n,borderRadius:s,boxShadow:u,boxSizing:"border-box"},[["&-placement-left","&-placement-leftTop","&-placement-leftBottom","&-placement-right","&-placement-rightTop","&-placement-rightBottom"].join(",")]:{[`${t}-inner`]:{borderRadius:Math.min(s,we)}},[`${t}-content`]:{position:"relative"}}),ft(e,(d,y)=>{let{darkColor:x}=y;return{[`&${t}-${d}`]:{[`${t}-inner`]:{backgroundColor:x},[`${t}-arrow`]:{"--antd-arrow-background-color":x}}}})),{"&-rtl":{direction:"rtl"}})},$e((0,te.TS)(e,{borderRadiusOuter:p}),{colorBg:"var(--antd-arrow-background-color)",contentRadius:s,limitVerticalRadius:!0}),{[`${t}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow}}]};var Ke=(e,t)=>(0,fe.Z)("Tooltip",r=>{if(t===!1)return[];const{borderRadius:n,colorTextLightSolid:s,colorBgDefault:c,borderRadiusOuter:l}=r,u=(0,te.TS)(r,{tooltipMaxWidth:250,tooltipColor:s,tooltipBorderRadius:n,tooltipBg:c,tooltipRadiusOuter:l>4?4:l});return[pt(u),(0,Qe._y)(r,"zoom-big-fast")]},r=>{let{zIndexPopupBase:n,colorBgSpotlight:s}=r;return{zIndexPopup:n+70,colorBgDefault:s}},{resetStyle:!1})(e),qe=f(74902);const ut=de.map(e=>`${e}-inverse`),dt=null;function gt(e){return(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0)?[].concat((0,qe.Z)(ut),(0,qe.Z)(de)).includes(e):de.includes(e)}function Lt(e){return dt.includes(e)}function _e(e,t){const o=gt(t),r=j()({[`${e}-${t}`]:t&&o}),n={},s={};return t&&!o&&(n.background=t,s["--antd-arrow-background-color"]=t),{className:r,overlayStyle:n,arrowStyle:s}}var mt=e=>{const{prefixCls:t,className:o,placement:r="top",title:n,color:s,overlayInnerStyle:c}=e,{getPrefixCls:l}=a.useContext(H.E_),u=l("tooltip",t),[g,v]=Ke(u,!0),p=_e(u,s),d=p.arrowStyle,y=Object.assign(Object.assign({},c),p.overlayStyle),x=j()(v,u,`${u}-pure`,`${u}-placement-${r}`,o,p.className);return g(a.createElement("div",{className:x,style:d},a.createElement("div",{className:`${u}-arrow`}),a.createElement(Se,Object.assign({},e,{className:v,prefixCls:u,overlayInnerStyle:y}),n)))},vt=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(o[r[n]]=e[r[n]]);return o};const et=a.forwardRef((e,t)=>{var o,r;const{prefixCls:n,openClassName:s,getTooltipContainer:c,overlayClassName:l,color:u,overlayInnerStyle:g,children:v,afterOpenChange:p,afterVisibleChange:d,destroyTooltipOnHide:y,arrow:x=!0,title:w,overlay:N,builtinPlacements:T,arrowPointAtCenter:P=!1,autoAdjustOverflow:S=!0}=e,L=!!x,[,E]=(0,ct.Z)(),{getPopupContainer:V,getPrefixCls:Z,direction:ge}=a.useContext(H.E_),me=(0,lt.ln)("Tooltip"),X=a.useRef(null),ae=()=>{var W;(W=X.current)===null||W===void 0||W.forceAlign()};a.useImperativeHandle(t,()=>({forceAlign:ae,forcePopupAlign:()=>{me.deprecated(!1,"forcePopupAlign","forceAlign"),ae()}}));const[Y,A]=(0,M.Z)(!1,{value:(o=e.open)!==null&&o!==void 0?o:e.visible,defaultValue:(r=e.defaultOpen)!==null&&r!==void 0?r:e.defaultVisible}),U=!w&&!N&&w!==0,J=W=>{var Q,ie;A(U?!1:W),U||((Q=e.onOpenChange)===null||Q===void 0||Q.call(e,W),(ie=e.onVisibleChange)===null||ie===void 0||ie.call(e,W))},ve=a.useMemo(()=>{var W,Q;let ie=P;return typeof x=="object"&&(ie=(Q=(W=x.pointAtCenter)!==null&&W!==void 0?W:x.arrowPointAtCenter)!==null&&Q!==void 0?Q:P),T||st({arrowPointAtCenter:ie,autoAdjustOverflow:S,arrowWidth:L?E.sizePopupArrow:0,borderRadius:E.borderRadius,offset:E.marginXXS,visibleFirst:!0})},[P,x,T,E]),R=a.useMemo(()=>w===0?w:N||w||"",[N,w]),se=a.createElement(it.BR,null,typeof R=="function"?R():R),{getPopupContainer:le,placement:he="top",mouseEnterDelay:ye=.1,mouseLeaveDelay:Xe=.1,overlayStyle:Fe,rootClassName:Ge}=e,F=vt(e,["getPopupContainer","placement","mouseEnterDelay","mouseLeaveDelay","overlayStyle","rootClassName"]),C=Z("tooltip",n),$=Z(),B=e["data-popover-inject"];let Ze=Y;!("open"in e)&&!("visible"in e)&&U&&(Ze=!1);const Ye=(0,je.l$)(v)&&!(0,je.M2)(v)?v:a.createElement("span",null,v),Ee=Ye.props,Nt=!Ee.className||typeof Ee.className=="string"?j()(Ee.className,s||`${C}-open`):Ee.className,[Tt,It]=Ke(C,!B),Ue=_e(C,u),Rt=Ue.arrowStyle,zt=Object.assign(Object.assign({},g),Ue.overlayStyle),Bt=j()(l,{[`${C}-rtl`]:ge==="rtl"},Ue.className,Ge,It);return Tt(a.createElement(De,Object.assign({},F,{showArrow:L,placement:he,mouseEnterDelay:ye,mouseLeaveDelay:Xe,prefixCls:C,overlayClassName:Bt,overlayStyle:Object.assign(Object.assign({},Rt),Fe),getTooltipContainer:le||c||V,ref:X,builtinPlacements:ve,overlay:se,visible:Ze,onVisibleChange:J,afterVisibleChange:p!=null?p:d,overlayInnerStyle:zt,arrowContent:a.createElement("span",{className:`${C}-arrow-content`}),motion:{motionName:(0,Ce.m)($,"zoom-big-fast",e.transitionName),motionDeadline:1e3},destroyTooltipOnHide:!!y}),Ze?(0,je.Tm)(Ye,{className:Nt}):Ye))});et._InternalPanelDoNotUseOrYouWillBeFired=mt;var ht=et;const yt=e=>{const{componentCls:t,popoverColor:o,titleMinWidth:r,fontWeightStrong:n,popoverPadding:s,boxShadowSecondary:c,colorTextHeading:l,borderRadiusLG:u,zIndexPopup:g,marginXS:v,colorBgElevated:p,popoverBg:d}=e;return[{[t]:Object.assign(Object.assign({},(0,ee.Wf)(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:g,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":p,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${t}-content`]:{position:"relative"},[`${t}-inner`]:{backgroundColor:d,backgroundClip:"padding-box",borderRadius:u,boxShadow:c,padding:s},[`${t}-title`]:{minWidth:r,marginBottom:v,color:l,fontWeight:n},[`${t}-inner-content`]:{color:o}})},$e(e,{colorBg:"var(--antd-arrow-background-color)"}),{[`${t}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow,display:"inline-block",[`${t}-content`]:{display:"inline-block"}}}]},bt=e=>{const{componentCls:t}=e;return{[t]:de.map(o=>{const r=e[`${o}6`];return{[`&${t}-${o}`]:{"--antd-arrow-background-color":r,[`${t}-inner`]:{backgroundColor:r},[`${t}-arrow`]:{background:"transparent"}}}})}},xt=e=>{const{componentCls:t,lineWidth:o,lineType:r,colorSplit:n,paddingSM:s,controlHeight:c,fontSize:l,lineHeight:u,padding:g}=e,v=c-Math.round(l*u),p=v/2,d=v/2-o,y=g;return{[t]:{[`${t}-inner`]:{padding:0},[`${t}-title`]:{margin:0,padding:`${p}px ${y}px ${d}px`,borderBottom:`${o}px ${r} ${n}`},[`${t}-inner-content`]:{padding:`${s}px ${y}px`}}}};var tt=(0,fe.Z)("Popover",e=>{const{colorBgElevated:t,colorText:o,wireframe:r}=e,n=(0,te.TS)(e,{popoverPadding:12,popoverBg:t,popoverColor:o});return[yt(n),bt(n),r&&xt(n),(0,Qe._y)(n,"zoom-big")]},e=>({width:177,minWidth:177,titleMinWidth:177,zIndexPopup:e.zIndexPopupBase+30}),{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]}),Ct=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(o[r[n]]=e[r[n]]);return o};const St=(e,t,o)=>{if(!(!t&&!o))return a.createElement(a.Fragment,null,t&&a.createElement("div",{className:`${e}-title`},oe(t)),a.createElement("div",{className:`${e}-inner-content`},oe(o)))},Ot=e=>{const{hashId:t,prefixCls:o,className:r,style:n,placement:s="top",title:c,content:l,children:u}=e;return a.createElement("div",{className:j()(t,o,`${o}-pure`,`${o}-placement-${s}`,r),style:n},a.createElement("div",{className:`${o}-arrow`}),a.createElement(Se,Object.assign({},e,{className:t,prefixCls:o}),u||St(o,c,l)))};var wt=e=>{const{prefixCls:t}=e,o=Ct(e,["prefixCls"]),{getPrefixCls:r}=a.useContext(H.E_),n=r("popover",t),[s,c]=tt(n);return s(a.createElement(Ot,Object.assign({},o,{prefixCls:n,hashId:c})))},$t=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(o[r[n]]=e[r[n]]);return o};const Pt=e=>{let{title:t,content:o,prefixCls:r}=e;return a.createElement(a.Fragment,null,t&&a.createElement("div",{className:`${r}-title`},oe(t)),a.createElement("div",{className:`${r}-inner-content`},oe(o)))},ot=a.forwardRef((e,t)=>{const{prefixCls:o,title:r,content:n,overlayClassName:s,placement:c="top",trigger:l="hover",mouseEnterDelay:u=.1,mouseLeaveDelay:g=.1,overlayStyle:v={}}=e,p=$t(e,["prefixCls","title","content","overlayClassName","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),{getPrefixCls:d}=a.useContext(H.E_),y=d("popover",o),[x,w]=tt(y),N=d(),T=j()(s,w);return x(a.createElement(ht,Object.assign({placement:c,trigger:l,mouseEnterDelay:u,mouseLeaveDelay:g,overlayStyle:v},p,{prefixCls:y,overlayClassName:T,ref:t,overlay:r||n?a.createElement(Pt,{prefixCls:y,title:r,content:n}):null,transitionName:(0,Ce.m)(N,"zoom-big",p.transitionName),"data-popover-inject":!0})))});ot._InternalPanelDoNotUseOrYouWillBeFired=wt;var jt=ot;const rt=e=>{const{size:t,shape:o}=a.useContext(_),r=a.useMemo(()=>({size:e.size||t,shape:e.shape||o}),[e.size,e.shape,t,o]);return a.createElement(_.Provider,{value:r},e.children)};var Et=e=>{const{getPrefixCls:t,direction:o}=a.useContext(H.E_),{prefixCls:r,className:n,rootClassName:s,style:c,maxCount:l,maxStyle:u,size:g,shape:v,maxPopoverPlacement:p="top",maxPopoverTrigger:d="hover",children:y}=e,x=t("avatar",r),w=`${x}-group`,[N,T]=be(x),P=j()(w,{[`${w}-rtl`]:o==="rtl"},n,s,T),S=(0,Le.Z)(y).map((E,V)=>(0,je.Tm)(E,{key:`avatar-key-${V}`})),L=S.length;if(l&&l<L){const E=S.slice(0,l),V=S.slice(l,L);return E.push(a.createElement(jt,{key:"avatar-popover-key",content:V,trigger:d,placement:p,overlayClassName:`${w}-popover`},a.createElement(xe,{style:u},`+${L-l}`))),N(a.createElement(rt,{shape:v,size:g},a.createElement("div",{className:P,style:c},E)))}return N(a.createElement(rt,{shape:v,size:g},a.createElement("div",{className:P,style:c},S)))};const nt=xe;nt.Group=Et;var At=nt},51431:function(O,k,f){"use strict";f.d(k,{Z:function(){return Me}});var a=f(67294),G=f(94184),j=f.n(G),ce=f(98423);function K(i){return["small","middle","large"].includes(i)}function q(i){return i?typeof i=="number"&&!Number.isNaN(i):!1}var H=f(53124),Ae=f(67968),Ne=f(45503);const Te=["wrap","nowrap","wrap-reverse"],_=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],ee=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"],fe=(i,h)=>{const b={};return Te.forEach(m=>{b[`${i}-wrap-${m}`]=h.wrap===m}),b},te=(i,h)=>{const b={};return ee.forEach(m=>{b[`${i}-align-${m}`]=h.align===m}),b[`${i}-align-stretch`]=!h.align&&!!h.vertical,b},Ie=(i,h)=>{const b={};return _.forEach(m=>{b[`${i}-justify-${m}`]=h.justify===m}),b};function Re(i,h){return j()(Object.assign(Object.assign(Object.assign({},fe(i,h)),te(i,h)),Ie(i,h)))}var be=Re;const ze=i=>{const{componentCls:h}=i;return{[h]:{display:"flex","&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}}}},Be=i=>{const{componentCls:h}=i;return{[h]:{"&-gap-small":{gap:i.flexGapSM},"&-gap-middle":{gap:i.flexGap},"&-gap-large":{gap:i.flexGapLG}}}},Je=i=>{const{componentCls:h}=i,b={};return Te.forEach(m=>{b[`${h}-wrap-${m}`]={flexWrap:m}}),b},xe=i=>{const{componentCls:h}=i,b={};return ee.forEach(m=>{b[`${h}-align-${m}`]={alignItems:m}}),b},Le=i=>{const{componentCls:h}=i,b={};return _.forEach(m=>{b[`${h}-justify-${m}`]={justifyContent:m}}),b};var oe=(0,Ae.Z)("Flex",i=>{const h=(0,Ne.TS)(i,{flexGapSM:i.paddingXS,flexGap:i.padding,flexGapLG:i.paddingLG});return[ze(h),Be(h),Je(h),xe(h),Le(h)]}),Ce=function(i,h){var b={};for(var m in i)Object.prototype.hasOwnProperty.call(i,m)&&h.indexOf(m)<0&&(b[m]=i[m]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var I=0,m=Object.getOwnPropertySymbols(i);I<m.length;I++)h.indexOf(m[I])<0&&Object.prototype.propertyIsEnumerable.call(i,m[I])&&(b[m[I]]=i[m[I]]);return b},Me=a.forwardRef((i,h)=>{const{prefixCls:b,rootClassName:m,className:I,style:z,flex:Oe,gap:re,children:We,vertical:pe=!1,component:ke="div"}=i,De=Ce(i,["prefixCls","rootClassName","className","style","flex","gap","children","vertical","component"]),{flex:M,direction:Ve,getPrefixCls:we}=a.useContext(H.E_),D=we("flex",b),[ne,$e]=oe(D),He=pe!=null?pe:M==null?void 0:M.vertical,Pe=j()(I,m,M==null?void 0:M.className,D,$e,be(D,i),{[`${D}-rtl`]:Ve==="rtl",[`${D}-gap-${re}`]:K(re),[`${D}-vertical`]:He}),ue=Object.assign(Object.assign({},M==null?void 0:M.style),z);return Oe&&(ue.flex=Oe),re&&!K(re)&&(ue.gap=re),ne(a.createElement(ke,Object.assign({ref:h,className:Pe,style:ue},(0,ce.Z)(De,["justify","wrap","align"])),We))})},63405:function(O,k,f){var a=f(73897);function G(j){if(Array.isArray(j))return a(j)}O.exports=G,O.exports.__esModule=!0,O.exports.default=O.exports},79498:function(O){function k(f){if(typeof Symbol!="undefined"&&f[Symbol.iterator]!=null||f["@@iterator"]!=null)return Array.from(f)}O.exports=k,O.exports.__esModule=!0,O.exports.default=O.exports},42281:function(O){function k(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}O.exports=k,O.exports.__esModule=!0,O.exports.default=O.exports},861:function(O,k,f){var a=f(63405),G=f(79498),j=f(86116),ce=f(42281);function K(q){return a(q)||G(q)||j(q)||ce()}O.exports=K,O.exports.__esModule=!0,O.exports.default=O.exports}}]);
