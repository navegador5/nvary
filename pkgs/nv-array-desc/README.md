nv-array-desc
============
- nv-array-desc 


install
=======
- npm install nv-array-desc 

usage
=====
    
example
-------

    const ary_desc = require("nv-array-desc")

    var arr = ["resolve","reject"]
    ary_desc.mdict(arr)
    //{ '0': 'resolve', '1': 'reject', resolve: '0', reject: '1' }
    ary_desc.ivdict(arr)
    //{ '0': 'resolve', '1': 'reject' }
    ary_desc.vidict(arr)
    //{ resolve: '0', reject: '1' }
    ary_desc.vldict(["a","b","c","b"])
    //{ a: [ 0 ], b: [ 1, 3 ], c: [ 2 ] }



API
====

- ary\_vldict(arr)
- ary\_vidict(arr)
- ary\_ivdict(arr)
- ary\_mdict(arr,,pri\_key="i")


LICENSE
=======
- ISC 
