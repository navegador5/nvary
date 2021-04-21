const {eq} = require("nv-array-basic")


function * slide_from_fst(arr0,arr1) {
    let cond = arr0.length >= arr1.length
    if(cond) {
        let lsi = arr0.length - arr1.length
        for(let si=0;si<=lsi;si++) {
            let ei = si+arr1.length
            let cond = eq(arr0.slice(si,ei),arr1)
            if(cond) {
                yield([si,ei])
            } else {
            }
        }
    } else {
    }
}

function * slide_from_lst(arr0,arr1) {
    let cond = arr0.length >= arr1.length
    if(cond) {
        let lsi = arr0.length - arr1.length
        for(let si=lsi;si>-1;si--) {
            let ei = si+arr1.length
            let cond = eq(arr0.slice(si,ei),arr1)
            if(cond) {
                yield([si,ei])
            } else {
            }
        }
    } else {
    }
}



function has(arr0,arr1) {
    let g = slide_from_fst(arr0,arr1)
    for(let each of g) {
        return(true)
    }
    return(false)
}



module.exports = {
    slide_from_fst,
    slide_from_lst,
    has
}

