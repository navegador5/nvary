function left(arr,n,cond_func,...cond_func_params) {
    let c=0;
    for(let i=0;i<arr.length;i++) {
        let cond = cond_func(arr[i],i,...cond_func_params)
        if(cond) {
            if(c===n) {
                break
            } else {}
            c = c +1
        } else {
            break
        }
    }
    arr.splice(0,c)
    return(arr)
}

function right(arr,n,cond_func,...cond_func_params) {
    let c = 0
    for(let i=arr.length-1;i>-1;i--) {
        let cond = cond_func(arr[i],i,...cond_func_params)
        if(cond) {
            if(c===n) {
                break
            } else {}
            c = c +1
        } else {
            break
        }
    }
    arr.splice(arr.length-c,c)
    return(arr)
}


function both(arr,n,cond_func,...cond_func_params) {
    arr = left(arr,n,cond_func,...cond_func_params)
    arr = right(arr,n,cond_func,...cond_func_params)
    return(arr)
}


function lall(arr,cond_func,...cond_func_params) {
    arr = left(arr,Infinity,cond_func,...cond_func_params)
    return(arr)
}

function rall(arr,cond_func,...cond_func_params) {
    arr = right(arr,Infinity,cond_func,...cond_func_params)
    return(arr)    
}

function ball(arr,cond_func,...cond_func_params) {
    arr = both(arr,Infinity,cond_func,...cond_func_params)
    return(arr)
}


module.exports = {
    left,
    right,
    both,
    lall,
    rall,
    ball,
}
