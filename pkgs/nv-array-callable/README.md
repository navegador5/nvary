nv-array-callable
============
- nv-array-callable is a simple util 
- creat a callable-array-like ,could be used in some special FP senarios, hard to explain
- it just make a inputed-function to Array-Like,and also keep the inputed-function's original function


install
=======
- npm install nv-array-callable 

usage
=====
    
example
-------
    
    const creat_carr = require("nv-array-callable")

    > var arr = creat_carr(()=>{console.log("this is a array")})
    undefined
    > arr
    [Function] Array
    > arr.from([1,2,3,4,5])
    undefined
    > arr
    [Function] Array { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
    > arr.push(888)
    6
    > arr
    [Function] Array { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 888 }
    >
    > arr.reverse()
    [Function] Array { '0': 888, '1': 5, '2': 4, '3': 3, '4': 2, '5': 1 }
    >
    
    > arr()
    this is a array


API
====
- ary\_callable.creat\_carr(f)

METHODS
=======


    arr.concat                arr.constructor           arr.copyWithin            arr.entries               arr.every
    arr.fill                  arr.filter                arr.find                  arr.findIndex             arr.flat
    arr.flatMap               arr.forEach               arr.includes              arr.indexOf               arr.join
    arr.keys                  arr.lastIndexOf           arr.map                   arr.pop                   arr.push
    arr.reduce                arr.reduceRight           arr.reverse               arr.shift                 arr.slice
    arr.some                  arr.sort                  arr.splice                arr.toLocaleString        arr.toString
    arr.unshift               arr.values

    arr.clear                 arr.from                  arr.length                arr.name                  arr.of


LICENSE
=======
- ISC 
