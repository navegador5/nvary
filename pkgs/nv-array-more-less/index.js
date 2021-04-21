
function more_less(ary,start=0) {
    let curr=start;
    let lngth = ary.length;
    function more(n=1) {
        let rngs = []
        let size = 0;
        let si = (curr+1)%lngth;
        let ei = si;
        while(size<n) {
            ei = ei +1;
            if(ei === lngth) {
                rngs.push([si,lngth]);
                si=0;ei=0;
            } else {}
            size = size +1;
        }
        rngs.push([si,ei])
        curr = (lngth+ei-1)%lngth;
        let rslt = rngs.map(r=>ary.slice(r[0],r[1]))
        return(rslt.flat())
    }
    function current() {return(ary[curr])}
    function less(n=1) {
        let rngs = []
        let size = 0;
        let ei = (curr === 0)?lngth:curr;
        let si = ei;
        while(size<n) {
            si = si -1;
            if(si === 0) {
                rngs.unshift([si,ei]);
                si=lngth;ei=lngth;
            } else {}
            size = size +1;
        }
        rngs.unshift([si,ei])
        curr = si%lngth;
        let rslt = rngs.map(r=>ary.slice(r[0],r[1]))
        return(rslt.flat())
    }
    return([more,current,less])
}

function from_fst(ary) {
    return(more_less(ary,ary.length-1))
}

function from_lst(ary) {
    return(more_less(ary,0))
}

module.exports = {
    more_less,
    from_fst,
    from_lst
}



