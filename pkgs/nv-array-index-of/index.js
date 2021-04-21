function *gen_from_fst(arr,v) {
    for(let i=0;i<arr.length;i++) {
        let cond = (arr[i]===v)
        if(cond) {
            yield(i)
        } else {
        }
    }
}


function *gen_from_lst(arr,v) {
    for(let i=arr.length -1;i>-1;i--) {
        let cond = (arr[i] === v)
        if(cond) {
            yield(i)
        } else {
        }
    }
}


function all(arr,v) {
    let g = gen_from_fst(arr,v)
    return(Array.from(g))
}


function which_engine(gf,arr,v,which) {
    let g = gf(arr,v)
    let c = 0
    for(let each of g) {
        if(c===which) {return(each)}
        c = c +1
    }    
}

function which(arr,v,which) {return(which_engine(gen_from_fst,arr,v,which))}

function fst(arr,v) {return(which(arr,v,0))}

function which_from_lst(arr,v,which) {return(which_engine(gen_from_lst,arr,v,which))}

function lst(arr,v) {return(which_from_lst(arr,v,0))}

function some_engine(gf,arr,v,...whiches) {
    let narr = []
    let g = gf(arr,v)
    let c = 0
    for(let each of g) {
        if(whiches.includes(c)) {narr.push(each)}
        c = c + 1
    }
    return(narr)
}

function some(arr,v,...whiches) {return(some_engine(gen_from_fst,arr,v,...whiches))}

function some_from_lst(arr,v,...whiches) {return(some_engine(gen_from_lst,arr,v,...whiches))}


module.exports = {
    fst,
    lst,
    which,
    which_from_lst,
    some,
    some_from_lst,
    all
}
