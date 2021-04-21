nv-array-replace-with-function
============
- nv-array-replace-with-function 


install
=======
- npm install nv-array-replace-with-function 

usage
=====
    
example
-------

    const ary_frplc = require("nv-array-replace-with-function")

    var arr = [1,2,3,4,5,6]
    ary_frplc.all(arr,'x',r=>r%3)
    //arr [ 'x', 'x', 3, 'x', 'x', 6 ]


    var arr = [1,2,3,4,5,6]
    ary_frplc.all_not(arr,'x',r=>r%3)
    //arr [ 1, 2, 'x', 4, 5, 'x' ]

    var arr = [1,2,3,4,5,6]
    ary_frplc.fst(arr,'x',r=>r%3)
    //arr [ 'x', 2, 3, 4, 5, 6 ]

    var arr = [1,2,3,4,5,6]
    ary_frplc.fst_not(arr,'x',r=>r%3)
    //arr  [ 1, 2, 'x', 4, 5, 6 ]

    var arr = [1,2,3,4,5,6]
    ary_frplc.which(arr,'x',1,r=>r%3)
    //arr [ 1, 'x', 3, 4, 5, 6 ]


    var arr = [1,2,3,4,5,6]
    ary_frplc.which_not(arr,'x',1,r=>r%3)
    //arr  [ 1, 2, 3, 4, 5, 'x' ]

    var arr = [1,2,3,4,5,6]
    ary_frplc.which_from_lst(arr,'x',1,r=>r%3)
    //arr  [ 1, 2, 3, 'x', 5, 6 ]

    var arr = [1,2,3,4,5,6]
    ary_frplc.which_not_from_lst(arr,'x',1,r=>r%3)
    //arr

    var arr = [1,2,3,4,5,6]
    ary_frplc.lst(arr,'x',r=>r%3)
    //arr [ 1, 2, 'x', 4, 5, 6 ]

    var arr = [1,2,3,4,5,6]
    ary_frplc.lst_not(arr,'x',r=>r%3)
    //arr  [ 1, 2, 3, 4, 5, 'x' ]



    var arr = [1,2,3,4,5,6]
    ary_frplc.some(arr,'x',[0,2],r=>r%3)
    //arr  [ 'x', 2, 3, 'x', 5, 6 ]


    var arr = [1,2,3,4,5,6]
    ary_frplc.some_not(arr,'x',[0,2],r=>r%3)
    //arr  [ 1, 2, 'x', 4, 5, 6 ]


    var arr = [1,2,3,4,5,6]
    ary_frplc.some_from_lst(arr,'x',[0,2],r=>r%3)
    //arr [ 1, 'x', 3, 4, 'x', 6 ]



    var arr = [1,2,3,4,5,6]
    ary_frplc.some_not_from_lst(arr,'x',[0,2],r=>r%3)
    //arr  [ 1, 2, 3, 4, 5, 'x' ]


API
====

- ary\_frplc.fst(arr,rplc\_by,cond\_func,...cond\_other\_func\_params)
- ary\_frplc.fst\_not(arr,rplc\_by,cond\_func,...cond\_other\_func\_params)
- ary\_frplc.which(arr,rplc\_by,index,cond\_func,...cond\_other\_func\_params)
- ary\_frplc.which\_not(arr,rplc\_by,index,cond\_func,...cond\_other\_func\_params)
- ary\_frplc.which\_from\_lst(arr,rplc\_by,index,cond\_func,...cond\_other\_func\_params)
- ary\_frplc.which\_not\_from\_lst(arr,rplc\_by,index,cond\_func,...cond\_other\_func\_params)
- ary\_frplc.lst(arr,rplc\_by,cond\_func,...cond\_other\_func\_params)
- ary\_frplc.lst\_not(arr,rplc\_by,cond\_func,...cond\_other\_func\_params)
- ary\_frplc.some(arr,rplc\_by,whiches,cond\_func,...cond\_other\_func\_params)
- ary\_frplc.some\_not(arr,rplc\_by,whiches,cond\_func,...cond\_other\_func\_params)
- ary\_frplc.some\_from\_lst(arr,rplc\_by,whiches,cond\_func,...cond\_other\_func\_params)
- ary\_frplc.some\_not\_from\_lst(arr,rplc\_by,whiches,cond\_func,...cond\_other\_func\_params)
- ary\_frplc.all(arr,rplc\_by,cond\_func,...cond\_other\_func\_params)
- ary\_frplc.all\_not(arr,rplc\_by,cond\_func,...cond\_other\_func\_params)


LICENSE
=======
- ISC 
