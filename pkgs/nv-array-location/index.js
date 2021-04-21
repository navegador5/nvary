const ary_sld = require("nv-array-slide")

function which_engine(gf,basearr,slider,which) {
    let g = gf(basearr,slider)
    let c = 0 
    for(let each of g) {
        if(c === which) {return(each)}
        c = c+1
    }
}

function fst(basearr,slider) {
    return(which(basearr,slider,0))
}

function lst(basearr,slider) {
    return(which_from_lst(basearr,slider,0))
}


function which(basearr,slider,which) {
    return(which_engine(ary_sld.slide_from_fst,basearr,slider,which))
}

function which_from_lst(basearr,slider,which) {
    return(which_engine(ary_sld.slide_from_lst,basearr,slider,which))
}

function some_engine(gf,basearr,slider,...whiches) {
    let g = gf(basearr,slider)
    let rslt = []
    let c = 0 
    for(let each of g) {
        if(whiches.includes(c)) {rslt.push(each)}
        c = c+1
    }
    return(rslt)
}

function some(basearr,slider,...whiches) {return(some_engine(ary_sld.slide_from_fst,basearr,slider,...whiches))}
function some_from_lst(basearr,slider,...whiches) {return(some_engine(ary_sld.slide_from_lst,basearr,slider,...whiches))}

function all(basearr,slider) { 
    let g = ary_sld.slide_from_fst(basearr,slider)
    return(Array.from(g))
}



module.exports = {
    fst,
    which,
    lst,
    which_from_lst,
    some,
    some_from_lst,
    all
}
