function fviomap(arr,map_funcs_arr,other_args_arr) {
    if(other_args_arr===undefined) {
        other_args_arr = Array(arr.length).fill([])
    } else {
    }
    let narr = []
    for(let i=0;i<arr.length;i++){
        let index = i
        let value = arr[i]
        let func = map_funcs_arr[i]
        let oargs = other_args_arr[i]
        let ele = func(value,index,...oargs)
        narr.push(ele)
    }
    return(narr)
}


function fvimap(arr,map_funcs_arr,...other_args) {
    if(other_args===undefined) {
        other_args = []
    } else {
    }
    let other_args_arr = Array(arr.length).fill(other_args)
    return(fviomap(arr,map_funcs_arr,other_args_arr))
}


function fiomap(arr,map_funcs_arr,other_args_arr) {
    if(other_args_arr===undefined) {
        other_args_arr = Array(arr.length).fill([])
    } else {
    }
    let narr = []
    for(let i=0;i<arr.length;i++){
        let index = i
        let func = map_funcs_arr[i]
        let oargs = other_args_arr[i]
        let ele = func(index,...oargs)
        narr.push(ele)
    }
    return(narr)
}


function fvomap(arr,map_funcs_arr,other_args_arr) {
    if(other_args_arr===undefined) {
        other_args_arr = Array(arr.length).fill([])
    } else {
    }
    let narr = []
    for(let i=0;i<arr.length;i++){
        let value = arr[i]
        let func = map_funcs_arr[i]
        let oargs = other_args_arr[i]
        let ele = func(value,...oargs)
        narr.push(ele)
    }
    return(narr)
}


function viomap(arr,map_func,other_args_arr) {
    let map_funcs_arr = Array(arr.length).fill(map_func)
    return(fviomap(arr,map_funcs_arr,other_args_arr))
}


function fvmap(arr,map_funcs_arr,...other_args) {
    let other_args_arr = Array(arr.length).fill(other_args)
    let narr = fvomap(arr,map_funcs_arr,other_args_arr)
    return(narr)
}




function fimap(arr,map_funcs_arr,...other_args) {
    if(other_args===undefined) {
        other_args = []
    } else {
    }
    let narr = []
    for(var i=0;i<arr.length;i++){
        let index = i
        let func = map_funcs_arr[i]
        let ele = func(index,...other_args)
        narr.push(ele)
    }
    return(narr)
}


function fomap(arr,map_funcs_arr,other_args_arr) {
    if(other_args_arr===undefined) {
        other_args_arr = Array(arr.length).fill([])
    } else {
    }
    let narr = []
    for(var i=0;i<arr.length;i++){
        let func = map_funcs_arr[i]
        let oargs = other_args_arr[i]
        let ele = func(...oargs)
        narr.push(ele)
    }
    return(narr)
}


function vimap(arr,map_func,...other_args) {
    let map_funcs_arr = Array(arr.length).fill(map_func)
    return(fvimap(arr,map_funcs_arr,...other_args))
}


function iomap(arr,map_func,other_args_arr) {
    if(other_args_arr===undefined) {
        other_args_arr = Array(arr.length).fill([])
    } else {
    }
    let narr = []
    for(var i=0;i<arr.length;i++){
        let index = i
        let func = map_func
        let oargs = other_args_arr[i]
        let ele = func(index,...oargs)
        narr.push(ele)
    }
    return(narr)
}


function vomap(arr,map_func,other_args_arr) {
    if(other_args_arr===undefined) {
        other_args_arr = Array(arr.length).fill([])
    } else {
    }
    let narr = []
    for(var i=0;i<arr.length;i++){
        let value = arr[i]
        let func = map_func
        let oargs = other_args_arr[i]
        let ele = func(value,...oargs)
        narr.push(ele)
    }
    return(narr)
}


function fmap(arr,map_funcs_arr,...other_args) {
    if(other_args===undefined) {
        other_args = []
    } else {
    }
    let other_args_arr = Array(arr.length).fill(other_args)
    let narr = []
    for(var i=0;i<arr.length;i++){
        let func = map_funcs_arr[i]
        let oargs = other_args_arr[i]
        let ele = func(...oargs)
        narr.push(ele)
    }
    return(narr)
}


function imap(arr,map_func,...other_args) {
    if(other_args===undefined) {
        other_args = []
    } else {
    }
    let narr = []
    for(var i=0;i<arr.length;i++){
        let ele = map_func(i,...other_args)
        narr.push(ele)
    }
    return(narr)
}


function vmap(arr,map_func,...other_args) {
    if(other_args===undefined) {
        other_args = []
    } else {
    }
    let narr = []
    for(var i=0;i<arr.length;i++){
        let ele = map_func(arr[i],...other_args)
        narr.push(ele)
    }
    return(narr)
}


function omap(arr,map_func,other_args_arr) {
    if(other_args_arr===undefined) {
        other_args_arr = Array(arr.length).fill([])
    } else {
    }
    let narr = []
    for(var i=0;i<arr.length;i++){
        let ele = map_func(i,...other_args_arr[i])
        narr.push(ele)
    }
    return(narr)
}



