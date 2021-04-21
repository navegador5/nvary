nv-array-transform
============
- nv-array-transform 


install
=======
- npm install nv-array-transform 

usage
=====
    
example
-------

    const ary_trans = require("nv-array-transform")

    var lists = [
        [1,2,3],
        [4,5],
        [6],
    ]

    var dummy = ary_trans.dummy
    //Symbol(dummy)
    var m = ary_trans.fmt(...lists)
    /*
    [
      [ 1, 2, 3 ],
      [ 4, 5, Symbol(dummy) ],
      [ 6, Symbol(dummy), Symbol(dummy) ]
    ]
    */

    var t = ary_trans.transpose([[1,2],[3,4],[5,6]])
    //[ [ 1, 3, 5 ], [ 2, 4, 6 ] ]

    var lists = [
        [1,2,3],
        [4,5],
        [6],
    ]

    ary_trans.interleave(...lists)
    //[ 1, 4, 6, 2, 5,3]

    var l = [1,4,7,2,5,8,3,6,9]
    var m = ary_trans.mat(l,3)
    //[ [ 1, 4, 7 ], [ 2, 5, 8 ], [ 3, 6, 9 ] ]

    var l = [1,4,7,2,5,8,3,6,9]
    var m = ary_trans.uninterleave(l,3)
    //[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

API
====

- ary\_trans.dummy
- ary\_trans.fmt(...lists)
- ary\_trans.transpose(m)
- ary\_trans.interleave(...lists)
- ary\_trans.mat(arr,n)
- ary\_trans.uninterleave(arr,n)


LICENSE
=======
- ISC 
