// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Math.fround?Math.fround:null;var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var n=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;var e="function"==typeof Symbol?Symbol.toStringTag:"";var a=r&&"symbol"==typeof Symbol.toStringTag?function(t){var r,a,f,u,i;if(null==t)return n.call(t);a=t[e],i=e,r=null!=(u=t)&&o.call(u,i);try{t[e]=void 0}catch(r){return n.call(t)}return f=n.call(t),r?t[e]=a:delete t[e],f}:function(t){return n.call(t)},f="function"==typeof Float32Array;var u=Number.POSITIVE_INFINITY,i="function"==typeof Float32Array?Float32Array:null;var y="function"==typeof Float32Array?Float32Array:void 0;var c=function(){var t,r,n;if("function"!=typeof i)return!1;try{r=new i([1,3.14,-3.14,5e40]),n=r,t=(f&&n instanceof Float32Array||"[object Float32Array]"===a(n))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===u}catch(r){t=!1}return t}()?y:function(){throw new Error("not implemented")},l=new c(1);var p="function"==typeof t?t:function(t){return l[0]=t,l[0]},v="function"==typeof Uint32Array;var b="function"==typeof Uint32Array?Uint32Array:null;var A="function"==typeof Uint32Array?Uint32Array:void 0;var m=function(){var t,r,n;if("function"!=typeof b)return!1;try{r=new b(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(v&&n instanceof Uint32Array||"[object Uint32Array]"===a(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?A:function(){throw new Error("not implemented")},w=new c(1),d=new m(w.buffer);function S(t){return w[0]=t,d[0]}var h=new m(1),F=new c(h.buffer);function U(t,r){var n,o,e;return t=p(t),r=p(r),n=S(t),o=S(r),e=n^=o&=2147483648,h[0]=e,F[0]}export{U as default};
//# sourceMappingURL=mod.js.map