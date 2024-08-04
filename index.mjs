// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-sign-mask@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float32-base-to-word@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float32-base-from-word@v0.2.2-esm/index.mjs";function m(m,n){var o,d;return m=t(m),n=t(n),o=e(m),d=e(n),r(o^=d&=s)}export{m as default};
//# sourceMappingURL=index.mjs.map
