(self.webpackChunkcreate_wasm_app=self.webpackChunkcreate_wasm_app||[]).push([[379],{379:(t,e,n)=>{"use strict";function o(){}function r(t){return t()}function s(){return Object.create(null)}function c(t){t.forEach(r)}function i(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function u(t){return 0===Object.keys(t).length}function a(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function h(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function m(){return $(" ")}function b(){return $("")}function g(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function k(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}let w;function x(t){w=t}n.d(e,{f_:()=>z,R3:()=>a,Lj:()=>y,RM:()=>h,og:()=>d,bG:()=>p,cS:()=>b,S1:()=>R,$T:()=>f,oL:()=>g,ZT:()=>o,N8:()=>l,rT:()=>_,cz:()=>k,Dh:()=>m,fL:()=>$}),new Set,new Set;const v=[],E=[],C=[],T=[],S=Promise.resolve();let L=!1;function j(t){C.push(t)}let A=!1;const M=new Set;function N(){if(!A){A=!0;do{for(let t=0;t<v.length;t+=1){const e=v[t];x(e),O(e.$$)}for(x(null),v.length=0;E.length;)E.pop()();for(let t=0;t<C.length;t+=1){const e=C[t];M.has(e)||(M.add(e),e())}C.length=0}while(v.length);for(;T.length;)T.pop()();L=!1,A=!1,M.clear()}}function O(t){if(null!==t.fragment){t.update(),c(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}const q=new Set;let H;function P(t,e){const n=t.$$;null!==n.fragment&&(c(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function R(t,e,n,l,u,a,f=[-1]){const h=w;x(t);const p=t.$$={fragment:null,ctx:null,props:a,update:o,not_equal:u,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:[]),callbacks:s(),dirty:f,skip_bound:!1};let $=!1;if(p.ctx=n?n(t,e.props||{},((e,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&u(p.ctx[e],p.ctx[e]=r)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](r),$&&function(t,e){-1===t.$$.dirty[0]&&(v.push(t),L||(L=!0,S.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n})):[],p.update(),$=!0,c(p.before_update),p.fragment=!!l&&l(p.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);p.fragment&&p.fragment.l(t),t.forEach(d)}else p.fragment&&p.fragment.c();e.intro&&((m=t.$$.fragment)&&m.i&&(q.delete(m),m.i(b))),function(t,e,n,o){const{fragment:s,on_mount:l,on_destroy:u,after_update:a}=t.$$;s&&s.m(e,n),o||j((()=>{const e=l.map(r).filter(i);u?u.push(...e):c(e),t.$$.on_mount=[]})),a.forEach(j)}(t,e.target,e.anchor,e.customElement),N()}var m,b;x(h)}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global,new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(H=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(r).filter(i);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){c(this.$$.on_disconnect)}$destroy(){P(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!u(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class z{$destroy(){P(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!u(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}}}]);