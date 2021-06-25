nv-array-lcs
============
- nv-array-lcs 


install
=======
- npm install nv-array-lcs 

usage
=====

    
lcq
-------

    const {lcq_index,lcq_value,lcq_str} = require("nv-array-lcs");

        var ary0 = [1, 3, 5, 9, 10];
        var ary1 = [1, 4, 9, 10];


        var {rslt,forest} = lcq_index(ary0,ary1); //first time will generate a forest
        /*
        > rslt
        [ [ [ 4, 3, 0 ] ], [ [ 3, 2, 0 ] ] ]
        >

        */

        var {rslt} = lcq_value(ary0,ary1,forest); //forest can be reused
        > rslt
        [ [ 1, 9, 10 ] ]
        >



        var s0='GCCCTAGCG'
        var s1='GCGCAATG'
        var {rslt} = lcq_str(s0,s1,forest); //forest can be reused
        > rslt
        [ 'GCGCG', 'GCCTG', 'GCCAG' ]
        >

        var {rslt} = lcq_value(Array.from(s0),Array.from(s1),forest);

        /*
        > rslt
        [
          [ 'G', 'C', 'G', 'C', 'G' ],
          [ 'G', 'C', 'C', 'T', 'G' ],
          [ 'G', 'C', 'C', 'A', 'G' ]
        ]
        >

        */

        var {rslt} = lcq_index(Array.from(s0),Array.from(s1),forest);
        /*
        > rslt
        [
          [
            [ 8, 7, 6, 1, 0 ],
            [ 8, 4, 3, 2, 0 ],
            [ 8, 4, 2, 1, 0 ],
            [ 8, 5, 2, 1, 0 ],
            [ 8, 5, 3, 2, 0 ]
          ],
          [
            [ 7, 3, 2, 3, 2 ],
            [ 7, 6, 3, 1, 0 ],
            [ 7, 6, 3, 1, 0 ],
            [ 7, 5, 3, 1, 0 ],
            [ 7, 5, 3, 1, 0 ]
          ]
        ]
        >

        */


lcs
------

     const {lcs_full,lcs_index,lcs_value,lcs_str} = require("nv-array-lcs");
     
     
     var s0    = "abcdef";
     var s1    = "defgabcxabc";
     var ary0  = Array.from(s0);
     var ary1  = Array.from(s1);
     
     > lcs_full(ary0,ary1)
     [
       [ [ 0, 4, 'a' ], [ 1, 5, 'b' ], [ 2, 6, 'c' ] ],
       [ [ 0, 8, 'a' ], [ 1, 9, 'b' ], [ 2, 10, 'c' ] ],
       [ [ 3, 0, 'd' ], [ 4, 1, 'e' ], [ 5, 2, 'f' ] ]
     ]
     >
     
     > lcs_index(ary0,ary1)
     [
       [ [ 0, 1, 2 ], [ 0, 1, 2 ], [ 3, 4, 5 ] ],
       [ [ 4, 5, 6 ], [ 8, 9, 10 ], [ 0, 1, 2 ] ]
     ]
     >
     
     > lcs_value(ary0,ary1)
     [ [ 'a', 'b', 'c' ], [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]
     >
     > lcs_str(s0,s1)
     [ 'abc', 'def' ]
     >


API
====

- lcq\_index(ary0,ary1,forest,max\_size=100000)
- lcq\_value(ary0,ary1,forest,max\_size=100000) 
- lcq\_str(s0,s1,forest,max\_size=100000) 

- lcs\_full(ary0,ary1) 
- lcs\_index(ary0,ary1) 
- lcs\_value(ary0,ary1) 
- lcs\_str(s0,s1)


LICENSE
=======
- ISC 
