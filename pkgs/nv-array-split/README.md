nv-array-split
============
- nv-array-split 


install
=======
- npm install nv-array-split 

usage
=====

    const {
        all,
        cond,
        rng,
        slc,
        join,
    } = require("nv-array-split")

    
example
-------


    var arr = Array.from("example")

    var sps = [/[aieou]/,"m",(r,i)=>r==='p'||r==='l']



    > slc(arr,sps)
    [ [ 'e' ], [ 'x' ], [ 'a' ], [ 'm' ], [ 'p', 'l' ], [ 'e' ] ]
    >
    > rng(arr,sps)
    [ [ 0, 1 ], [ 1, 2 ], [ 2, 3 ], [ 3, 4 ], [ 4, 6 ], [ 6, 7 ] ]
    >

    > join(arr,sps,'-')
    [ 'e', 'x', 'a', 'm', 'p-l', 'e' ]
    >

    > cond(arr,sps)
    [
      /[aieou]/,
      undefined,
      /[aieou]/,
      'm',
      [Function (anonymous)],
      /[aieou]/
    ]
    >
    > cond(arr,sps)[4].toString()
    "(r,i)=>r==='p'||r==='l'"
    >


    > all(arr,sps)
    [
      [ 0, 1, 0 ],
      [ 1, 2, 3 ],
      [ 2, 3, 0 ],
      [ 3, 4, 1 ],
      [ 4, 6, 2 ],
      [ 6, 7, 0 ]
    ]
    >

SPS
====
    type F  = (r:any,i:number)=>boolean
    type SP =  string | RegExp | Set | Array<any> | F
    type SPS = Array<SP>

API
====

- ary\_sp.all(arr,sps)
- ary\_sp.cond(arr,sps)
- ary\_sp.slc(arr,sps)
- ary\_sp.rng(arr,sps)
- ary\_sp.join(arr,sps,delimeter='')

LICENSE
=======
- ISC 
