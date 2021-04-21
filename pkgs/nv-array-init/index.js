function use(lngth,v) {
    return(Array.from({length:lngth}).map(r=>v))
}

function range(si,ei,interval=1) {
    let arr = Array.from({length:ei-si})
    arr = [...arr.keys()].map(r=>r+si)
    return(arr.filter((r,i)=>i%interval === 0))
}

function mul(arr,lngth) {
    return(Array.from({length:lngth}).map(r=>arr).flat())
}


module.exports = {
    use,
    range,
    mul
}
