function interval(arr,start,interval,val) {
    for(let i=start;i<arr.length;i=i+interval) {
        arr[i] = val
    }
    return(arr)
}


function odd(arr,val) { interval(arr,1,2,val)}

function even(arr,val) { interval(arr,0,2,val)}

function all(arr,val) {interval(arr,0,1,val)}

function some(arr,val,...whiches) {
    for(let i=0;i<arr.length;i++) {
        let cond = whiches.includes(i)
        if(cond) {arr[i] = val}
    }
    return(arr)    
}

function some_not(arr,val,...whiches) {
    for(let i=0;i<arr.length;i++) {
        let cond = whiches.includes(i)
        if(cond){} else {arr[i] = val}
    }
    return(arr)
}

function filter_map(arr,val_map_func,index_cond_func,...other_args) {
    let entries = Object.entries(arr);
    entries = entries.filter(
        (e) => {
            let cond = index_cond_func(e[1],e[0],...other_args);
            return(cond)
        }
    )
    for(let i=0;i<entries.length;i++) {
        let index = entries[i][0];
        let value = entries[i][1]
        arr[index] = val_map_func(value,index,...other_args)
    }
    return(arr)
}


function filter(arr,val,index_cond_func,...other_args) {
    return(filter_map(arr,r=>val,index_cond_func,...other_args));
}

function ifilter(arr,val,index_cond_func,...other_args) {
    let ifunc = function(i,...other_args) {
        return(index_cond_func(undefined,i,...other_args))
    }
    return(filter(arr,val,ifunc,...other_args))
}

function vfilter(arr,val,index_cond_func,...other_args) {
    let ifunc = function(v,...other_args) {
        return(index_cond_func(v,undefined,...other_args))
    }
    return(filter(arr,val,ifunc,...other_args))
}



module.exports = {
    interval,
    odd,
    even,
    all,
    some,
    some_not,
    filter_map,
    filter,
    ifilter,
    vfilter
}



