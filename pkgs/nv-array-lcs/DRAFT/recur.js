function lcs(ary0,ary1) {
    let lngth0 = ary0.length;
    let lngth1 = ary1.length;
    if(lngth0===0 || lngth1===0) {
        return([])
    } else {
        let lst0 = ary0[ary0.length-1];
        let lst1 = ary1[ary1.length-1];
        if(lst0===lst1) {
            return(lcs(ary0.slice(0,lngth0-1),ary1.slice(0,lngth1-1)).concat(lst0))
        } else {
            let tmp0 = lcs(ary0,ary1.slice(0,lngth1-1));
            let tmp1 = lcs(ary1,ary0.slice(0,lngth0-1));
            if(tmp0.length>tmp1.length) {
                return(tmp0)
            } else {
                return(tmp1)
            }
        }
    }
}

const tst = require("nv-facutil-simple-test")

ary0=[1, 3, 5, 9, 10]
ary1=[1, 4, 9, 10]

console.log(lcs(ary0,ary1))
