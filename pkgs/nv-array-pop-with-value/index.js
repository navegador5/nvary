const ary_fpop = require("nv-array-pop-with-function")

const COND_FUNC = function(r,i,...params) {return(r===params[0])}


function all(arr,value) { return(ary_fpop.all(arr,COND_FUNC,value))}
function all_not(arr,value) { return(ary_fpop.all_not(arr,COND_FUNC,value))}

function which(arr,value,which) { return(ary_fpop.which(arr,which,COND_FUNC,value))}
function which_not(arr,value,which) { return(ary_fpop.which_not(arr,which,COND_FUNC,value))}

function which_from_lst(arr,value,which) { return(ary_fpop.which_from_lst(arr,which,COND_FUNC,value))}
function which_not_from_lst(arr,value,which) { return(ary_fpop.which_not_from_lst(arr,which,COND_FUNC,value))}

function fst(arr,value) {return(ary_fpop.fst(arr,COND_FUNC,value))}
function fst_not(arr,value) {return(ary_fpop.fst_not(arr,COND_FUNC,value))}

function lst(arr,value) {return(ary_fpop.lst(arr,COND_FUNC,value))}
function lst_not(arr,value) {return(ary_fpop.lst_not(arr,COND_FUNC,value))}

function some(arr,value,...whiches) { return(ary_fpop.some(arr,whiches,COND_FUNC,value))}
function some_not(arr,value,...whiches) { return(ary_fpop.some_not(arr,whiches,COND_FUNC,value))}

function some_from_lst(arr,value,...whiches) { return(ary_fpop.some_from_lst(arr,whiches,COND_FUNC,value))}
function some_not_from_lst(arr,value,...whiches) { return(ary_fpop.some_not_from_lst(arr,whiches,COND_FUNC,value))}



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
