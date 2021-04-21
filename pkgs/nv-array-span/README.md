nv-array-span
============
- nv-array-span 


install
=======
- npm install nv-array-span 

usage
=====
    
example
-------

    const ary_span = require("nv-array-span")

    ary_span.pair([1,2,3,4])
    //[ [ 1, 2 ], [ 3, 4 ] ]
    
    ary_span.interval([1,2,3,4,5,6,7],3)
    //[ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
    
    
    
    
    ary_span.range(6,1,3,5)
    //[ [ 0, 1 ], [ 1, 3 ], [ 3, 5 ], [ 5, 6 ] ]
    
    
    var spans = [[0,3],[4,7],[8,10],[17,20]]
    ary_span.fullfill(spans)
    /*
    [
      [ 0, 3 ],
      [ 3, 4 ],
      [ 4, 7 ],
      [ 7, 8 ],
      [ 8, 10 ],
      [ 10, 17 ],
      [ 17, 20 ]
    ]
    
    */
    
    var spans = [[1,3],[4,7],[8,10],[17,20]]
    ary_span.supplement(spans)
    //[ [ 0, 1 ], [ 3, 4 ], [ 7, 8 ], [ 10, 17 ] ]
    
    
    var arr = [1,5,6,7,8,13,14,18,30,31,32,33,34,40]
    ary_span.compress(arr)
    //[ [ 1, 2 ], [ 5, 9 ], [ 13, 15 ], [ 18, 19 ], [ 30, 35 ],[40,41] ]
    var arr = [1,5,6,7,8,13,14,18,30,31,32,33,34,40,41]
    ary_span.compress(arr)
    //[ [ 1, 2 ], [ 5, 9 ], [ 13, 15 ], [ 18, 19 ], [ 30, 35 ], [ 40, 42 ] ]
    
    
    var spans = [ [ 1, 2 ], [ 5, 9 ], [ 13, 15 ], [ 18, 19 ], [ 30, 35 ],[40,41] ]
    ary_span.uncompress(spans)
    //[1,5,6,7,8,13,14,18,30,31,32,33,34,40]


API
====

- ary\_span.pair(arr)
- ary\_span.interval(arr,interval)
- ary\_span.range(max\_length,...indexes)
- ary\_span.fullfill(spans)
- ary\_span.supplement(spans)
- ary\_span.compress(arr)
- ary\_span.uncompress(spans)

LICENSE
=======
- ISC 
