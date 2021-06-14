function fmt_pts(ary,pts) {
    let si = 0;
    let ei = ary.length;
    pts = pts.filter(r=>r>si && r<ei);
    pts = Array.from(new Set(pts));
    pts.sort()
    return(pts)
}


function * fast_gen(ary,pts) {
    let si =0;
    for(let pt of pts) {
        yield([si,pt]);
        si = pt
    }
    yield([si,ary.length])
}


function fast_brk(ary,pts) {
    let slcs = Array.from(fast_gen(ary,pts));
    return(slcs.map((e)=>ary.slice(e[0],e[1])))
}

function * gen(ary,pts) {
    pts = fmt_pts(ary,pts);
    yield * fast_gen(ary,pts);
}


function brk(ary,pts) {
    pts = fmt_pts(ary,pts);
    return(fast_brk(ary,pts))
}

function * fast_gen_with_lary(ary,lngth_arr) {
    let si=0;
    for(let lngth of lngth_arr) {
        yield([si,si+lngth]);
        si = si + lngth
    }
}

function fast_brk_with_lary(ary,lngth_arr) {
    let slcs = Array.from(fast_gen_with_lary(ary,lngth_arr));
    return(slcs.map((e)=>ary.slice(e[0],e[1])))
}


function * gen_with_lary(ary,lngth_arr) {
    let si=0;
    let alngth = ary.length;
    for(let lngth of lngth_arr) {
        let ei = si+lngth;
        if(ei>alngth) {
            ei = alngth;
            yield([si,ei]);
            break;
        } else {
            yield([si,ei]);
            si = ei
        }
    }
    if(si<alngth) {
        yield([si,alngth])
    }
}

function brk_with_lary(ary,lngth_arr) {
    let slcs = Array.from(gen_with_lary(ary,lngth_arr));
    return(slcs.map((e)=>ary.slice(e[0],e[1])))
}



module.exports = {
    fmt_pts,
    fast_gen,
    fast_brk,
    gen,
    brk,
    fast_gen_with_lary,
    fast_brk_with_lary,
    gen_with_lary,
    brk_with_lary,
}
