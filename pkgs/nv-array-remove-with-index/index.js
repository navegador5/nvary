
function irm(arr,index) {
    let narr = arr.filter((r,i)=>(i!==index))
    arr.splice(0,Infinity,...narr)
    return(arr)
}


module.exports = irm 
