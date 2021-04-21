nv-array-slide
============
- nv-array-slide 


install
=======
- npm install nv-array-slide 

usage
=====
    
example
-------

    const ary_sld = require("nv-array-slide")
 
    var basearr = [1,2,3,4,2,3,5]
    var slider = [2,3]
    
    
    var g = ary_sld.slide_from_fst(basearr,slider)
    
    > g.next()
    { value: [ 1, 3 ], done: false }
    > g.next()
    { value: [ 4, 6 ], done: false }
    > g.next()
    { value: undefined, done: true }
    >
    
    var g = ary_sld.slide_from_fst(basearr,slider)
    Array.from(g)
    //[[1,3],[4,6]]
    
    var g = ary_sld.slide_from_lst(basearr,slider)
    Array.from(g)
    //[[4,6],[1,3]]
    
    ary_sld.has(basearr,slider)
    //true
    ary_sld.has([1,2,3],[2,3,4])
    //false 

API
====
- ary\_sld.slide\_from\_fst(basearr,slider)
- ary\_sld.slide\_from\_lst(basearr,slider)
- ary\_sld.has(basearr,slider)


LICENSE
=======
- ISC 
