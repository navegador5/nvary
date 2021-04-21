nv-array-nonest-visitor
============
- nv-array-nonest-visitor 


install
=======
- npm install nv-array-nonest-visitor 

usage
=====
    
    const ary_nonest_visitor = require("nv-array-nonest-visitor")


example
-------

### visit


    var arr = [10,20,30,40,50,60]

    ary_nonest_visitor.visit(
        arr,
        (v,i,visitor) =>{
            if(i%5===0) {
                visitor.remove()    //10,60 removed
            } else if(i%5 ===1) {
                visitor.insert_before('before-'+v)  //insert Before 20
            } else if(i%5 ===2) {
                visitor.insert_after('after-'+v)    //insert After 30
            } else if(i%5 ===3){
                visitor.replace('replace-'+v)       //replace 40
            } else {
                //no touch 50, visitor.skip()  have no effect on visit
            }
        }
    )

    arr
    [ 'before-20', 20, 30, 'after-30', 'replace-40', 50 ]


### gen

####

    var arr = [10,20,30,40,50,60]
    
    var g = ary_nonest_visitor.gen(
        arr,
        (v,i,visitor) =>{
            if(i%5===0) {
                visitor.remove()
            } else if(i%5 ===1) {
                visitor.insert_before('before-'+v)
            } else if(i%5 ===2) {
                visitor.insert_after('after-'+v)
            } else if(i%5 ===3){
                visitor.replace('replace-'+v)
            } else {
                //no touch 50
            }
        }
    )
    > Array.from(g)
    [ 'before-20', 20, 30, 'after-30', 'replace-40', 50 ]
    >
    > arr
    [ 'before-20', 20, 30, 'after-30', 'replace-40', 50 ]
    >


#### skip


    var arr = [10,20,30,40,50,60]

    var g = ary_nonest_visitor.gen(
        arr,
        (v,i,visitor) =>{
            if(i%5===0) {
                visitor.remove()
            } else if(i%5 ===1) {
                visitor.insert_before('before-'+v)
            } else if(i%5 ===2) {
                visitor.insert_after('after-'+v)
            } else if(i%5 ===3){
                visitor.replace('replace-'+v)
            } else {
                visitor.skip() //skip 50, but not modify original array
            }
        }
    )
    > Array.from(g)
    [ 'before-20', 20, 30, 'after-30', 'replace-40' ]
    >
    > arr
    [ 'before-20', 20, 30, 'after-30', 'replace-40', 50 ]
    >


### ACTION

    > ary_nonest_visitor.ACTION_DICT
    {
      skip: 'visitor.skip()',                        //affect generator, but no touch original-array
      remove: 'visitor.remove()',                    
      replace: 'visitor.replace(new_value)',
      insert_before: 'visitor.insert_before(val)',
      insert_after: 'visitor.insert_after(val)'
    }
    >



API
====
- ary\_nonest\_visitor.visit(arr,(v,i,visitor) =>{/*...*/})
- ary\_nonest\_visitor.gen(arr,(v,i,visitor) =>{/*...*/})

LICENSE
=======
- ISC 
