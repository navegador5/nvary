nv-array-uniq
============
- nv-array-uniq 


install
=======
- npm install nv-array-uniq 

usage
=====
    
example
-------

    const ary_uniq = require("nv-array-uniq")

    var arr = [1,'a',1,'b','a',2,3,2]
    var narr = ary_uniq.uniq(arr)
    /*
    > arr
    [
      1,   'a', 1, 'b',
      'a', 2,   3, 2
    ]
    > narr
    [ 1, 'a', 'b', 2, 3 ]
    >
    */

    var arr = [1,'a',1,'b','a',2,3,2]
    var narr = ary_uniq.uniq(arr,2)  //until two collected
    //[ 1, 'a' ]

    var arr = [1,'a',1,'b','a',2,3,2]
    //[ 1, 'a', 'b', 2, 3 ]
    var trash = ary_uniq.recycle(arr)
    //[ 1, 'a', 2 ]

    var arr = [{a:1,b:10},{a:1,b:20},{a:2,b:30},{a:1,b:40},{a:1,b:50}]
    var ref = arr.map(r=>r.a)
    ary_uniq.ref_uniq(arr,ref)
    //[ { a: 1, b: 10 }, { a: 2, b: 30 } ]
    
    
    var arr = [{a:1,b:10},{a:1,b:20},{a:2,b:30},{a:1,b:40},{a:1,b:50}]
    var ref = arr.map(r=>r.a)
    var trash = ary_uniq.ref_recycle(arr,ref)
    //arr [ { a: 1, b: 10 }, { a: 2, b: 30 } ]
    //trash [ { a: 1, b: 20 }, { a: 1, b: 40 }, { a: 1, b: 50 } ]

API
====
- ary\_uniq.uniq(arr,until=Infinity)
- ary\_uniq.recycle(arr,until=Infinity)
- ary\_uniq.ref\_uniq(arr,ref,until=Infinity)
- ary\_uniq.ref\_recycle(arr,ref,until=Infinity)


LICENSE
=======
- ISC 
