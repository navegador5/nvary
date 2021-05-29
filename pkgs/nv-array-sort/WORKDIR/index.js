const {splice} = require("nv-array-fast");

const DFLT_CMP_FUNC = (a,b)=>a>b?1:(a<b)?-1:0

function some(arr,whiches,f=DFLT_CMP_FUNC) {
    let refer = arr.filter((r,i)=>whiches.includes(i))
    let indexes = arr.map((r,i)=>i)
    indexes = indexes.filter((r)=>whiches.includes(r))
    indexes = ref(indexes,refer,f=DFLT_CMP_FUNC)
    indexes.sort()
    for(let i in indexes) {
        arr[indexes[i]] = refer[i]
    }
    return(arr)
}

function slice(arr,si,ei,f=DFLT_CMP_FUNC) {
    let mid = arr.slice(si,ei)
    mid.sort(f)
    arr.splice(si,ei-si,...mid)
    return(arr)
}

function ref(arr,refer,f=DFLT_CMP_FUNC) {
    let entries = arr.map((r,i)=>[arr[i],refer[i]])
    entries.sort(
        (a,b)=> f(a[1],b[1]) 
    )
    entries = entries.map(r=>r[0])
    arr.splice(0,Infinity,...entries)
    refer.sort(f)
    return(arr)
}

function bat(lists,refer,f=DFLT_CMP_FUNC) {
    let entries = arr.map((r,i)=>[refer[i],...lists.map(l=>l[i])])
    entries.sort(
        (a,b)=> f(a[0],b[0]) 
    )
    lists.forEach((l,i)=>{l.splice(0,Infinity,...entries.map(r=>r[i+1]))})
    refer.sort(f)
    return(lists)
}

function wherei(arr,v) {
    if(v<arr[0]) {return([undefined,0])}
    for(let i=0;i<arr.length;i++) {
        if(arr[i]>v) {
            return([i-1,i])
        }
    }
    if(arr[arr.length-1] === v) {
        return([arr.length-1,undefined])
    } else {
        return([undefined,undefined])
    }
}

function wherev(arr,v) {
    if(v<arr[0]) {return([undefined,arr[0]])}
    for(let i=0;i<arr.length;i++) {
        if(arr[i]>v) {
            return([arr[i-1],arr[i]])
        }
    }
    if(arr[arr.length-1] === v) {
        return([v,undefined])
    } else {
        return([undefined,undefined])
    }
}


function lbi(arr,v) {return(wherei(arr,v)[0])}
function ubi(arr,v) {return(wherei(arr,v)[1])}

function lbv(arr,v) {return(wherev(arr,v)[0])}
function ubv(arr,v) {return(wherev(arr,v)[1])}

function num(arr) {
    arr.sort((a,b)=>a-b)
    return(arr)
}

const DFLT_GT = (a,b)=>(a-b>0)
const DFLT_GELT = (v,s,e) => (v>=s && v<e)

function bsrch_fsti(ordered_arr,v,gelt=DFLT_GELT) {
    let si = 0;
    let ei = ordered_arr.length;
    while(ei - si >2) {
        let lngth = ei -si;
        let mid = si+(lngth >> 1);
        let cond = gelt(v,ordered_arr[si],ordered_arr[mid])
        if(cond) {ei=mid} else {si=mid}
    }
    if(ei-si === 0) {
         return(-1)
    } else if(ei-si === 1) {
        if(ordered_arr[si] === v) {
            return(si)
        } else {
            return(-1)
        }         
    } else {
        if(ordered_arr[si] === v) {
            return(si)
        } else if(ordered_arr[si+1] === v) {
            return(si+1)
        } else {
            return(-1)
        }
    }
}


function  merge_sorted(m,gt=DFLT_GT) {
    var iter = []
    for(var i=0;i<m.length;i++) {
        iter.push([i,0]);
        iter.sort((a,b)=>m[a[0]][a[1]]-m[b[0]][b[1]])
    }
    var arr = []
    while(iter.length>0) {
        arr.push(m[iter[0][0]][iter[0][1]]);
        var entry = iter.shift();
        entry[1] = entry[1] + 1;
        if(entry[1] >= m[entry[0]].length) {
        } else {
            var index = iter.length;
            var ventry = m[entry[0]][entry[1]]
            for(var i=0;i<iter.length;i++) {
                var currv = m[iter[i][0]][iter[i][1]]
                if(gt(currv,ventry)) {index=i;break;}
            }
            splice(iter,index,0,[entry]);
        }
    }
    return(arr)
}

function match_partial_order(ref,ary,f=(r,i)=>r) {
    let curr = 0 
    for(let i=0;i<ary.length;i++) {
        let seq = ref.indexOf(f(ary[i],i))
        if(seq>=curr) {curr=seq} else {return(false)}
    }
    return(true)
}


function _cmp(ary0,ary1,cmp_func) {
    for(let i=0;i<ary0.length;i++) {
        let rslt = cmp_func(ary0[i],ary1[i])
        if(rslt ===0) {
        } else {
            return(rslt)
        }
    }
    return(0)
}

function cmp(ary0,ary1,cmp_func=DFLT_CMP_FUNC,rtrn_if_empty=-1) {
    let lngth0=ary0.length;
    let lngth1=ary1.length;
    if(lngth0<lngth1) {
        let rslt = _cmp(ary0,ary1.slice(0,lngth0),cmp_func);
        if(rslt ===0) {
            return(rtrn_if_empty)
        } else {
            return(rslt)
        }
    } else if(lngth0===lngth1) {
        return(_cmp(ary0,ary1,cmp_func))
    } else {
        let rslt = _cmp(ary0,ary1.slice(0,lngth1),cmp_func);
        if(rslt ===0) {
            return(-rtrn_if_empty)
        } else {
            return(rslt)
        }
    }
}


module.exports = {
    DFLT_CMP_FUNC,
    num,
    slice,
    ref,
    some,
    bat,
    wherei,
    wherev,
    lbi,
    lbv,
    ubi,
    ubv,
    DFLT_GELT,
    bsrch_fsti,
    merge_sorted,
    match_partial_order,
    cmp,
}
