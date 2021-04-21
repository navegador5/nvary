nv-array-swap
============
- nv-array-swap 


install
=======
- npm install nv-array-swap 

usage
=====
    
example
-------

    const ary_swap = require("nv-array-swap")

    ary_swap.iswap([10,20,30,40],0,3)
    //[ 40, 20, 30, 10 ]
    ary_swap.vswap([10,20,30,40],10,40)
    //[ 40, 20, 30, 10 ]
    ary_swap.viswap([10,20,30,40],{i:1,v:10},{i:3,v:40})
    //[ 10, 20, 30, 40 ]
    ary_swap.viswap([10,20,30,40],{i:0,v:10},{i:3,v:40})
    //[ 40, 20, 30, 10 ]
    
    ary_swap.reindex([10,20,30,40],1,0,3,2)
    //[ 20, 10, 40, 30 ] 
    // 0->1 , 1->0 2->3,3->2

API
====

- ary\_swap.iswap(arr,i0,i1)
- ary\_swap.vswap(arr,v0,v1)
- ary\_swap.viswap(arr,d0,d1)  // d={i:index,v:value}
- ary\_swap.reindex(arr,...whiches)


LICENSE
=======
- ISC 
