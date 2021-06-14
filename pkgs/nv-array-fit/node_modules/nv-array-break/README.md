nv-array-break
============
- nv-array-break 


install
=======
- npm install nv-array-break 

usage
=====
    
example
-------

    const ary_brk = require("nv-array-break")

    > ary_brk.brk([10,20,30,40,50,60,70],[1,3])
    [ [ 10 ], [ 20, 30 ], [ 40, 50, 60, 70 ] ]
    >

    > ary_brk.brk_with_lary([10,20,30,40,50,60,70],[1,3])
    [ [ 10 ], [ 20, 30, 40 ], [ 50, 60, 70 ] ]
    >



API
====

- ary\_brk.fmt\_pts(ary,indexes)
- ary\_brk.fast\_gen(ary,indexes)
- ary\_brk.fast\_brk(ary,indexes)
- ary\_brk.gen(ary,indexes)
- ary\_brk.brk(ary,indexes)
- ary\_brk.fast\_gen\_with\_lary(ary,lary)
- ary\_brk.fast\_brk\_with\_lary(ary,lary)
- ary\_brk.gen\_with\_lary(ary,lary)
- ary\_brk.brk\_with\_lary(ary,lary)

LICENSE
=======
- ISC 
