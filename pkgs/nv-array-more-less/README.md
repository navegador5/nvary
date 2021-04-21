nv-array-more-less
============
- nv-array-more-less 


install
=======
- npm install nv-array-more-less 

usage
=====

    const ary_mole = require("nv-array-more-less")
    var ary = [10,20,30,40,50,60]
    var [more,current,less] = ary_mole.from_fst(ary)


    
example
-------

    const ary_mole = require("nv-array-more-less")
    var ary = [10,20,30,40,50,60]
    var [more,current,less] = ary_mole.from_fst(ary)
    > more()
    [ 10 ]
    > more(2)
    [ 20, 30 ]
    > more(3)
    [ 40, 50, 60 ]
    > more(3)
    [ 10, 20, 30 ]
    > less()
    [ 20 ]
    > less(4)
    [ 40, 50, 60, 10 ]
    > less(3)
    [ 10, 20, 30 ]
    > less(2)
    [ 50, 60 ]
    > less()
    [ 40 ]
    > more()
    [ 50 ]
    > less()
    [ 40 ]
    > current()
    40
    > more()
    [ 50 ]
    >


API
====
- ary\_mole.from\_fst(ary)
- ary\_mole.from\_lst(ary)
- ary\_mole.more\_less(ary,start=0)

- more(offset=1)
- current()
- less(offset=1)

LICENSE
=======
- ISC 
