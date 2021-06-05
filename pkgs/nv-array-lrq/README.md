nv-array-lrq
============
- nv-array-lrq 


install
=======
- npm install nv-array-lrq 

usage
=====
    
example
-------

    const {parse} = require("nv-array-lrq")


    var lrpair = {
        "<<":">>",
        "[[":"]]",
    }

    var rlpair = {
        ">>":"<<",
        "]]":"[[",
    }

    var cfg = {
        name:"QuotedTok",
        type: 100,
        agg_func:(content_ary) => content_ary.join(""),
        is_raw:r=>(typeof(r)==='string'),
        is_lq:(r)=> (r==="<<") || (r==="[["),
        is_rq:(r)=> (r===">>") || (r==="]]"),
        is_lq_of:(l,r) => (lrpair[l]===r),
        is_rq_of:(r,l) => (rlpair[r]===l),
    }

    var arr = [
       "xxx","yyy",
       "<<","a","b","c",">>",
       "xxx","yyy",
       "[[","a","<<","b",">>","c","]]",
       "zzz"
    ]


    var [rslt,lefted] = parse(arr,cfg)
    [
      [
        'xxx',
        'yyy',
        QuotedTok { type: 100, lq: '<<', rq: '>>', content: 'abc' },
        'xxx',
        'yyy',
        QuotedTok { type: 100, lq: '[[', rq: ']]', content: 'a<<b>>c' },
        'zzz'
      ],
      []
    ]
    >



API
====
- ary\_lrq.parse(arr,cfg)
- ary\_lrq.CFG\_TEMPLATE


LICENSE
=======
- ISC 
