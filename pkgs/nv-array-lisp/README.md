nv-array-lisp
============
- nv-array-lisp 
- simulate several basic-lisp-functions
- for test dynamic-module-methods 


install
=======
- npm install nv-array-lisp 

usage
=====
   
    const ary_lisp = require("nv-array-lisp");

    
example
-------

    > ary_lisp
    Proxy [
      {
            noexist: Symbol(noexist),
            is_nil: [Function: is_nil],
            cons_ary: [Function: cons_ary],
            cons_ele: [Function: cons_ele],
            car: [Function: car],
            cdr: [Function: cdr],
            cxr: [Function: cxr],
            /^c[ad]{2,}r$/: [Function: /^c[ad]{2,}r$/]
      },
      { get: [Function: get] }
    ]
    >
    
    > ary_lisp.car([1,2,3])
    1
    > ary_lisp.cdr([1,2,3])
    [ 2, 3 ]
    > ary_lisp.cdddr([1,2,3,4,5])
    [ 4, 5 ]
    > ary_lisp.caddr([1,2,3,4,5])
    3
    > ary_lisp.cdr([1,2,3,4,5])
    [ 2, 3, 4, 5 ]
    > ary_lisp.cdr([2,3,4,5])
    [ 3, 4, 5 ]
    > ary_lisp.car([3,4,5])
    3
    >

    > ary_lisp.cddddddddr([1,2,3,4,5,6,7,8,9,10])
    [ 9, 10 ]
    >


    > nestize([1,2,3,4])
    [ 1, [ 2, [ 3, [Array] ] ] ]
    >
    > JSON.stringify(x)
    '[1,[2,[3,[4,[]]]]]'


API
====
- ary\_lisp.noexist
- ary\_lisp.is\_nil(ary)
- ary\_lisp.car(ary)
- ary\_lisp.cdr(ary)
- ary\_lisp.cxr(cmd,ary)
- ary\_lisp.cons\_ele(ele0,ele1)
- ary\_lisp.cons\_ary(ele0,ary)

- ary\_lisp./^c[ad]{2,}r$/(ary)

- ary\_lisp.nestize(ary)

LICENSE
=======
- ISC 
