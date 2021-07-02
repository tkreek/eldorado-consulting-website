var t=Object.defineProperty,e=Object.defineProperties,n=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=(e,n,o)=>n in e?t(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o;function c(){}function l(t,e){for(const n in e)t[n]=e[n];return t}function a(t){return t()}function u(){return Object.create(null)}function f(t){t.forEach(a)}function d(t){return"function"==typeof t}function p(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function m(t,...e){if(null==t)return c;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function h(t,e,n){t.$$.on_destroy.push(m(e,n))}function g(t,e,n,o){if(t){const r=y(t,e,n,o);return t[0](r)}}function y(t,e,n,o){return t[1]&&o?l(n.ctx.slice(),t[1](o(e))):n.ctx}function $(t,e,n,o,r,s,i){const c=function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(e,o,r,s);if(c){const r=y(e,n,o,i);t.p(r,c)}}const b="undefined"!=typeof window;let v=b?()=>window.performance.now():()=>Date.now(),_=b?t=>requestAnimationFrame(t):c;const w=new Set;function x(t){w.forEach((e=>{e.c(t)||(w.delete(e),e.f())})),0!==w.size&&_(x)}function E(t){let e;return 0===w.size&&_(x),{promise:new Promise((n=>{w.add(e={c:t,f:n})})),abort(){w.delete(e)}}}let T,L=!1;function O(t,e,n,o){for(;t<e;){const r=t+(e-t>>1);n(r)<=o?t=r+1:e=r}return t}function S(t,e){L?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const e=t.childNodes,n=new Int32Array(e.length+1),o=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const t=O(1,r+1,(t=>e[n[t]].claim_order),e[l].claim_order)-1;o[l]=n[t]+1;const s=t+1;n[s]=l,r=Math.max(s,r)}const s=[],i=[];let c=e.length-1;for(let l=n[r]+1;0!=l;l=o[l-1]){for(s.push(e[l-1]);c>=l;c--)i.push(e[c]);c--}for(;c>=0;c--)i.push(e[c]);s.reverse(),i.sort(((t,e)=>t.claim_order-e.claim_order));for(let l=0,a=0;l<i.length;l++){for(;a<s.length&&i[l].claim_order>=s[a].claim_order;)a++;const e=a<s.length?s[a]:null;t.insertBefore(i[l],e)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),e!==t.actual_end_child?t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling):e.parentNode!==t&&t.appendChild(e)}function A(t,e,n){L&&!n?S(t,e):(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function j(t){t.parentNode.removeChild(t)}function M(t){return document.createElement(t)}function P(t){return document.createTextNode(t)}function k(){return P(" ")}function D(){return P("")}function H(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function N(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function C(t){return Array.from(t.childNodes)}function F(t,e,n,o,r=!1){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0});const s=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const s=t[o];if(e(s))return n(s),t.splice(o,1),r||(t.claim_info.last_index=o),s}for(let o=t.claim_info.last_index-1;o>=0;o--){const s=t[o];if(e(s))return n(s),t.splice(o,1),r?t.claim_info.last_index--:t.claim_info.last_index=o,s}return o()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function q(t,e,n,o){return F(t,(t=>t.nodeName===e),(t=>{const e=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o];n[r.name]||e.push(r.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):M(e)))}function z(t,e){return F(t,(t=>3===t.nodeType),(t=>{t.data=""+e}),(()=>P(e)),!0)}function I(t){return z(t," ")}function B(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Y(t,e=document.body){return Array.from(e.querySelectorAll(t))}function X(t){T=t}function V(){if(!T)throw new Error("Function called outside component initialization");return T}function W(t){V().$$.on_mount.push(t)}function G(t){V().$$.after_update.push(t)}function J(){const t=V();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const r=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);o.slice().forEach((e=>{e.call(t,r)}))}}}function K(t,e){V().$$.context.set(t,e)}const R=[],Q=[],U=[],Z=[],tt=Promise.resolve();let et=!1;function nt(t){U.push(t)}let ot=!1;const rt=new Set;function st(){if(!ot){ot=!0;do{for(let t=0;t<R.length;t+=1){const e=R[t];X(e),it(e.$$)}for(X(null),R.length=0;Q.length;)Q.pop()();for(let t=0;t<U.length;t+=1){const e=U[t];rt.has(e)||(rt.add(e),e())}U.length=0}while(R.length);for(;Z.length;)Z.pop()();et=!1,ot=!1,rt.clear()}}function it(t){if(null!==t.fragment){t.update(),f(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(nt)}}const ct=new Set;let lt;function at(){lt={r:0,c:[],p:lt}}function ut(){lt.r||f(lt.c),lt=lt.p}function ft(t,e){t&&t.i&&(ct.delete(t),t.i(e))}function dt(t,e,n,o){if(t&&t.o){if(ct.has(t))return;ct.add(t),lt.c.push((()=>{ct.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const pt="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function mt(t,e){const n={},o={},r={$$scope:1};let s=t.length;for(;s--;){const i=t[s],c=e[s];if(c){for(const t in i)t in c||(o[t]=1);for(const t in c)r[t]||(n[t]=c[t],r[t]=1);t[s]=c}else for(const t in i)r[t]=1}for(const i in o)i in n||(n[i]=void 0);return n}function ht(t){return"object"==typeof t&&null!==t?t:{}}function gt(t){t&&t.c()}function yt(t,e){t&&t.l(e)}function $t(t,e,n,o){const{fragment:r,on_mount:s,on_destroy:i,after_update:c}=t.$$;r&&r.m(e,n),o||nt((()=>{const e=s.map(a).filter(d);i?i.push(...e):f(e),t.$$.on_mount=[]})),c.forEach(nt)}function bt(t,e){const n=t.$$;null!==n.fragment&&(f(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function vt(t,e){-1===t.$$.dirty[0]&&(R.push(t),et||(et=!0,tt.then(st)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function _t(t,e,n,o,r,s,i=[-1]){const l=T;X(t);const a=t.$$={fragment:null,ctx:null,props:s,update:c,not_equal:r,bound:u(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:e.context||[]),callbacks:u(),dirty:i,skip_bound:!1};let d=!1;if(a.ctx=n?n(t,e.props||{},((e,n,...o)=>{const s=o.length?o[0]:n;return a.ctx&&r(a.ctx[e],a.ctx[e]=s)&&(!a.skip_bound&&a.bound[e]&&a.bound[e](s),d&&vt(t,e)),n})):[],a.update(),d=!0,f(a.before_update),a.fragment=!!o&&o(a.ctx),e.target){if(e.hydrate){L=!0;const t=C(e.target);a.fragment&&a.fragment.l(t),t.forEach(j)}else a.fragment&&a.fragment.c();e.intro&&ft(t.$$.fragment),$t(t,e.target,e.anchor,e.customElement),L=!1,st()}X(l)}class wt{$destroy(){bt(this,1),this.$destroy=c}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const xt=[];function Et(t,e=c){let n;const o=[];function r(e){if(p(t,e)&&(t=e,n)){const e=!xt.length;for(let n=0;n<o.length;n+=1){const e=o[n];e[1](),xt.push(e,t)}if(e){for(let t=0;t<xt.length;t+=2)xt[t][0](xt[t+1]);xt.length=0}}}return{set:r,update:function(e){r(e(t))},subscribe:function(s,i=c){const l=[s,i];return o.push(l),1===o.length&&(n=e(r)||c),s(t),()=>{const t=o.indexOf(l);-1!==t&&o.splice(t,1),0===o.length&&(n(),n=null)}}}}function Tt(t,e,n){const o=!Array.isArray(t),r=o?[t]:t,s=e.length<2;return{subscribe:Et(n,(t=>{let n=!1;const i=[];let l=0,a=c;const u=()=>{if(l)return;a();const n=e(o?i[0]:i,t);s?t(n):a=d(n)?n:c},p=r.map(((t,e)=>m(t,(t=>{i[e]=t,l&=~(1<<e),n&&u()}),(()=>{l|=1<<e}))));return n=!0,u(),function(){f(p),a()}})).subscribe}}function Lt(t){return(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1)}function Ot(t=new Set){const c=Et(t),l=t=>(...e)=>{let n;return c.update((o=>(n=o[t](...e),o))),n};return a=((t,e)=>{for(var n in e||(e={}))r.call(e,n)&&i(t,n,e[n]);if(o)for(var n of o(e))s.call(e,n)&&i(t,n,e[n]);return t})({},c),u={add:l("add"),delete:l("delete")},e(a,n(u));var a,u}const St={};let At=!1;try{let t=Object.defineProperty({},"passive",{get:function(){At=!0}});window.addEventListener("test",null,t)}catch(Gt){}var jt={$:t=>"string"==typeof t?document.querySelector(t):t,extend:(...t)=>Object.assign(...t),addListeners(t,e,n,o={passive:!1}){e instanceof Array||(e=[e]);for(let r=0;r<e.length;r++)t.addEventListener(e[r],n,!!At&&o)},removeListeners(t,e,n){e instanceof Array||(e=[e]);for(let o=0;o<e.length;o++)t.removeEventListener(e[o],n)},cumulativeOffset(t){let e=0,n=0;do{e+=t.offsetTop||0,n+=t.offsetLeft||0,t=t.offsetParent}while(t);return{top:e,left:n}},directScroll:t=>t&&t!==document&&t!==document.body,scrollTop(t,e){let n=void 0!==e;return this.directScroll(t)?n?t.scrollTop=e:t.scrollTop:n?document.documentElement.scrollTop=document.body.scrollTop=e:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},scrollLeft(t,e){let n=void 0!==e;return this.directScroll(t)?n?t.scrollLeft=e:t.scrollLeft:n?document.documentElement.scrollLeft=document.body.scrollLeft=e:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0}};const Mt={container:"body",duration:500,delay:0,offset:0,easing:function(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1},onStart:c,onDone:c,onAborting:c,scrollX:!1,scrollY:!0},Pt=["mousedown","wheel","DOMMouseScroll","mousewheel","keydown","touchmove"],kt=t=>{let{offset:e,duration:n,delay:o,easing:r,x:s=0,y:i=0,scrollX:c,scrollY:l,onStart:a,onDone:u,container:f,onAborting:d,element:p}=t;"function"==typeof e&&(e=e());var m=jt.cumulativeOffset(f),h=p?jt.cumulativeOffset(p):{top:i,left:s},g=jt.scrollLeft(f),y=jt.scrollTop(f),$=h.left-m.left+e,b=h.top-m.top+e,_=$-g,w=b-y;let x=!0,T=!1,L=v()+o,O=L+n;function S(t){t||(T=!0,a(p,{x:s,y:i})),jt.addListeners(f,Pt,j,{passive:!0})}function A(t){var e,n,o;e=f,n=y+w*t,o=g+_*t,c&&jt.scrollLeft(e,o),l&&jt.scrollTop(e,n)}function j(){x=!1,jt.removeListeners(f,Pt,j)}return E((t=>{if(!T&&t>=L&&S(!1),T&&t>=O)return A(1),j(),u(p,{x:s,y:i}),!1;if(!x)return d(p,{x:s,y:i}),!1;if(T){A(0+1*r((t-L)/n))}return!0})),S(o),A(0),j},Dt=t=>kt((t=>{let e=jt.extend({},Mt,t);return e.container=jt.$(e.container),e.element=jt.$(e.element),e})(t));!function(){if("undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof HTMLElement){var t=!1;try{var e=document.createElement("div");e.addEventListener("focus",(function(t){t.preventDefault(),t.stopPropagation()}),!0),e.focus(Object.defineProperty({},"preventScroll",{get:function(){if(navigator&&void 0!==navigator.userAgent&&navigator.userAgent&&navigator.userAgent.match(/Edge\/1[7-8]/))return t=!1;t=!0}}))}catch(Gt){}if(void 0===HTMLElement.prototype.nativeFocus&&!t){HTMLElement.prototype.nativeFocus=HTMLElement.prototype.focus;var n=function(t){for(var e=0;e<t.length;e++)t[e][0].scrollTop=t[e][1],t[e][0].scrollLeft=t[e][2];t=[]};HTMLElement.prototype.focus=function(t){if(t&&t.preventScroll){var e=function(t){for(var e=t.parentNode,n=[],o=document.scrollingElement||document.documentElement;e&&e!==o;)(e.offsetHeight<e.scrollHeight||e.offsetWidth<e.scrollWidth)&&n.push([e,e.scrollTop,e.scrollLeft]),e=e.parentNode;return e=o,n.push([e,e.scrollTop,e.scrollLeft]),n}(this);if("function"==typeof setTimeout){var o=this;setTimeout((function(){o.nativeFocus(),n(e)}),0)}else this.nativeFocus(),n(e)}else this.nativeFocus()}}}}();const{scrollTo:Ht,setTimeout:Nt,window:Ct}=pt;function Ft(t){let e,n,o,r,s,i=!1,c=()=>{i=!1};nt(t[20]),nt(t[21]);const l=t[18].default,a=g(l,t,t[17],null);return{c(){n=M("div"),a&&a.c(),this.h()},l(t){n=q(t,"DIV",{class:!0,style:!0});var e=C(n);a&&a.l(e),e.forEach(j),this.h()},h(){N(n,"class","parallax-container svelte-xsle8y"),N(n,"style",t[0])},m(l,u){A(l,n,u),a&&a.m(n,null),t[22](n),o=!0,r||(s=[H(Ct,"resize",t[19]),H(Ct,"scroll",(()=>{i=!0,clearTimeout(e),e=Nt(c,100),t[20]()})),H(Ct,"resize",t[21])],r=!0)},p(t,[r]){8&r&&!i&&(i=!0,clearTimeout(e),Ht(Ct.pageXOffset,t[3]),e=Nt(c,100)),a&&a.p&&(!o||131072&r)&&$(a,l,t,t[17],o?r:-1,null,null),(!o||1&r)&&N(n,"style",t[0])},i(t){o||(ft(a,t),o=!0)},o(t){dt(a,t),o=!1},d(e){e&&j(n),a&&a.d(e),t[22](null),r=!1,f(s)}}}function qt(t,e,n){let o,r,s,i,c,l,{$$slots:a={},$$scope:u}=e,{sections:f=1}=e,{config:d={stiffness:.017,damping:.26}}=e,{onEnter:p=!1}=e,{onExit:m=!1}=e,{disabled:g=!1}=e,{style:y=""}=e;const $=Et(0);h(t,$,(t=>n(3,i=t)));const b=Et(0);h(t,b,(t=>n(23,s=t)));const v=p?1:0,_=m?0:1,w=Tt([$,b],(([t,e],n)=>{const o=t-e,r=0-l*v,s=l*f-l*_;n(o<r?r:o>s?s:o)}));h(t,w,(t=>n(16,r=t)));const x=Ot(new Set);function E(){n(2,c.style.height=l*f+"px",c),function(t,e,n=e){t.set(n)}(b,s=c.getBoundingClientRect().top+window.pageYOffset,s)}h(t,x,(t=>n(15,o=t))),K(St,{config:d,addLayer:t=>{x.add(t)},removeLayer:t=>{x.delete(t)}}),W((()=>{E()}));return t.$$set=t=>{"sections"in t&&n(9,f=t.sections),"config"in t&&n(10,d=t.config),"onEnter"in t&&n(11,p=t.onEnter),"onExit"in t&&n(12,m=t.onExit),"disabled"in t&&n(13,g=t.disabled),"style"in t&&n(0,y=t.style),"$$scope"in t&&n(17,u=t.$$scope)},t.$$.update=()=>{32770&t.$$.dirty&&o.forEach((t=>{t.setHeight(l)})),106498&t.$$.dirty&&o.forEach((t=>{t.setPosition(r,l,g)}))},[y,l,c,i,$,b,w,x,E,f,d,p,m,g,function(t,{selector:e="",duration:n=500,easing:o=Lt}={}){const r=s+l*(t-1),i=()=>{document.querySelector(e).focus({preventScroll:!0})};if(g)return window.scrollTo({top:r}),void(e&&i());Dt({y:r,duration:n,easing:o,onDone:e?i:()=>{}})},o,r,u,a,()=>setTimeout(E,0),function(){$.set(i=Ct.pageYOffset)},function(){n(1,l=Ct.innerHeight)},function(t){Q[t?"unshift":"push"]((()=>{c=t,n(2,c)}))}]}class zt extends wt{constructor(t){super(),_t(this,t,qt,Ft,p,{sections:9,config:10,onEnter:11,onExit:12,disabled:13,style:0,scrollTo:14})}get scrollTo(){return this.$$.ctx[14]}}function It(t){return"[object Date]"===Object.prototype.toString.call(t)}function Bt(t,e,n,o){if("number"==typeof n||It(n)){const r=o-n,s=(n-e)/(t.dt||1/60),i=(s+(t.opts.stiffness*r-t.opts.damping*s)*t.inv_mass)*t.dt;return Math.abs(i)<t.opts.precision&&Math.abs(r)<t.opts.precision?o:(t.settled=!1,It(n)?new Date(n.getTime()+i):n+i)}if(Array.isArray(n))return n.map(((r,s)=>Bt(t,e[s],n[s],o[s])));if("object"==typeof n){const r={};for(const s in n)r[s]=Bt(t,e[s],n[s],o[s]);return r}throw new Error(`Cannot spring ${typeof n} values`)}function Yt(t,e={}){const n=Et(t),{stiffness:o=.15,damping:r=.8,precision:s=.01}=e;let i,c,l,a=t,u=t,f=1,d=0,p=!1;function m(e,o={}){u=e;const r=l={};if(null==t||o.hard||h.stiffness>=1&&h.damping>=1)return p=!0,i=v(),a=e,n.set(t=u),Promise.resolve();if(o.soft){const t=!0===o.soft?.5:+o.soft;d=1/(60*t),f=0}return c||(i=v(),p=!1,c=E((e=>{if(p)return p=!1,c=null,!1;f=Math.min(f+d,1);const o={inv_mass:f,opts:h,settled:!0,dt:60*(e-i)/1e3},r=Bt(o,a,t,u);return i=e,a=t,n.set(t=r),o.settled&&(c=null),!o.settled}))),new Promise((t=>{c.promise.then((()=>{r===l&&t()}))}))}const h={set:m,update:(e,n)=>m(e(u,t),n),subscribe:n.subscribe,stiffness:o,damping:r,precision:s};return h}function Xt(t){let e,n,o;const r=t[9].default,s=g(r,t,t[8],null);return{c(){e=M("div"),s&&s.c(),this.h()},l(t){e=q(t,"DIV",{class:!0,style:!0});var n=C(e);s&&s.l(n),n.forEach(j),this.h()},h(){N(e,"class","parallax-layer svelte-rtagyo"),N(e,"style",n="\n      "+t[0]+"\n      height: "+t[1]+"px;\n      -ms-transform: "+t[2]+"\n      -webkit-transform: "+t[2]+"\n      transform: "+t[2]+"\n    ")},m(t,n){A(t,e,n),s&&s.m(e,null),o=!0},p(t,[i]){s&&s.p&&(!o||256&i)&&$(s,r,t,t[8],o?i:-1,null,null),(!o||7&i&&n!==(n="\n      "+t[0]+"\n      height: "+t[1]+"px;\n      -ms-transform: "+t[2]+"\n      -webkit-transform: "+t[2]+"\n      transform: "+t[2]+"\n    "))&&N(e,"style",n)},i(t){o||(ft(s,t),o=!0)},o(t){dt(s,t),o=!1},d(t){t&&j(e),s&&s.d(t)}}}function Vt(t,e,n){let o,r,{$$slots:s={},$$scope:i}=e,{rate:c=.5}=e,{offset:l=0}=e,{span:a=1}=e,{style:u=""}=e,{config:f,addLayer:d,removeLayer:p}=(m=St,V().$$.context.get(m));var m;const g=Yt(void 0,f);let y;h(t,g,(t=>n(7,r=t)));const $={setPosition:(t,e,n)=>{const o=Math.floor(l)*e,r=n?l*e:-t*c+(l*e+o*c);g.set(r,{hard:n})},setHeight:t=>{n(1,y=a*t)}};return W((()=>(d($),()=>{p($)}))),t.$$set=t=>{"rate"in t&&n(4,c=t.rate),"offset"in t&&n(5,l=t.offset),"span"in t&&n(6,a=t.span),"style"in t&&n(0,u=t.style),"$$scope"in t&&n(8,i=t.$$scope)},t.$$.update=()=>{128&t.$$.dirty&&n(2,o=`translate3d(0, ${r}px, 0);`)},[u,y,o,g,c,l,a,r,i,s]}class Wt extends wt{constructor(t){super(),_t(this,t,Vt,Xt,p,{rate:4,offset:5,span:6,style:0})}}export{l as A,at as B,Et as C,g as D,$ as E,S as F,c as G,H,f as I,J,Q as K,Wt as L,Y as M,zt as P,wt as S,C as a,N as b,q as c,j as d,M as e,A as f,z as g,B as h,_t as i,gt as j,k,D as l,yt as m,I as n,$t as o,mt as p,ht as q,dt as r,p as s,P as t,ut as u,ft as v,bt as w,K as x,G as y,W as z};
