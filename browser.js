// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";var n="function"==typeof Math.fround?Math.fround:null,t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),r=Object.prototype.toString,o=r,e=function(n){return o.call(n)},f=Object.prototype.hasOwnProperty,i=function(n,t){return null!=n&&f.call(n,t)},u="function"==typeof Symbol?Symbol.toStringTag:"",a=i,c=u,l=r,y=e,p=function(n){var t,r,o;if(null==n)return l.call(n);r=n[c],t=a(n,c);try{n[c]=void 0}catch(t){return l.call(n)}return o=l.call(n),t?n[c]=r:delete n[c],o},d=t&&"symbol"==typeof Symbol.toStringTag?p:y,b=d,m="function"==typeof Float32Array,s=function(n){return m&&n instanceof Float32Array||"[object Float32Array]"===b(n)},A=Number.POSITIVE_INFINITY,w="function"==typeof Float32Array?Float32Array:null,h=s,v=A,S=w,g="function"==typeof Float32Array?Float32Array:void 0,F=function(){throw new Error("not implemented")},U=function(){var n,t;if("function"!=typeof S)return!1;try{t=new S([1,3.14,-3.14,5e40]),n=h(t)&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===v}catch(t){n=!1}return n}()?g:F,T=new U(1),j=n;"function"!=typeof j&&(j=function(n){return T[0]=n,T[0]});var I=j,O=d,E="function"==typeof Uint32Array,N="function"==typeof Uint32Array?Uint32Array:null,x=function(n){return E&&n instanceof Uint32Array||"[object Uint32Array]"===O(n)},M=N,P="function"==typeof Uint32Array?Uint32Array:void 0,V=function(){throw new Error("not implemented")},Y=function(){var n,t;if("function"!=typeof M)return!1;try{t=new M(t=[1,3.14,-3.14,4294967296,4294967297]),n=x(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?P:V,_=Y,k=new U(1),q=new _(k.buffer),z=function(n){return k[0]=n,q[0]},B=U,C=new Y(1),D=new B(C.buffer),G=function(n){return C[0]=n,D[0]};return function(n,t){var r,o;return n=I(n),t=I(t),r=z(n),o=z(t),G(r^=o&=2147483648)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).flipsignf=t();
//# sourceMappingURL=browser.js.map
