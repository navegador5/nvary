nv-array-pop-with-function
============
- nv-array-pop-with-function 


install
=======
- npm install nv-array-pop-with-function 

usage
=====
    
example
-------

    const ary_fpop = require("nv-array-pop-with-function")
    var arr = [1,2,3,4,5,6]
    var narr = ary_fpop.all(arr,r=>r%3)
    //arr  [ 3, 6 ]
    //narr [ 1, 2, 4, 5 ]
    var arr = [1,2,3,4,5,6]
    var narr = ary_fpop.all_not(arr,r=>r%3)
    //arr  [ 1, 2, 4, 5 ] 
    //narr [ 3, 6 ]
    var arr = [1,2,3,4,5,6]
    var rslt = ary_fpop.fst(arr,r=>r%3)
    //rslt 1
    //arr  [ 2, 3, 4, 5, 6 ]
    var arr = [1,2,3,4,5,6]
    var rslt = ary_fpop.fst_not(arr,r=>r%3)
    //rslt 3
    //arr  [ 1, 2, 4, 5, 6 ]

    var arr = [1,2,3,4,5,6]
    var rslt = ary_fpop.which(arr,1,r=>r%3)
    //rslt 2
    //arr  [ 1, 3, 4, 5, 6 ]

    var arr = [1,2,3,4,5,6]
    var rslt = ary_fpop.which_not(arr,1,r=>r%3)
    //rslt 6
    //arr  [ 1, 2, 3, 4, 5 ]

    var arr = [1,2,3,4,5,6]
    var rslt = ary_fpop.which_from_lst(arr,1,r=>r%3)
    //rslt 4
    //arr [ 1, 2, 3, 5, 6 ]
    
    var arr = [1,2,3,4,5,6]
    var rslt = ary_fpop.which_not_from_lst(arr,1,r=>r%3)
    //rslt 3 
    //arr [1,2,4,5,6]

    var arr = [1,2,3,4,5,6]
    var rslt = ary_fpop.lst(arr,r=>r%3)
    //rslt 5
    //arr [ 1, 2, 3, 4, 6 ]
    
    var arr = [1,2,3,4,5,6]
    var rslt = ary_fpop.lst_not(arr,r=>r%3)
    //rslt 6
    //arr [ 1, 2, 3, 4, 5 ]
    
    

    var arr = [1,2,3,4,5,6]
    var rslt = ary_fpop.some(arr,[0,2],r=>r%3)
    //rslt [ 1, 4 ]
    //arr   [ 2, 3, 5, 6 ]
    var arr = [1,2,3,4,5,6]
    var rslt = ary_fpop.some_not(arr,[0,2],r=>r%3)
    //rslt [3]
    //arr [ 1, 2, 4, 5, 6 ]
    
    var arr = [1,2,3,4,5,6]
    var rslt = ary_fpop.some_from_lst(arr,[0,2],r=>r%3)
    //rslt [ 5, 2 ]
    //arr  [ 1, 3, 4, 6 ]
    var arr = [1,2,3,4,5,6]
    var rslt = ary_fpop.some_not_from_lst(arr,[0,2],r=>r%3)
    //rslt [6]
    //arr [ 1, 2, 3, 4, 5 ]

API
====


- ary\_fpop.fst(arr,cond\_func,...cond\_other\_func\_params)
- ary\_fpop.fst\_not(arr,cond\_func,...cond\_other\_func\_params)
- ary\_fpop.which(arr,index,cond\_func,...cond\_other\_func\_params)
- ary\_fpop.which\_not(arr,index,cond\_func,...cond\_other\_func\_params)
- ary\_fpop.which\_from\_lst(arr,index,cond\_func,...cond\_other\_func\_params)
- ary\_fpop.which\_not\_from\_lst(arr,index,cond\_func,...cond\_other\_func\_params)
- ary\_fpop.lst(arr,cond\_func,...cond\_other\_func\_params)
- ary\_fpop.lst\_not(arr,cond\_func,...cond\_other\_func\_params)
- ary\_fpop.some(arr,whiches,cond\_func,...cond\_other\_func\_params)
- ary\_fpop.some\_not(arr,whiches,cond\_func,...cond\_other\_func\_params)
- ary\_fpop.some\_from\_lst(arr,whiches,cond\_func,...cond\_other\_func\_params)
- ary\_fpop.some\_not\_from\_lst(arr,whiches,cond\_func,...cond\_other\_func\_params)
- ary\_fpop.all(arr,cond\_func,...cond\_other\_func\_params)
- ary\_fpop.all\_not(arr,cond\_func,...cond\_other\_func\_params)

LICENSE
=======
- ISC 
