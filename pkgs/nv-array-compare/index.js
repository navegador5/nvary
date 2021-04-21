const cond_same = (a,b)=> {return(a===b)}
const cond_diff = (a,b)=> {return(a!==b)}
const rtrni = (v,i)=> {return(i)}
const rtrnv = (v,i)=> {return(v)}
const rtrnvi= (v,i)=> {return({i:i,v:v})}


function * engine(same,arr0,arr1,cond_func,rtrn_func) {
    let lngth0 = arr0.length
    let lngth1 = arr1.length
    if(lngth0 >= lngth1) {
        let lbl = arr1.length
        let left = arr0.slice(lbl,lngth0).map((r,i)=>rtrn_func(r,i))
        for(let i=0;i<lbl;i++) {
            let cond = cond_func(arr0[i],arr1[i])
            if(cond) {
                yield(rtrn_func(arr0[i],i))
            } else {
            }
        }
        if(same) {} else {
            for(let each of left){yield(each)}
        }
    } else {
        let lbl = arr0.length
        let left =  arr1.slice(lbl,lngth1).map((r,i)=>rtrn_func(r,i))
        for(let i=0;i<lbl;i++) {
            let cond = cond_func(arr0[i],arr1[i])
            if(cond) {
                yield(rtrn_func(arr0[i],i))
            } else {
            }
        }
    }
}



function samei(arr0,arr1) {
    let g = engine(true,arr0,arr1,cond_same,rtrni)
    return(Array.from(g))
}

function samev(arr0,arr1) {
    let g = engine(true,arr0,arr1,cond_same,rtrnv)
    return(Array.from(g))
}

function samevi(arr0,arr1) {
    let g = engine(true,arr0,arr1,cond_same,rtrnvi)
    return(Array.from(g))
}

function diffi(arr0,arr1) {
    let g = engine(true,arr0,arr1,cond_diff,rtrni)
    return(Array.from(g))
}

function diffv(arr0,arr1) {
    let g = engine(true,arr0,arr1,cond_diff,rtrnv)
    return(Array.from(g))
}

function diffvi(arr0,arr1) {
    let g = engine(true,arr0,arr1,cond_diff,rtrnvi)
    return(Array.from(g))
}

module.exports = {
    samei,
    samev,
    samevi,
    diffi,
    diffv,
    diffvi
}
