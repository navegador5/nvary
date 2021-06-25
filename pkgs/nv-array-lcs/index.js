const {islct,eq} = require("nv-array-basic");
const Forest  = require("nv-data-tree-csp-forest");
const {_Node} = require("nv-data-tree-csp-node");

class Node extends _Node {pair}

function _init_pair(ary0,ary1) {
    let pair = [ary0.length-1,ary1.length-1];
    return(pair)
}

function _init_unhandled(ary0,ary1,rt) {
    let pair = _init_pair(ary0,ary1);
    rt.pair = pair;
    return([rt])
}



function * _gen_pair(ary0,ary1,rt,forest) {
    let unhandled = _init_unhandled(ary0,ary1,rt);
    let next_unhandled =[]
    while(unhandled.length>0) {
        for(let i=0;i<unhandled.length;i++) {
            let nd   = unhandled[i];
            yield(nd);
            let pair = nd.pair;
            if(pair[0] ===-1 || pair[1]===-1) {
                
            } else {
                if(ary0[pair[0]] === ary1[pair[1]]) {
                    let chpair = pair.map(r=>r-1);
                    let chnd = nd.$append_child();
                    chnd.pair = chpair;
                    next_unhandled.push(chnd)
                } else {
                    if(pair[1]>=0 && pair[0]>=0){
                        let chpair0 = [pair[0],pair[1]-1];
                        let chnd0 = nd.$append_child();
                        chnd0.pair = chpair0;
                        next_unhandled.push(chnd0);
                        let chpair1 = [pair[1],pair[0]-1];
                        let chnd1 = nd.$append_child();
                        chnd1.pair = chpair1;
                        next_unhandled.push(chnd1)
                    }
                }
            }
        }
        unhandled = next_unhandled;
        next_unhandled = []
    }
}

function _get_max_length(ary) {
    let lngth = 0;
    for(let each of ary) {
        if(each.length>lngth) {
            lngth = each.length
        }
    }
    return(lngth)
}

function lcq_index(ary0,ary1,forest,max_size=100000) {
    forest = forest??new Forest(max_size);
    let rt = forest.node(_Node);
    Array.from(_gen_pair(ary0,ary1,rt,forest))
    let nds = rt.$sdfs_leafs_;
    nds = nds.map(nd=>nd.$parent_);
    let paths = nds.map(nd=>nd.$plances_.filter(nd=>nd.$children_count_===1));
    let lngth = _get_max_length(paths);
    paths = paths.filter(r=>r.length === lngth)
    paths = paths.map(e=>e.map(r=>r.pair));
    paths = paths.map(e=>JSON.stringify(e));
    paths = Array.from(new Set(paths));
    paths = paths.map(e=>JSON.parse(e));
    let rslt0 = paths.map(e=>e.map(r=>r[0]));
    let rslt1 = paths.map(e=>e.map(r=>r[1]));
    return({
        rslt:[rslt0,rslt1],
        forest,
    })
}

function _has(rslt,e) {
    for(let r of rslt) {
        if(eq(r,e)){return(true)}
    }
    return(false)
}

function _uniq(es) {
    let rslt = []
    for(let e of es) {
        if(_has(rslt,e)) {
        } else {
            rslt.push(e)
        }
    }
    return(rslt)
}

function lcq_value(ary0,ary1,forest,max_size=100000) {
    let tmp = lcq_index(ary0,ary1,forest,max_size);
    let rslt = tmp.rslt[0];
    forest = tmp.forest;
    rslt = rslt.map(idxs=>islct(ary0,idxs));
    rslt = _uniq(rslt);
    return({rslt,forest})
}

function lcq_str(s0,s1,forest,max_size=100000) {
    let ary0 = Array.from(s0);
    let ary1 = Array.from(s1);
    let tmp = lcq_value(ary0,ary1,forest,max_size);
    let rslt = tmp.rslt;
    forest = tmp.forest;
    rslt = rslt.map(e=>e.join(''));
    return({rslt,forest})
}

////
const {MM0}  = require("nv-mat-sparse");
const {sort} = require("nv-mat-basic");
const {llfunc} = require("nv-data-linked-list");

function _init_lcs(ary0,ary1) {
    let m = new MM0();
    for(let i=0;i<ary0.length;i++) {
        for(let j=0;j<ary1.length;j++) {
            if(ary0[i] === ary1[j]) {
                m.set_if_exist_else_add(i,j,ary0[i])
            }
        }
    }
    let j = m.json()
    j = sort(j);
    return(llfunc.from_ary(j))
}


function lcs_full(ary0,ary1) {
    let l = _init_lcs(ary0,ary1);
    let rslt = [];
    while(!(llfunc.is_empty(l))) {
        let ary = Array.from(llfunc.gen(l));
        let nd = ary[0]; 
        let e = nd._data;
        let cache = [e];
        llfunc.disconn(nd)
        let src = e[0]+1;
        let dst = e[1]+1;
        for(let i=1;i<ary.length;i++) {
            nd = ary[i];
            e = nd._data;
            if(src===e[0] && dst ===e[1]) {
                cache.push(e);
                llfunc.disconn(nd)
                src = e[0]+1;
                dst = e[1]+1;
            }
        }
        rslt.push(cache)
    }
    return(rslt)
}



////

function lcs_index(ary0,ary1) {
    let arr = lcs_full(ary0,ary1);
    let a0 = arr.map(e=>e.map(r=>r[0]))
    let a1 = arr.map(e=>e.map(r=>r[1]))
    return([a0,a1])
}

function lcs_value(ary0,ary1) {
    let arr = lcs_full(ary0,ary1);
    let a0 = arr.map(e=>e.map(r=>r[2]))
    return(a0)
}

function lcs_str(s0,s1) {
    let ary0  = Array.from(s0);
    let ary1  = Array.from(s1);
    let entries = lcs_value(ary0,ary1);
    entries = entries.map(e=>e.join(''))
    return(Array.from(new Set(entries)))
}


module.exports = {
    ////
    lcq_index,
    lcq_value,
    lcq_str,
    ////
    lcs_full,
    lcs_index,
    lcs_value,
    lcs_str,
}

