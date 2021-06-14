nv-array-oper
=============
- nv-array-oper 
- to avoid use operator

install
=======
- npm install nv-array-oper 

usage
=====
    
example
-------

    const ary_oper = require("nv-array-oper")

    > ary_op.add([1,2,3])
    6
    > ary_op.sub([6,2,1])
    3
    > ary_op.mul([6,2,1])
    12
    > ary_op.div([6,2,2])
    1.5
    > ary_op.power([2,2,2])
    16
    > ary_op.rem([15,8,4])
    3
    > ary_op.quo([27,8])
    3
    > ary_op.quo([27,8,2])
    1
    >
    
    > ary_op.band([0b1111,0b1110,0b0110])
    6
    >
    > ary_op.bor([0b1111,0b1110,0b0110])
    15
    >
    
    > ary_op.bxor([0b1111,0b1110,0b0110])
    7
    >
    
    > ary_op.land([1,0,1])
    0
    > ary_op.lor([1,0,1])
    1
    >
    
    
    > ary_op.ternary([false,'A',false,'B','C'])
    'C'
    >


API
====

    {
      add: [Function: add],
      sub: [Function: sub],
      mul: [Function: mul],
      div: [Function: div],
      power: [Function: power],
      rem: [Function: rem],
      quo: [Function: quo],
      band: [Function: band],
      bor: [Function: bor],
      bxor: [Function: bxor],
      land: [Function: land],
      lor: [Function: lor],
      lshift: [Function: lshift],
      rshift: [Function: rshift],
      urshift: [Function: urshift],
      deq: [Function: deq],
      teq: [Function: teq],
      dneq: [Function: dneq],
      tneq: [Function: tneq],
      gt: [Function: gt],
      ge: [Function: ge],
      lt: [Function: lt],
      le: [Function: le],
      '$in': [Function: $in],
      '$instanceof': [Function: $instanceof],
      comma: [Function: comma],
      ternary: [Function: ternary],
      nc: [Function: nc]
    }



LICENSE
=======
- ISC 
