nv-array-divide
============
- nv-array-divide 


install
=======
- npm install nv-array-divide 

usage
=====
    
example
-------

    const ary_dvd = require("nv-array-divide")


    const ary_dvd = require("nv-array-divide")
    var arr = [10,20,30,40,50,60,70]
    ary_dvd.chunk(arr,3)
    //[ [ 10, 20, 30 ], [ 40, 50, 60 ], [ 70 ] ]

    var arr = [10,20,30,40,50,60,70]
    ary_dvd.cut(arr,1,4,5)
    //[ [ 10 ], [ 20, 30, 40 ], [ 50 ] ]


API
====

- ary\_dvd.chunk(arr,interval)
- ary\_dvd.cut(arr,...pts)

LICENSE
=======
- ISC 
