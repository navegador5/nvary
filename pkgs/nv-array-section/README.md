nv-array-section
============
- nv-array-section 


install
=======
- npm install nv-array-section 

usage
=====
    
example
-------

    const ary_sec = require("nv-array-section")

    const {merge}= require("nv-array-section")

    var arr = [0,1,7,9,12,14]


    > merge(arr,2,13)
    {
      narr: [ 0, 1, 2, 13, 14 ],
      diff: Map { [ 1, 2 ] => [ 1, 7 ], [ 13, 14 ] => [ 12, 14 ] }
    }
    >

    > merge(arr,1,13)
    { narr: [ 0, 1, 13, 14 ], diff: Map { [ 13, 14 ] => [ 12, 14 ] } }
    > merge(arr,2,14)
    { narr: [ 0, 1, 2, 14 ], diff: Map { [ 1, 2 ] => [ 1, 7 ] } }
    >


API
====
- ary\_sec.merge(arr,si,ei)
- ary\_sec.get\_sec\_with\_num(arr,n)
- ary\_sec.get\_sec\_with\_seq(arr,seq)
- ary\_sec.get\_seq\_with\_sec(arr,sec)


LICENSE
=======
- ISC 
