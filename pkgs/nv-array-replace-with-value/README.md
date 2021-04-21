nv-array-replace-with-value
============
- nv-array-replace-with-value 


install
=======
- npm install nv-array-replace-with-value 

usage
=====
    
example
-------

    const ary_vrplc = require("nv-array-replace-with-value")

    var arr = [1,2,3,4,3,3,7]
    ary_vrplc.all(arr,'x',3)
    //arr  [1,   2,   'x', 4,'x', 'x', 7]


    var arr = [1,2,3,4,3,3,7]
    ary_vrplc.all_not(arr,'x',3)
    //arr  ['x', 'x', 3,   'x',3,   3,   'x']



    var arr = [1,2,3,4,3,3,7]
    ary_vrplc.fst(arr,'x',3)
    //arr  [1, 2, 'x', 4,3, 3, 7]


    var arr = [1,2,3,4,3,3,7]
    ary_vrplc.fst_not(arr,'x',3)
    //arr ['x', 2, 3, 4,3,   3, 7]


    var arr = [1,2,3,4,3,3,7]
    ary_vrplc.which(arr,'x',3,1)
    //arr  [1,   2, 3, 4,'x', 3, 7]



    var arr = [1,2,3,4,3,3,7]
    ary_vrplc.which_not(arr,'x',3,1)
    /*
    > arr
    
    >
    */

    var arr = [1,2,3,4,3,3,7]
    ary_vrplc.which_from_lst(arr,'x',3,1)
    /*
        > arr
         [
           1, 'x', 3, 4,
           3, 3,   7
         ]
    */

    var arr = [1,2,3,4,3,3,7]
    ary_vrplc.which_not_from_lst(arr,'x',3,1)
    /*
    > arr
       [
         1, 2, 3, 'x',
         3, 3, 7
       ]
    */

    var arr = [1,2,3,4,3,3,7]
    ary_vrplc.lst(arr,'x',3)
    //arr 

    var arr = [1,2,3,4,3,3,7]
    ary_vrplc.lst_not(arr,'x',3)
    /*
        > arr
        [
          1, 2,   3, 4,
          3, 'x', 7
        ]
        >
    */
    var arr = [1,2,3,4,3,3,7]
    ary_vrplc.some(arr,'x',3,0,2)
    //arr   [1, 2,   'x', 4,3, 'x', 7]


    var arr = [1,2,3,4,3,3,7]
    ary_vrplc.some_not(arr,'x',3,0,2)
    /*
       > arr
       [
         'x', 2, 3, 'x',
         3,   3, 7
       ]
       >
    */

    var arr = [1,2,3,4,3,3,7]
    ary_vrplc.some_from_lst(arr,'x',3,0,2)
    /*
        > arr
        [
          1, 2,   'x', 4,
          3, 'x', 7
        ]
        >
    */

    var arr = [1,2,3,4,3,3,7]
    ary_vrplc.some_not_from_lst(arr,'x',3,0,2)
    /*
        > arr
        [
          1, 'x', 3,   4,
          3, 3,   'x'
        ]
        >
    */

API
====

- ary\_vrplc.all(arr,rplc\_by,value)
- ary\_vrplc.all\_not(arr,rplc\_by,value)
- ary\_vrplc.which(arr,rplc\_by,value,which)
- ary\_vrplc.which\_not(arr,rplc\_by,value,which)
- ary\_vrplc.which\_from\_lst(arr,rplc\_by,value,which)
- ary\_vrplc.which\_not\_from\_lst(arr,rplc\_by,value,which)
- ary\_vrplc.fst(arr,rplc\_by,value)
- ary\_vrplc.fst\_not(arr,rplc\_by,value)
- ary\_vrplc.lst(arr,rplc\_by,value)
- ary\_vrplc.lst\_not(arr,rplc\_by,value)
- ary\_vrplc.some(arr,rplc\_by,value,...whiches)
- ary\_vrplc.some\_not(arr,rplc\_by,value,...whiches)
- ary\_vrplc.some\_from\_lst(arr,rplc\_by,value,...whiches)
- ary\_vrplc.some\_not\_from\_lst(arr,rplc\_by,value,...whiches)


LICENSE
=======
- ISC 
