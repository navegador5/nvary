nv-array-trim-with-function
===========================
- nv-array-trim-with-function


install
=======
- npm install nv-array-trim-with-function

usage
=====
    
example
-------

    const ary_ftrim = require("nv-array-trim-with-function")
    
    var arr = ['a','b','c',1,2,'a',3,4,'x','y','z']
    ary_ftrim.left(arr,2,r=>typeof(r)==='string')
    arr
    //['c', 1,   2,   'a', 3,4,   'x', 'y', 'z']
    var arr = ['a','b','c',1,2,'a',3,4,'x','y','z']
    ary_ftrim.lall(arr,r=>typeof(r)==='string')
    arr
    ////[1,   2,   'a', 3,4,   'x', 'y', 'z']
    
    var arr = ['a','b','c',1,2,'a',3,4,'x','y','z']
    ary_ftrim.right(arr,2,r=>typeof(r)==='string')
    arr
    //['a','b','c',1,2,'a',3,4,'x']
    var arr = ['a','b','c',1,2,'a',3,4,'x','y','z']
    ary_ftrim.rall(arr,r=>typeof(r)==='string')
    arr
    //['a','b','c',1,2,'a',3,4]
    
    var arr = ['a','b','c',1,2,'a',3,4,'x','y','z']
    ary_ftrim.both(arr,2,r=>typeof(r)==='string')
    arr
    //['c',1,2,'a',3,4,'x']
    
    var arr = ['a','b','c',1,2,'a',3,4,'x','y','z']
    ary_ftrim.ball(arr,r=>typeof(r)==='string')
    arr
    //[ 1, 2, 'a', 3, 4 ]    


API
====

- ary\_ftrim.left(arr,n,cond\_func,...cond\_func\_params) 
- ary\_ftrim.right(arr,n,cond\_func,...cond\_func\_params) 
- ary\_ftrim.both(arr,n,cond\_func,...cond\_func\_params) 
- ary\_ftrim.lall(arr,cond\_func,...cond\_func\_params) 
- ary\_ftrim.rall(arr,cond\_func,...cond\_func\_params) 
- ary\_ftrim.ball(arr,cond\_func,...cond\_func\_params) 

LICENSE
=======
- ISC 
