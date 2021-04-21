nv-array-proposition
=====================
- nv-array-proposition 


install
=======
- npm install nv-array-proposition 

usage
=====
    
example
-------

    const ary_prop = require("nv-array-proposition")

    var arr = [10,2,10,4,10,6]

    ary_prop.all(arr,r=>r>0)
    //same as ary_prop.every
    //true
    ary_prop.all(arr,r=>r<1)
    //false
    ary_prop.all_not(arr,r=>r<1)
    //true
    //same as ary_prop.every_not

    ary_prop.any(arr,r=>r===4)
    //true

    ary_prop.any_not(arr,r=>r===10)
    //true


    ary_prop.at_most_several(arr,4,r=>r>0)
    //false
    ary_prop.at_most_several(arr,3,r=>r>6)
    //true
    ary_prop.at_most_several_not(arr,3,r=>r<=0)
    //false

    ary_prop.several(arr,3,r=>r===10)
    //true
    ary_prop.several(arr,2,r=>r===10)
    //false
    ary_prop.several(arr,4,r=>r===10)
    //false



    ary_prop.at_least_several(arr,2,r=>r===10)
    //true
    ary_prop.at_least_several(arr,4,r=>r===10)
    //false

    ary_prop.fst(arr,r=>r%2)
    //false
    ary_prop.fst_not(arr,r=>r%2)
    //true

    ary_prop.lst(arr,r=>r%3)
    //false
    ary_prop.lst_not(arr,r=>r%3)
    //true

    ary_prop.at_most_some(arr,[1,3],r=>r<10)
    //false
    ary_prop.at_most_some(arr,[1,3],r=>r<5)
    //true

    ary_prop.some(arr,[1,3],r=>r<5)
    //true
    ary_prop.some(arr,[1],r=>r<5)
    //false  arr[3] also <5

    ary_prop.at_least_some(arr,[1],r=>r<5)
    //true


API
====

- ary\_prop.all(arr,cond\_func,...other\_params)
- ary\_prop.every(arr,cond\_func,...other\_params)
- ary\_prop.all\_not(arr,cond\_func,...other\_params)
- ary\_prop.every\_not(arr,cond\_func,...other\_params)
- ary\_prop.any(arr,cond\_func,...other\_params)
- ary\_prop.any\_not(arr,cond\_func,...other\_params)
- ary\_prop.at\_most\_several(arr,n,cond\_func,...other\_params)
- ary\_prop.at\_most\_several\_not(arr,n,cond\_func,...other\_params)
- ary\_prop.several(arr,n,cond\_func,...other\_params)
- ary\_prop.several\_not(arr,n,cond\_func,...other\_params)
- ary\_prop.at\_least\_several(arr,n,cond\_func,...other\_params)
- ary\_prop.at\_least\_several\_not(arr,n,cond\_func,...other\_params)
- ary\_prop.fst(arr,cond\_func,...other\_params)
- ary\_prop.fst\_not(arr,cond\_func,...other\_params)
- ary\_prop.which(arr,which,cond\_func,...other\_params)
- ary\_prop.which\_not(arr,which,cond\_func,...other\_params)
- ary\_prop.lst(arr,cond\_func,...other\_params)
- ary\_prop.lst\_not(arr,cond\_func,...other\_params)
- ary\_prop.at\_most\_some(arr,whiches,cond\_func,...other\_params)
- ary\_prop.at\_most\_some\_not(arr,whiches,cond\_func,...other\_params)
- ary\_prop.some(arr,whiches,cond\_func,...other\_params)
- ary\_prop.some\_not(arr,whiches,cond\_func,...other\_params)
- ary\_prop.at\_least\_some(arr,whiches,cond\_func,...other\_params)
- ary\_prop.at\_least\_some\_not(arr,whiches,cond\_func,...other\_params)

LICENSE
=======
- ISC 
