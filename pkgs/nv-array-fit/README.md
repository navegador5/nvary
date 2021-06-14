nv-array-fit
============
- nv-array-fit 
- similiar to regexp, but using function to define-pattern

install
=======
- npm install nv-array-fit 

usage
=====

    const {Desc,gen,get_all_match,get_fst_match} = require("nv-array-fit")

    interface Desc {
         cond:(ele:any):boolean=>{}                     //the match-pattern function
         min:number;                                   //the min-times of corresponding pattern-match
         max:number;                                   //the max-times of corresponding pattern-match
    }

        
example
-------

    var ary = Array.from("aaabbcccdd")


    var descs = [
        new Desc((r)=>r==='a' || r ==='b',1,5),
        new Desc((r)=>r==='b' || r ==='c',0,3),
        new Desc((r)=>r==='c' || r ==='d',0,Infinity)
    ]
    
    
    > descs[0]
    Desc { cond: [Function (anonymous)], min: 1, max: 5 }
    >
    > descs[1]
    Desc { cond: [Function (anonymous)], min: 0, max: 3 }
    >
    > descs[2]
    Desc { cond: [Function (anonymous)], min: 0, max: Infinity }
    >
    
    > var matches = get_all_match(descs,ary)
    
    > matches
    [
      [ [ 'a', 'a', 'a' ], [ 'b', 'b' ], [ 'c', 'c', 'c', 'd', 'd' ] ],
      [ [ 'a', 'a', 'a' ], [ 'b', 'b', 'c' ], [ 'c', 'c', 'd', 'd' ] ],
      [ [ 'a', 'a', 'a', 'b' ], [ 'b' ], [ 'c', 'c', 'c', 'd', 'd' ] ],
      [ [ 'a', 'a', 'a', 'b' ], [ 'b', 'c' ], [ 'c', 'c', 'd', 'd' ] ],
      [ [ 'a', 'a', 'a', 'b' ], [ 'b', 'c', 'c' ], [ 'c', 'd', 'd' ] ],
      [ [ 'a', 'a', 'a', 'b', 'b' ], [], [ 'c', 'c', 'c', 'd', 'd' ] ],
      [ [ 'a', 'a', 'a', 'b', 'b' ], [ 'c' ], [ 'c', 'c', 'd', 'd' ] ],
      [ [ 'a', 'a', 'a', 'b', 'b' ], [ 'c', 'c' ], [ 'c', 'd', 'd' ] ],
      [ [ 'a', 'a', 'a', 'b', 'b' ], [ 'c', 'c', 'c' ], [ 'd', 'd' ] ]
    ]
    >
    > matches.map(e=>e.map(r=>r.join("")).join("-"))
    [
      'aaa-bb-cccdd',
      'aaa-bbc-ccdd',
      'aaab-b-cccdd',
      'aaab-bc-ccdd',
      'aaab-bcc-cdd',
      'aaabb--cccdd',
      'aaabb-c-ccdd',
      'aaabb-cc-cdd',
      'aaabb-ccc-dd'
    ]
    >



API
====

- ary\_fit.Desc
- ary\_fit.gen(descs,input\_array)
- ary\_fit.get\_all\_match(descs,input\_array)
- ary\_fit.get\_fst\_match(descs,input\_array)

RESTRICT
========

- this tool did NOT using NFA/DFA
- it just enum all possible match and-then do the test
- so it is SLOW  if the input-array too large
- it is suitable for function-params-pattern parse in macro-like tool

LICENSE
=======
- ISC 
