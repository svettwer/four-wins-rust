(()=>{var e,t,r,n,o,i,a,s,c,u,l,d,p={820:(e,t,r)=>{Promise.all([r.e(379),r.e(372)]).then(r.bind(r,372)).catch((e=>console.error("Error importing `index.js`:",e)))}},f={};function b(e){var t=f[e];if(void 0!==t)return t.exports;var r=f[e]={id:e,loaded:!1,exports:{}};return p[e](r,r.exports,b),r.loaded=!0,r.exports}b.m=p,b.c=f,b.d=(e,t)=>{for(var r in t)b.o(t,r)&&!b.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((t,r)=>(b.f[r](e,t),t)),[])),b.u=e=>e+".bootstrap.js",b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),b.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="create-wasm-app:",b.l=(r,n,o,i)=>{if(e[r])e[r].push(n);else{var a,s;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var l=c[u];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+o){a=l;break}}a||(s=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,b.nc&&a.setAttribute("nonce",b.nc),a.setAttribute("data-webpack",t+o),a.src=r),e[r]=[n];var d=(t,n)=>{a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(n))),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),s&&document.head.appendChild(a)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;b.g.importScripts&&(e=b.g.location+"");var t=b.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),b.p=e})(),(()=>{var e={179:0};b.f.j=(t,r)=>{var n=b.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>{n=e[t]=[r,o]}));r.push(n[2]=o);var i=b.p+b.u(t),a=new Error;b.l(i,(r=>{if(b.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,n[1](a)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,o,[i,a,s]=r,c=0;for(n in a)b.o(a,n)&&(b.m[n]=a[n]);for(s&&s(b),t&&t(r);c<i.length;c++)o=i[c],b.o(e,o)&&e[o]&&e[o][0](),e[i[c]]=0},r=self.webpackChunkcreate_wasm_app=self.webpackChunkcreate_wasm_app||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),u={},l={422:function(){return{"./four_wins_bg.js":{__wbindgen_object_drop_ref:function(e){return void 0===r&&(r=b.c[580].exports),r.ug(e)},__wbg_alert_150877468f1f8646:function(e,t){return void 0===n&&(n=b.c[580].exports),n.i9(e,t)},__wbg_buffer_e35e010c3ba9f945:function(e){return void 0===o&&(o=b.c[580].exports),o.YY(e)},__wbg_newwithbyteoffsetandlength_fb285e32adcba172:function(e,t,r){return void 0===i&&(i=b.c[580].exports),i.S$(e,t,r)},__wbg_new_9d848dd429c557b8:function(e){return void 0===a&&(a=b.c[580].exports),a.jl(e)},__wbindgen_throw:function(e,t){return void 0===s&&(s=b.c[580].exports),s.Or(e,t)},__wbindgen_memory:function(){return void 0===c&&(c=b.c[580].exports),c.oH()}}}}},d={372:[422]},b.w={},b.f.wasm=function(e,t){(d[e]||[]).forEach((function(r,n){var o=u[r];if(o)t.push(o);else{var i,a=l[r](),s=fetch(b.p+""+{372:{422:"e60c8d774519e7faf171"}}[e][r]+".module.wasm");i=a instanceof Promise&&"function"==typeof WebAssembly.compileStreaming?Promise.all([WebAssembly.compileStreaming(s),a]).then((function(e){return WebAssembly.instantiate(e[0],e[1])})):"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(s,a):s.then((function(e){return e.arrayBuffer()})).then((function(e){return WebAssembly.instantiate(e,a)})),t.push(u[r]=i.then((function(e){return b.w[r]=(e.instance||e).exports})))}}))},b(820)})();