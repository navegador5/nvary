nv-array-pop-with-index
============
- nv-array-pop-with-index 


install
=======
- npm install nv-array-pop-with-index 

usage
=====
    
example
-------

    const ary_ipop  = require("nv-array-pop-with-index")

    var arr=[1,2,3,4,5,6]
    var rslt = ary_ipop(arr,2)
    //rslt 3
    //arr [ 1, 2, 4, 5, 6 ]
    var arr=[1,2,3,4,5,6]
    var rslt = ary_ipop(arr,100)
    //rslt undefined
    //arr [ 1, 2,3, 4, 5, 6 ]

API
====

- ary\_ipop(arr,index)

LICENSE
=======
- ISC 
