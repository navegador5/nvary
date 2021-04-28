function clear(arr) {
    arr.splice(0,Infinity)
    return(arr)
}

function head(arr) {
    return(arr[0])
}

function tail(arr) {
    return(arr.slice(1))
}

function mid(arr) {
    return(arr.slice(1,arr.length-1))
}

function init(arr) {
    return(arr.slice(0,arr.length-1))
}


function lst(arr) {
    return(arr[arr.length-1])
}

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

function odd(arr) {
    return(arr.filter((r,i)=>i%2===1))
}
function even(arr) {
    return(arr.filter((r,i)=>i%2===0))
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


function cp(arr) {return(arr.slice(0))}

function to_map(arr) { return(new Map(Object.entries(arr)))}

function to_wmap(arr) {
    let wmp = new WeakMap();
    for(let i=0;i<arr.length;i++) {
        wmp.set(arr[i],i)
    }
    return(wmp)
}

function is_hole_element_at(arr,index) {
    let c = empty;
    arr.forEach((r,i)=>{if(i===index){c=i}})
    return(c==empty)
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

module.exports = {
    eq,
    bin,
    clear,
    head,
    tail,
    mid,
    init,
    lst,
    uniform_index,
    validate_index,
    validate_value,
    validate_vi,
    some,
    some_not,
    interval,
    odd,
    even,
    combine,
    mid_index_pair,
    mid_index_left,
    mid_index_right,
    mid_value_pair,
    mid_value_left,
    mid_value_right,
    ////
    cp,
    to_map,
    to_wmap,
    ////
    is_hole_element_at,
    get_nonhole_indexes,
    get_hole_indexes,
    has_hole,
    fill_hole
}

