const DFLT_VALUE_FUNC = (r,i,...func_params) => {return(r)}
const LNGTH_FUNC = (r,i,...func_params) => {return(r.length)}

function fgrp_engine(rtrn_func,arr,func,...func_params) {
    let m = new Map()
    let st = new Set()
    arr.forEach(
        (r,i) => {
            let rslt = func(r,i,...func_params)
            if(st.has(rslt)) {
                m.get(rslt).push(rtrn_func(r,i))
            } else {
                st.add(rslt)
                m.set(rslt,[rtrn_func(r,i)])
            }
        }
    )
    return(m)
}

function fgrpvi(arr,func,...func_params) {
    return(fgrp_engine((r,i)=>({i:i,v:r}),arr,func,...func_params))
}

function fgrpi(arr,func,...func_params) {
    return(fgrp_engine((r,i)=>i,arr,func,...func_params))
}

function fgrpv(arr,func,...func_params) {
    return(fgrp_engine((r,i)=>r,arr,func,...func_params))
}



function vgrpvi(arr,...func_params) {
    return(fgrp_engine((r,i)=>({i:i,v:r}),arr,DFLT_VALUE_FUNC,...func_params))
}

function vgrpi(arr,...func_params) {
    return(fgrp_engine((r,i)=>i,arr,DFLT_VALUE_FUNC,...func_params))
}

function vgrpv(arr,...func_params) {
    return(fgrp_engine((r,i)=>r,arr,DFLT_VALUE_FUNC,...func_params))
}


function lgrpvi(arr) {
    return(fgrp_engine((r,i)=>({i:i,v:r}),arr,LNGTH_FUNC))
}

function lgrpi(arr) {
    return(fgrp_engine((r,i)=>i,arr,LNGTH_FUNC))
}

function lgrpv(arr) {
    return(fgrp_engine((r,i)=>r,arr,LNGTH_FUNC))
}

function freq_grp(arr) {
    let  mp = new Map()
    for(let each of arr) {
        let tmp =  mp.get(each)
        if(tmp) {
            tmp[0] = tmp[0] +1;
        } else {
            mp.set(each,[1])
        }
    }
    return(mp)
}

module.exports = {
    fgrpvi,
    fgrpi,
    fgrpv,
    vgrpvi,
    vgrpi,
    vgrpv,
    lgrpvi,
    lgrpi,
    lgrpv,
    freq_grp,
}
