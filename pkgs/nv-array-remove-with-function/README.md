nv-array-remove-with-function
============
- nv-array-remove-with-function 


install
=======
- npm install nv-array-remove-with-function 

usage
=====
    
example
-------

    const ary_frm = require("nv-array-remove-with-function")

    var arr = [1,2,3,4,5,6]
    ary_frm.all(arr,r=>r%3)
    //arr  [ 3, 6 ]
    
    var arr = [1,2,3,4,5,6]
    ary_frm.all_not(arr,r=>r%3)
    //arr  [ 1, 2, 4, 5 ]

    var arr = [1,2,3,4,5,6]
    ary_frm.fst(arr,r=>r%3)
    //arr  [ 2, 3, 4, 5, 6 ]
    
    var arr = [1,2,3,4,5,6]
    ary_frm.fst_not(arr,r=>r%3)
    //arr  [ 1, 2, 4, 5, 6 ]

    var arr = [1,2,3,4,5,6]
    ary_frm.which(arr,1,r=>r%3)
    //arr  [ 1, 3, 4, 5, 6 ]

    var arr = [1,2,3,4,5,6]
    ary_frm.which_not(arr,1,r=>r%3)
    //arr  [ 1, 2, 3, 4, 5 ]

    var arr = [1,2,3,4,5,6]
    ary_frm.which_from_lst(arr,1,r=>r%3)
    //arr [ 1, 2, 3, 5, 6 ]

    var arr = [1,2,3,4,5,6]
    ary_frm.which_not_from_lst(arr,1,r=>r%3)
    //arr [1,2,4,5,6]

    var arr = [1,2,3,4,5,6]
    ary_frm.lst(arr,r=>r%3)
    //arr [ 1, 2, 3, 4, 6 ]

    var arr = [1,2,3,4,5,6]
    ary_frm.lst_not(arr,r=>r%3)
    //arr [ 1, 2, 3, 4, 5 ]

    var arr = [1,2,3,4,5,6]
    ary_frm.some(arr,[0,2],r=>r%3)
    //arr   [ 2, 3, 5, 6 ]
    
    
    var arr = [1,2,3,4,5,6]
    ary_frm.some_not(arr,[0,2],r=>r%3)
    //arr [ 1, 2, 4, 5, 6 ]

    var arr = [1,2,3,4,5,6]
    ary_frm.some_from_lst(arr,[0,2],r=>r%3)
    //arr  [ 1, 3, 4, 6 ]
    
    var arr = [1,2,3,4,5,6]
    ary_frm.some_not_from_lst(arr,[0,2],r=>r%3)
    //arr [ 1, 2, 3, 4, 5 ]    
    

API
====

- ary\_frm.fst(arr,cond\_func,...cond\_other\_func\_params)
- ary\_frm.fst\_not(arr,cond\_func,...cond\_other\_func\_params)
- ary\_frm.which(arr,index,cond\_func,...cond\_other\_func\_params)
- ary\_frm.which\_not(arr,index,cond\_func,...cond\_other\_func\_params)
- ary\_frm.which\_from\_lst(arr,index,cond\_func,...cond\_other\_func\_params)
- ary\_frm.which\_not\_from\_lst(arr,index,cond\_func,...cond\_other\_func\_params)
- ary\_frm.lst(arr,cond\_func,...cond\_other\_func\_params)
- ary\_frm.lst\_not(arr,cond\_func,...cond\_other\_func\_params)
- ary\_frm.some(arr,whiches,cond\_func,...cond\_other\_func\_params)
- ary\_frm.some\_not(arr,whiches,cond\_func,...cond\_other\_func\_params)
- ary\_frm.some\_from\_lst(arr,whiches,cond\_func,...cond\_other\_func\_params)
- ary\_frm.some\_not\_from\_lst(arr,whiches,cond\_func,...cond\_other\_func\_params)
- ary\_frm.all(arr,cond\_func,...cond\_other\_func\_params)
- ary\_frm.all\_not(arr,cond\_func,...cond\_other\_func\_params)


LICENSE
=======
- ISC 
