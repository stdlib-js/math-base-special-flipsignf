// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t="function"==typeof Math.fround?Math.fround:null,n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,r=Object.prototype.hasOwnProperty,e="function"==typeof Symbol?Symbol:void 0,f="function"==typeof e?e.toStringTag:"",i=n&&"symbol"==typeof Symbol.toStringTag?function(t){var n,e,i,u,a;if(null==t)return o.call(t);e=t[f],a=f,n=null!=(u=t)&&r.call(u,a);try{t[f]=void 0}catch(n){return o.call(t)}return i=o.call(t),n?t[f]=e:delete t[f],i}:function(t){return o.call(t)},u="function"==typeof Float32Array,a=Number.POSITIVE_INFINITY,y="function"==typeof Float32Array?Float32Array:null,l="function"==typeof Float32Array?Float32Array:void 0,c=function(){var t,n,o;if("function"!=typeof y)return!1;try{n=new y([1,3.14,-3.14,5e40]),o=n,t=(u&&o instanceof Float32Array||"[object Float32Array]"===i(o))&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===a}catch(n){t=!1}return t}()?l:function(){throw new Error("not implemented")},p=new c(1),d="function"==typeof t?t:function(t){return p[0]=t,p[0]},b="function"==typeof Uint32Array,m="function"==typeof Uint32Array?Uint32Array:null,s="function"==typeof Uint32Array?Uint32Array:void 0,A=function(){var t,n,o;if("function"!=typeof m)return!1;try{n=new m(n=[1,3.14,-3.14,4294967296,4294967297]),o=n,t=(b&&o instanceof Uint32Array||"[object Uint32Array]"===i(o))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?s:function(){throw new Error("not implemented")},w=new c(1),h=new A(w.buffer);function v(t){return w[0]=t,h[0]}var S=new A(1),g=new c(S.buffer);return function(t,n){var o,r,e;return t=d(t),n=d(n),o=v(t),r=v(n),e=o^=r&=2147483648,S[0]=e,g[0]}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).flipsignf=n();
//# sourceMappingURL=index.js.map
