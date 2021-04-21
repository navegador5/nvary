const dummy = Symbol("dummy")

function transpose(a) {
    return Object.keys(a[0]).map(function (c) {
        return a.map(function (r) {
            return r[c];
        });
    });
}

function fmt(...lists) {
    let lngths = lists.map(l=>l.length)
    let m = Math.max(...lngths)
    lists = lists.map(r=>r.slice(0))
    lists.forEach(r=>{
        let left = m - r.length
        left = Array.from({length:left}).map(r=>dummy)
        r.splice(r.length,0,...left)
    })
    return(lists)
}

function interleave(...lists) {
    lists = fmt(...lists)
    lists = transpose(lists)
    return(lists.flat().filter(r=>r!==dummy))
}

function mat(l,n) {
    let m = []
    let lngth = l.length
    let r = lngth % n
    let left = (r===0)?[]:Array.from({length:n-r}).map(r=>dummy)
    l = l.concat(left)
    let depth = l.length / n
    for(let i=0;i<depth;i++) {
        let lyr = l.slice(n*i,n*i+n)
        m.push(lyr)
    }
    return(m)
}

function uninterleave(l,n) {
    let m = mat(l,n)
    let t = transpose(m)
    return(t)
}

module.exports = {
    dummy,
    fmt,
    mat,
    transpose,
    interleave,
    uninterleave
}
