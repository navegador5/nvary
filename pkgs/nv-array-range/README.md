nv-array-range
============
- nv-array-range 
- subview and range of array

install
=======
- npm install nv-array-range 

usage
=====

     const {Range,shuffle} = require("./index");

        
example
-------

    var ary = [10,20,30,40,50,60,70,80]
    var range = new Range(ary)


    > range
    {
      ranges: [
          [0,8)
      ],
      view: [
        10, 20, 30, 40,
        50, 60, 70, 80
      ],
      ary: [
        10, 20, 30, 40,
        50, 60, 70, 80
      ]
    }
    >

    > range.popat(3)
    40
    > range
    {
      ranges: [
          [0,3),
          [4,8)
      ],
      view: [
        10, 20, 30, 50,
        60, 70, 80
      ],
      ary: [
        10, 20, 30, 40,
        50, 60, 70, 80
      ]
    }
    >

    > range.popat(3)
    Symbol(noexist)
    >
    > range.popat(6)
    70
    > range
    {
      ranges: [
          [0,3),
          [4,6),
          [7,8)
      ],
      view: [ 10, 20, 30, 50, 60, 80 ],
      ary: [
        10, 20, 30, 40,
        50, 60, 70, 80
      ]
    }
    >

    > range.popat(2)
    30
    > range.popat(5)
    60
    > range.popat(4)
    50
    > range
    {
      ranges: [
          [0,2),
          [7,8)
      ],
      view: [ 10, 20, 80 ],
      ary: [
        10, 20, 30, 40,
        50, 60, 70, 80
      ]
    }
    >

METHODS
=======

    range.ary_                  range.constructor           range.popat
    range.rngs_                 range.slcs_                 range.view_
    range.vwlength_



API
====

- ary\_rng.noexist
- ary\_rng.Range(ary,si,ei)
- ary\_rng.shuffle(ary)

LICENSE
=======
- ISC 
