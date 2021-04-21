const ary_frplc = require("nv-array-replace-with-function")
const COND_FUNC = function(r,i,...params) {return(r===params[0])}

function all(arr,rplc_by,value) { return(ary_frplc.all(arr,rplc_by,COND_FUNC,value))}
function all_not(arr,rplc_by,value) { return(ary_frplc.all_not(arr,rplc_by,COND_FUNC,value))}

function which(arr,rplc_by,value,which) { return(ary_frplc.which(arr,rplc_by,which,COND_FUNC,value))}
function which_not(arr,rplc_by,value,which) { return(ary_frplc.which_not(arr,rplc_by,which,COND_FUNC,value))}

function which_from_lst(arr,rplc_by,value,which) { return(ary_frplc.which_from_lst(arr,rplc_by,which,COND_FUNC,value))}
function which_not_from_lst(arr,rplc_by,value,which) { return(ary_frplc.which_not_from_lst(arr,rplc_by,which,COND_FUNC,value))}

function fst(arr,rplc_by,value) {return(ary_frplc.fst(arr,rplc_by,COND_FUNC,value))}
function fst_not(arr,rplc_by,value) {return(ary_frplc.fst_not(arr,rplc_by,COND_FUNC,value))}

function lst(arr,rplc_by,value) {return(ary_frplc.lst(arr,rplc_by,COND_FUNC,value))}
function lst_not(arr,rplc_by,value) {return(ary_frplc.lst_not(arr,rplc_by,COND_FUNC,value))}

function some(arr,rplc_by,value,...whiches) { return(ary_frplc.some(arr,rplc_by,whiches,COND_FUNC,value))}
function some_not(arr,rplc_by,value,...whiches) { return(ary_frplc.some_not(arr,rplc_by,whiches,COND_FUNC,value))}
function some_from_lst(arr,rplc_by,value,...whiches) { return(ary_frplc.some_from_lst(arr,rplc_by,whiches,COND_FUNC,value))}
function some_not_from_lst(arr,rplc_by,value,...whiches) { return(ary_frplc.some_not_from_lst(arr,rplc_by,whiches,COND_FUNC,value))}


module.exports = {
    fst,
    fst_not,
    lst,
    lst_not,
    which,
    which_not,
    which_from_lst,
    which_not_from_lst,
    some,
    some_not,
    some_from_lst,
    some_not_from_lst,
    all,
    all_not
}
