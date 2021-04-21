const ary_fslc = require("nv-array-slice-with-function")

const COND_FUNC = function(r,i,...params) {return(r===params[0])}


function all(arr,value) { return(ary_fslc.all(arr,COND_FUNC,value))}
function all_not(arr,value) { return(ary_fslc.all_not(arr,COND_FUNC,value))}

function which(arr,value,which) { return(ary_fslc.which(arr,which,COND_FUNC,value))}
function which_not(arr,value,which) { return(ary_fslc.which_not(arr,which,COND_FUNC,value))}

function which_from_lst(arr,value,which) { return(ary_fslc.which_from_lst(arr,which,COND_FUNC,value))}
function which_not_from_lst(arr,value,which) { return(ary_fslc.which_not_from_lst(arr,which,COND_FUNC,value))}

function fst(arr,value) {return(ary_fslc.fst(arr,COND_FUNC,value))}
function fst_not(arr,value) {return(ary_fslc.fst_not(arr,COND_FUNC,value))}

function lst(arr,value) {return(ary_fslc.lst(arr,COND_FUNC,value))}
function lst_not(arr,value) {return(ary_fslc.lst_not(arr,COND_FUNC,value))}

function some(arr,value,...whiches) { return(ary_fslc.some(arr,whiches,COND_FUNC,value))}
function some_not(arr,value,...whiches) { return(ary_fslc.some_not(arr,whiches,COND_FUNC,value))}

function some_from_lst(arr,value,...whiches) { return(ary_fslc.some_from_lst(arr,whiches,COND_FUNC,value))}
function some_not_from_lst(arr,value,...whiches) { return(ary_fslc.some_not_from_lst(arr,whiches,COND_FUNC,value))}


module.exports = {
    fst,
    fst_not,
    which,
    which_not,
    lst,
    lst_not,
    which_from_lst,
    which_not_from_lst,
    some,
    some_not,
    some_from_lst,
    some_not_from_lst,
    all,
    all_not
}

