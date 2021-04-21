const {uniform_index} = require("nv-array-basic");

function concat(arr0,arr1) {
    let arr = arr0.slice(0);
    Array.prototype.push.apply(arr,arr1);
    return(arr)
}

function ipop(arr,index) {
    let rslt = arr[index]
    let narr = arr.filter((r,i)=>(i!==index))
    return([rslt,narr])
}

function splice(arr,index,n,args) {
    if(index>=arr.length) {
        for(let i=0;i<args.length;i++){
            arr.push(args[i])
        }
        return([])
    }
    /////
    index = uniform_index(arr,index);
    if(n<0) {n=0}
    let del_si = index;
    let del_ei = index+n;
    if(del_ei>=arr.length) {del_ei = arr.length};
    n = del_ei - del_si;
    let rslt = arr.slice(del_si,del_ei);
    let lefted_si = del_ei;
    let lefted_ei = arr.length;
    let lefted_lngth = lefted_ei - lefted_si;
    /////
    let lefted_args_lngth = args.length - n;
    if(lefted_args_lngth>0) {
        let offset = lefted_args_lngth;
        for(let i=lefted_ei-1;i>lefted_si-1;i--) {
            arr[i+offset] = arr[i];
        }
        for(let i=del_si;i<del_si+args.length;i++) {
            arr[i] = args[i-del_si]
        }
    } else {
        let offset = n - args.length;
        for(let i=del_si;i<del_si+args.length;i++) {
            arr[i] = args[i-del_si]
        }
        for(let i=del_si+args.length;i<del_si+args.length+lefted_lngth;i++) {
            arr[i] = arr[lefted_si+i-del_si-args.length]
        }
        for(let i=0;i<offset;i++) {
            arr.pop()
        }
    }
    return(rslt)
}

function fst_index_of(arr,v,from,to) {
    from = from??0;
    to = to??arr.length;
    for(let i=from;i<to;i++) {
        if(arr[i] === v) {
            return(i)
        }
    }
    return(-1)
}


function tail_enlarge_inplace(arr,count) {
    for(let i=0;i<count;i++) {arr.push(undefined)}
    return(arr)
}


function init_enlarge_cp(arr,count) {
    let init = Array.from({length:count})
    //fast than unshift
    return(init.concat(arr))
}


function extend_inplace(arr,earr) {
    for(let i=0;i<earr.length;i++) {
        arr.push(earr[i])
    }
    return(arr)
}

function prextend_cp(arr,earr) {
    //fast than unshift
    return(earr.concat(arr))
}

module.exports = {
    concat,
    ipop,
    splice,
    fst_index_of,
    prextend_cp,
    extend_inplace,
    init_enlarge_cp,
    tail_enlarge_inplace,
}


