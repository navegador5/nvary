nv-array-trim-with-value
===========================
- nv-array-trim-with-value


install
=======
- npm install nv-array-trim-with-value

usage
=====
    
example
-------

    const ary_vtrim = require("nv-array-trim-with-value")
    
    var arr = ['a','a','a',1,2,'a',3,4,'a','a','a']
    ary_vtrim.left(arr,'a',2)
    arr
    //['a', 1,   2,   'a', 3,4,   'a', 'a', 'a']
    var arr = ['a','a','a',1,2,'a',3,4,'a','a','a']
    ary_vtrim.lall(arr,'a')
    arr
    ////[1,   2,   'a', 3,4,   'a', 'a', 'a']

    var arr = ['a','a','a',1,2,'a',3,4,'a','a','a']
    ary_vtrim.right(arr,'a',2)
    arr
    //['a','a','a',1,2,'a',3,4,'a']
    var arr = ['a','a','a',1,2,'a',3,4,'a','a','a']
    ary_vtrim.rall(arr,'a')
    arr
    //['a','a','a',1,2,'a',3,4]

    var arr = ['a','a','a',1,2,'a',3,4,'a','a','a']
    ary_vtrim.both(arr,'a',2)
    arr
    //['a',1,2,'a',3,4,'a']

    var arr = ['a','a','a',1,2,'a',3,4,'a','a','a']
    ary_vtrim.ball(arr,'a')
    arr
    //[ 1, 2, 'a', 3, 4 ]

API
====

- ary\_vtrim.left(arr,value,n) 
- ary\_vtrim.right(arr,value,n) 
- ary\_vtrim.both(arr,value,n) 
- ary\_vtrim.lall(arr,value) 
- ary\_vtrim.rall(arr,value) 
- ary\_vtrim.ball(arr,value) 

LICENSE
=======
- ISC 
