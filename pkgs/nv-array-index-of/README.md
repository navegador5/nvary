nv-array-index-of
===============
- nv-array-index-of 


install
=======
- npm install nv-array-index-of 

usage
=====
    
example
-------
    const ary_indexof = require("nv-array-index-of")
    
    var arr = [1,10,3,10,5,10]
    var narr = ary_indexof.all(arr,10)
    //[1,3,5]

    ary_indexof.which(arr,10,2)
    //5
    ary_indexof.which(arr,10,5)
    //undefined
    
    ary_indexof.which_from_lst(arr,10,2)
    //1
    ary_indexof.fst(arr,10)
    //1

    ary_indexof.lst(arr,10)
    //5

    ary_indexof.some(arr,10,0,1)
    //[1,3]
    
    ary_indexof.some_from_lst(arr,10,0,1)
    //[5,3]

API
====

- ary\_indexof.fst(arr,value)
- ary\_indexof.lst(arr,value)
- ary\_indexof.which(arr,value,which)
- ary\_indexof.which\_from\_lst(arr,value,which)
- ary\_indexof.some(arr,value,...whiches)
- ary\_indexof.some\_from\_lst(arr,value,...whiches)
- ary\_indexof.all(arr,value)



LICENSE
=======
- ISC 
