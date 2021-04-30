nv-array-match
==============
- nv-array-match 
- partial order match with str/regexp/function

install
=======
- npm install nv-array-match

usage
=====

    const {
        po_all_pos,
        po_all_match,
        po_gen_pos,
        po_gen_match,
        po_is_match
    } = require("nv-array-match")

    
example
-------

    const {
        po_all_pos,
        po_all_match,
        po_gen_pos,
        po_gen_match,
        po_is_match
    } = require("./index")

    var data_ary =   ["a","A","a","B","6","888"]
    var matches = ["a",(r,i)=>r==="A"||r==="B",/[0-9]+/]

    > po_all_match(data_ary,matches)
    [
      [ 'a', 'A', '6' ],
      [ 'a', 'B', '6' ],
      [ 'a', 'B', '6' ],
      [ 'a', 'A', '888' ],
      [ 'a', 'B', '888' ],
      [ 'a', 'B', '888' ]
    ]
    > po_all_pos(data_ary,matches)
    [
      [ 0, 1, 4 ],
      [ 0, 3, 4 ],
      [ 2, 3, 4 ],
      [ 0, 1, 5 ],
      [ 0, 3, 5 ],
      [ 2, 3, 5 ]
    ]
    > var g = po_gen_match(data_ary,matches)
    undefined
    > g.next()
    { value: [ 'a', 'A', '6' ], done: false }
    > g.next()
    { value: [ 'a', 'B', '6' ], done: false }
    > g.next()
    { value: [ 'a', 'B', '6' ], done: false }
    > g.next()
    { value: [ 'a', 'A', '888' ], done: false }
    > g.next()
    { value: [ 'a', 'B', '888' ], done: false }
    > g.next()
    { value: [ 'a', 'B', '888' ], done: false }
    > g.next()
    { value: undefined, done: true }
    >


MATCHES
=======
    type F  = (r:any,i:number)=>boolean
    type SP =  string | RegExp | Set | Array<any> | F
    type SPS = Array<SP>

API
====

- ary\_mch.po\_all\_pos(data:Array<any>,matches:Array<SP>):Array<Array<number>>
- ary\_mch.po\_all\_match(data:Array<any>,matches:Array<SP>):Array<Array<any>>
- ary\_mch.po\_gen\_pos(data:Array<any>,matches:Array<SP>):Generator
- ary\_mch.po\_gen\_match(data:Array<any>,matches:Array<SP>):Generator
- ary\_mch.po\_is\_match(data:Array<any>,matches:Array<SP>):Boolean

LICENSE
=======
- ISC 
