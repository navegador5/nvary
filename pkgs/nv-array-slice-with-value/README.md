nv-array-slice-with-value
============
- nv-array-slice-with-value 


install
=======
- npm install nv-array-slice-with-value 

usage
=====
    
example
-------

    const ary_vslc = require("nv-array-slice-with-value")

    var arr = [1,"a","a",2,3,"a",4,"a","a","a",5]
    ary_vslc.fst(arr,'a')
    //[ 1, 3 ]
    ary_vslc.fst_not(arr,'a')
    //[ 0, 1 ]
    ary_vslc.which(arr,'a',1)
    //[ 5, 6 ]
    ary_vslc.which_not(arr,'a',1)
    //[ 3, 5 ]
    ary_vslc.which_from_lst(arr,'a',1)
    //[ 5, 6 ]
    ary_vslc.which_not_from_lst(arr,'a',1)
    //[ 6, 7 ]
    ary_vslc.lst(arr,'a')
    //[ 7, 10 ]
    ary_vslc.lst_not(arr,'a')
    //[ 10, 11 ]
    ary_vslc.some(arr,'a',0,1)
    //[ [ 1, 3 ], [ 5, 6 ] ]
    ary_vslc.some_not(arr,'a',0,1)
    //[ [ 0, 1 ], [ 3, 5 ] ]
    ary_vslc.some_from_lst(arr,'a',0,1)
    //[ [ 7, 10 ], [ 5, 6 ] ]
    ary_vslc.some_not_from_lst(arr,'a',0,1)
    //[ [ 10, 11 ], [ 6, 7 ] ]
    ary_vslc.all(arr,'a')
    //[ [ 1, 3 ], [ 5, 6 ], [ 7, 10 ] ]
    ary_vslc.all_not(arr,'a')
    //[ [ 0, 1 ], [ 3, 5 ], [ 6, 7 ], [ 10, 11 ] ]


API
====


- ary\_vslc.fst(arr,v)
- ary\_vslc.fst\_not(arr,v)
- ary\_vslc.which(arr,v,index)
- ary\_vslc.which\_not(arr,v,index)
- ary\_vslc.which\_from\_lst(arr,v,index)
- ary\_vslc.which\_not\_from\_lst(arr,v,index)
- ary\_vslc.lst(arr,v)
- ary\_vslc.lst\_not(arr,v)
- ary\_vslc.some(arr,v,...whiches)
- ary\_vslc.some\_not(arr,v,...whiches)
- ary\_vslc.some\_from\_lst(arr,v,...whiches)
- ary\_vslc.some\_not\_from\_lst(arr,...whiches)
- ary\_vslc.all(arr,v)
- ary\_vslc.all\_not(arr,v)


LICENSE
=======
- ISC 
