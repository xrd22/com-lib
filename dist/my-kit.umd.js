(function(e,n){typeof exports=="object"&&typeof module!="undefined"?n(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],n):(e=typeof globalThis!="undefined"?globalThis:e||self,n(e.MYKit={},e.Vue))})(this,function(e,n){"use strict";var v="",l=(t,o)=>{const i=t.__vccOpts||t;for(const[s,p]of o)i[s]=p;return i},d=l(n.defineComponent({emits:["click"],setup(t){return(o,i)=>(n.openBlock(),n.createElementBlock("button",{class:"my-button",onClick:i[0]||(i[0]=s=>o.$emit("click",s))},[n.renderSlot(o.$slots,"default",{},void 0,!0)]))}}),[["__scopeId","data-v-5102a2ab"]]);const _={install(t){t.component("my-button",d)}};var k="";const r={},a={class:"my-foo"};function f(t,o){return n.openBlock(),n.createElementBlock("div",a," \u6211\u662F\u6D4B\u8BD5\u7EC4\u4EF6\u7EC4\u4EF6 ")}var u=l(r,[["render",f],["__scopeId","data-v-1df37c44"]]);const c={install(t){t.component("my-foo",u)}},m={install(t){var o,i;(o=_.install)==null||o.call(_,t),(i=c.install)==null||i.call(c,t)}};e.Button=d,e.ButtonPlugin=_,e.Foo=u,e.FooPlugin=c,e.default=m,Object.defineProperty(e,"__esModule",{value:!0}),e[Symbol.toStringTag]="Module"});
