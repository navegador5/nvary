nv-array-find-value
===================
- nv-array-find-value 


install
=======
- npm install nv-array-find-value 

usage
=====
    
example
-------
    const ary_findv = require("nv-array-find-value")
    
    var arr = [1,2,3,4,5]
    var narr = ary_findv.all(arr,r=>r%2)
    //[ 1, 3, 5 ]
    
    var narr = ary_findv.all_not(arr,r=>r%2)
    //[ 2, 4 ]

    ary_findv.which(arr,1,r=>r%2)
    //3 

    ary_findv.which(arr,5,r=>r%2)
    //undefined
    ary_findv.which_not(arr,1,r=>r%2)
    // the 0th not (r%2===1) is 2
    // the 1st not (r%2===1) is 4
    //4
    
    ary_findv.which_from_lst(arr,1,r=>r%2)
    //3
    
    ary_findv.fst(arr,r=>r%2)
    //1
    
    ary_findv.fst_not(arr,r=>r%2)
    //2
    
    ary_findv.lst(arr,r=>r%2)
    //5
    
    ary_findv.lst_not(arr,r=>r%2)
    //4
    
    ary_findv.some(arr,[0,2],r=>r%2)
    //[ 1, 5 ]

    ary_findv.some_not(arr,[0,2],r=>r%2)
    //[ 2 ]

    ary_findv.some_not(arr,[0,1],r=>r%2)
    //[ 2, 4 ]
    
    ary_findv.some_from_lst(arr,[0,2],r=>r%2)
    //[ 5, 1 ]

    ary_findv.some_not_from_lst(arr,[0,2],r=>r%2)
    //[ 4 ]

    ary_findv.some_not_from_lst(arr,[0,1],r=>r%2)
    //[ 4, 2 ]

API
====

- ary\_findv.fst(arr,cond\_func,...other\_params)
- ary\_findv.fst\_not(arr,cond\_func,...other\_params)
- ary\_findv.lst(arr,cond\_func,...other\_params)
- ary\_findv.fst\_not(arr,cond\_func,...other\_params)
- ary\_findv.which(arr,which,cond\_func,...other\_params)
- ary\_findv.which\_not(arr,which,cond\_func,...other\_params)
- ary\_findv.which\_from\_lst(arr,which,cond\_func,...other\_params)
- ary\_findv.which\_not\_from\_lst(arr,which,cond\_func,...other\_params)
- ary\_findv.some(arr,whiches,cond\_func,...other\_params)
- ary\_findv.some\_not(arr,whiches,cond\_func,...other\_params)
- ary\_findv.some\_from\_lst(arr,whiches,cond\_func,...other\_params)
- ary\_findv.some\_not\_from\_lst(arr,whiches,cond\_func,...other\_params)
- ary\_findv.all(arr,cond\_func,...other\_params)
- ary\_findv.all\_not(arr,cond\_func,...other\_params)


LICENSE
=======
- ISC 
