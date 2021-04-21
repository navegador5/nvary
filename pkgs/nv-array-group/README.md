nv-array-group
============
- nv-array-group 


install
=======
- npm install nv-array-group 

usage
=====
    
example
-------

    const ary_grp = require("nv-array-group")

    var arr = [1,2,3,4,5,6,7,8]
    var m = ary_grp.fgrpvi(arr,r=>r%3)
    
    /*
    Map {
      1 => [ { i: 0, v: 1 }, { i: 3, v: 4 }, { i: 6, v: 7 } ],
      2 => [ { i: 1, v: 2 }, { i: 4, v: 5 }, { i: 7, v: 8 } ],
      0 => [ { i: 2, v: 3 }, { i: 5, v: 6 } ]
    }
    
    */
    var arr = [1,2,3,4,5,6,7,8]
    var m = ary_grp.fgrpi(arr,r=>r%3)
    //Map { 1 => [ 0, 3, 6 ], 2 => [ 1, 4, 7 ], 0 => [ 2, 5 ] }
    
    var arr = [1,2,3,4,5,6,7,8]
    var m = ary_grp.fgrpv(arr,r=>r%3)
    //Map { 1 => [ 1, 4, 7 ], 2 => [ 2, 5, 8 ], 0 => [ 3, 6 ] }
    
    
    
    var arr = [1,5,8,2,5,2,7,8]
    var m = ary_grp.vgrpvi(arr)
    /*
    Map {
      1 => [ { i: 0, v: 1 } ],
      5 => [ { i: 1, v: 5 }, { i: 4, v: 5 } ],
      8 => [ { i: 2, v: 8 }, { i: 7, v: 8 } ],
      2 => [ { i: 3, v: 2 }, { i: 5, v: 2 } ],
      7 => [ { i: 6, v: 7 } ]
    }
    */
    var arr = [1,5,8,2,5,2,7,8]
    var m = ary_grp.vgrpi(arr)
    /*
    > m
    Map {
      1 => [ 0 ],
      5 => [ 1, 4 ],
      8 => [ 2, 7 ],
      2 => [ 3, 5 ],
      7 => [ 6 ]
    }
    >
    */
    
    var arr = [1,5,8,2,5,2,7,8]
    var m = ary_grp.vgrpv(arr)
    /*
    Map {
      1 => [ 1 ],
      5 => [ 5, 5 ],
      8 => [ 8, 8 ],
      2 => [ 2, 2 ],
      7 => [ 7 ]
    }
    
    */
    
    
    var arr = ['a','ab','ccc','f','g','xxx',7,8]
    var m = ary_grp.lgrpvi(arr)
    
    /*
    > m
    Map {
      1 => [ { i: 0, v: 'a' }, { i: 3, v: 'f' }, { i: 4, v: 'g' } ],
      2 => [ { i: 1, v: 'ab' } ],
      3 => [ { i: 2, v: 'ccc' }, { i: 5, v: 'xxx' } ],
      undefined => [ { i: 6, v: 7 }, { i: 7, v: 8 } ]
    }
    >
    */
    
    var m = ary_grp.lgrpv(arr)
    /*
    > m
    Map {
      1 => [ 'a', 'f', 'g' ],
      2 => [ 'ab' ],
      3 => [ 'ccc', 'xxx' ],
      undefined => [ 7, 8 ]
    }
    >
    */
    
    var m = ary_grp.lgrpi(arr)
    /*
    > m
    Map {
      1 => [ 0, 3, 4 ],
      2 => [ 1 ],
      3 => [ 2, 5 ],
      undefined => [ 6, 7 ]
    }
    >
    */


API
====

- ary\_grp.fgrpvi(arr,func,...func\_params)
- ary\_grp.fgrpi(arr,func,...func\_params)
- ary\_grp.fgrpv(arr,func,...func\_params)
- ary\_grp.vgrpvi(arr,...func\_params)
- ary\_grp.vgrpi(arr,...func\_params)
- ary\_grp.vgrpv(arr,...func\_params)
- ary\_grp.lgrpvi(arr)
- ary\_grp.lgrpi(arr)
- ary\_grp.lgrpv(arr)


LICENSE
=======
- ISC 
