
function align(arr0,arr1)  {
    let cond = arr0.length >= arr1.length
    if(cond) {
        return([arr0.slice(0,arr1.length),arr1,arr0.slice(arr1.length)])
    } else {
        return([arr0,arr1.slice(0,arr0.length),arr1.slice(arr0.length)])
    }
}

function union(arr0,arr1) {
    let [l0,l1,left] = align(arr0,arr1)
    let arr = []
    for(let i=0;i<l0.length;i++) {
        let cond = arr.includes(l0[i])
        if(cond) {} else {arr.push(l0[i])}
    }
    for(let i=0;i<l1.length;i++) {
        cond = arr.includes(l1[i])
        if(cond) {} else {arr.push(l1[i])}
    }
    arr = arr.concat(left)
    return(arr)
}

function diff(arr0,arr1) {
    let [l0,l1,left] = align(arr0,arr1)
    let arr = []
    for(let i=0;i<l0.length;i++) {
        let cond = !arr.includes(l0[i]) && !l1.includes(l0[i])
        if(cond) {arr.push(l0[i])} else {}
    }
    if(arr0.length>arr1.length){
        arr = arr.concat(left)
    } else {}
    return(arr)
}

function inter(arr0,arr1) {
    let [l0,l1,left] = align(arr0,arr1)
    let arr = []
    for(let i=0;i<l0.length;i++) {
        let cond = !arr.includes(l0[i]) && l1.includes(l0[i])
        if(cond) {arr.push(l0[i])} else {}
    }
    return(arr)
}



module.exports = {
    align,
    union,
    diff,
    inter,
}

