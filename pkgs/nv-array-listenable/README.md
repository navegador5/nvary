nv-array-listenable
=====================

- nv-array-listenable is a very simple util to make a listenable Array


install
=======
- npm install nv-array-listenable 

usage
=====
      
    const RArray = require("nv-array-listenable")
    
    var arr = new RArray()
    
example
-------
    

    var arr = new RArray()
    
    //listen for push method 
    // e.data = {rslt:<the returned rets>,params:<the arguments>}
    //          
    arr.regis_$push$_handler(e=>{console.log(e,e.data)})
    
    > arr.push(10)
    E {
      type: 'push',
      defaultPrevented: false,
      cancelable: false,
      timeStamp: 49738.11588096619
    } { params: [ 10 ], rslt: 1 }
    1
    >
    > arr
    ReactiveArray(1) [ 10 ]
    >
    > arr.push(10,20)
    E {
      type: 'push',
      defaultPrevented: false,
      cancelable: false,
      timeStamp: 91699.88149785995
    } { params: [ 10, 20 ], rslt: 3 }
    3
    > arr
    ReactiveArray(3) [ 10, 10, 20 ]
    >


    //listen for set/get

    arr.regis_$set_item$_handler(e=>{console.log(e,e.data)})

    > arr.set_item(1,111)
    E {
      type: 'set_item',
      defaultPrevented: false,
      cancelable: false,
      timeStamp: 42272.226580142975
    } { params: [ 1, 111 ], rslt: 111 }
    111
    >
    > arr
    ReactiveArray(3) [ 10, 111, 20 ]
    >

    /*
        there are some bugs if modify Proxy,
        so the implement did NOT use Proxy,
        it just add two methods:
            get_item
            set_item
    */


METHODS
========


    > arr.

    arr.EVENTS                          arr.concat                          arr.constructor
    arr.copyWithin                      arr.entries                         arr.et
    arr.every                           arr.fill                            arr.filter
    arr.find                            arr.findIndex                       arr.flat
    arr.flatMap                         arr.forEach                         arr.includes
    arr.indexOf                         arr.join                            arr.keys
    arr.lastIndexOf                     arr.map                             arr.pop
    arr.push                            arr.reduce                          arr.reduceRight
    
    arr.regis_$concat$_handler          arr.regis_$copyWithin$_handler      arr.regis_$entries$_handler
    arr.regis_$every$_handler           arr.regis_$fill$_handler            arr.regis_$filter$_handler
    arr.regis_$find$_handler            arr.regis_$findIndex$_handler       arr.regis_$flat$_handler
    arr.regis_$flatMap$_handler         arr.regis_$forEach$_handler         arr.regis_$includes$_handler
    arr.regis_$indexOf$_handler         arr.regis_$join$_handler            arr.regis_$keys$_handler
    arr.regis_$lastIndexOf$_handler     arr.regis_$map$_handler             arr.regis_$pop$_handler
    arr.regis_$push$_handler            arr.regis_$reduce$_handler          arr.regis_$reduceRight$_handler
    arr.regis_$reverse$_handler         arr.regis_$shift$_handler           arr.regis_$slice$_handler
    arr.regis_$some$_handler            arr.regis_$sort$_handler            arr.regis_$splice$_handler
    arr.regis_$toLocaleString$_handler  arr.regis_$toString$_handler        arr.regis_$unshift$_handler
    arr.regis_$values$_handler          arr.reverse                         arr.rm_$concat$_handler
    arr.rm_$copyWithin$_handler         arr.rm_$entries$_handler            arr.rm_$every$_handler
    arr.rm_$fill$_handler               arr.rm_$filter$_handler             arr.rm_$find$_handler
    arr.rm_$findIndex$_handler          arr.rm_$flat$_handler               arr.rm_$flatMap$_handler
    arr.rm_$forEach$_handler            arr.rm_$includes$_handler           arr.rm_$indexOf$_handler
    arr.rm_$join$_handler               arr.rm_$keys$_handler               arr.rm_$lastIndexOf$_handler
    arr.rm_$map$_handler                arr.rm_$pop$_handler                arr.rm_$push$_handler
    arr.rm_$reduce$_handler             arr.rm_$reduceRight$_handler        arr.rm_$reverse$_handler
    arr.rm_$shift$_handler              arr.rm_$slice$_handler              arr.rm_$some$_handler
    arr.rm_$sort$_handler               arr.rm_$splice$_handler             arr.rm_$toLocaleString$_handler
    arr.rm_$toString$_handler           arr.rm_$unshift$_handler            arr.rm_$values$_handler
    

    
    arr.shift                           arr.slice                           arr.some
    arr.sort                            arr.splice                          arr.toLocaleString
    arr.toString                        arr.unshift                         arr.values
    
    arr.length

    arr.set_item     arr.get_item

LICENSE
=======
- ISC 
