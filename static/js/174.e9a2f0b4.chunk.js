"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[174],{8174:function(t,e,n){n.d(e,{Am:function(){return q}});var o=n(4942),a=n(9439),r=n(1413);function i(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=n(3433),c=n(2791);function u(t){var e,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=u(t[e]))&&(o&&(o+=" "),o+=n);else for(e in t)t[e]&&(o&&(o+=" "),o+=e);return o}var l=function(){for(var t,e,n=0,o="";n<arguments.length;)(t=arguments[n++])&&(e=u(t))&&(o&&(o+=" "),o+=e);return o},d=["theme","type"],f=["delay","staleId"],p=function(t){return"number"==typeof t&&!isNaN(t)},m=function(t){return"string"==typeof t},v=function(t){return"function"==typeof t},g=function(t){return m(t)||v(t)?t:null},y=function(t){return(0,c.isValidElement)(t)||m(t)||v(t)||p(t)};function h(t){var e=t.enter,n=t.exit,o=t.appendPosition,a=void 0!==o&&o,r=t.collapse,i=void 0===r||r,u=t.collapseDuration,l=void 0===u?300:u;return function(t){var o=t.children,r=t.position,u=t.preventExitTransition,d=t.done,f=t.nodeRef,p=t.isIn,m=a?"".concat(e,"--").concat(r):e,v=a?"".concat(n,"--").concat(r):n,g=(0,c.useRef)(0);return(0,c.useLayoutEffect)((function(){var t,e=f.current,n=m.split(" "),o=function t(o){var a;o.target===f.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",t),e.removeEventListener("animationcancel",t),0===g.current&&"animationcancel"!==o.type&&(a=e.classList).remove.apply(a,(0,s.Z)(n)))};(t=e.classList).add.apply(t,(0,s.Z)(n)),e.addEventListener("animationend",o),e.addEventListener("animationcancel",o)}),[]),(0,c.useEffect)((function(){var t=f.current,e=function e(){t.removeEventListener("animationend",e),i?function(t,e,n){void 0===n&&(n=300);var o=t.scrollHeight,a=t.style;requestAnimationFrame((function(){a.minHeight="initial",a.height=o+"px",a.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){a.height="0",a.padding="0",a.margin="0",setTimeout(e,n)}))}))}(t,d,l):d()};p||(u?e():(g.current=1,t.className+=" ".concat(v),t.addEventListener("animationend",e)))}),[p]),c.createElement(c.Fragment,null,o)}}function T(t,e){return{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}}var E={list:new Map,emitQueue:new Map,on:function(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off:function(t,e){if(e){var n=this.list.get(t).filter((function(t){return t!==e}));return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit:function(t){var e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit:function(t){var e=arguments,n=this;this.list.has(t)&&this.list.get(t).forEach((function(o){var a=setTimeout((function(){o.apply(void 0,(0,s.Z)([].slice.call(e,1)))}),0);n.emitQueue.has(t)||n.emitQueue.set(t,[]),n.emitQueue.get(t).push(a)}))}},b=function(t){var e=t.theme,n=t.type,o=i(t,d);return c.createElement("svg",(0,r.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===e?"currentColor":"var(--toastify-icon-color-".concat(n,")")},o))},C={info:function(t){return c.createElement(b,(0,r.Z)({},t),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return c.createElement(b,(0,r.Z)({},t),c.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return c.createElement(b,(0,r.Z)({},t),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return c.createElement(b,(0,r.Z)({},t),c.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return c.createElement("div",{className:"Toastify__spinner"})}};function I(t){var e=(0,c.useReducer)((function(t){return t+1}),0),n=(0,a.Z)(e,2)[1],o=(0,c.useState)([]),u=(0,a.Z)(o,2),l=u[0],d=u[1],h=(0,c.useRef)(null),b=(0,c.useRef)(new Map).current,I=function(t){return-1!==l.indexOf(t)},_=(0,c.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:I,getToast:function(t){return b.get(t)}}).current;function Z(t){var e=t.containerId;!_.props.limit||e&&_.containerId!==e||(_.count-=_.queue.length,_.queue=[])}function O(t){d((function(e){return null==t?[]:e.filter((function(e){return e!==t}))}))}function L(){var t=_.queue.shift();R(t.toastContent,t.toastProps,t.staleId)}function N(t,e){var o=e.delay,a=e.staleId,s=i(e,f);if(y(t)&&!function(t){return!h.current||_.props.enableMultiContainer&&t.containerId!==_.props.containerId||b.has(t.toastId)&&null==t.updateId}(s)){var u=s.toastId,l=s.updateId,d=s.data,I=_.props,Z=function(){return O(u)},N=null==l;N&&_.count++;var w,k,M=(0,r.Z)((0,r.Z)((0,r.Z)({},I),{},{style:I.toastStyle,key:_.toastKey++},s),{},{toastId:u,updateId:l,data:d,closeToast:Z,isIn:!1,className:g(s.className||I.toastClassName),bodyClassName:g(s.bodyClassName||I.bodyClassName),progressClassName:g(s.progressClassName||I.progressClassName),autoClose:!s.isLoading&&(w=s.autoClose,k=I.autoClose,!1===w||p(w)&&w>0?w:k),deleteToast:function(){var t=T(b.get(u),"removed");b.delete(u),E.emit(4,t);var e=_.queue.length;if(_.count=null==u?_.count-_.displayedToast:_.count-1,_.count<0&&(_.count=0),e>0){var o=null==u?_.props.limit:1;if(1===e||1===o)_.displayedToast++,L();else{var a=o>e?e:o;_.displayedToast=a;for(var r=0;r<a;r++)L()}}else n()}});M.iconOut=function(t){var e=t.theme,n=t.type,o=t.isLoading,a=t.icon,r=null,i={theme:e,type:n};return!1===a||(v(a)?r=a(i):(0,c.isValidElement)(a)?r=(0,c.cloneElement)(a,i):m(a)||p(a)?r=a:o?r=C.spinner():function(t){return t in C}(n)&&(r=C[n](i))),r}(M),v(s.onOpen)&&(M.onOpen=s.onOpen),v(s.onClose)&&(M.onClose=s.onClose),M.closeButton=I.closeButton,!1===s.closeButton||y(s.closeButton)?M.closeButton=s.closeButton:!0===s.closeButton&&(M.closeButton=!y(I.closeButton)||I.closeButton);var x=t;(0,c.isValidElement)(t)&&!m(t.type)?x=(0,c.cloneElement)(t,{closeToast:Z,toastProps:M,data:d}):v(t)&&(x=t({closeToast:Z,toastProps:M,data:d})),I.limit&&I.limit>0&&_.count>I.limit&&N?_.queue.push({toastContent:x,toastProps:M,staleId:a}):p(o)?setTimeout((function(){R(x,M,a)}),o):R(x,M,a)}}function R(t,e,n){var o=e.toastId;n&&b.delete(n);var a={content:t,props:e};b.set(o,a),d((function(t){return[].concat((0,s.Z)(t),[o]).filter((function(t){return t!==n}))})),E.emit(4,T(a,null==a.props.updateId?"added":"updated"))}return(0,c.useEffect)((function(){return _.containerId=t.containerId,E.cancelEmit(3).on(0,N).on(1,(function(t){return h.current&&O(t)})).on(5,Z).emit(2,_),function(){b.clear(),E.emit(3,_)}}),[]),(0,c.useEffect)((function(){_.props=t,_.isToastActive=I,_.displayedToast=l.length})),{getToastToRender:function(e){var n=new Map,o=Array.from(b.values());return t.newestOnTop&&o.reverse(),o.forEach((function(t){var e=t.props.position;n.has(e)||n.set(e,[]),n.get(e).push(t)})),Array.from(n,(function(t){return e(t[0],t[1])}))},containerRef:h,isToastActive:I}}function _(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function Z(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function O(t){var e=(0,c.useState)(!1),n=(0,a.Z)(e,2),o=n[0],r=n[1],i=(0,c.useState)(!1),s=(0,a.Z)(i,2),u=s[0],l=s[1],d=(0,c.useRef)(null),f=(0,c.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,c.useRef)(t),m=t.autoClose,g=t.pauseOnHover,y=t.closeToast,h=t.onClick,T=t.closeOnClick;function E(e){if(t.draggable){"touchstart"===e.nativeEvent.type&&e.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",O),document.addEventListener("mouseup",L),document.addEventListener("touchmove",O),document.addEventListener("touchend",L);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=_(e.nativeEvent),f.y=Z(e.nativeEvent),"x"===t.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(t.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===t.draggablePercent?1.5*t.draggablePercent:t.draggablePercent/100))}}function b(e){if(f.boundingRect){var n=f.boundingRect,o=n.top,a=n.bottom,r=n.left,i=n.right;"touchend"!==e.nativeEvent.type&&t.pauseOnHover&&f.x>=r&&f.x<=i&&f.y>=o&&f.y<=a?I():C()}}function C(){r(!0)}function I(){r(!1)}function O(e){var n=d.current;f.canDrag&&n&&(f.didMove=!0,o&&I(),f.x=_(e),f.y=Z(e),f.delta="x"===t.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate".concat(t.draggableDirection,"(").concat(f.delta,"px)"),n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function L(){document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",L),document.removeEventListener("touchmove",O),document.removeEventListener("touchend",L);var e=d.current;if(f.canDrag&&f.didMove&&e){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return l(!0),void t.closeToast();e.style.transition="transform 0.2s, opacity 0.2s",e.style.transform="translate".concat(t.draggableDirection,"(0)"),e.style.opacity="1"}}(0,c.useEffect)((function(){p.current=t})),(0,c.useEffect)((function(){return d.current&&d.current.addEventListener("d",C,{once:!0}),v(t.onOpen)&&t.onOpen((0,c.isValidElement)(t.children)&&t.children.props),function(){var t=p.current;v(t.onClose)&&t.onClose((0,c.isValidElement)(t.children)&&t.children.props)}}),[]),(0,c.useEffect)((function(){return t.pauseOnFocusLoss&&(document.hasFocus()||I(),window.addEventListener("focus",C),window.addEventListener("blur",I)),function(){t.pauseOnFocusLoss&&(window.removeEventListener("focus",C),window.removeEventListener("blur",I))}}),[t.pauseOnFocusLoss]);var N={onMouseDown:E,onTouchStart:E,onMouseUp:b,onTouchEnd:b};return m&&g&&(N.onMouseEnter=I,N.onMouseLeave=C),T&&(N.onClick=function(t){h&&h(t),f.canCloseOnClick&&y()}),{playToast:C,pauseToast:I,isRunning:o,preventExitTransition:u,toastRef:d,eventHandlers:N}}function L(t){var e=t.closeToast,n=t.theme,o=t.ariaLabel,a=void 0===o?"close":o;return c.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(t){t.stopPropagation(),e(t)},"aria-label":a},c.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},c.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function N(t){var e=t.delay,n=t.isRunning,a=t.closeToast,i=t.type,s=void 0===i?"default":i,u=t.hide,d=t.className,f=t.style,p=t.controlledProgress,m=t.progress,g=t.rtl,y=t.isIn,h=t.theme,T=u||p&&0===m,E=(0,r.Z)((0,r.Z)({},f),{},{animationDuration:"".concat(e,"ms"),animationPlayState:n?"running":"paused",opacity:T?0:1});p&&(E.transform="scaleX(".concat(m,")"));var b=l("Toastify__progress-bar",p?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(h),"Toastify__progress-bar--".concat(s),{"Toastify__progress-bar--rtl":g}),C=v(d)?d({rtl:g,type:s,defaultClassName:b}):l(b,d);return c.createElement("div",(0,o.Z)({role:"progressbar","aria-hidden":T?"true":"false","aria-label":"notification timer",className:C,style:E},p&&m>=1?"onTransitionEnd":"onAnimationEnd",p&&m<1?null:function(){y&&a()}))}var R=function(t){var e=O(t),n=e.isRunning,o=e.preventExitTransition,a=e.toastRef,i=e.eventHandlers,s=t.closeButton,u=t.children,d=t.autoClose,f=t.onClick,p=t.type,m=t.hideProgressBar,g=t.closeToast,y=t.transition,h=t.position,T=t.className,E=t.style,b=t.bodyClassName,C=t.bodyStyle,I=t.progressClassName,_=t.progressStyle,Z=t.updateId,R=t.role,w=t.progress,k=t.rtl,M=t.toastId,x=t.deleteToast,P=t.isIn,A=t.isLoading,B=t.iconOut,D=t.closeOnClick,z=t.theme,S=l("Toastify__toast","Toastify__toast-theme--".concat(z),"Toastify__toast--".concat(p),{"Toastify__toast--rtl":k},{"Toastify__toast--close-on-click":D}),F=v(T)?T({rtl:k,position:h,type:p,defaultClassName:S}):l(S,T),H=!!w||!d,q={closeToast:g,type:p,theme:z},Q=null;return!1===s||(Q=v(s)?s(q):(0,c.isValidElement)(s)?(0,c.cloneElement)(s,q):L(q)),c.createElement(y,{isIn:P,done:x,position:h,preventExitTransition:o,nodeRef:a},c.createElement("div",(0,r.Z)((0,r.Z)({id:M,onClick:f,className:F},i),{},{style:E,ref:a}),c.createElement("div",(0,r.Z)((0,r.Z)({},P&&{role:R}),{},{className:v(b)?b({type:p}):l("Toastify__toast-body",b),style:C}),null!=B&&c.createElement("div",{className:l("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!A})},B),c.createElement("div",null,u)),Q,c.createElement(N,(0,r.Z)((0,r.Z)({},Z&&!H?{key:"pb-".concat(Z)}:{}),{},{rtl:k,theme:z,delay:d,isRunning:n,isIn:P,closeToast:g,hide:m,type:p,style:_,className:I,controlledProgress:H,progress:w||0}))))},w=function(t,e){return void 0===e&&(e=!1),{enter:"Toastify--animate Toastify__".concat(t,"-enter"),exit:"Toastify--animate Toastify__".concat(t,"-exit"),appendPosition:e}},k=h(w("bounce",!0)),M=(h(w("slide",!0)),h(w("zoom")),h(w("flip")),(0,c.forwardRef)((function(t,e){var n=I(t),o=n.getToastToRender,a=n.containerRef,i=n.isToastActive,s=t.className,u=t.style,d=t.rtl,f=t.containerId;function p(t){var e=l("Toastify__toast-container","Toastify__toast-container--".concat(t),{"Toastify__toast-container--rtl":d});return v(s)?s({position:t,rtl:d,defaultClassName:e}):l(e,g(s))}return(0,c.useEffect)((function(){e&&(e.current=a.current)}),[]),c.createElement("div",{ref:a,className:"Toastify",id:f},o((function(t,e){var n=e.length?(0,r.Z)({},u):(0,r.Z)((0,r.Z)({},u),{},{pointerEvents:"none"});return c.createElement("div",{className:p(t),style:n,key:"container-".concat(t)},e.map((function(t,n){var o=t.content,a=t.props;return c.createElement(R,(0,r.Z)((0,r.Z)({},a),{},{isIn:i(a.toastId),style:(0,r.Z)((0,r.Z)({},a.style),{},{"--nth":n+1,"--len":e.length}),key:"toast-".concat(a.key)}),o)})))})))})));M.displayName="ToastContainer",M.defaultProps={position:"top-right",transition:k,autoClose:5e3,closeButton:L,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var x,P=new Map,A=[],B=1;function D(){return""+B++}function z(t){return t&&(m(t.toastId)||p(t.toastId))?t.toastId:D()}function S(t,e){return P.size>0?E.emit(0,t,e):A.push({content:t,options:e}),e.toastId}function F(t,e){return(0,r.Z)((0,r.Z)({},e),{},{type:e&&e.type||t,toastId:z(e)})}function H(t){return function(e,n){return S(e,F(t,n))}}function q(t,e){return S(t,F("default",e))}q.loading=function(t,e){return S(t,F("default",(0,r.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},e)))},q.promise=function(t,e,n){var o,a=e.pending,i=e.error,s=e.success;a&&(o=m(a)?q.loading(a,n):q.loading(a.render,(0,r.Z)((0,r.Z)({},n),a)));var c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},u=function(t,e,a){if(null!=e){var i=(0,r.Z)((0,r.Z)((0,r.Z)({type:t},c),n),{},{data:a}),s=m(e)?{render:e}:e;return o?q.update(o,(0,r.Z)((0,r.Z)({},i),s)):q(s.render,(0,r.Z)((0,r.Z)({},i),s)),a}q.dismiss(o)},l=v(t)?t():t;return l.then((function(t){return u("success",s,t)})).catch((function(t){return u("error",i,t)})),l},q.success=H("success"),q.info=H("info"),q.error=H("error"),q.warning=H("warning"),q.warn=q.warning,q.dark=function(t,e){return S(t,F("default",(0,r.Z)({theme:"dark"},e)))},q.dismiss=function(t){P.size>0?E.emit(1,t):A=A.filter((function(e){return null!=t&&e.options.toastId!==t}))},q.clearWaitingQueue=function(t){return void 0===t&&(t={}),E.emit(5,t)},q.isActive=function(t){var e=!1;return P.forEach((function(n){n.isToastActive&&n.isToastActive(t)&&(e=!0)})),e},q.update=function(t,e){void 0===e&&(e={}),setTimeout((function(){var n=function(t,e){var n=e.containerId,o=P.get(n||x);return o&&o.getToast(t)}(t,e);if(n){var o=n.props,a=n.content,i=(0,r.Z)((0,r.Z)((0,r.Z)({},o),e),{},{toastId:e.toastId||t,updateId:D()});i.toastId!==t&&(i.staleId=t);var s=i.render||a;delete i.render,S(s,i)}}),0)},q.done=function(t){q.update(t,{progress:1})},q.onChange=function(t){return E.on(4,t),function(){E.off(4,t)}},q.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},q.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},E.on(2,(function(t){x=t.containerId||t,P.set(x,t),A.forEach((function(t){E.emit(0,t.content,t.options)})),A=[]})).on(3,(function(t){P.delete(t.containerId||t),0===P.size&&E.off(0).off(1).off(5)}))}}]);
//# sourceMappingURL=174.e9a2f0b4.chunk.js.map