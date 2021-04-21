nv-array-include
============
- nv-array-include 


install
=======
- npm install nv-array-include 

usage
=====
    
example
-------

    const ary_clu = require("nv-array-include")

    > ary_clu.start_with([1,2,3,4,5],[1,2])
    true
    > ary_clu.start_with([1,2,3,4,5],[10])
    false
    >
    > ary_clu.end_with([1,2,3,4,5],[4,5])
    true
    >
    > ary_clu.strict_include([1,2,3,4,5],[2,3,4])
    true
    > ary_clu.strict_include([1,2,3,4,5],[1,3,4])
    false
    >
    > ary_clu.loose_include([1,2,3,4,5],[1,3,4])
    true
    >


API
====

- ary\_clu.start\_with(arr,l) 
- ary\_clu.end\_with(arr,l) 
- ary\_clu.strict\_include(arr,l) 
- ary\_clu.loose\_include(arr,l)

LICENSE
=======
- ISC 
