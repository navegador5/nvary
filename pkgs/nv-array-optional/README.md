nv-array-optional
============
- nv-array-optional 
- used to format function arguments name

install
=======
- npm install nv-array-optional 

usage
=====
    
example
-------

### ordered

    var ary              = ['A','B','C','D']
    var opt_idxs         = [1,3]
    var with_placeholder = false
    
    var g = gen_ordered(ary,opt_idxs,with_placeholder)
    
    /*
    > Array.from(g)
    [
      [ 'A', 'C' ],
      [ 'A', 'C', 'D' ],
      [ 'A', 'B', 'C' ],
      [ 'A', 'B', 'C', 'D' ]
    ]
    >
    
    */
    
    
    var ary              = ['A','B','C','D']
    var is_optional      = [false,true,false,true]
    var with_placeholder = true
    var placeholder      = null 
    
    
    var g = gen_ordered(ary,opt_idxs,with_placeholder,placeholder)
    
    /*
    [
      [ 'A', null, 'C', null ],
      [ 'A', null, 'C', 'D' ],
      [ 'A', 'B', 'C', null ],
      [ 'A', 'B', 'C', 'D' ]
    ]
    
    */

### unordered


    var ary              = ['A','B','C','D']
    var opt_idxs         = [1,3]
    var with_placeholder = false
    
    var g = gen_unordered(ary,opt_idxs,with_placeholder)
    
    /*
    > var rslt = Array.from(g)
    > rslt.every(r=>r.includes('A')&&r.includes('C'))
    true
    >

    [
      [ 'A', 'C' ],           [ 'A', 'C', 'D' ],      [ 'A', 'B', 'C' ],
      [ 'A', 'B', 'C', 'D' ], [ 'A', 'C' ],           [ 'A', 'D', 'C' ],
      [ 'A', 'B', 'C' ],      [ 'A', 'B', 'D', 'C' ], [ 'A', 'C' ],
      [ 'A', 'C', 'D' ],      [ 'A', 'C', 'B' ],      [ 'A', 'C', 'B', 'D' ],
      [ 'A', 'C' ],           [ 'A', 'B', 'C' ],      [ 'A', 'D', 'C' ],
      [ 'A', 'D', 'B', 'C' ], [ 'A', 'C' ],           [ 'A', 'C', 'B' ],
      [ 'A', 'C', 'D' ],      [ 'A', 'C', 'D', 'B' ], [ 'A', 'C' ],
      [ 'A', 'C', 'B' ],      [ 'A', 'D', 'C' ],      [ 'A', 'D', 'C', 'B' ],
      [ 'A', 'C' ],           [ 'A', 'C', 'D' ],      [ 'B', 'A', 'C' ],
      [ 'B', 'A', 'C', 'D' ], [ 'A', 'C' ],           [ 'A', 'D', 'C' ],
      [ 'B', 'A', 'C' ],      [ 'B', 'A', 'D', 'C' ], [ 'C', 'A' ],
      [ 'C', 'A', 'D' ],      [ 'C', 'A', 'B' ],      [ 'C', 'A', 'B', 'D' ],
      [ 'A', 'C' ],           [ 'A', 'B', 'C' ],      [ 'D', 'A', 'C' ],
      [ 'D', 'A', 'B', 'C' ], [ 'C', 'A' ],           [ 'C', 'A', 'B' ],
      [ 'C', 'A', 'D' ],      [ 'C', 'A', 'D', 'B' ], [ 'A', 'C' ],
      [ 'A', 'C', 'B' ],      [ 'D', 'A', 'C' ],      [ 'D', 'A', 'C', 'B' ],
      [ 'C', 'A' ],           [ 'C', 'A', 'D' ],      [ 'B', 'C', 'A' ],
      [ 'B', 'C', 'A', 'D' ], [ 'A', 'C' ],           [ 'D', 'A', 'C' ],
      [ 'B', 'A', 'C' ],      [ 'B', 'D', 'A', 'C' ], [ 'C', 'A' ],
      [ 'C', 'A', 'D' ],      [ 'C', 'B', 'A' ],      [ 'C', 'B', 'A', 'D' ],
      [ 'A', 'C' ],           [ 'B', 'A', 'C' ],      [ 'D', 'A', 'C' ],
      [ 'D', 'B', 'A', 'C' ], [ 'C', 'A' ],           [ 'C', 'A', 'B' ],
      [ 'C', 'D', 'A' ],      [ 'C', 'D', 'A', 'B' ], [ 'C', 'A' ],
      [ 'C', 'A', 'B' ],      [ 'D', 'C', 'A' ],      [ 'D', 'C', 'A', 'B' ],
      [ 'C', 'A' ],           [ 'C', 'D', 'A' ],      [ 'B', 'C', 'A' ],
      [ 'B', 'C', 'D', 'A' ], [ 'C', 'A' ],           [ 'D', 'C', 'A' ],
      [ 'B', 'C', 'A' ],      [ 'B', 'D', 'C', 'A' ], [ 'C', 'A' ],
      [ 'C', 'D', 'A' ],      [ 'C', 'B', 'A' ],      [ 'C', 'B', 'D', 'A' ],
      [ 'C', 'A' ],           [ 'B', 'C', 'A' ],      [ 'D', 'C', 'A' ],
      [ 'D', 'B', 'C', 'A' ], [ 'C', 'A' ],           [ 'C', 'B', 'A' ],
      [ 'C', 'D', 'A' ],      [ 'C', 'D', 'B', 'A' ], [ 'C', 'A' ],
      [ 'C', 'B', 'A' ],      [ 'D', 'C', 'A' ],      [ 'D', 'C', 'B', 'A' ]
    ]
    */
    
    
    var ary              = ['A','B','C','D']
    var is_optional      = [false,true,false,true]
    var with_placeholder = true
    var placeholder      = null 
    
    
    var g = gen_unordered(ary,opt_idxs,with_placeholder,placeholder)
    
    /*
    [
      [ 'A', null, 'C', null ], [ 'A', null, 'C', 'D' ],  [ 'A', 'B', 'C', null ],
      [ 'A', 'B', 'C', 'D' ],   [ 'A', null, null, 'C' ], [ 'A', null, 'D', 'C' ],
      [ 'A', 'B', null, 'C' ],  [ 'A', 'B', 'D', 'C' ],   [ 'A', 'C', null, null ],
      [ 'A', 'C', null, 'D' ],  [ 'A', 'C', 'B', null ],  [ 'A', 'C', 'B', 'D' ],
      [ 'A', null, null, 'C' ], [ 'A', null, 'B', 'C' ],  [ 'A', 'D', null, 'C' ],
      [ 'A', 'D', 'B', 'C' ],   [ 'A', 'C', null, null ], [ 'A', 'C', null, 'B' ],
      [ 'A', 'C', 'D', null ],  [ 'A', 'C', 'D', 'B' ],   [ 'A', null, 'C', null ],
      [ 'A', null, 'C', 'B' ],  [ 'A', 'D', 'C', null ],  [ 'A', 'D', 'C', 'B' ],
      [ null, 'A', 'C', null ], [ null, 'A', 'C', 'D' ],  [ 'B', 'A', 'C', null ],
      [ 'B', 'A', 'C', 'D' ],   [ null, 'A', null, 'C' ], [ null, 'A', 'D', 'C' ],
      [ 'B', 'A', null, 'C' ],  [ 'B', 'A', 'D', 'C' ],   [ 'C', 'A', null, null ],
      [ 'C', 'A', null, 'D' ],  [ 'C', 'A', 'B', null ],  [ 'C', 'A', 'B', 'D' ],
      [ null, 'A', null, 'C' ], [ null, 'A', 'B', 'C' ],  [ 'D', 'A', null, 'C' ],
      [ 'D', 'A', 'B', 'C' ],   [ 'C', 'A', null, null ], [ 'C', 'A', null, 'B' ],
      [ 'C', 'A', 'D', null ],  [ 'C', 'A', 'D', 'B' ],   [ null, 'A', 'C', null ],
      [ null, 'A', 'C', 'B' ],  [ 'D', 'A', 'C', null ],  [ 'D', 'A', 'C', 'B' ],
      [ null, 'C', 'A', null ], [ null, 'C', 'A', 'D' ],  [ 'B', 'C', 'A', null ],
      [ 'B', 'C', 'A', 'D' ],   [ null, null, 'A', 'C' ], [ null, 'D', 'A', 'C' ],
      [ 'B', null, 'A', 'C' ],  [ 'B', 'D', 'A', 'C' ],   [ 'C', null, 'A', null ],
      [ 'C', null, 'A', 'D' ],  [ 'C', 'B', 'A', null ],  [ 'C', 'B', 'A', 'D' ],
      [ null, null, 'A', 'C' ], [ null, 'B', 'A', 'C' ],  [ 'D', null, 'A', 'C' ],
      [ 'D', 'B', 'A', 'C' ],   [ 'C', null, 'A', null ], [ 'C', null, 'A', 'B' ],
      [ 'C', 'D', 'A', null ],  [ 'C', 'D', 'A', 'B' ],   [ null, 'C', 'A', null ],
      [ null, 'C', 'A', 'B' ],  [ 'D', 'C', 'A', null ],  [ 'D', 'C', 'A', 'B' ],
      [ null, 'C', null, 'A' ], [ null, 'C', 'D', 'A' ],  [ 'B', 'C', null, 'A' ],
      [ 'B', 'C', 'D', 'A' ],   [ null, null, 'C', 'A' ], [ null, 'D', 'C', 'A' ],
      [ 'B', null, 'C', 'A' ],  [ 'B', 'D', 'C', 'A' ],   [ 'C', null, null, 'A' ],
      [ 'C', null, 'D', 'A' ],  [ 'C', 'B', null, 'A' ],  [ 'C', 'B', 'D', 'A' ],
      [ null, null, 'C', 'A' ], [ null, 'B', 'C', 'A' ],  [ 'D', null, 'C', 'A' ],
      [ 'D', 'B', 'C', 'A' ],   [ 'C', null, null, 'A' ], [ 'C', null, 'B', 'A' ],
      [ 'C', 'D', null, 'A' ],  [ 'C', 'D', 'B', 'A' ],   [ null, 'C', null, 'A' ],
      [ null, 'C', 'B', 'A' ],  [ 'D', 'C', null, 'A' ],  [ 'D', 'C', 'B', 'A' ]
    ]
    */


API
====

- ary\_opt.gen\_ordered(ary,opt\_idxs,with\_placeholder=false,placeholder=null) 
- ary\_opt.ordered(ary,opt\_idxs,with\_placeholder=false,placeholder=null)
- ary\_opt.gen\_unordered(ary,opt\_idxs,with\_placeholder=false,placeholder=null)
- ary\_opt.unordered(ary,opt\_idxs,with\_placeholder=false,placeholder=null)

LICENSE
=======
- ISC 
