const ary_rdx    = require("nv-array-radix");
const {fast_brk_with_lary} = require("nv-array-break");
const {add}      = require("nv-array-oper");

class Desc {
    constructor(cond,min=0,max=Infinity) {
        this.cond = cond;
        this.min = min;
        this.max = max;
    }
    get length_()  {return(this.max-this.min+1)}
    is_in_range(n) {return(n>=this.min && n<=this.max)}
    from_offset(n) {return(this.min+n)}
}


function fmt_descs(descs,ary) {
    let max = ary.length-1;
    descs = descs.filter(r=>r.max>=0&&r.min>=0);
    descs.forEach(r=>{if(r.max>max) {r.max=max}});
    descs = descs.filter(r=>r.max>=r.min);
    return(descs)
}

function is_match(slcs,descs) {
    for(let i=0;i<slcs.length;i++) {
        let slc = slcs[i];
        let cond = descs[i].cond;
        for(let ele of slc) {
            if(cond(ele)) {
            } else {
                return(false)
            }
        }
    }
    return(true)
}


function * gen(descs,ary) {
    let lngth = ary.length;
    descs = fmt_descs(descs,ary);
    let radixes = descs.map(r=>r.length_);
    let g = ary_rdx.sgen(radixes);
    for(let each of g) {
        each = each.map((r,i)=>descs[i].from_offset(r));
        let sum = add(each);
        if(sum!==lngth) {
        } else {
            let slcs = fast_brk_with_lary(ary,each);
            if(is_match(slcs,descs)) {
                yield(slcs)
            } else {
            }
        }
    }
}

function get_all_match(descs,ary) {
    return(Array.from(gen(descs,ary)))
}

function get_fst_match(descs,ary) {
    let g = gen(descs,ary);
    for(let each of g) {
        return(each)
    }
    return(null)
}



module.exports = {
    Desc,
    gen,
    get_all_match,
    get_fst_match,
}
