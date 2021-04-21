const ary_ftrim = require("nv-array-trim-with-function")
const cond_func = (r,i,...params) => (r===params[0])


function left(arr,v,n) {return(ary_ftrim.left(arr,n,cond_func,v))}
function right(arr,v,n) {return(ary_ftrim.right(arr,n,cond_func,v))}
function both(arr,v,n) {return(ary_ftrim.both(arr,n,cond_func,v))}
function lall(arr,v) {return(ary_ftrim.lall(arr,cond_func,v))}
function rall(arr,v) {return(ary_ftrim.rall(arr,cond_func,v))}
function ball(arr,v) {return(ary_ftrim.ball(arr,cond_func,v))}



module.exports = {
    left,
    right,
    both,
    lall,
    rall,
    ball,
}
