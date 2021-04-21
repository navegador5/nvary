
nv-array-defrag
==============
- nv-array-defrag, simple util to resort a array


install
=======
- npm install nv-array-defrag

usage
=====

    const ary_defrag = require("nv-array-defrag")

example
-------

### defrag


    var arr = [1,0,11,12,0,0,13]

    > ary_defrag.defrag(arr,0)
    Map(4) { 0 => 0, 2 => 1, 3 => 2, 6 => 3 }
    > arr
    [
      1, 11, 12, 13,
      0,  0,  0
    ]
    >

### defrag\_with\_st


    var arr = [1,0,11,12,null,undefined,13]

    ary_defrag.defrag_with_st(arr,new Set([0,null,undefined]),undefined)
    > ary_defrag.defrag_with_st(arr,new Set([0,null,undefined]),undefined)
    Map(4) { 0 => 0, 2 => 1, 3 => 2, 6 => 3 }
    > arr
    [ 1, 11, 12, 13, undefined, undefined, undefined ]
    >

API
====

- ary\_defrag.defrag(arr,empty=undefined)
- ary\_defrag.defrag\_with\_st(arr,empty\_set,empty=undefined)        


LICENSE
=======
- MIT



