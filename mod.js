// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n="function"==typeof Math.fround?Math.fround:null;var t=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var r=function(){return t&&"symbol"==typeof Symbol.toStringTag},o=Object.prototype.toString,e=o;var a=function(n){return e.call(n)},u=Object.prototype.hasOwnProperty;var f=function(n,t){return null!=n&&u.call(n,t)},i="function"==typeof Symbol?Symbol.toStringTag:"",c=f,y=i,l=o;var p=a,v=function(n){var t,r,o;if(null==n)return l.call(n);r=n[y],t=c(n,y);try{n[y]=void 0}catch(t){return l.call(n)}return o=l.call(n),t?n[y]=r:delete n[y],o},b=r()?v:p,A=b,m="function"==typeof Float32Array;var w=function(n){return m&&n instanceof Float32Array||"[object Float32Array]"===A(n)},d=Number.POSITIVE_INFINITY,S="function"==typeof Float32Array?Float32Array:null,h=w,F=d,U=S;var s="function"==typeof Float32Array?Float32Array:void 0,g=function(){throw new Error("not implemented")},I=function(){var n,t;if("function"!=typeof U)return!1;try{t=new U([1,3.14,-3.14,5e40]),n=h(t)&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===F}catch(t){n=!1}return n}()?s:g,j=new I(1);var O=n;"function"!=typeof O&&(O=function(n){return j[0]=n,j[0]});var T=O,E=b,N="function"==typeof Uint32Array;var M="function"==typeof Uint32Array?Uint32Array:null,P=function(n){return N&&n instanceof Uint32Array||"[object Uint32Array]"===E(n)},x=M;var V="function"==typeof Uint32Array?Uint32Array:void 0,Y=function(){throw new Error("not implemented")},_=function(){var n,t;if("function"!=typeof x)return!1;try{t=new x(t=[1,3.14,-3.14,4294967296,4294967297]),n=P(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?V:Y,k=_,q=new I(1),z=new k(q.buffer);var B=function(n){return q[0]=n,z[0]},C=I,D=new _(1),G=new C(D.buffer);var H=T,J=B,K=function(n){return D[0]=n,G[0]};var L=function(n,t){var r,o;return n=H(n),t=H(t),r=J(n),o=J(t),K(r^=o&=2147483648)};export{L as default};
//# sourceMappingURL=mod.js.map
