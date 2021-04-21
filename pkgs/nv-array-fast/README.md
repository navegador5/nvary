nv-array-fast
============
- nv-array-fast provide 3 fast function of array,pure-js
- concat, 2~3 faster  
- splice,slightly increased speed
- ipop,slightly increased speed


install
=======
- npm install nv-array-fast 

usage
=====
    
example
-------

    const ary_fast = require("nv-array-fast")

###concat 

    function tst(times,f,...args) {
        let start = perf_hooks.performance.nodeTiming.duration
        c= 0
        while(c<times) {f(...args);c=c+1}
        let end = perf_hooks.performance.nodeTiming.duration
        console.log(end-start)
    }
   
    function orig_concat(arr0,arr1) {
        return(arr0.concat(arr1))
    }
    function fast_concat(arr0,arr1) {
        return(ary_fast.concat(arr0,arr1))
    }
    > tst(10000000,orig_concat,[1,2,3,4],[5,6,7,8])
    3756.8774259090424
    undefined
    > tst(10000000,fast_concat,[1,2,3,4],[5,6,7,8])
    1904.3616771697998
    undefined

### splice 

    var arr = [1,2,'a','b',4,5,6] 
    var index = 2
    var delete_count =3
    var push_arr=[10,20,30,40,50,60]
    function orig_splice(arr,index,delete_count,push_arr) {
        arr = arr.slice(0)
        let rslt = arr.splice(index,delete_count,...push_arr)
        return([rslt,arr])
    }
    > orig_splice(arr,index,delete_count,push_arr)
    [
      [ 'a', 'b', 4 ],
      [
         1,  2, 10, 20, 30,
        40, 50, 60,  5,  6
      ]
    ]
    >

    function fast_splice(arr,index,delete_count,push_arr) {
        arr = arr.slice(0)
        let rslt = ary_fast.splice(arr,index,delete_count,push_arr)
        return([rslt,arr])
    }
    > fast_splice(arr,index,delete_count,push_arr)
    [
      [ 'a', 'b', 4 ],
      [
         1,  2, 10, 20, 30,
        40, 50, 60,  5,  6
      ]
    ]
    >
    
    >tst(30000000,orig_splice,arr,index,delete_count,push_arr)
    14136.36862897873
    >tst(30000000,fast_splice,arr,index,delete_count,push_arr)
    9962.47129893303

#ipop

    > ary_fast.ipop([10,20,30,40,50],3)
    [ 40, [ 10, 20, 30, 50 ] ]
    >
    
    function orig_ipop(arr,index) {
        let rslt = arr.splice(index,1)
        return([rslt[0],arr])
    }
    
    function fast_ipop(arr,index) {
        return(ary_fast.ipop(arr,index))
    }

    >tst(50000000,orig_ipop,[ 10, 20, 30, 50 ],2)
    8007.239279985428
    >tst(50000000,fast_ipop,[ 10, 20, 30, 50 ],2)
    6572.925711154938





API
====
- ary\_fast.ipop(arr,index);
- ary\_fast.concat(arr0,arr1);
- ary\_fast.splice(arr,index,delete\_count,push\_arr)
- ary\_fast.fst\_index\_of(arr,v,from,to)

- ary\_fast.tail\_enlarge\_inplace(arr,count) 
- ary\_fast.init\_enlarge\_cp(arr,count) 
- ary\_fast.extend\_inplace(arr,earr) 
- ary\_fast.prextend\_cp(arr,earr)

LICENSE
=======
- ISC 
