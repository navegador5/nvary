nv-array-slice-with-function
============
- nv-array-slice-with-function 


install
=======
- npm install nv-array-slice-with-function 

usage
=====
    
example
-------

    const ary_fslc = require("nv-array-slice-with-function")

    var arr = [1,"a","b",2,3,"c",4,"d","e","f",5]
    ary_fslc.fst(arr,r=>typeof(r)==="string")
    //[ 1, 3 ]
    ary_fslc.fst_not(arr,r=>typeof(r)==="string")
    //[ 0, 1 ]
    ary_fslc.which(arr,1,r=>typeof(r)==="string")
    //[ 5, 6 ]
    ary_fslc.which_not(arr,1,r=>typeof(r)==="string")
    //[ 3, 5 ]
    ary_fslc.which_from_lst(arr,1,r=>typeof(r)==="string")
    //[ 5, 6 ]
    ary_fslc.which_not_from_lst(arr,1,r=>typeof(r)==="string")
    //[ 6, 7 ]
    ary_fslc.lst(arr,r=>typeof(r)==="string")
    //[ 7, 10 ]
    ary_fslc.lst_not(arr,r=>typeof(r)==="string")
    //[ 10, 11 ]
    ary_fslc.some(arr,[0,1],r=>typeof(r)==="string")
    //[ [ 1, 3 ], [ 5, 6 ] ]
    ary_fslc.some_not(arr,[0,1],r=>typeof(r)==="string")
    //[ [ 0, 1 ], [ 3, 5 ] ]
    ary_fslc.some_from_lst(arr,[0,1],r=>typeof(r)==="string")
    //[ [ 7, 10 ], [ 5, 6 ] ]
    ary_fslc.some_not_from_lst(arr,[0,1],r=>typeof(r)==="string")
    //[ [ 10, 11 ], [ 6, 7 ] ]
    ary_fslc.all(arr,r=>typeof(r)==="string")
    //[ [ 1, 3 ], [ 5, 6 ], [ 7, 10 ] ]
    ary_fslc.all_not(arr,r=>typeof(r)==="string")
    //[ [ 0, 1 ], [ 3, 5 ], [ 6, 7 ], [ 10, 11 ] ]

API
====

- ary\_fslc.fst(arr,cond\_func,...cond\_other\_func\_params)
- ary\_fslc.fst\_not(arr,cond\_func,...cond\_other\_func\_params)
- ary\_fslc.which(arr,index,cond\_func,...cond\_other\_func\_params)
- ary\_fslc.which\_not(arr,index,cond\_func,...cond\_other\_func\_params)
- ary\_fslc.which\_from\_lst(arr,index,cond\_func,...cond\_other\_func\_params)
- ary\_fslc.which\_not\_from\_lst(arr,index,cond\_func,...cond\_other\_func\_params)
- ary\_fslc.lst(arr,cond\_func,...cond\_other\_func\_params)
- ary\_fslc.lst\_not(arr,cond\_func,...cond\_other\_func\_params)
- ary\_fslc.some(arr,whiches,cond\_func,...cond\_other\_func\_params)
- ary\_fslc.some\_not(arr,whiches,cond\_func,...cond\_other\_func\_params)
- ary\_fslc.some\_from\_lst(arr,whiches,cond\_func,...cond\_other\_func\_params)
- ary\_fslc.some\_not\_from\_lst(arr,whiches,cond\_func,...cond\_other\_func\_params)
- ary\_fslc.all(arr,cond\_func,...cond\_other\_func\_params)
- ary\_fslc.all\_not(arr,cond\_func,...cond\_other\_func\_params)


LICENSE
=======
- ISC 
