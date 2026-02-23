"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=v(function(p,u){
var a=require('@stdlib/number-float64-base-to-float32/dist'),f=require('@stdlib/constants-float32-sign-mask/dist'),o=require('@stdlib/number-float32-base-to-word/dist'),n=require('@stdlib/number-float32-base-from-word/dist');function q(e,r){var i,t;return e=a(e),r=a(r),i=o(e),t=o(r),t&=f,i^=t,n(i)}u.exports=q
});var c=s();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
