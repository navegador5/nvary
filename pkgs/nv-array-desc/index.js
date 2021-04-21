
function vldict(arr) {
    let d = {}
    let st = new Set()
    arr.forEach(
        (r,i) => {
            if(st.has(r)) {
                d[r].push(i)
            } else {
                st.add(r)
                d[r] = [i]
            }
        }
    )
    return(d)
}

function ivdict(arr) {
    return(Object.fromEntries(Object.entries(arr)))
}

function vidict(arr) {
    let entries = Object.entries(arr)
    entries = entries.map(e=>[e[1],e[0]])
    return(Object.fromEntries(entries))
}


function mdict(arr,pri_key="i") {
   let d0 = ivdict(arr)
   let d1 = vidict(arr)
   if(pri_key==='i'){
       return(Object.assign(d1,d0))
   } else {
       return(Object.assign(d0,d1))
   }
}


module.exports = {
    vldict,
    vidict,
    ivdict,
    mdict
}
