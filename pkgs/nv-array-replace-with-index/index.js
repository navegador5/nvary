const ary_bsc = require("nv-array-basic")

function irplc(arr,rv,...whiches) {
    for(let i=0;i<whiches.length;i++) {
        let index = ary_bsc.validate_index(arr,whiches[i])
        if(index !== undefined) {
            arr[index] = rv
        }
    }
    return(arr)
}


module.exports = irplc
