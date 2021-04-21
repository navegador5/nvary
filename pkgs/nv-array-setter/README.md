nv-array-setter
============
- nv-array-setter 


install
=======
- npm install nv-array-setter 

usage
=====
    
example
-------


    >     var arr = [10,11,12,13,14,15,16]
    >     ary_setter.all(arr,'a')
    >     arr
    [
      'a', 'a', 'a',
      'a', 'a', 'a',
      'a'
    ]
    >
    >     var arr = [10,11,12,13,14,15,16]
    >     ary_setter.odd(arr,'a')
    >     arr
    [
      10, 'a', 12, 'a',
      14, 'a', 16
    ]
    >
    >     var arr = [10,11,12,13,14,15,16]
    >     ary_setter.even(arr,'a')
    >     arr
    [
      'a', 11, 'a', 13,
      'a', 15, 'a'
    ]
    >
    >     var arr = [10,11,12,13,14,15,16]
    >     ary_setter.interval(arr,2,3,'a')
    [
      10, 11,  'a', 13,
      14, 'a', 16
    ]
    >     arr
    [
      10, 11,  'a', 13,
      14, 'a', 16
    ]
    >
    >
    >     var arr = [10,11,12,13,14,15,16]
    >     ary_setter.some(arr,'a',2,4)
    [
      10,  11, 'a', 13,
      'a', 15, 16
    ]
    >     arr
    [
      10,  11, 'a', 13,
      'a', 15, 16
    ]
    >
    >     var arr = [10,11,12,13,14,15,16]
    >     ary_setter.some_not(arr,'a',2,4)
    [
      'a', 'a', 12,
      'a', 14,  'a',
      'a'
    ]
    >     arr
    [
      'a', 'a', 12,
      'a', 14,  'a',
      'a'
    ]
    >
    >
    >     var arr = [10,11,12,13,14,15,16]
    >     ary_setter.ifilter(arr,'x',(i)=>(i>2 && i<5))
    [
      10, 11, 12, 13,
      14, 15, 16
    ]
    >     arr
    [
      10, 11, 12, 13,
      14, 15, 16
    ]
    >
    >
    >     var arr = [10,11,12,13,14,15,16]
    >     ary_setter.vfilter(arr,'x',(v)=>(v>13))
    [
      10,  11,  12,  13,
      'x', 'x', 'x'
    ]
    >     arr
    [
      10,  11,  12,  13,
      'x', 'x', 'x'
    ]
    >
    >
    >     var arr = [10,11,12,13,14,15,16]
    >     ary_setter.filter(arr,'x',(v,i)=>(v<15 && i>2))
    [
      10,  11, 12, 'x',
      'x', 15, 16
    ]
    >     arr
    [
      10,  11, 12, 'x',
      'x', 15, 16
    ]
    >
    >
    >     var arr = [10,11,12,13,14,15,16]
    >     ary_setter.filter_map(
    ...         arr,
    ...         (v)=> 'prefix-' + v.toString(),
    ...         (v,i)=>(v<15 && i>2)
    ...     )
    [ 10, 11, 12, 'prefix-13', 'prefix-14', 15, 16 ]
    >     arr
    [ 10, 11, 12, 'prefix-13', 'prefix-14', 15, 16 ]
    >
    




API
====

- ary\_setter.interval(arr,start,interval,val)
- ary\_setter.odd(arr,val)
- ary\_setter.even(arr,val)
- ary\_setter.all(arr,val)
- ary\_setter.some(arr,val,...whiches)
- ary\_setter.some\_not(arr,val,...whiches)
- ary\_setter.filter\_map(arr,val\_map\_func,index\_cond\_func,...other\_args)
- ary\_setter.filter(arr,val,index\_cond\_func,...other\_args)
- ary\_setter.ifilter(arr,val,index\_cond\_func,...other\_args)
- ary\_setter.vfilter(arr,val,index\_cond\_func,...other\_args)

LICENSE
=======
- ISC 
