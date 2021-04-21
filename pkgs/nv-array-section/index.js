
function get_sec_with_num(arr,index) {
    let si = arr[0]
    for(let i=0;i<arr.length;i++) {
        let curr = arr[i]
        if(curr<=index) {
        } else {
            si = arr[i-1];
            ei = arr[i];
            break
        }
    }
    return([si,ei])
}

function get_sec_with_seq(arr,seq) {return([arr[seq],arr[seq+1]])}

function get_seq_with_sec(arr,sec) {return(arr.indexOf(sec[0]))}


function merge(arr,si,ei) {
    let narr =[] 
    let diff = new Map()
    let cursor = 0
    for(let i=0;i<arr.length;i++) {
        let curr = arr[i]
        if(curr<si) {
            narr.push(curr)
        } else {
            narr.push(si)
            if(si!==arr[i]){
                diff.set([arr[i-1],si],[arr[i-1],arr[i]]);
                cursor = i
            } else {
                cursor = i+1
            }
            break;
        }
    }
    for(let i=cursor;i<arr.length;i++) {
        let curr = arr[i]
        if(curr<ei) {
        } else {
            narr.push(ei);
            if(ei!==arr[i]) {
                //curr > ei
                diff.set([ei,curr],[arr[i-1],arr[i]]);
                cursor = i
            } else {
                //curr = ei
                cursor = i +1
            }
            break;
        }
    }
    for(let i=cursor;i<arr.length;i++) {
        narr.push(arr[i])
    }    
    return({
        narr,
        diff
    })
}





module.exports = {
    get_sec_with_num,
    get_sec_with_seq,
    get_seq_with_sec,
    merge,
}
