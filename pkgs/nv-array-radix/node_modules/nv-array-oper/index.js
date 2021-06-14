
function add(ary) {
    let acc = ary[0];
    for(let ele of ary.slice(1)) {
        acc = acc + ele
    }
    return(acc)
}

function sub(ary) {
    let acc = ary[0];
    for(let ele of ary.slice(1)) {
        acc = acc - ele
    }
    return(acc)
}


function mul(ary) {
    let acc = ary[0];
    for(let ele of ary.slice(1)) {
        acc = acc * ele
    }
    return(acc)
}


function div(ary) {
    let acc = ary[0];
    for(let ele of ary.slice(1)) {
        acc = acc / ele
    }
    return(acc)
}

function power(ary) {
    let acc = ary[0];
    for(let ele of ary.slice(1)) {
        acc = acc ** ele
    }
    return(acc)
}

function rem(ary) {
    let acc = ary[0];
    for(let ele of ary.slice(1)) {
        acc = acc % ele
    }
    return(acc)
}

function quo(ary) {
    let acc = ary[0];
    for(let ele of ary.slice(1)) {
        acc = (acc - (acc % ele))/ele;
    }
    return(acc)
}


function band(ary) {
    let acc = ary[0];
    for(let ele of ary.slice(1)) {
        acc = acc & ele
    }
    return(acc)
}


function bor(ary) {
    let acc = ary[0];
    for(let ele of ary.slice(1)) {
        acc = acc | ele
    }
    return(acc)
}

function bxor(ary) {
    let acc = ary[0];
    for(let ele of ary.slice(1)) {
        acc = acc ^ ele
    }
    return(acc)
}

function lshift(ary) {
    let acc = ary[0];
    for(let ele of ary.slice(1)) {
        acc = acc << ele
    }
    return(acc)
}

function rshift(ary) {
    let acc = ary[0];
    for(let ele of ary.slice(1)) {
        acc = acc >> ele
    }
    return(acc)
}

function urshift(ary) {
    let acc = ary[0];
    for(let ele of ary.slice(1)) {
        acc = acc >>> ele
    }
    return(acc)
}


function land(ary) {
    let acc = ary[0];
    for(let ele of ary.slice(1)) {
        acc = acc && ele
    }
    return(acc)
}

function lor(ary) {
    let acc = ary[0];
    for(let ele of ary.slice(1)) {
        acc = acc || ele
    }
    return(acc)
}



////

function deq(ary) {
    let acc = ary[0];
    for(let ele of ary.slice(1)) {
        if(acc == ele) {
        } else {
            return(false)
        }
    }
    return(true)
}

function teq(ary) {
    let acc = ary[0];
    for(let ele of ary.slice(1)) {
        if(acc === ele) {
        } else {
            return(false)
        }
    }
    return(true)
}




function dneq(ary) {
    let acc = ary[0];
    for(let ele of ary.slice(1)) {
        if(acc != ele) {
        } else {
            return(false)
        }
    }
    return(dneq(ary.slice(1)))
}

function tneq(ary) {
    let acc = ary[0];
    for(let ele of ary.slice(1)) {
        if(acc !== ele) {
        } else {
            return(false)
        }
    }
    return(tneq(ary.slice(1)))
}


function gt(ary) {
    let acc = ary[0];
    for(let ele of ary.slice(1)) {
        if(acc > ele) {
            acc = ele
        } else {
            return(false)
        }
    }
    return(true)
}


function ge(ary) {
    let acc = ary[0];
    for(let ele of ary.slice(1)) {
        if(acc >= ele) {
            acc = ele
        } else {
            return(false)
        }
    }
    return(true)
}


function lt(ary) {
    let acc = ary[0];
    for(let ele of ary.slice(1)) {
        if(acc < ele) {
            acc = ele
        } else {
            return(false)
        }
    }
    return(true)
}


function le(ary) {
    let acc = ary[0];
    for(let ele of ary.slice(1)) {
        if(acc > ele) {
            acc = ele
        } else {
            return(false)
        }
    }
    return(true)
}

function $in(ary) {
    let acc = ary[0];
    for(let ele of ary.slice(1)) {
        if(acc in ele) {
            acc = ele
        } else {
            return(false)
        }
    }
    return(true)
}


function $instanceof(ary) {
    let acc = ary[0];
    for(let ele of ary.slice(1)) {
        if(acc instanceof ele) {
            acc = ele
        } else {
            return(false)
        }
    }
    return(true)
}



function comma(ary) {return(ary[ary.length-1])}

function ternary(ary) {
    while(true) {
        if(ary.length===0) {
            return(undefined)
        } else if(ary.length===1) {
            return(undefined)
        } else if(ary.length===2) {
            let fst = ary[0];
            let snd = ary[1];
            return(fst?snd:undefined)
        } else if(ary.length===3) {
            let fst = ary[0];
            let snd = ary[1];
            let trd = ary[2]
            return(fst?snd:trd)
        } else {
            let fst = ary[0];
            let snd = ary[1];
            if(fst) {
                return(snd)
            } else {
                ary = ary.slice(2)
            }
        }
    }
}

function nc(ary) {
    while(true) {
        if(ary.length===0) {
            return(undefined)
        } else if(ary.length===1) {
            return(ary[0]??undefined)
        } else if(ary.length===2) {
            let fst = ary[0];
            let snd = ary[1];
            return(fst??snd)
        } else {
            let fst = ary[0];
            let snd = ary[1];
            if(fst!==null && fst!==undefined) {
                return(fst)
            } else {
                ary = ary.slice(1)
            }
        }
    }
}

module.exports = {
    add,sub,mul,div,power,rem,quo,
    band,bor,bxor,land,lor,
    lshift,rshift,urshift,
    deq,teq,
    dneq,tneq,
    gt,ge,lt,le,$in,$instanceof,
    comma,
    ternary,nc,
}

