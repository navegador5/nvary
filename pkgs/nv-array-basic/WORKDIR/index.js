const {hole,noexist,is_int,GLOBAL_ERROR_DICT} = require("nv-facutil-basic");

const lsti = (arr)=>arr.length-1;


function validate_index(arr,i) {
    let cond = (i>=0) && (i<arr.length)
    if(cond) {
        return(i)
    } else {
        return(undefined)
    }
}

function validate_value(arr,v) {
    if(arr.indexOf(v)>=0) {
        return(v)
    } else {
        return(undefined)
    }
}

function validate_vi(arr,d) {
    let i = d.i
    let v = d.v
    if(validate_index(arr,i)!==undefined) {
        if(arr[i] === v) {
            return(d)
        } else {
            return(undefined)
        }
    } else {
        return(undefined)
    }
}


function some(arr,...whiches) {
    return(arr.filter((r,i)=>whiches.includes(i)))
}

function some_not(arr,...whiches) {
    return(arr.filter((r,i)=>!whiches.includes(i)))
}

function interval(arr,interval) {
    return(arr.filter((r,i)=>i%interval===0))
}


function bin(n,lngth,head=true){
    let s = n.toString(2)
    let arr = Array.from(s).map(r=>parseInt(r))
    lngth = (lngth===undefined)?arr.length:lngth
    let left = lngth - arr.length
    if(left>0) {
        let padding = (Array.from({length:left})).map(r=>0)
        if(!head) {
            return(arr.concat(padding))
        } else {
            return(padding.concat(arr))
        }        
    } else {
        if(!head) {
            return(arr.slice(-left))
        } else {
            return(arr.slice(0,lngth))
        }
    }
}


function eq(arr0,arr1) {
    let cond = arr0.length === arr1.length
    if(cond) {
        for(let i=0;i<arr0.length;i++) {
            if(arr0[i] !== arr1[i]) {return(false)}
        }
        return(true)
    } else {
        return(false)
    }
}

function combine(...lists) {
    let arr = Array.from({length:lists[0].length})
    arr = arr.map(
        (r,i) => {
            let d = {}
            lists.forEach(
                (l,index) => {
                    d[index] = l[i]
                }
            )
            return(d)
        }
    )
    return(arr)
}

function uniform_index(arr,index) {
    if(index<0) {
        return(index%arr.length + arr.length)
    } else if(index>=arr.length) {
        return(arr.length-1)
    } else {
        return(index)
    }
}

function mid_index_pair(arr) {
    let lngth = arr.length;
    if(lngth === 0) {
        return([])
    } else if(lngth %2) {return([(lngth-1)/2])
    } else {return([lngth/2-1,lngth/2])}
}

function mid_index_left(arr) {
    let pair = mid_index_pair(arr);
    return(pair[0])
}

function mid_index_right(arr) {
    let pair = mid_index_pair(arr);
    if(pair.length <2) {
        return(pair[0])
    } else {
        return(pair[1])
    }
}

function mid_value_pair(arr) {
    let ipair = mid_index_pair(arr);
    let vpair = []
    ipair.forEach(r=>{vpair.push(arr[r])});
    return(vpair)
}

function mid_value_left(arr) {
    let index = mid_index_left(arr);
    return(arr[index])
}

function mid_value_right(arr) {
    let index = mid_index_right(arr);
    return(arr[index])
}



function to_map(arr) { return(new Map(Object.entries(arr)))}

function to_wmap(arr) {
    let wmp = new WeakMap();
    for(let i=0;i<arr.length;i++) {
        wmp.set(arr[i],i)
    }
    return(wmp)
}

function is_hole_element_at(arr,index) {
    let c = hole;
    arr.forEach((r,i)=>{if(i===index){c=i}})
    return(c==hole)
}


function get_nonhole_indexes(arr) {return(arr.map((r,i)=>i).filter(r=>r!==undefined))}

function get_hole_indexes(arr) {
    let nonholes = get_ary_nonhole_indexes(arr);
    let indexes = []
    for(let i=0;i<arr.length;i++) {
        if(!nonholes.includes(i)) {indexes.push(i)}
    }
    return(indexes)
}

function has_hole(arr) {
    return(get_ary_nonhole_indexes(arr).length!==arr.length)
}

function fill_hole(arr,v=undefined) {
    let nonholes = get_ary_nonhole_indexes(arr);
    for(let i=0;i<arr.length;i++) {
        if(!nonholes.includes(i)) {arr[i]=v}
    }
    return(arr)
}

function freq(arr,ele) {
    let c = 0
    for(let each of arr) {
        (each===ele)?(c=c+1):0
    }
    return(c)
}


function _is_index(idx,key) {
    return(idx.toString()===key && idx>=0 && idx<2**32 -1)
}

function is_index(key) {
    let idx = parseInt(key);
    return(_is_index(idx,key))
}

function _get_with_index(target,key,idx) {
    let [si,ei] = [0,target.length];
    if(idx>=si && idx <ei) {
        if(is_hole_element_at(target,idx)) {
            return(hole)
        } else {
            let real_v = Reflect.get(target,key);
            return(real_v)
        }
    } else {
        return(noexist)
    }
}

function _safe_get(target,key) {
     let idx = parseInt(key);
     if(_is_index(idx,key)) {
         return(_get_with_index(target,key,idx))
     } else {
         return(Reflect.get(target,key))
     }
}

function safe_get(ary,key) {
    if(typeof(key)==='string') {
        return(_safe_get(ary,key))
    } else if(is_int(key)){
        return(_get_with_index(ary,key,key))  
    } else {
        return(Reflect.get(ary,key))
    }
}


function creat_safe_getter_proxy(ary) {
     let proxy = new Proxy(
         ary,
         {
             get:function(target,key,receiver) {
                 return(_safe_get(target,key))
             }
         }
     );
     return(proxy)
}

const ERROR_DICT = {
    index_not_in_range:new Error("index_not_in_range")
}

function _set_with_index(target,key,idx,value) {
     let [si,ei] = [0,target.length];
     if(idx>=si && idx <ei) {
         if(value === noexist) {
             throw(GLOBAL_ERROR_DICT.noexist_is_not_assignable)
         } else {
             return(Reflect.set(target,key,value))
         }
     } else {
         throw(ERROR_DICT.index_not_in_range)
     }
}

function _safe_set(target,key,value) {
     let idx = parseInt(key);
     if(_is_index(idx,key)) {
         _set_with_index(target,key,idx,value);
     } else {
         Reflect.set(target,key,value)
     }
}

function safe_set(ary,key,value) {
    if(typeof(key)==='string') {
        _safe_set(ary,key,value);
    } else if(is_int(key)){
        _set_with_index(ary,key,key,value);
    } else {
        Reflect.set(ary,key,value);
    }
}


function creat_safe_setter_proxy(ary) {
     let proxy = new Proxy(
         ary,
         {
             set:function(target,key,value,receiver) {
                 _safe_set(target,key,value)
             }
         }
     );
     return(proxy)
}


function creat_safe_gsetter_proxy(ary) {
     let proxy = new Proxy(
         ary,
         {
             get:function(target,key,receiver) {
                 return(_safe_get(target,key))
             },
             set:function(target,key,value,receiver) {
                 _safe_set(target,key,value)
             }
         }
     );
     return(proxy)
}


module.exports = {
    eq,
    bin,
    clear: arr =>arr.splice(0,Infinity),
    head : arr=>arr[0],
    tail : arr=>arr.slice(1),
    mid  : arr=>arr.slice(1,lsti(arr)),
    init : arr=>arr.slice(0,lsti(arr)),
    lsti ,
    lst  : arr=>arr[lsti(arr)],
    slst : (ary,v)=> {ary[ary[__l]-1] = v},
    uniform_index,
    validate_index,
    validate_value,
    validate_vi,
    some,
    some_not,
    interval,
    odd  :   arr=>arr.filter((r,i)=>i%2),
    even :   arr=>arr.filter((r,i)=>!(i%2)),
    freq,
    combine,
    mid_index_pair,
    mid_index_left,
    mid_index_right,
    mid_value_pair,
    mid_value_left,
    mid_value_right,
    ibfr:(ary,index,v) => (ary.splice(index,0,v),ary),
    iaft:(ary,index,v) => (ary.splice(index+1,0,v),ary),
    rm:(ary,index) => {
        let rslt = ary[index];
        ary.splice(index,1);
        return(rslt)
    }, 
    rplc:(ary,index,v) => ary[index]=v,
    ////
    cp: arr=>arr.slice(0),
    to_map,
    to_wmap,
    ////
    is_hole_element_at,
    get_nonhole_indexes,
    get_hole_indexes,
    has_hole,
    fill_hole,
    is_index,
    ERROR_DICT,
    safe_get,
    creat_safe_getter_proxy,
    safe_set,
    creat_safe_setter_proxy,
    creat_safe_gsetter_proxy,
    hole,
    noexist,
}


