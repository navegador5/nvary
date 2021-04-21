nv-array-collection
===================
- nv-array-collection 


install
=======
- npm install nv-array-collection 

usage
=====
    
example
-------

    const ary_cll = require("nv-array-collection")

    ary_cll.union([1,2,3],[4,3,3,5])
    //[ 1, 2, 3, 4, 5 ]
    ary_cll.diff([1,2,3],[4,3,3,5])
    //[ 1, 2 ]
    ary_cll.diff([4,3,3,5],[1,2,3])
    //[ 4, 5 ]
    ary_cll.inter([4,3,3,5],[1,2,3])
    //[3]

    ary_cll.align([1,2,3],[4,3,3,5])
    //[ [ 1, 2, 3 ], [ 4, 3, 3 ], [ 5 ] ]


API
====

- ary\_cll.union(arr0,arr1)
- ary\_cll.diff(arr0,arr1)
- ary\_cll.inter(arr0,arr1)
- ary\_cll.align(arr0,arr1)


LICENSE
=======
- ISC 
