
function _test(o,r,i) {
    if(o instanceof String || o instanceof Array) {
        return(o.includes(r))
    } else if(o instanceof Set) {
        return(o.has(r))
    } else if(o instanceof RegExp) {
        return(o.test(r))
    } else if(o instanceof Function && Object.getOwnPropertyDescriptors(o).prototype===undefined ) {
        return(o(r,i))
    } else {
        return(o===r)
    }
}




function _match(sps,r,i) {
    let rslt = false;
    let state;
    for(let label=0;label<sps.length;label++) {
        let sp = sps[label];
        let cond = _test(sp,r,i);
        if(cond) {rslt=true;state=label;break;}
    }
    return(rslt?state:sps.length)
}


function _engine(arr,sps) {
    let rngs =[];
    let matched;
    let state;
    let si;
    let ei;
    ////init
    if(arr.length===0) {
        return([])
    } else {
        state = _match(sps,arr[0],0);  
        si =0;
        ei =1;
    }
    ////next
    for(let i=1;i<arr.length;i++) {
        let nstate = _match(sps,arr[i],i);
        if(nstate === state) {
            ei = ei + 1
        } else {
            rngs.push([si,ei,state]);
            si = ei;
            ei = ei + 1;
            state = nstate
        }
    }
    ////final
    rngs.push([si,ei,state]);
    return(rngs)
}

function rng(arr,sps) {
    let rngs = _engine(arr,sps);
    return(rngs.map(e=>[e[0],e[1]]))
}


function slc(arr,sps) {
    let rngs = _engine(arr,sps);
    return(rngs.map(e=>arr.slice(e[0],e[1])))
}

function cond(arr,sps) {
    let rngs = _engine(arr,sps);
    return(rngs.map(e=>sps[e[2]]))    
}

function join(arr,sps,del='') {
    let rngs = _engine(arr,sps);
    return(rngs.map(e=>arr.slice(e[0],e[1]).join(del)))
}

module.exports = {
    all:_engine,
    cond,
    rng,
    slc,
    join,
}
