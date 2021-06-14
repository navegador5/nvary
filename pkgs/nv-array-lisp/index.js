const {noexist,add_repr} = require("nv-facutil-basic");

const is_nil = (ary)=>ary.length===0;
const car = (ary)=>ary[0];
const cdr = (ary)=>ary.slice(1);
const cons_ary = (ele,ary) => [ele,...ary];
const cons_ele = (ele,o) => [ele,o];
const regex = /^c[ad]{2,}r$/;


const _cxr = (cmd,ary)=> {
    if(cmd==='car') {
        return(car(ary))
    } else if(cmd==='cdr') {
        return(cdr(ary))
    } else if(regex.test(cmd)) {
        let arr = Array.from(cmd);
        arr = arr.slice(1,arr.length-1);
        arr.reverse();
        arr = arr.map(ch=>ch==='a'?car:cdr);
        for(let f of arr) {
            ary = f(ary)
        }
        return(ary)
    } else {
        return(noexist)
    }
}


function nestize(ary) {
    let top = [];
    let curr = top;
    for(let i=0;i<ary.length;i++) {
        let next =[]
        curr.push(ary[i],next)
        curr=next
    }
    return(top)
}

class Dummy {}

add_repr(
    Dummy,
    (that)=>`{
      noexist: Symbol(noexist),
      is_nil: [Function: is_nil],
      cons_ary: [Function: cons_ary],
      cons_ele: [Function: cons_ele],
      car: [Function: car],
      cdr: [Function: cdr],
      cxr: [Function: cxr],
      /^c[ad]{2,}r$/: [Function: /^c[ad]{2,}r$/]
}`
);

const dummy = new Dummy();

function _creat_proxy() {
    let p = new Proxy(
        dummy,
        {
            get:function(target,key,receiver) {
                if(key === 'nestize') {
                    return(nestize)
                } else if(key === 'car') {
                    return(car)
                } else if(key === 'cdr') {
                    return(cdr)
                } else if(key === 'noexist') {
                    return(noexist)
                } else if(key === 'is_nil') {
                    return(is_nil)
                } else if(key === 'cons_ary') {
                    return(cons_ary)
                } else if(key === 'cons_ele') {
                    return(cons_ele)
                } else if(regex.test(key)) {
                    return((ary)=>_cxr(key,ary))
                } else {
                }
            }
        }
    );
    return(p)
}


module.exports = _creat_proxy()
