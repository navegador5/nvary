const ary_bsc = require("nv-array-basic")

function all(arr,cond_func,...other_params) {
    let narr = arr.map(
        (r,i)=> cond_func(r,i,...other_params)
    )
    return(narr.every(r=>r))
}

function every(arr,cond_func,...other_params) {
    return(all(arr,cond_func,...other_params))
}

function all_not(arr,cond_func,...other_params) {
    let narr = arr.map(
        (r,i)=> !cond_func(r,i,...other_params)
    )
    return(narr.every(r=>r))
}

function every_not(arr,cond_func,...other_params) {
    return(all_not(arr,cond_func,...other_params))
}

function any(arr,cond_func,...other_params) {
    for(let i=0;i<arr.length;i++) {
        let cond = cond_func(arr[i],i,...other_params)
        if(cond) {
            return(true)
        } else {
        }
    }
    return(false)
}


function any_not(arr,cond_func,...other_params) {
    for(let i=0;i<arr.length;i++) {
        let cond = !cond_func(arr[i],i,...other_params)
        if(cond) {
            return(true)
        } else {
        }
    }
    return(false)
}

function at_most_several(arr,n,cond_func,...other_params) {
    let c = 0
    for(let i=0;i<arr.length;i++) {
        let cond = cond_func(arr[i],i,...other_params)
        if(cond) {
            if(c > n) {
                return(false)
            }
            c = c + 1
        } else {
        }
    }
    return(true)
}

function at_most_several_not(arr,n,cond_func,...other_params) {
    let c = 0
    for(let i=0;i<arr.length;i++) {
        let cond = !cond_func(arr[i],i,...other_params)
        if(cond) {
            if(c > n) {
                return(false)
            }
            c = c + 1
        } else {
        }
    }
    return(true)    
}

function several(arr,n,cond_func,...other_params) {
    let c = 0
    for(let i=0;i<arr.length;i++) {
        let cond = cond_func(arr[i],i,...other_params)
        if(cond) {
            if(c > n) {
                return(false)
            }
            c = c + 1
        } else {
        }
    }
    return((c===n))
}

function several_not(arr,n,cond_func,...other_params) {
    let c = 0
    for(let i=0;i<arr.length;i++) {
        let cond = !cond_func(arr[i],i,...other_params)
        if(cond) {
            if(c > n) {
                return(false)
            }
            c = c + 1
        } else {
        }
    }
    return((c===n))
}

function at_least_several(arr,n,cond_func,...other_params) {
    let c = 0
    for(let i=0;i<arr.length;i++) {
        let cond = cond_func(arr[i],i,...other_params)
        if(cond) {
            if(c >= n) {
                return(true)
            }
            c = c + 1
        } else {
        }
    }
    return(false)
}

function at_least_several_not(arr,n,cond_func,...other_params) {
    let c = 0
    for(let i=0;i<arr.length;i++) {
        let cond = !cond_func(arr[i],i,...other_params)
        if(cond) {
            if(c >= n) {
                return(true)
            }
            c = c + 1
        } else {
        }
    }
    return(false)
}

function which(arr,which,cond_func,...other_params) {
    which = ary_bsc.validate_index(arr,which)
    if(which === undefined) {
        return(undefined)
    } else {
        let cond = cond_func(arr[which],which,...other_params)
        return(!!cond)
    }
}

function which_not(arr,which,cond_func,...other_params) {
    which = ary_bsc.validate_index(arr,which)
    if(which === undefined) {
        return(undefined)
    } else {
        let cond = !cond_func(arr[which],which,...other_params)
        return(!!cond)
    }
}


function fst(arr,cond_func,...other_params) { return(which(arr,0,cond_func,...other_params))}

function fst_not(arr,cond_func,...other_params) { return(which_not(arr,0,cond_func,...other_params))}

function lst(arr,cond_func,...other_params) { 
    let index = arr.length - 1
    return(which(arr,index,cond_func,...other_params))
}

function lst_not(arr,cond_func,...other_params) { 
    let index = arr.length - 1
    return(which_not(arr,index,cond_func,...other_params))
}


function at_most_some(arr,whiches,cond_func,...other_params) {
    for(let i=0;i<arr.length;i++) {
        let cond = whiches.includes(i)
        if(cond) {
            //在whiches 里面的不做判断 
        } else {
            //不在whiches 里面的必须 not
            if(cond_func(arr[i],i,...other_params)) {
                return(false)
            } else {
            }
        }
    }
    return(true)
}


function at_most_some_not(arr,whiches,cond_func,...other_params) {
    for(let i=0;i<arr.length;i++) {
        let cond = whiches.includes(i)
        if(cond) {
            //在whiches 里面的不做判断 
        } else {
            //不在whiches 里面的必须true 
            if(!cond_func(arr[i],i,...other_params)) {
                return(false)
            } else {
            }
        }
    }
    return(true)
}

function at_least_some(arr,whiches,cond_func,...other_params) {
    whiches = whiches.map(which=>ary_bsc.validate_index(arr,which))
    if(whiches.includes(undefined)) {
        return(undefined)
    } else {
        //不在whiches 里面的不做判断
        let narr = ary_bsc.some(arr,...whiches)
        return(all(narr,cond_func,...other_params))
    }
}


function at_least_some_not(arr,whiches,cond_func,...other_params) {
    whiches = whiches.map(which=>ary_bsc.validate_index(arr,which))
    if(whiches.includes(undefined)) {
        return(undefined)
    } else {
        //不在whiches 里面的不做判断
        let narr = ary_bsc.some(arr,...whiches)
        return(all_not(narr,cond_func,...other_params))
    }    
}


function some(arr,whiches,cond_func,...other_params) {
    whiches = whiches.map(which=>ary_bsc.validate_index(arr,which))
    if(whiches.includes(undefined)) {
        return(undefined)
    } else {
        for(let i=0;i<arr.length;i++) {
            let cond = whiches.includes(i)
            if(cond) {
                //在whiches 里面的必须true
                if(cond_func(arr[i],i,...other_params)) {
                } else {
                    return(false)
                }
            } else {
                //不在whiches 里面的必须false
                if(!cond_func(arr[i],i,...other_params)) {
                    
                } else {
                    return(false)
                }
            }
        }
        return(true)
    }
}


function some_not(arr,whiches,cond_func,...other_params) {
    whiches = whiches.map(which=>ary_bsc.validate_index(arr,which))
    if(whiches.includes(undefined)) {
        return(undefined)
    } else {
        for(let i=0;i<arr.length;i++) {
            let cond = whiches.includes(i)
            if(cond) {
                //在whiches 里面的必须false
                if(!cond_func(arr[i],i,...other_params)) {
                } else {
                    return(false)
                }
            } else {
                //不在whiches 里面的必须true
                if(cond_func(arr[i],i,...other_params)) {

                } else {
                    return(false)
                }
            }
        }
        return(true)
    }
}



module.exports = {
    all,
    all_not,
    every,
    every_not,
    any,
    any_not,
    at_most_several,
    at_most_several_not,
    several,
    several_not,
    at_least_several,
    at_least_several_not,
    fst,
    fst_not,
    which,
    which_not,
    lst,
    lst_not,
    at_most_some,
    at_most_some_not,
    some,
    some_not,
    at_least_some,
    at_least_some_not
}
