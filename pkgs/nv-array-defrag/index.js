function _engine(arr,empty,arg,f) {
    let mp = new Map()
    let c = 0;
    for(let i=0;i<arr.length;i++) {
        let cond = f(arg,arr[i])
        if(cond) {
            arr[c] = arr[i];
            mp.set(i,c);
            c =c+1;
        }
    }
    for(let i=c;i<arr.length;i++) {arr[i]=empty}
    return(mp)
}


function defrag(arr,empty=undefined) {return(_engine(arr,empty,empty,(empty,r)=>r!==empty))}

function defrag_with_st(arr,st,empty=undefined) {return(_engine(arr,empty,st,(st,r)=>!st.has(r)))}


module.exports = {
    defrag,
    defrag_with_st,
}
