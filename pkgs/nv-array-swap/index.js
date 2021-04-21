const ary_bsc = require("nv-array-basic")

function iswap(arr,i0,i1) {
    if(ary_bsc.validate_index(arr,i0)!== undefined && ary_bsc.validate_index(arr,i1)!== undefined){
        let tmp = arr[i0]
        arr[i0] = arr[i1]
        arr[i1] = tmp
    }
    return(arr)
}


function vswap(arr,v0,v1) {
    let i0 = arr.indexOf(v0)
    let i1 = arr.indexOf(v1)
    return(iswap(arr,i0,i1))
}

function viswap(arr,d0,d1) {
    if(ary_bsc.validate_vi(arr,d0) && ary_bsc.validate_vi(arr,d1)) {
        return(iswap(arr,d0.i,d1.i))
    } else {
    }
    return(arr)
}

function reindex(arr,...whiches) {
    let narr = arr.slice(0)
    for(let i=0;i<whiches.length;i++) {
        let index = ary_bsc.validate_index(arr,whiches[i])
        if(index !== undefined) {
            arr[index] = narr[i]
        }
    }
    return(arr)
}

module.exports = {
    iswap,
    vswap,
    viswap,
    reindex,
}
