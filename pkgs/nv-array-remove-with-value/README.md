nv-array-remove-with-value
============
- nv-array-remove-with-value 


install
=======
- npm install nv-array-remove-with-value 

usage
=====
    
example
-------

    const ary_vrm = require("nv-array-remove-with-value")

    var arr = [1,2,3,4,3,3,7]
    ary_vrm.all(arr,3)
    //arr  [ 1, 2, 4, 7 ]

    var arr = [1,2,3,4,3,3,7]
    ary_vrm.all_not(arr,3)
    //arr  [ 3, 3, 3 ]



    var arr = [1,2,3,4,3,3,7]
    ary_vrm.fst(arr,3)
    //arr  [ 1, 2, 4, 3, 3, 7 ]

    var arr = [1,2,3,4,3,3,7]
    ary_vrm.fst_not(arr,3)
    //arr [ 2, 3, 4, 3, 3, 7 ]

    var arr = [1,2,3,4,3,3,7]
    ary_vrm.which(arr,3,1)
    //arr  [ 1, 2, 3, 4, 3, 7 ]
    
    
    var arr = [1,2,3,4,3,3,7]
    ary_vrm.which_not(arr,3,1)
    /*
    > arr
    [ 1, 3, 4, 3, 3, 7 ]
    >
    */

    var arr = [1,2,3,4,3,3,7]
    ary_vrm.which_from_lst(arr,3,1)
    /*
        > arr
        [ 1, 2, 3, 4, 3, 7 ]
    */

    var arr = [1,2,3,4,3,3,7]
    ary_vrm.which_not_from_lst(arr,3,1)
    /*
    > arr
    [ 1, 2, 3, 3, 3, 7 ]
    */

    var arr = [1,2,3,4,3,3,7]
    ary_vrm.lst(arr,3)
    //arr [ 1, 2, 3, 4, 3, 7 ]

    var arr = [1,2,3,4,3,3,7]
    ary_vrm.lst_not(arr,3)
    /*
        > arr
        [ 1, 2, 3, 4, 3, 3 ]
        >
    */
    var arr = [1,2,3,4,3,3,7]
    ary_vrm.some(arr,3,0,2)
    //arr   [ 1, 2, 4, 3, 7 ]
    
    var arr = [1,2,3,4,3,3,7]
    ary_vrm.some_not(arr,3,0,2)
    /*
       > arr
       [ 2, 3, 3, 3, 7 ]
       >
    */
    
    var arr = [1,2,3,4,3,3,7]
    ary_vrm.some_from_lst(arr,3,0,2)
    /*
        > arr
        [ 1, 2, 4, 3, 7 ]
        >
    */
    
    var arr = [1,2,3,4,3,3,7]
    ary_vrm.some_not_from_lst(arr,3,0,2)
    /*
        > arr
        [ 1, 3, 4, 3, 3 ]
        >
    */


API
====

- ary\_vrm.all(arr,value)
- ary\_vrm.all\_not(arr,value)
- ary\_vrm.which(arr,value,which)
- ary\_vrm.which\_not(arr,value,which)
- ary\_vrm.which\_from\_lst(arr,value,which)
- ary\_vrm.which\_not\_from\_lst(arr,value,which)
- ary\_vrm.fst(arr,value)
- ary\_vrm.fst\_not(arr,value)
- ary\_vrm.lst(arr,value)
- ary\_vrm.lst\_not(arr,value)
- ary\_vrm.some(arr,value,...whiches)
- ary\_vrm.some\_not(arr,value,...whiches)
- ary\_vrm.some\_from\_lst(arr,value,...whiches)
- ary\_vrm.some\_not\_from\_lst(arr,value,...whiches)

LICENSE
=======
- ISC 
