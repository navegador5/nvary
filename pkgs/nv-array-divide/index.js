const ary_span = require("nv-array-span")


function chunk(arr, size) {
  return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );
}

function cut(arr,...pts) {
    let rgs = ary_span.range(...pts)
    let rslt = rgs.map((r)=>arr.slice(r[0],r[1]))
    return(rslt)
}

module.exports = {
    chunk,
    cut
}
