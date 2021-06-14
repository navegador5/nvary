const {mul} = require("nv-array-oper")



function _succ(curr,term) {
    for(let i=curr.length-1;i>-1;i--) {
        if(curr[i]===term[i]-1) {
            curr[i] = 0
        } else {
            curr[i] = curr[i] +1;
            break;
        }
    }
    return(curr)
}

function _prev(curr,term)  {
    for(let i=curr.length-1;i>-1;i--) {
        if(curr[i]===0) {
            curr[i] = term[i] - 1;
        } else {
            curr[i] = curr[i] -1;
            break;
        }
    }
    return(curr)
}





function * sgen(radixes) {
    let curr = radixes.map((r)=>0);
    let term = radixes;
    let end = mul(radixes);
    for(let i=0;i<end;i++){
        yield(curr.slice(0));
        curr = _succ(curr,term);
    }
}

function * pgen(radixes) {
    let curr = radixes.map((r)=>r-1);
    let term = radixes;
    let end = mul(radixes);
    for(let i=0;i<end;i++){
        yield(curr.slice(0));
        curr = _prev(curr,term);
    }
}

const get_max = (radixes)=>radixes.map((r)=>r-1);
const get_min = (radixes)=>radixes.map((r)=>0);
const eq = (a0,a1)=>a0.every((r,i)=>r===a1[i]);
const lt = (a0,a1)=> {
    for(let i=0;i<a0.length;i++) {
        if(a0[i]===a[1]) {
        } else if(a0[i]>a[1]){
            return(false)
        } else {
            return(true)
        }
    }
    return(false)
}
const gt = (a0,a1)=> {
    for(let i=0;i<a0.length;i++) {
        if(a0[i]===a[1]) {
        } else if(a0[i]>a[1]){
            return(true)
        } else {
            return(false)
        }
    }
    return(false)
}



function creat_succ_prev(radixes) {
    return({
        succ:(ary)=>_succ(ary,radixes),
        prev:(ary)=>_prev(ary,radixes)
    })
}

class  Radix {
    #radixes
    #curr 
    constructor(radixes,curr) {
        this.#radixes = radixes;
        curr=curr??radixes.map((r)=>0);
        this.#curr = curr;
    }
    ////
    get radix_()   {return(this.#radixes)}
    get max_()     {return(get_max(this.#radixes))}
    get min_()     {return(get_min(this.#radixes))}
    get curr_()    {return(this.#curr)}
    ////
    next() {
        let nxt = _succ(this.#curr,this.#radixes);
        this.#curr = nxt;
        return(nxt)
    }
    prev() {
        let prv = _prev(this.#curr,this.#radixes);
        this.#curr = prv;
        return(prv)
    }
    ////
    $is_min()  {return(eq(this.#curr,this.min_))}
    $is_max()  {return(eq(this.#curr,this.max_))}
    $lt(a)     {return(lt(this.#curr,a))}
    $eq(a)     {return(eq(this.#curr,a))}
    $gt(a)     {return(gt(this.#curr,a))}
    ////
    get [Symbol.toStringTag]() {
        return(this.#curr.join("."))
    }
}


module.exports = {
    pgen,
    sgen,
    lt,eq,gt,
    get_min,
    get_max,
    creat_succ_prev,
    Radix,
}
