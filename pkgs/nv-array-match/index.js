const _ = Object.getOwnPropertyDescriptors;

function _test(o,r,i) {
    if(o instanceof String || o instanceof Array) {
        return(o.includes(r))
    } else if(o instanceof Set) {
        return(o.has(r))
    } else if(o instanceof RegExp) {
        return(o.test(r))
    } else if(
        o instanceof Function && 
        (
            _(o).prototype===undefined ||
            (_(o).includes("arguments"))
        )
    ) {
        return(o(r,i))
    } else {
        return(o===r)
    }
}



function _po_init_mat(data,matcher) {
    let m = matcher.map(r=>[])
    m.unshift([[null,-1]])
    return(m)
}

function _po_get_one_match(m,ele) {
    let pl =[]
    let depth = m.length-1
    while(ele[0]!==null) {
        pl.unshift(ele[1])
        depth = depth-1
        ele = m[depth][ele[0]]
    }
    return(pl)
}


function _po_get_all_match(m) {
    let lyr = m[m.length-1]
    return(lyr.map(ele=>_po_get_one_match(m,ele)))
}

function _po_update_lyr(m,data_ary,matches,i,j) {
    if(_test(matches[j],data_ary[i],i)) {
        let plyr = m[j]
        let lyr = m[j+1]
        for(let k=0;k<plyr.length;k++) {
            lyr.push([k,i])
        }
    } 
}

function _po_all(data_ary,matches) {
    let m  = _po_init_mat(data_ary,matches)
    for(let i=0;i<data_ary.length;i++) {
        for(let j=0;j<matches.length-1;j++) {
            _po_update_lyr(m,data_ary,matches,i,j)
        }
        _po_update_lyr(m,data_ary,matches,i,matches.length-1)
    }
    return(_po_get_all_match(m))
}


function * _po_gen (data_ary,matches) {
    let m  = _po_init_mat(data_ary,matches)
    for(let i=0;i<data_ary.length;i++) {
        for(let j=0;j<matches.length-1;j++) {
            _po_update_lyr(m,data_ary,matches,i,j)
        }
        let j = matches.length-1;
        if(_test(matches[j],data_ary[i],i)) {
            let plyr = m[j]
            let lyr = m[j+1]
            for(let k=0;k<plyr.length;k++) {
                ele = ([k,i])
                yield(_po_get_one_match(m,ele))
            }
        } 
    }
}

function _po_is(data_ary,matches) {
    let g = _po_gen(data_ary,matches);
    for(let e of g) {return(true)}
    return(false)
}


module.exports = {
   po_all_pos:_po_all,
   po_all_match:(data_ary,matches)=>_po_all(data_ary,matches).map(e=>e.map(r=>data_ary[r])),
   po_gen_pos:_po_gen,
   po_gen_match:function * (data_ary,matches) {
       let g = _po_gen(data_ary,matches);
       for(let e of g) {
           yield(e.map(r=>data_ary[r]))
       }
   },
   po_is_match :_po_is
}
