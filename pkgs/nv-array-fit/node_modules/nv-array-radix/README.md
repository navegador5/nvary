nv-array-radix
============
- nv-array-radix 
- some basic methods for variety-radix support
- succ ,prev, lt,eq,gt

install
=======
- npm install nv-array-radix 

usage
=====

     const ary_rdx = require("nv-array-radix");

        
example
-------

### function

    var radixes = [2,3,2];

    
    > Array.from(ary_rdx.sgen(radixes))
    [
      [ 0, 0, 0 ], [ 0, 0, 1 ],
      [ 0, 1, 0 ], [ 0, 1, 1 ],
      [ 0, 2, 0 ], [ 0, 2, 1 ],
      [ 1, 0, 0 ], [ 1, 0, 1 ],
      [ 1, 1, 0 ], [ 1, 1, 1 ],
      [ 1, 2, 0 ], [ 1, 2, 1 ]
    ]
    >
    > Array.from(ary_rdx.pgen(radixes))
    [
      [ 1, 2, 1 ], [ 1, 2, 0 ],
      [ 1, 1, 1 ], [ 1, 1, 0 ],
      [ 1, 0, 1 ], [ 1, 0, 0 ],
      [ 0, 2, 1 ], [ 0, 2, 0 ],
      [ 0, 1, 1 ], [ 0, 1, 0 ],
      [ 0, 0, 1 ], [ 0, 0, 0 ]
    ]
    >
    
    var {succ,prev} = ary_rdx.creat_succ_prev(radixes)
    > succ([0,0,0])
    [ 0, 0, 1 ]
    > succ([0,0,1])
    [ 0, 1, 0 ]
    > succ([0,1,0])
    [ 0, 1, 1 ]
    > succ([0,1,1])
    [ 0, 2, 0 ]
    > succ([0,2,0])
    [ 0, 2, 1 ]
    > succ([0,2,1])
    [ 1, 0, 0 ]
    
    
    > radixes
    [ 2, 3, 2 ]
    >
    
    
    > prev([ 0, 2, 0 ])
    [ 0, 1, 1 ]
    > prev([ 0, 2, 1 ])
    [ 0, 2, 0 ]
    >
    >
    
    > ary_rdx.get_max(radixes)
    [ 1, 2, 1 ]
    > ary_rdx.get_min(radixes)
    [ 0, 0, 0 ]
    >
    
    > prev([ 0, 0, 0 ])
    [ 1, 2, 1 ]
    >
    > succ([ 1, 2, 1 ])
    [ 0, 0, 0 ]
    >


### class


    > var rdx = new ary_rdx.Radix([2,4,2])
    undefined
    > rdx
    Radix [0.0.0] {}
    > rdx.next()
    [ 0, 0, 1 ]
    >
    > rdx.next()
    [ 0, 1, 0 ]
    > rdx
    Radix [0.1.0] {}
    > rdx.max_
    [ 1, 3, 1 ]
    > rdx.min_
    [ 0, 0, 0 ]
    >



METHODS
=======

    rdx.$eq                   rdx.$gt                   rdx.$is_max               rdx.$is_min
    rdx.$lt                   rdx.curr_                 rdx.max_
    rdx.min_                  rdx.next                  rdx.prev                  rdx.radix_


API
====

- ary\_rdx.pgen(radixes)
- ary\_rdx.sgen(radixes)
- ary\_rdx.creat\_succ\_prev(radixes)
- ary\_rdx.get\_max(radixes)
- ary\_rdx.get\_min(radixes)


- ary\_rdx.eq(array0,array1)
- ary\_rdx.gt(array0,array1)
- ary\_rdx.lt(array0,array1)


LICENSE
=======
- ISC 
