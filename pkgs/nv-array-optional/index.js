const ary_bsc   = require("nv-array-basic");
const {perm} = require("nv-array-combo");

const get_opt_idxs_from_full_desc = (opts) => opts.map((r,i)=>[r,i]).filter(r=>r[0]).map(r=>r[1])

const empty = Symbol("empty")

function * gen_ordered(ary,opt_idxs,with_placeholder=false,placeholder=null) {
    let lngth          =  opt_idxs.length;
    let ei             =  2**lngth;
    placeholder        = with_placeholder?placeholder:empty;
    for(let i=0;i<ei;i++) {
        let rslt = ary.slice(0)
        let bary = ary_bsc.bin(i,lngth);
        for(let j=0;j<bary.length;j++) {
            bary[j]?undefined:(rslt[opt_idxs[j]]=placeholder)
        }
        rslt = rslt.filter(r=>r!==empty);
        yield(rslt)
    }
}


function * gen_unordered(ary,opt_idxs,with_placeholder=false,placeholder=null) {
    let lngth          =  opt_idxs.length;
    let ei             =  2**lngth;
    placeholder        = with_placeholder?placeholder:empty;
    ////
    let dary = ary.map((r,i)=>[r,i]); 
    let g = perm(dary);
    let st = new Set(opt_idxs);
    ////
    for(let each of g) {
        let ary  = each.map(e=>e[0])
        let idxs = each.map((e,i)=>[e,i]).filter(r=>st.has(r[0][1])).map(e=>e[1])
        yield * gen_ordered(ary,idxs,with_placeholder,placeholder)
    }
}



module.exports = {
    get_opt_idxs_from_full_desc,
    gen_ordered,
    ordered: (ary,opt_idxs,with_placeholder=false,placeholder=null) => 
        Array.from(gen_ordered(ary,opt_idxs,with_placeholder,placeholder))
    ,
    gen_unordered,
    unordered: (ary,opt_idxs,with_placeholder=false,placeholder=null) => 
        Array.from(gen_unordered(ary,opt_idxs,with_placeholder,placeholder))
}
