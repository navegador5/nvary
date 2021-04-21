const ary_init = require("nv-array-init")

function creat_not_func(cond_func) {
    let f = function(r,i,...cond_other_func_params) {
        return(!cond_func(r,i,...cond_other_func_params))
    }
    return(f)
}

function *gen_from_fst(arr,cond_func,...cond_other_func_params) {
    let si;
    let i;
    for(i=0;i<arr.length;i++) {
         let cond = cond_func(arr[i],i,...cond_other_func_params)
         if(cond) {
             if(si!== undefined) {
             } else {
                 si = i
             }
         } else {
             if(si!== undefined) {
                 yield([si,i])
                 si = undefined
             } else {}
         }
    }
    if(si!==undefined) {
        yield([si,i])
        si = undefined
    }
}

function *gen_from_lst(arr,cond_func,...cond_other_func_params) {
    let ei;
    let i;
    for(i=arr.length-1;i>-1;i--) {
         let cond = cond_func(arr[i],i,...cond_other_func_params)
         if(cond) {
             if(ei!== undefined) {
             } else {
                 ei = i
             }
         } else {
             if(ei!== undefined) {
                 yield([i+1,ei+1])
                 ei = undefined
             } else {}
         }
    }
    if(ei!==undefined) {
        yield([0,ei+1])
        ei = undefined
    }
}


function which_engine(gf,arr,index,cond_func,...cond_other_func_params) {
    let g = gf(arr,cond_func,...cond_other_func_params)
    let c = 0
    for(let each of g) {
        if(c===index) {return(each)}
        c = c+1
    }
}

function which(arr,index,cond_func,...cond_other_func_params) {
    return(which_engine(gen_from_fst,arr,index,cond_func,...cond_other_func_params))
}

function which_not(arr,index,cond_func,...cond_other_func_params) {
    cond_func = creat_not_func(cond_func)
    return(which(arr,index,cond_func,...cond_other_func_params))    
}


function fst(arr,cond_func,...cond_other_func_params) {
    let g = gen_from_fst(arr,cond_func,...cond_other_func_params)
    for(let each of g) {
        return(each)
    }
}

function fst_not(arr,cond_func,...cond_other_func_params) {
    cond_func = creat_not_func(cond_func)
    return(fst(arr,cond_func,...cond_other_func_params))
}


function lst(arr,cond_func,...cond_other_func_params) {
    let g = gen_from_lst(arr,cond_func,...cond_other_func_params)
    for(let each of g) {
        return(each)
    }
}


function lst_not(arr,cond_func,...cond_other_func_params) {
    cond_func = creat_not_func(cond_func)
    return(lst(arr,cond_func,...cond_other_func_params))
}

function which_from_lst(arr,index,cond_func,...cond_other_func_params) {
    return(which_engine(gen_from_lst,arr,index,cond_func,...cond_other_func_params))
}


function which_not_from_lst(arr,index,cond_func,...cond_other_func_params) {
    cond_func = creat_not_func(cond_func)
    return(which_from_lst(arr,index,cond_func,...cond_other_func_params))
}


function some_engine(gf,arr,whiches,cond_func,...cond_other_func_params) {
    whiches = whiches.filter(r=>(r>=0)&&(r<arr.length))
    let slcs= []
    let c = 0
    let g = gf(arr,cond_func,...cond_other_func_params)
    for(let each of g) {
        if(whiches.includes(c)) {slcs.push(each)}
        c = c +1
    }
    return(slcs)
}

function some(arr,whiches,cond_func,...cond_other_func_params) {
    return(some_engine(gen_from_fst,arr,whiches,cond_func,...cond_other_func_params))
}


function some_not(arr,whiches,cond_func,...cond_other_func_params) {
    cond_func = creat_not_func(cond_func)
    return(some(arr,whiches,cond_func,...cond_other_func_params))
}


function some_from_lst(arr,whiches,cond_func,...cond_other_func_params) {
    return(some_engine(gen_from_lst,arr,whiches,cond_func,...cond_other_func_params))
}

function some_not_from_lst(arr,whiches,cond_func,...cond_other_func_params) {
    cond_func = creat_not_func(cond_func)
    return(some_from_lst(arr,whiches,cond_func,...cond_other_func_params))
}



function all(arr,cond_func,...cond_other_func_params) {
    let g = gen_from_fst(arr,cond_func,...cond_other_func_params)
    return(Array.from(g))
}


function all_not(arr,cond_func,...cond_other_func_params) {
    cond_func = creat_not_func(cond_func)
    return(all(arr,cond_func,...cond_other_func_params))
}


module.exports = {
    fst,
    fst_not,
    which,
    which_not,
    lst,
    lst_not,
    which_from_lst,
    which_not_from_lst,
    some,
    some_not,
    some_from_lst,
    some_not_from_lst,
    all,
    all_not
}

