nv-array-sort
============
- nv-array-sort 


install
=======
- npm install nv-array-sort 

usage
=====
    
example
-------

    const ary_sort = require("nv-array-sort")

    var arr = [10,9,5,300,200,100,8,6,8]
    ary_sort.slice(arr,3,6)
    //[10, 9, 5, 100, 200,300, 8, 6,8]
    
    var refer = [4,   2,  1,  3,  0 ]
    var arr =   ['e','c','b','d','a']
    ary_sort.ref(arr,refer)
    // refer [ 0, 1, 2, 3, 4 ]
    // arr [ 'a', 'b', 'c', 'd', 'e' ]
    
    
    var refer = [4,   2,  1,  3,  0 ]
    var l0 =   ['e','c','b','d','a']
    var l1 =   ['y','w','v','x','u']
    var l2 =   [400,200,100,300,0]
    var lists = [l0,l1,l2]
    ary_sort.bat(lists,refer)
    //refer [ 0, 1, 2, 3, 4 ]
    //l0 [ 'a', 'b', 'c', 'd', 'e' ]
    //l1 [ 'u', 'v', 'w', 'x', 'y' ]
    //l2 [ 0, 100, 200, 300, 400 ]
    
    var arr =     [300,10,9,200,6,100,8]
    var whiches = [3,0,5]
    ary_sort.some(arr,whiches)
    //arr [100,  10, 9, 200,6, 300, 8]

    var sorted_arr = [0, 4, 6, 8, 10, 14]
    ary_sort.wherei(sorted_arr,4)
    //[1,2]
    ary_sort.wherei(sorted_arr,5)
    //[1,2]
    ary_sort.wherei(sorted_arr,6)
    //[2,3]

    lbi(sorted_arr,4)
    //1  lower-bound-index
    ubi(sorted_arr,4)
    //2  upper-bound-index


    ary_sort.wherev(sorted_arr,4)
    //[4,6]
    ary_sort.wherei(sorted_arr,5)
    //[4,6]
    ary_sort.wherei(sorted_arr,6)
    //[6,8]

    lbvsorted_arr,4) 
    //4  lower-bound-value
    ubv(sorted_arr,4) 
    //6  upper-bound-value


    > var ref=[1,2,3,4,5,6]
    undefined
    > match_partial_order(ref,[2,5,6],r=>r)
    true
    > match_partial_order(ref,[5,2,6],r=>r)
    false
    >

cmp
---

    const {DFLT_CMP_FUNC,cmp} = require("nv-array-sort")



    > var ary0= [0,0,1]
    undefined
    > var ary1= [0,1,1]
    undefined
    > cmp(ary0,ary1)
    -1



    > var ary0= [0,0]
    undefined
    > var ary1= [0,0,0]
    undefined
    > cmp(ary0,ary1)
    -1
    >

    > cmp(ary0,ary1,DFLT_CMP_FUNC,0)
    0
    > cmp(ary0,ary1,DFLT_CMP_FUNC,1)
    1
    > DFLT_CMP_FUNC.toString()
    '(r,e)=>e<r?1:r<e?-1:0'
    >

    [
       [0,0],
       [0],
       [1],
       [0,0,0],
       [0,0,1],
       [0,0,1,0],
       [1,0],
       [1,3],
       [1,2],
       [1,1],
       []
    ].sort(cmp)

    [
      [],          [ 0 ],
      [ 0, 0 ],    [ 0, 0, 0 ],
      [ 0, 0, 1 ], [ 0, 0, 1, 0 ],
      [ 1 ],       [ 1, 0 ],
      [ 1, 1 ],    [ 1, 2 ],
      [ 1, 3 ]
    ]
    >


API
====

- ary\_sort.num(arr)
- ary\_sort.ref(arr,refer,cmp\_func)
- ary\_sort.bat(lists,refer,cmp\_func)
- ary\_sort.slice(arr,si,ei,cmp\_func)
- ary\_sort.some(arr,whiches,cmp\_func)
- ary\_sort.wherev(sorted\_arr,v)
- ary\_sort.wherei(sorted\_arr,v)
- ary\_sort.lbv(sorted\_arr,v)
- ary\_sort.lbi(sorted\_arr,v)
- ary\_sort.ubv(sorted\_arr,v)
- ary\_sort.ubi(sorted\_arr,v)
- ary\_sort.match\_partial\_order(ref,ary,f=(r,i)=>r)
- DFLT\_CMP\_FUNC
- ary\_cmp(ary0,ary1,cmp\_func=DFLT\_CMP\_FUNC,rtrn\_if\_empty=-1)

LICENSE
=======
- ISC 
