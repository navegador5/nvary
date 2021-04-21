const ary_bsc = require("nv-array-basic")

function recycle(arr,n=Infinity) {
    let st = new Set()
    let left = []
    const dummy = Symbol("dummy")
    for(let i=0;i<arr.length;i++) {
        if(st.size === n) {
            let narr = arr.slice(0,i).filter(r=>r!==dummy)
            arr.splice(0,narr.length,...narr)
            return(left)
        } else {
            let cond = st.has(arr[i])
            if(cond) {
                left.push(arr[i])
                arr[i] = dummy
            } else {
                st.add(arr[i])
            }
        }
    }
    let narr = arr.filter(r=>r!==dummy)
    arr.splice(0,arr.length,...narr)
    return(left)
}


function ref_recycle(arr,ref,n=Infinity) {
    let narr = ary_bsc.combine(ref,arr)
    let st = new Set()
    let left = []
    const dummy = Symbol("dummy")
    for(let i=0;i<narr.length;i++) {
        if(st.size === n) {
            let nnarr = narr.slice(0,i).filter(r=>r!==dummy).map(r=>r[1])
            arr.splice(0,nnarr.length,...nnarr)
            return(left.map(r=>r[1]))
        } else {
            let cond = st.has(narr[i][0])
            if(cond) {
                left.push(narr[i])
                narr[i] = dummy
            } else {
                st.add(narr[i][0])
            }
        }
    }
    let nnarr = narr.filter(r=>r!==dummy).map(r=>r[1])
    arr.splice(0,arr.length,...nnarr)
    return(left.map(r=>r[1]))
}



function uniq(arr,n=Infinity) {
    let st = new Set()
    let rslt = []
    for(let i=0;i<arr.length;i++) {
        if(st.size === n) {
            return(rslt)
        } else {
            let cond = st.has(arr[i])
            if(cond) {
            } else {
                st.add(arr[i])
                rslt.push(arr[i])
            }
        }
    }
    return(rslt)
}


function ref_uniq(arr,ref,n=Infinity) {
    let narr = ary_bsc.combine(ref,arr)
    let st = new Set()
    let rslt = []
    for(let i=0;i<narr.length;i++) {
        if(st.size === n) {
            return(rslt.map(r=>r[1]))
        } else {
            let cond = st.has(narr[i][0])
            if(cond) {
            } else {
                st.add(narr[i][0])
                rslt.push(narr[i])
            }
        }
    }
    return(rslt.map(r=>r[1]))
}


module.exports = {
    recycle,
    uniq,
    ref_recycle,
    ref_uniq,

}
