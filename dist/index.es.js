import{forwardRef as e,useRef as t}from"react";function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},n.apply(this,arguments)}!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}('.input-sizer{align-items:center;display:inline-grid;margin:5px;position:relative;vertical-align:top}.input-sizer input:focus{outline:none}.input-sizer input,.input-sizer:after{appearance:none;background:none;border:none;font:inherit;grid-area:1/2;margin:0;min-width:1em;padding:.25em;resize:none;width:auto}.input-sizer:after{content:attr(data-value) " ";visibility:hidden;white-space:pre-wrap}');const i=e(((e,i)=>{const{placeholder:r}=e,a=t(),o=i||a;return React.createElement("div",{className:"input-sizer"},React.createElement("input",n({type:"text",ref:o,onInput:e=>o.current.parentNode.dataset.value=o.current.value,size:(r?.length||0)+4},e)))}));export{i as default};