(self.webpackChunkcreate_wasm_app=self.webpackChunkcreate_wasm_app||[]).push([[372],{580:(t,e,n)=>{"use strict";n.d(e,{lM:()=>_,ug:()=>w,i9:()=>h,YY:()=>m,S$:()=>y,jl:()=>b,Or:()=>T,oH:()=>j});var r=n(422);t=n.hmd(t);const o=new Array(32).fill(void 0);function l(t){return o[t]}o.push(void 0,null,!0,!1);let c=o.length;function u(t){const e=l(t);return function(t){t<36||(o[t]=c,c=t)}(t),e}let i=new("undefined"==typeof TextDecoder?(0,t.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});i.decode();let s=null;function f(t,e){return i.decode((null!==s&&s.buffer===r.memory.buffer||(s=new Uint8Array(r.memory.buffer)),s).subarray(t,t+e))}function a(t){c===o.length&&o.push(o.length+1);const e=c;return c=o[e],o[e]=t,e}let d=null;function g(){return null!==d&&d.buffer===r.memory.buffer||(d=new Int32Array(r.memory.buffer)),d}class _{static __wrap(t){const e=Object.create(_.prototype);return e.ptr=t,e}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();r.__wbg_fourwins_free(t)}get current_player(){return r.__wbg_get_fourwins_current_player(this.ptr)}set current_player(t){r.__wbg_set_fourwins_current_player(this.ptr,t)}static new(){var t=r.fourwins_new();return _.__wrap(t)}player_action(t){r.fourwins_player_action(this.ptr,t)}get_stack(t){return u(r.fourwins_get_stack(this.ptr,t))}get_stack_count(){return r.fourwins_get_stack_count(this.ptr)>>>0}get_winner(){var t=r.fourwins_get_winner(this.ptr);return 16777215===t?void 0:t}get_win_constellation(){var t=r.fourwins_get_win_constellation(this.ptr);return 0===t?void 0:p.__wrap(t)}}class p{static __wrap(t){const e=Object.create(p.prototype);return e.ptr=t,e}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();r.__wbg_winconstellation_free(t)}get_as_json(){try{const n=r.__wbindgen_add_to_stack_pointer(-16);r.winconstellation_get_as_json(n,this.ptr);var t=g()[n/4+0],e=g()[n/4+1];return f(t,e)}finally{r.__wbindgen_add_to_stack_pointer(16),r.__wbindgen_free(t,e)}}}const w=function(t){u(t)},h=function(t,e){alert(f(t,e))},m=function(t){return a(l(t).buffer)},y=function(t,e,n){return a(new Int8Array(l(t),e>>>0,n>>>0))},b=function(t){return a(new Int8Array(l(t)))},T=function(t,e){throw new Error(f(t,e))},j=function(){return a(r.memory)}},422:(t,e,n)=>{"use strict";var r=n.w[t.id];t.exports=r,n(580),r[""]()},372:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>x});var r=n(379),o=n(580);function l(t,e,n){const r=t.slice();return r[11]=e[n],r[13]=n,r}function c(t,e,n){const r=t.slice();return r[14]=e[n],r[16]=n,r}function u(t,e,n){const r=t.slice();return r[11]=e[n],r[13]=n,r}function i(t,e,n){const r=t.slice();return r[14]=e[n],r[16]=n,r}function s(t){let e,n=t[0],o=[];for(let e=0;e<n.length;e+=1)o[e]=p(l(t,n,e));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=(0,r.cS)()},m(t,n){for(let e=0;e<o.length;e+=1)o[e].m(t,n);(0,r.$T)(t,e,n)},p(t,r){if(57&r){let c;for(n=t[0],c=0;c<n.length;c+=1){const u=l(t,n,c);o[c]?o[c].p(u,r):(o[c]=p(u),o[c].c(),o[c].m(e.parentNode,e))}for(;c<o.length;c+=1)o[c].d(1);o.length=n.length}},d(t){(0,r.RM)(o,t),t&&(0,r.og)(e)}}}function f(t){let e,n=t[0],o=[];for(let e=0;e<n.length;e+=1)o[e]=b(u(t,n,e));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=(0,r.cS)()},m(t,n){for(let e=0;e<o.length;e+=1)o[e].m(t,n);(0,r.$T)(t,e,n)},p(t,r){if(25&r){let l;for(n=t[0],l=0;l<n.length;l+=1){const c=u(t,n,l);o[l]?o[l].p(c,r):(o[l]=b(c),o[l].c(),o[l].m(e.parentNode,e))}for(;l<o.length;l+=1)o[l].d(1);o.length=n.length}},d(t){(0,r.RM)(o,t),t&&(0,r.og)(e)}}}function a(t){let e,n;return{c(){e=(0,r.bG)("div"),(0,r.Lj)(e,"class",n=t[3].defaultBackground+" rounded-full w-full flex items-center justify-center"),(0,r.cz)(e,"padding-top","100%")},m(t,n){(0,r.$T)(t,e,n)},p:r.ZT,d(t){t&&(0,r.og)(e)}}}function d(t){let e,n;return{c(){e=(0,r.bG)("div"),(0,r.Lj)(e,"class",n=t[3].playerTwo+" "+t[5](t[13],t[16])+" rounded-full w-full flex items-center justify-center"),(0,r.cz)(e,"padding-top","100%")},m(t,n){(0,r.$T)(t,e,n)},p:r.ZT,d(t){t&&(0,r.og)(e)}}}function g(t){let e,n;return{c(){e=(0,r.bG)("div"),(0,r.Lj)(e,"class",n=t[3].playerOne+" "+t[5](t[13],t[16])+" rounded-full w-full flex items-center justify-center"),(0,r.cz)(e,"padding-top","100%")},m(t,n){(0,r.$T)(t,e,n)},p:r.ZT,d(t){t&&(0,r.og)(e)}}}function _(t){let e;function n(t,e){return 1===t[14]?g:2===t[14]?d:a}let o=n(t),l=o(t);return{c(){l.c(),e=(0,r.cS)()},m(t,n){l.m(t,n),(0,r.$T)(t,e,n)},p(t,r){o===(o=n(t))&&l?l.p(t,r):(l.d(1),l=o(t),l&&(l.c(),l.m(e.parentNode,e)))},d(t){l.d(t),t&&(0,r.og)(e)}}}function p(t){let e,n,o,l,u,i=t[11],s=[];for(let e=0;e<i.length;e+=1)s[e]=_(c(t,i,e));function f(){return t[7](t[13])}return{c(){e=(0,r.bG)("div");for(let t=0;t<s.length;t+=1)s[t].c();n=(0,r.Dh)(),(0,r.Lj)(e,"class","space-y-2"),(0,r.Lj)(e,"id",o="stack-"+t[13])},m(t,o){(0,r.$T)(t,e,o);for(let t=0;t<s.length;t+=1)s[t].m(e,null);(0,r.R3)(e,n),l||(u=(0,r.oL)(e,"click",f),l=!0)},p(r,o){if(t=r,41&o){let r;for(i=t[11],r=0;r<i.length;r+=1){const l=c(t,i,r);s[r]?s[r].p(l,o):(s[r]=_(l),s[r].c(),s[r].m(e,n))}for(;r<s.length;r+=1)s[r].d(1);s.length=i.length}},d(t){t&&(0,r.og)(e),(0,r.RM)(s,t),l=!1,u()}}}function w(t){let e,n;return{c(){e=(0,r.bG)("div"),(0,r.Lj)(e,"class",n=t[3].defaultBackground+" rounded-full w-full flex items-center justify-center"),(0,r.cz)(e,"padding-top","100%")},m(t,n){(0,r.$T)(t,e,n)},p:r.ZT,d(t){t&&(0,r.og)(e)}}}function h(t){let e,n;return{c(){e=(0,r.bG)("div"),(0,r.Lj)(e,"class",n=t[3].playerTwo+" rounded-full w-full flex items-center justify-center"),(0,r.cz)(e,"padding-top","100%")},m(t,n){(0,r.$T)(t,e,n)},p:r.ZT,d(t){t&&(0,r.og)(e)}}}function m(t){let e,n;return{c(){e=(0,r.bG)("div"),(0,r.Lj)(e,"class",n=t[3].playerOne+" rounded-full w-full flex items-center justify-center"),(0,r.cz)(e,"padding-top","100%")},m(t,n){(0,r.$T)(t,e,n)},p:r.ZT,d(t){t&&(0,r.og)(e)}}}function y(t){let e;function n(t,e){return 1===t[14]?m:2===t[14]?h:w}let o=n(t),l=o(t);return{c(){l.c(),e=(0,r.cS)()},m(t,n){l.m(t,n),(0,r.$T)(t,e,n)},p(t,r){o===(o=n(t))&&l?l.p(t,r):(l.d(1),l=o(t),l&&(l.c(),l.m(e.parentNode,e)))},d(t){l.d(t),t&&(0,r.og)(e)}}}function b(t){let e,n,o,l,c,u=t[11],s=[];for(let e=0;e<u.length;e+=1)s[e]=y(i(t,u,e));function f(){return t[6](t[13])}return{c(){e=(0,r.bG)("div");for(let t=0;t<s.length;t+=1)s[t].c();n=(0,r.Dh)(),(0,r.Lj)(e,"class"," space-y-2"),(0,r.Lj)(e,"id",o="stack-"+t[13])},m(t,o){(0,r.$T)(t,e,o);for(let t=0;t<s.length;t+=1)s[t].m(e,null);(0,r.R3)(e,n),l||(c=(0,r.oL)(e,"click",f),l=!0)},p(r,o){if(t=r,9&o){let r;for(u=t[11],r=0;r<u.length;r+=1){const l=i(t,u,r);s[r]?s[r].p(l,o):(s[r]=y(l),s[r].c(),s[r].m(e,n))}for(;r<s.length;r+=1)s[r].d(1);s.length=u.length}},d(t){t&&(0,r.og)(e),(0,r.RM)(s,t),l=!1,c()}}}function T(t){let e,n,o,l,c,u,i,s;return{c(){e=(0,r.bG)("div"),n=(0,r.bG)("div"),o=(0,r.fL)("Player "),l=(0,r.bG)("strong"),c=(0,r.fL)(t[1]),u=(0,r.fL)(" won!"),i=(0,r.Dh)(),s=(0,r.bG)("div"),s.innerHTML="To start a new game, hit <strong>F5</strong>!",(0,r.Lj)(n,"class","text-2xl"),(0,r.Lj)(s,"class","text-xl"),(0,r.Lj)(e,"class","text-center")},m(t,f){(0,r.$T)(t,e,f),(0,r.R3)(e,n),(0,r.R3)(n,o),(0,r.R3)(n,l),(0,r.R3)(l,c),(0,r.R3)(n,u),(0,r.R3)(e,i),(0,r.R3)(e,s)},p(t,e){2&e&&(0,r.rT)(c,t[1])},d(t){t&&(0,r.og)(e)}}}function j(t){let e,n,o,l,c,u,i,a,d;function g(t,e){return t[1]?s:f}let _=g(t),p=_(t),w=t[1]&&T(t);return{c(){e=(0,r.bG)("main"),n=(0,r.bG)("div"),o=(0,r.bG)("div"),l=(0,r.bG)("div"),c=(0,r.fL)("Player "),u=(0,r.fL)(t[2]),i=(0,r.Dh)(),a=(0,r.bG)("div"),p.c(),d=(0,r.Dh)(),w&&w.c(),(0,r.Lj)(l,"class","text-2xl"),(0,r.Lj)(o,"class","text-center"),(0,r.Lj)(a,"class","p-2 \n                    h-auto \n                    bg-blue-500 \n                    border-8 \n                    grid \n                    grid-cols-7 \n                    w-full\n                    gap-2\n                    max-w-screen-md\n                    "),(0,r.Lj)(n,"class","space-y-8 p-2 container flex flex-col mx-auto items-center justify-center")},m(t,s){(0,r.$T)(t,e,s),(0,r.R3)(e,n),(0,r.R3)(n,o),(0,r.R3)(o,l),(0,r.R3)(l,c),(0,r.R3)(l,u),(0,r.R3)(n,i),(0,r.R3)(n,a),p.m(a,null),(0,r.R3)(n,d),w&&w.m(n,null)},p(t,[e]){4&e&&(0,r.rT)(u,t[2]),_===(_=g(t))&&p?p.p(t,e):(p.d(1),p=_(t),p&&(p.c(),p.m(a,null))),t[1]?w?w.p(t,e):(w=T(t),w.c(),w.m(n,null)):w&&(w.d(1),w=null)},i:r.ZT,o:r.ZT,d(t){t&&(0,r.og)(e),p.d(),w&&w.d()}}}function v(t,e,n){let r,l=o.lM.new(),c=[],u=0,i=l.current_player;for(let t=0;t<l.get_stack_count();t++)c.push(l.get_stack(t));function s(t){if(!u)if(console.log(`Stack index: ${t}`),console.log(`Current stack: ${c[t]}`),l.player_action(t),n(0,c[t]=l.get_stack(t),c),console.log(`Stack after player action: ${c[t]}`),n(1,u=l.get_winner()),console.log(`Winner: ${u}`),u){const t=l.get_win_constellation().get_as_json();console.log(`Win Conselltation: ${t}`),r=JSON.parse(t)}else n(2,i=l.current_player)}return[c,u,i,{defaultBackground:"bg-gray-100",playerOne:"bg-red-800",playerTwo:"bg-yellow-300"},s,function(t,e){let n=(([t,e])=>([n,r])=>t===n&&e===r)([t,e]);return r&&(n(r.one)||n(r.two)||n(r.three)||n(r.four))?"ring-4 md:ring-8 ring-green-900":""},t=>s(t),t=>s(t)]}class L extends r.f_{constructor(t){super(),(0,r.S1)(this,t,v,j,r.N8,{})}}const x=new L({target:document.body,props:{name:"world"}})}}]);