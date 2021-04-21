const {has} = require("nv-array-slide");
const {fst_index_of} = require("nv-array-fast");


function start_with(arr,l) {
    if(l.length<=arr.length) {
        for(let i=0;i<l.length;i++) {
            if(arr[i]===l[i]) {
            } else {
                return(false)
            }
        }
        return(true)
    } else {
        return(false)
    }
}

function end_with(arr,l) {
    if(l.length<=arr.length) {
        let diff = arr.length - l.length;
        for(let i=l.length-1;i<l.length;i++) {
            if(arr[i+diff]===l[i]) {
            } else {
                return(false)
            }
        }
        return(true)
    } else {
        return(false)
    }
}


function strict_include(arr,l) {
    if(l.length > arr.length) {return(false)}
    return(has(arr,l))
}

function loose_include(arr,l) {
    if(l.length > arr.length) {return(false)}
    let c = 0;
    for(let i=0;i<l.length;i++) {
        let index = fst_index_of(arr,l[i],c);
        if(index>=0) {c=index} else {return(false)}
    }
    return(true)
}


module.exports = {
    start_with,
    end_with,
    strict_include,
    loose_include
}


