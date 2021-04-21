const dflt_cmp = (a,b)=> a-b 

function range(lngth,...indexes) {
    indexes.unshift(0)
    indexes.push(lngth)
    indexes = new Set(indexes)
    indexes = Array.from(indexes)
    indexes.sort(dflt_cmp);
    indexes.filter(r=>r<lngth);
    let spans =[]
    let cache = [undefined,undefined] 
    let cursor = 0
    while(cursor<indexes.length-1) {
        cache[0] = indexes[cursor]
        cache[1] = indexes[cursor+1]
        spans.push(cache)
        cursor = cursor + 1
        cache = [undefined,undefined]
    }
    return(spans)
}


function fullfill(spans) {
    let arr = spans.flat()
    arr = new Set(arr)
    arr = Array.from(arr)
    arr.sort(dflt_cmp)
    let lngth = arr[arr.length-1]
    return(range(lngth,...arr))
}

function supplement(spans) {
    let arr = spans.flat()
    arr = new Set(arr)
    arr = Array.from(arr)
    arr.sort(dflt_cmp)
    let fst = arr[0]
    arr = arr.slice(1,arr.length-1)
    spans = pair(arr)
    if(fst === 0) {} else {spans.unshift([0,fst])}
    return(spans)
}


function interval(arr,n) {
    let r = arr.length % n
    arr = arr.slice(0,arr.length-r)
    let narr = Array.from({length:arr.length/n})
    narr = narr.map((r,i)=>arr.slice(i*n,(i+1)*n))
    return(narr)
}

function pair(arr){return(interval(arr,2))}


function compress(arr) {
    arr = new Set(arr)
    arr = Array.from(arr)
    arr.sort(dflt_cmp)
    let spans = []
    let prev = arr[0]
    let span = [prev,undefined]
    for(let i=1;i<arr.length;i++) {
        if(arr[i] === prev+1) {
        } else {
            span[1] = prev+1
            spans.push(span)
            span = [arr[i],undefined]
        }
        prev = arr[i]
    }
    if(prev === span[0]) {spans.push([span[0],span[0]+1])} else {
        spans.push([span[0],prev+1])
    }
    return(spans)
}


function uncompress(spans) {
    let arr = spans.map(r=>Array.from({length:r[1]-r[0]}))
    arr.forEach(
        (r,index)=> {
            r.forEach(
                (sub,i)=>{r[i] = spans[index][0]+i}
            )
        }
    )
    return(arr.flat())
}

module.exports = {
    pair,
    interval,
    range,
    fullfill,
    supplement,
    compress,
    uncompress,
}
