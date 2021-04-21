nv-array-findiv
===============
- nv-array-findiv 


install
=======
- npm install nv-array-findiv 

usage
=====
    
example
-------
    const ary_findiv = require("nv-array-findiv")
    
    var arr = [1,2,3,4,5]
    var narr = ary_findiv.all(arr,r=>r%2)
    //[ { i: 0, v: 1 }, { i: 2, v: 3 }, { i: 4, v: 5 } ]

    var narr = ary_findiv.all_not(arr,r=>r%2)
    //[ { i: 1, v: 2 }, { i: 3, v: 4 } ]

    ary_findiv.which(arr,1,r=>r%2)
    //{ i: 2, v: 3 } 

    ary_findiv.which(arr,5,r=>r%2)
    //undefined
    ary_findiv.which_not(arr,1,r=>r%2)
    // the 0th not (r%2===1) is 2
    // the 1st not (r%2===1) is 4
    //{ i: 3, v: 4 }

    ary_findiv.which_from_lst(arr,1,r=>r%2)
    //{ i: 2, v: 3 }
    
    ary_findiv.fst(arr,r=>r%2)
    //{ i: 0, v: 1 }
    
    ary_findiv.fst_not(arr,r=>r%2)
    //{ i: 1, v: 2 }
    
    ary_findiv.lst(arr,r=>r%2)
    //{ i: 4, v: 5 }
    
    ary_findiv.lst_not(arr,r=>r%2)
    //{ i: 3, v: 4 }
    
    ary_findiv.some(arr,[0,2],r=>r%2)
    //[ { i: 0, v: 1 }, { i: 4, v: 5 } ]

    ary_findiv.some_not(arr,[0,2],r=>r%2)
    //[ { i: 1, v: 2 } ]

    ary_findiv.some_not(arr,[0,1],r=>r%2)
    //[ { i: 1, v: 2 }, { i: 3, v: 4 } ]
    
    ary_findiv.some_from_lst(arr,[0,2],r=>r%2)
    //[ { i: 4, v: 5 }, { i: 0, v: 1 } ]

    ary_findiv.some_not_from_lst(arr,[0,2],r=>r%2)
    //[ { i: 3, v: 4 } ]

    ary_findiv.some_not_from_lst(arr,[0,1],r=>r%2)
    //[ { i: 3, v: 4 }, { i: 1, v: 2 } ]


API
====

- ary\_findiv.fst(arr,cond\_func,...other\_params)
- ary\_findiv.fst\_not(arr,cond\_func,...other\_params)
- ary\_findiv.lst(arr,cond\_func,...other\_params)
- ary\_findiv.fst\_not(arr,cond\_func,...other\_params)
- ary\_findiv.which(arr,which,cond\_func,...other\_params)
- ary\_findiv.which\_not(arr,which,cond\_func,...other\_params)
- ary\_findiv.which\_from\_lst(arr,which,cond\_func,...other\_params)
- ary\_findiv.which\_not\_from\_lst(arr,which,cond\_func,...other\_params)
- ary\_findiv.some(arr,whiches,cond\_func,...other\_params)
- ary\_findiv.some\_not(arr,whiches,cond\_func,...other\_params)
- ary\_findiv.some\_from\_lst(arr,whiches,cond\_func,...other\_params)
- ary\_findiv.some\_not\_from\_lst(arr,whiches,cond\_func,...other\_params)
- ary\_findiv.all(arr,cond\_func,...other\_params)
- ary\_findiv.all\_not(arr,cond\_func,...other\_params)


LICENSE
=======
- ISC 
