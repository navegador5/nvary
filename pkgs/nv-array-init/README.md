nv-array-init
============
- nv-array-init 


install
=======
- npm install nv-array-init 

usage
=====
    
example
-------

    const ary_init = require("nv-array-init")
    ary_init.range(1,8)
    //[1, 2, 3, 4,5, 6, 7]
    ary_init.range(1,8,3)
    //[ 1, 4, 7 ]

    ary_init.use(5,'a')
    //[ 'a', 'a', 'a', 'a', 'a' ]

    ary_init.mul([1,2],3)
    [ 1, 2, 1, 2, 1, 2 ]


API
====

- ary\_init.use(lngth,v) 
- ary\_init.range(si,ei,interval)
- ary\_init.mul(arr,lgth)


LICENSE
=======
- ISC 
