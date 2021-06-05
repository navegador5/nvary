const STATE_MD = {
    init:0,quoted:1,
    0:'init',1:'quoted'
}



function creat_quoted_cls(aggf,name,type) {
    class Cls {
        constructor(ary,lq,rq) {
            this.type = type;
            this.lq = lq;
            this.rq = rq;
            this.content = aggf(ary)
        }
    }
    Object.defineProperty(Cls,'name',{value:name})
    return(Cls)
}


function parse(toks,cfg) {
    const {
        name,type,agg_func,
        is_raw,is_lq,is_rq,
        is_lq_of,is_rq_of
    } = cfg;
    let QuotedTok = creat_quoted_cls(agg_func,name,type);
    ////
    let state;
    let q;
    let rslt = []
    let cache = [];
    ////init
    let tok;
    if(toks.length===0) {
        return([rslt,[]])
    } else {
        tok = toks[0];
        if(is_lq(tok)) {
            state = STATE_MD.quoted;
            cache.push(tok);
            q = tok;
        } else {
            state = STATE_MD.init;
            rslt.push(tok)
        }
    }
    ////
    toks = toks.slice(1);
    for(let tok of toks) {
        if(state === STATE_MD.init) {
            if(is_lq(tok)) {
                state = STATE_MD.quoted;
                cache.push(tok);
                q = tok;
            } else {
                rslt.push(tok)
            }
        } else {
            if(is_rq(tok) && is_rq_of(tok,q)) {
                cache.push(tok);
                let lngth = cache.length;
                let quoted = new QuotedTok(
                    cache.slice(1,lngth-1),
                    q,
                    tok,
                )
                rslt.push(quoted);
                q = undefined;
                cache = []
                state = STATE_MD.init;
            } else {
                cache.push(tok)
            }
        }
    }
    ////
    return([rslt,cache])
}


const CFG_TEMPLATE = `{
    name:"",  //any string
    type:0,   //any int32 number
    agg_func:(content_ary) => {/*...*/},
    is_raw:r=>{/*return boolean*/},
    is_lq:(r)=> {/*return boolean*/},
    is_rq:(r)=> {/*return boolean*/},
    is_lq_of:(l,r) => {/*return boolean*/},
    is_rq_of:(r,l) => {/*return boolean*/},
}`


module.exports = {
    parse,
    CFG_TEMPLATE
}

