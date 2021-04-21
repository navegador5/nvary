nv-array-location
============
- nv-array-location 


install
=======
- npm install nv-array-location 

usage
=====
    
example
-------

    const ary_loc = require("nv-array-location")

    var basearr = [1,2,3,4,2,3,5,2,3,6]
    var slider = [2,3]

    ary_loc.fst(basearr,slider)
    //[ 1, 3 ]
    ary_loc.which(basearr,slider,1)
    //[ 4, 6 ]
    ary_loc.which_from_lst(basearr,slider,0)
    //[ 7, 9 ]
    ary_loc.lst(basearr,slider)
    //[ 7, 9 ]
    ary_loc.some(basearr,slider,0,1)
    //[ [ 1, 3 ], [ 4, 6 ] ]
    ary_loc.some_from_lst(basearr,slider,0,1)
    //[ [ 7, 9 ], [ 4, 6 ] ]
    ary_loc.all(basearr,slider)
    //[ [ 1, 3 ], [ 4, 6 ], [ 7, 9 ] ]


API
====

- ary\_loc.fst(basearr,slider)
- ary\_loc.which(basearr,slider,1)
- ary\_loc.which\_from\_lst(basearr,slider,0)
- ary\_loc.lst(basearr,slider)
- ary\_loc.some(basearr,slider,0,1)
- ary\_loc.some\_from\_lst(basearr,slider,0,1)
- ary\_loc.all(basearr,slider)


LICENSE
=======
- ISC 
