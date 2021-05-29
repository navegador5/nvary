const lsti=e=>e.length-1;function validate_index(e,n){if(0<=n&&n<e.length)return n}function validate_value(e,n){if(0<=e.indexOf(n))return n}function validate_vi(e,n){var i=n.i,t=n.v;if(void 0!==validate_index(e,i)&&e[i]===t)return n}function some(e,...i){return e.filter((e,n)=>i.includes(n))}function some_not(e,...i){return e.filter((e,n)=>!i.includes(n))}function interval(e,i){return e.filter((e,n)=>n%i==0)}function bin(n,e,i=!0){n=n.toString(2);let t=Array.from(n).map(e=>parseInt(e));n=(e=void 0===e?t.length:e)-t.length;if(0<n){let e=Array.from({length:n}).map(e=>0);return i?e.concat(t):t.concat(e)}return i?t.slice(0,e):t.slice(-n)}function eq(n,i){if(n.length!==i.length)return!1;for(let e=0;e<n.length;e++)if(n[e]!==i[e])return!1;return!0}function combine(...n){let e=Array.from({length:n[0].length});return e=e.map((e,i)=>{let t={};return n.forEach((e,n)=>{t[n]=e[i]}),t}),e}function uniform_index(e,n){return n<0?n%e.length+e.length:n>=e.length?e.length-1:n}function mid_index_pair(e){e=e.length;return 0===e?[]:e%2?[(e-1)/2]:[e/2-1,e/2]}function mid_index_left(e){return mid_index_pair(e)[0]}function mid_index_right(e){e=mid_index_pair(e);return e.length<2?e[0]:e[1]}function mid_value_pair(n){let e=mid_index_pair(n),i=[];return e.forEach(e=>{i.push(n[e])}),i}function mid_value_left(e){return e[mid_index_left(e)]}function mid_value_right(e){return e[mid_index_right(e)]}function to_map(e){return new Map(Object.entries(e))}function to_wmap(n){let i=new WeakMap;for(let e=0;e<n.length;e++)i.set(n[e],e);return i}function is_hole_element_at(e,i){let t=empty;return e.forEach((e,n)=>{n===i&&(t=n)}),t==empty}function get_nonhole_indexes(e){return e.map((e,n)=>n).filter(e=>void 0!==e)}function get_hole_indexes(n){let i=get_ary_nonhole_indexes(n),t=[];for(let e=0;e<n.length;e++)i.includes(e)||t.push(e);return t}function has_hole(e){return get_ary_nonhole_indexes(e).length!==e.length}function fill_hole(n,i=void 0){let t=get_ary_nonhole_indexes(n);for(let e=0;e<n.length;e++)t.includes(e)||(n[e]=i);return n}function freq(e,n){let i=0;for(var t of e)t===n&&(i+=1);return i}module.exports={eq:eq,bin:bin,clear:e=>e.splice(0,1/0),head:e=>e[0],tail:e=>e.slice(1),mid:e=>e.slice(1,lsti(e)),init:e=>e.slice(0,lsti(e)),lsti:lsti,lst:e=>e[lsti(e)],slst:(e,n)=>{e[e[__l]-1]=n},uniform_index:uniform_index,validate_index:validate_index,validate_value:validate_value,validate_vi:validate_vi,some:some,some_not:some_not,interval:interval,odd:e=>e.filter((e,n)=>n%2),even:e=>e.filter((e,n)=>!(n%2)),freq:freq,combine:combine,mid_index_pair:mid_index_pair,mid_index_left:mid_index_left,mid_index_right:mid_index_right,mid_value_pair:mid_value_pair,mid_value_left:mid_value_left,mid_value_right:mid_value_right,ibfr:(e,n,i)=>(e.splice(n,0,i),e),iaft:(e,n,i)=>(e.splice(n+1,0,i),e),rm:(e,n)=>{var i=e[n];return e.splice(n,1),i},rplc:(e,n,i)=>e[n]=i,cp:e=>e.slice(0),to_map:to_map,to_wmap:to_wmap,is_hole_element_at:is_hole_element_at,get_nonhole_indexes:get_nonhole_indexes,get_hole_indexes:get_hole_indexes,has_hole:has_hole,fill_hole:fill_hole};