nv-array-compare
================
- nv-array-compare 


install
=======
- npm install nv-array-compare

usage
=====
    
example
-------

    const ary_cmp = require("nv-array-compare")

    var arr0 = [1,2,3,4,2,3,5]
    var arr1 = ['a',2,3,'b',2,3,'c']
    ary_cmp.samei(arr0,arr1)
    //[ 1, 2, 4, 5 ]
    ary_cmp.samev(arr0,arr1)
    //[ 2, 3, 2, 3 ]
    ary_cmp.samevi(arr0,arr1)
    //[ { i: 1, v: 2 }, { i: 2, v: 3 }, { i: 4, v: 2 }, { i: 5, v: 3 } ]
    ary_cmp.diffi(arr0,arr1)
    //[ 0, 3, 6 ]
    ary_cmp.diffv(arr0,arr1)
    //[ 1, 4, 5 ]
    ary_cmp.diffvi(arr0,arr1)
    //[ { i: 0, v: 1 }, { i: 3, v: 4 }, { i: 6, v: 5 } ]


    > cmp([1,2,3],[1,2,3])
    0
    > cmp([1,2,3],[1,2])
    1
    > cmp([1,2],[1,2,3])
    -1
    >


API
====

- ary\_cmp.samei(arr0,arr1)
- ary\_cmp.samev(arr0,arr1)
- ary\_cmp.samevi(arr0,arr1)
- ary\_cmp.diffi(arr0,arr1)
- ary\_cmp.diffv(arr0,arr1)
- ary\_cmp.diffvi(arr0,arr1)
- ary\_cmp.cmp(arr0,arr1,ltfunc=dflt\_lt,eqfunc=dflt\_eq,lfunc=dflt\_lngth\_cmp)

LICENSE
=======
- ISC 
