const{splice}=require("nv-array-fast"),DFLT_CMP_FUNC=(r,e)=>e<r?1:r<e?-1:0;function some(r,t,e=DFLT_CMP_FUNC){var n,i=r.filter((r,e)=>t.includes(e));let o=r.map((r,e)=>e);for(n in o=o.filter(r=>t.includes(r)),o=ref(o,i,DFLT_CMP_FUNC),o.sort(),o)r[o[n]]=i[n];return r}function slice(r,e,t,n=DFLT_CMP_FUNC){let i=r.slice(e,t);return i.sort(n),r.splice(e,t-e,...i),r}function ref(t,n,i=DFLT_CMP_FUNC){let r=t.map((r,e)=>[t[e],n[e]]);return r.sort((r,e)=>i(r[1],e[1])),r=r.map(r=>r[0]),t.splice(0,1/0,...r),n.sort(i),t}function bat(t,n,i=DFLT_CMP_FUNC){let o=arr.map((r,e)=>[n[e],...t.map(r=>r[e])]);return o.sort((r,e)=>i(r[0],e[0])),t.forEach((r,e)=>{r.splice(0,1/0,...o.map(r=>r[e+1]))}),n.sort(i),t}function wherei(e,t){if(t<e[0])return[void 0,0];for(let r=0;r<e.length;r++)if(e[r]>t)return[r-1,r];return e[e.length-1]===t?[e.length-1,void 0]:[void 0,void 0]}function wherev(e,t){if(t<e[0])return[void 0,e[0]];for(let r=0;r<e.length;r++)if(e[r]>t)return[e[r-1],e[r]];return e[e.length-1]===t?[t,void 0]:[void 0,void 0]}function lbi(r,e){return wherei(r,e)[0]}function ubi(r,e){return wherei(r,e)[1]}function lbv(r,e){return wherev(r,e)[0]}function ubv(r,e){return wherev(r,e)[1]}function num(r){return r.sort((r,e)=>r-e),r}const DFLT_GT=(r,e)=>0<r-e,DFLT_GELT=(r,e,t)=>e<=r&&r<t;function bsrch_fsti(r,e,t=DFLT_GELT){let n=0,i=r.length;for(;2<i-n;){var o=i-n,o=n+(o>>1);t(e,r[n],r[o])?i=o:n=o}return i-n==0?-1:i-n==1?r[n]===e?n:-1:r[n]===e?n:r[n+1]===e?n+1:-1}function merge_sorted(t,r=DFLT_GT){for(var e=[],n=0;n<t.length;n++)e.push([n,0]),e.sort((r,e)=>t[r[0]][r[1]]-t[e[0]][e[1]]);for(var i=[];0<e.length;){i.push(t[e[0][0]][e[0][1]]);var o=e.shift();if(o[1]=o[1]+1,!(o[1]>=t[o[0]].length)){for(var u=e.length,l=t[o[0]][o[1]],n=0;n<e.length;n++)if(r(t[e[n][0]][e[n][1]],l)){u=n;break}splice(e,u,0,[o])}}return i}function match_partial_order(e,t,n=(r,e)=>r){let i=0;for(let r=0;r<t.length;r++){var o=e.indexOf(n(t[r],r));if(!(o>=i))return!1;i=o}return!0}module.exports={num:num,slice:slice,ref:ref,some:some,bat:bat,wherei:wherei,wherev:wherev,lbi:lbi,lbv:lbv,ubi:ubi,ubv:ubv,DFLT_GELT:DFLT_GELT,bsrch_fsti:bsrch_fsti,merge_sorted:merge_sorted,match_partial_order:match_partial_order};