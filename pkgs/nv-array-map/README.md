nv-array-map
============
- nv-array-map 


install
=======
- npm install nv-array-map 

usage
=====
- const ary\_map = require("nv-array-map")


example
-------
- f:                          map-function(v:optional,i:optional,...other\_args:optional)
- v:                          value
- i:                          index
- o:                          ...other-params
- diff\_map\_func\_arr:       array-of-different-map-function
- diff\_map\_func:            each-map-function-is-different
- cmmn\_map\_func:            the-same-map-function
- diff\_other\_args\_arr:     array-of-different-[other-params]
- diff\_other\_args:          each-map-function-other-params-is-different
- cmmn\_other\_args:          the-same-other-params



###fviomap   
    
    //diff_map_func(v,i,...diff_other_args)

    var arr = [100,200,300,400,500]
    var diff_map_func_arr = [
         (v,i,o0,o1)=>("operation "+i+":"+o0+" "+":"+v+"+"+o1+" is "+(v+o1)),
         (v,i,o0,o1)=>("operation "+i+":"+o0+" "+":"+v+"-"+o1+" is "+(v-o1)),
         (v,i,o0,o1)=>("operation "+i+":"+o0+" "+":"+v+"*"+o1+" is "+(v*o1)),
         (v,i,o0,o1)=>("operation "+i+":"+o0+" "+":"+v+"/"+o1+" is "+(v/o1)),
         (v,i,o0,o1)=>("operation "+i+":"+o0+" "+":"+v+"%"+o1+" is "+(v%o1))
    ]
    var diff_other_args_arr = [
        ["plus",10],
        ["minus",20],
        ["mul",30],
        ["div",40],
        ["mod",50]
    ]
    
    var narr = ary_map.fviomap(arr,diff_map_func_arr,diff_other_args_arr)
        
    /*
    [
        'operation 0:plus :100+10 is 110',
        'operation 1:minus :200-20 is 180',
        'operation 2:mul :300*30 is 9000',
        'operation 3:div :400/40 is 10',
        'operation 4:mod :500%50 is 0'
    ]
    */

###fvimap
    
    //diff_map_func(v,i,...cmmn_other_args)

    var diff_map_func_arr = [
        (v,i,o0,o1)=>(i + v+ o0(o1)),
        (v,i,o0,o1)=>(i + v+ o0(o0(o1))),
        (v,i,o0,o1)=>(i + v+ o0(o0(o0(o1)))),
        (v,i,o0,o1)=>(i + v+ o0(o0(o0(o0(o1))))),
        (v,i,o0,o1)=>(i + v+ o0(o0(o0(o0(o0(o1)))))),
    ]
    
    var cmmn_other_args = [Math.sin,1]

    var narr = ary_map.fvimap(arr,diff_map_func_arr,...cmmn_other_args)
    
    /*
    [
        100.8414709848079,
        201.74562414166556,
        302.67843047736073,
        403.62757183204917,
        504.5871809965734
    ]
    */

 
###fvomap

    //diff_map_func(v,...diff_other_args)

    var arr = [100,200,300,400,500]
    
    var diff_map_func_arr = [
        (v,o0,o1)=>(v + o0(o1)),
        (v,o0,o1)=>(v + o0(o0(o1))),
        (v,o0,o1)=>(v + o0(o0(o0(o1)))),
        (v,o0,o1)=>(v + o0(o0(o0(o0(o1))))),
        (v,o0,o1)=>(v + o0(o0(o0(o0(o0(o1)))))),
    ]
    
    var diff_other_args_arr = [
        [Math.sin,1],
        [Math.cos,2],
        [Math.tan,3],
        [Math.tanh,4],
        [Math.sqrt,5],
    ]
    
    var narr = ary_map.fvomap(arr,diff_map_func_arr,diff_other_args_arr)

    /*
    [
      100.8414709848079,
      200.91465332585238,
      299.85548645821626,
      400.5661574065362,
      501.05158119849597
    ]
    */
          

###fiomap
    
    //diff_map_func(i,...diff_other_args)
        
    var arr = [100,200,300,400,500]
    
    var diff_map_func_arr = [
        (i,o0,o1)=>(i + o0(o1)),
        (i,o0,o1)=>(i + o0(o0(o1))),
        (i,o0,o1)=>(i + o0(o0(o0(o1)))),
        (i,o0,o1)=>(i + o0(o0(o0(o0(o1))))),
        (i,o0,o1)=>(i + o0(o0(o0(o0(o0(o1)))))),
    ]
    
    var diff_other_args_arr = [
        [Math.sin,1],
        [Math.cos,2],
        [Math.tan,3],
        [Math.tanh,4],
        [Math.sqrt,5],
    ]

    var narr = fiomap(arr,diff_map_func_arr,diff_other_args_arr)

    [
      0.8414709848078965,
      1.9146533258523712,
      1.8554864582162527,
      3.566157406536178,
      5.051581198495977
    ]

###viomap
    
    //cmmn_map_func(v,i,...diff_other_args)

    var arr = [100,200,300,400,500]
    
    var cmmn_map_func = (v,i,o0,o1)=>("index: "+i+"; value: "+v+"; params: "+o0+","+o1)
    
    var diff_other_args_arr = [
         ["plus",10],
         ["minus",20],
         ["mul",30],
         ["div",40],
         ["mod",50]
     ]
    
     //function
     var narr = viomap(arr,cmmn_map_func,diff_other_args_arr)
    [
      'index: 0; value: 100; params: plus,10',
      'index: 1; value: 200; params: minus,20',
      'index: 2; value: 300; params: mul,30',
      'index: 3; value: 400; params: div,40',
      'index: 4; value: 500; params: mod,50'
    ]


###fvmap

    //diff_map_func(v,...cmmn_other_args)

    var arr = [100,200,300,400,500]
    
    var diff_map_func_arr = [
        (v,o0,o1)=>(v + o0(o1)),
        (v,o0,o1)=>(v + o0(o0(o1))),
        (v,o0,o1)=>(v + o0(o0(o0(o1)))),
        (v,o0,o1)=>(v + o0(o0(o0(o0(o1))))),
        (v,o0,o1)=>(v + o0(o0(o0(o0(o0(o1)))))),
    ]
    
    var cmmn_other_args = [Math.sin,1]
    var narr = fvmap(arr,diff_map_func_arr,...cmmn_other_args)
    /*
    [
      100.8414709848079,
      200.74562414166556,
      300.67843047736073,
      400.62757183204917,
      500.5871809965734
    ]
    */

###fimap

    //diff_map_func(i,...cmmn_other_args)

    var arr = [100,200,300,400,500]
    
    var diff_map_func_arr = [
        (i,o0,o1)=>(i + o0(o1)),
        (i,o0,o1)=>(i + o0(o0(o1))),
        (i,o0,o1)=>(i + o0(o0(o0(o1)))),
        (i,o0,o1)=>(i + o0(o0(o0(o0(o1))))),
        (i,o0,o1)=>(i + o0(o0(o0(o0(o0(o1)))))),
    ]
    
    var cmmn_other_args = [Math.sin,1]
    var narr = fimap(arr,diff_map_func_arr,...cmmn_other_args)
    /*
    [
      0.8414709848078965,
      1.7456241416655578,
      2.6784304773607404,
      3.627571832049159,
      4.587180996573431
    ]
    */


###fomap

    //diff_map_func(i,...diff_other_args)


    var arr = [100,200,300,400,500]
    
    var diff_map_func_arr = [
        (o0,o1)=>(o0(o1)),
        (o0,o1)=>(o0(o0(o1))),
        (o0,o1)=>(o0(o0(o0(o1)))),
        (o0,o1)=>(o0(o0(o0(o0(o1))))),
        (o0,o1)=>(o0(o0(o0(o0(o0(o1)))))),
    ]
    
    var diff_other_args_arr = [
        [Math.sin,1],
        [Math.cos,2],
        [Math.tan,3],
        [Math.tanh,4],
        [Math.sqrt,5]
    ]
    
    //function
    var narr = fomap(arr,diff_map_func_arr,diff_other_args_arr)
    /*
    [
      0.8414709848078965,
      0.9146533258523714,
      -0.14451354178374737,
      0.566157406536178,
      1.0515811984959769
    ]
    */


###vimap

    //cmmn_map_func(v,i,...cmmn_other_args)

    var arr = [100,200,300,400,500]
    var cmmn_map_func = (v,i,o0,o1)=>(i + v+ o0(o1))
    var cmmn_other_args = [Math.sin,1]
    
    var narr = vimap(arr,cmmn_map_func,...cmmn_other_args)
    /*
    [
      100.8414709848079,
      201.8414709848079,
      302.84147098480787,
      403.84147098480787,
      504.84147098480787
    ]
    */


###vomap
    
    //cmmn_map_func(v,...diff_other_args)

    var arr = [100,200,300,400,500]

    var cmmn_map_func = (v,o0,o1)=>("; value: "+v+"; params: "+o0+","+o1)

    var diff_other_args_arr = [
         ["plus",10],
         ["minus",20],
         ["mul",30],
         ["div",40],
         ["mod",50]
     ]

     //function
     var narr = vomap(arr,cmmn_map_func,diff_other_args_arr)

    /*
    [
      '; value: 100; params: plus,10',
      '; value: 200; params: minus,20',
      '; value: 300; params: mul,30',
      '; value: 400; params: div,40',
      '; value: 500; params: mod,50'
    ]
    */

###iomap
 
    //cmmn_map_func(i,...diff_other_args)


    var arr = [100,200,300,400,500]

    var cmmn_map_func = (i,o0,o1)=>("; index: "+i+"; params: "+o0+","+o1)

    var diff_other_args_arr = [
         ["plus",10],
         ["minus",20],
         ["mul",30],
         ["div",40],
         ["mod",50]
     ]

     //function
     var narr = iomap(arr,cmmn_map_func,diff_other_args_arr)

    /*
    [
         '; index: 0; params: plus,10',
         '; index: 1; params: minus,20',
         '; index: 2; params: mul,30',
         '; index: 3; params: div,40',
         '; index: 4; params: mod,50'
    ]
    */

###fmap
    
    //diff_map_func(...cmmn_other_args)
    var arr = [100,200,300,400,500]
    
    var diff_map_func_arr = [
        (o0,o1)=>(o0(o1)),
        (o0,o1)=>(o0(o0(o1))),
        (o0,o1)=>(o0(o0(o0(o1)))),
        (o0,o1)=>(o0(o0(o0(o0(o1))))),
        (o0,o1)=>(o0(o0(o0(o0(o0(o1)))))),
    ]
    
    var cmmn_other_args = [Math.sin,1]
    
    //function
    var narr = fmap(arr,diff_map_func_arr,...cmmn_other_args)
    /*
    [
      0.8414709848078965,
      0.7456241416655579,
      0.6784304773607402,
      0.6275718320491591,
      0.5871809965734309
    ]
    */


###vmap

    //cmmn_map_func(v,...cmmn_other_args) 

    ary_map.vmap(arr,(v,o1,o2)=>r+o1+o2,1000,2000)
    [ 3100, 3200, 3300, 3400, 3500 ]


###imap

    //cmmn_map_func(i,...cmmn_other_args)
    ary_map.imap(arr,(i,o1,o2)=>i+o1+o2,1000,2000)
    [ 3000, 3001, 3002, 3003, 3004 ]

###omap

    //cmmn_map_func(diff_other_args_arr)
    var diff_other_args_arr = [
        [100,1],
        [200,2],
        [300,3],
        [400,4],
        [500,5]
    ]
    var cmmn_map_func = (o1,o2)=>o1+o2
    ary_map.omap(arr,cmmn_map_func,diff_other_args_arr)
    [ 100, 201, 302, 403, 504 ]

API
====

- ary\_map.fviomap(arr,diff\_map\_func\_arr,diff\_other\_args\_arr)
- ary\_map.fvimap(arr,diff\_map\_func\_arr,...cmmn\_other\_args)
- ary\_map.fvomap(arr,diff\_map\_func\_arr,diff\_other\_args\_arr)
- ary\_map.fiomap(arr,diff\_map\_func\_arr,diff\_other\_args\_arr)
- ary\_map.viomap(arr,cmmn\_map\_func,diff\_other\_args\_arr)
- ary\_map.fvmap(arr,diff\_map\_func\_arr,...cmmn\_other\_args)
- ary\_map.fimap(arr,diff\_map\_func\_arr,...cmmn\_other\_args)
- ary\_map.fomap(arr,diff\_map\_func\_arr,diff\_other\_args\_arr)
- ary\_map.vimap(arr,cmmn\_map\_func,...cmmn\_other\_args)
- ary\_map.vomap(arr,cmmn\_map\_func,diff\_other\_args\_arr)
- ary\_map.iomap(arr,cmmn\_map\_func,diff\_other\_args\_arr)
- ary\_map.fmap(arr,diff\_map\_func\_arr,...cmmn\_other\_args)
- ary\_map.vmap(arr,cmmn\_map\_func,...cmmn\_other\_args)
- ary\_map.imap(arr,cmmn\_map\_func,...cmmn\_other\_args)
- ary\_map.omap(arr,cmmn\_map\_func,diff\_other\_args\_arr)


LICENSE
=======
- ISC 
