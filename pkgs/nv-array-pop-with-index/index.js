
function ipop(arr,index) {
    let rslt = arr[index] 
    let narr = arr.filter((r,i)=>(i!==index))
    arr.splice(0,Infinity,...narr)
    return(rslt)
}


module.exports = ipop 
