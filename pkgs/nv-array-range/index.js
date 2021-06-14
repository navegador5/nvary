const {noexist,add_repr} = require("nv-facutil-basic");

class _Rng extends Array {}

add_repr(_Rng,(that)=>{
     let head = '[\n';
     let body = [];
     for(let i=0;i<that.length;i++) {
         body.push('    ['+that[i][0]+','+that[i][1]+')');
     }
     let tail = '\n]';
     return(head+body.join(",\n")+tail)
})

class Range {
    #ary
    #rngs = new _Rng();
    constructor(ary,si,ei) {
        ary = ary??[];
        this.#ary = ary;
        let lngth = ary.length;
        si = (si===undefined)?0:
             (si<0)?0:
             (si>=lngth)?lngth-1:si;
        ei = (ei===undefined)?lngth:
             (si<0)?0:
             (si>=lngth)?lngth:ei;
        this.#rngs.push([si,ei]);
    }
    ////
    get ary_()  {return(this.#ary)}
    get rngs_() {return(this.#rngs)}
    get slcs_() {return(Array.from(this.#rngs).map(e=>this.#ary.slice(e[0],e[1])))}
    get view_() {return(this.slcs_.flat())}
    get vwlength_() {return(this.view_.length)}
    ////
    popat(i) {
        let rngs = this.#rngs;
        for(let j=0;j<rngs.length;j++) {
            let [si,ei] = rngs[j];
            if(i>=si && i<ei) {
                if(i===si) {
                    if(i+1<ei) {
                        rngs[j] = [i+1,ei];
                        return(this.#ary[i])
                    } else if(i+1 === ei) {
                        rngs.splice(j,1);
                        return(this.#ary[i])
                    } else {
                        //imposible
                    }
                } else if(i>si) {
                    if(i+1 <ei) {
                         rngs.splice(j,1,[si,i],[i+1,ei]);
                         return(this.#ary[i])
                    } else if(i+1 === ei) {
                         rngs.splice(j,1,[si,i]);
                         return(this.#ary[i])
                    } else {
                        //imposible
                    }
                } else { 
                    //impossible
                }
            } else {
            }
        }
        return(noexist)
    }
}

add_repr(Range,(that)=>({
    ranges:that.rngs_,
    view:that.view_,
    ary:that.ary_
}));

function shuffle(ary) {
    let rng = new Range(ary);
    let idxs = ary.map((r,i)=>i);
    let rslt = [];
    while(idxs.length>0) {
        let index = Math.floor(Math.random()*idxs.length);
        let ri = idxs.splice(index,1)[0];
        rslt.push(rng.popat(ri))
    }
    return(rslt)
}


module.exports = {
    noexist,
    Range,
    shuffle,
}

