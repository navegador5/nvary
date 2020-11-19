nv-array
============
- simple array tools
- only install which you needed


install
=======
- npm install nv-array-init
- npm install nv-array-basic
- npm install nv-array-findiv
- npm install nv-array-find-index
- npm install nv-array-find-value
- npm install nv-array-index-of
- npm install nv-array-proposition
- npm install nv-array-pop-with-function
- npm install nv-array-pop-with-index
- npm install nv-array-pop-with-value
- npm install nv-array-remove-with-function
- npm install nv-array-remove-with-index
- npm install nv-array-remove-with-value
- npm install nv-array-map
- npm install nv-array-sort
- npm install nv-array-slice-with-function
- npm install nv-array-slice-with-value
- npm install nv-array-swap
- npm install nv-array-replace-with-index

usage
=====

    const ary_init = require("nv-array-init")
    const ary_bsc = require("nv-array-basic")
    const ary_findiv = require("nv-array-findiv")
    const ary_findi = require("nv-array-find-index")
    const ary_findv = require("nv-array-find-value")
    const ary_indexof = require("nv-array-index-of")
    const ary_prop = require("nv-array-proposition")
    const ary_fpop = require("nv-array-pop-with-function")
    const ary_ipop  = require("nv-array-pop-with-index")
    const ary_vpop  = require("nv-array-pop-with-value")
    const ary_frm = require("nv-array-remove-with-function")
    const ary_irm = require("nv-array-remove-with-index")
    const ary_vrm = require("nv-array-remove-with-value")
    const ary_map = require("nv-array-map")
    const ary_sort = require("nv-array-sort")
    const ary_fslc  = require("nv-array-slice-with-function")
    const ary_vslc = require("nv-array-slice-with-value")
    const ary_swap = require("nv-array-swap")
    const ary_irplc = require("nv-array-replace-with-index")


API
====
- ary\_init.use(lngth,v)
- ary\_init.range(si,ei,interval)
- ary\_init.mul(arr,lgth)


- ary\_bsc.head(arr)
- ary\_bsc.tail(arr)
- ary\_bsc.mid(arr)
- ary\_bsc.init(arr)
- ary\_bsc.lst(arr)
- ary\_bsc.some(arr,...whiches)
- ary\_bsc.some\_not(arr,...whiches)
- ary\_bsc.clear(arr)
- ary\_bsc.validate\_index(arr,index)
- ary\_bsc.validate\_value(arr,value)
- ary\_bsc.validate\_vi(arr,d)  //d = {i:index,v:value}
- ary\_bsc.odd(arr)
- ary\_bsc.even(arr)
- ary\_bsc.interval(arr,interval)


- ary\_findiv.fst(arr,cond\_func,...other\_params)
- ary\_findiv.fst\_not(arr,cond\_func,...other\_params)
- ary\_findiv.lst(arr,cond\_func,...other\_params)
- ary\_findiv.fst\_not(arr,cond\_func,...other\_params)
- ary\_findiv.which(arr,which,cond\_func,...other\_params)
- ary\_findiv.which\_not(arr,which,cond\_func,...other\_params)
- ary\_findiv.which\_from\_lst(arr,which,cond\_func,...other\_params)
- ary\_findiv.which\_not\_from\_lst(arr,which,cond\_func,...other\_params)
- ary\_findiv.some(arr,whiches,cond\_func,...other\_params)
- ary\_findiv.some\_not(arr,whiches,cond\_func,...other\_params)
- ary\_findiv.some\_from\_lst(arr,whiches,cond\_func,...other\_params)
- ary\_findiv.some\_not\_from\_lst(arr,whiches,cond\_func,...other\_params)
- ary\_findiv.all(arr,cond\_func,...other\_params)
- ary\_findiv.all\_not(arr,cond\_func,...other\_params)

- ary\_findi.fst(arr,cond\_func,...other\_params)
- ary\_findi.fst\_not(arr,cond\_func,...other\_params)
- ary\_findi.lst(arr,cond\_func,...other\_params)
- ary\_findi.fst\_not(arr,cond\_func,...other\_params)
- ary\_findi.which(arr,which,cond\_func,...other\_params)
- ary\_findi.which\_not(arr,which,cond\_func,...other\_params)
- ary\_findi.which\_from\_lst(arr,which,cond\_func,...other\_params)
- ary\_findi.which\_not\_from\_lst(arr,which,cond\_func,...other\_params)
- ary\_findi.some(arr,whiches,cond\_func,...other\_params)
- ary\_findi.some\_not(arr,whiches,cond\_func,...other\_params)
- ary\_findi.some\_from\_lst(arr,whiches,cond\_func,...other\_params)
- ary\_findi.some\_not\_from\_lst(arr,whiches,cond\_func,...other\_params)
- ary\_findi.all(arr,cond\_func,...other\_params)
- ary\_findi.all\_not(arr,cond\_func,...other\_params)


- ary\_findv.fst(arr,cond\_func,...other\_params)
- ary\_findv.fst\_not(arr,cond\_func,...other\_params)
- ary\_findv.lst(arr,cond\_func,...other\_params)
- ary\_findv.fst\_not(arr,cond\_func,...other\_params)
- ary\_findv.which(arr,which,cond\_func,...other\_params)
- ary\_findv.which\_not(arr,which,cond\_func,...other\_params)
- ary\_findv.which\_from\_lst(arr,which,cond\_func,...other\_params)
- ary\_findv.which\_not\_from\_lst(arr,which,cond\_func,...other\_params)
- ary\_findv.some(arr,whiches,cond\_func,...other\_params)
- ary\_findv.some\_not(arr,whiches,cond\_func,...other\_params)
- ary\_findv.some\_from\_lst(arr,whiches,cond\_func,...other\_params)
- ary\_findv.some\_not\_from\_lst(arr,whiches,cond\_func,...other\_params)
- ary\_findv.all(arr,cond\_func,...other\_params)
- ary\_findv.all\_not(arr,cond\_func,...other\_params)


- ary\_indexof.fst(arr,value)
- ary\_indexof.lst(arr,value)
- ary\_indexof.which(arr,value,which)
- ary\_indexof.which\_from\_lst(arr,value,which)
- ary\_indexof.some(arr,value,...whiches)
- ary\_indexof.some\_from\_lst(arr,value,...whiches)
- ary\_indexof.all(arr,value)


- ary\_prop.all(arr,cond\_func,...other\_params)
- ary\_prop.every(arr,cond\_func,...other\_params)
- ary\_prop.all\_not(arr,cond\_func,...other\_params)
- ary\_prop.every\_not(arr,cond\_func,...other\_params)
- ary\_prop.any(arr,cond\_func,...other\_params)
- ary\_prop.any\_not(arr,cond\_func,...other\_params)
- ary\_prop.at\_most\_several(arr,n,cond\_func,...other\_params)
- ary\_prop.at\_most\_several\_not(arr,n,cond\_func,...other\_params)
- ary\_prop.several(arr,n,cond\_func,...other\_params)
- ary\_prop.several\_not(arr,n,cond\_func,...other\_params)
- ary\_prop.at\_least\_several(arr,n,cond\_func,...other\_params)
- ary\_prop.at\_least\_several\_not(arr,n,cond\_func,...other\_params)
- ary\_prop.fst(arr,cond\_func,...other\_params)
- ary\_prop.fst\_not(arr,cond\_func,...other\_params)
- ary\_prop.which(arr,which,cond\_func,...other\_params)
- ary\_prop.which\_not(arr,which,cond\_func,...other\_params)
- ary\_prop.lst(arr,cond\_func,...other\_params)
- ary\_prop.lst\_not(arr,cond\_func,...other\_params)
- ary\_prop.at\_most\_some(arr,whiches,cond\_func,...other\_params)
- ary\_prop.at\_most\_some\_not(arr,whiches,cond\_func,...other\_params)
- ary\_prop.some(arr,whiches,cond\_func,...other\_params)
- ary\_prop.some\_not(arr,whiches,cond\_func,...other\_params)
- ary\_prop.at\_least\_some(arr,whiches,cond\_func,...other\_params)
- ary\_prop.at\_least\_some\_not(arr,whiches,cond\_func,...other\_params)


- ary\_fpop.all(arr,value)
- ary\_fpop.all\_not(arr,value)
- ary\_fpop.which(arr,value,which)
- ary\_fpop.which\_not(arr,value,which)
- ary\_fpop.which\_from\_lst(arr,value,which)
- ary\_fpop.which\_not\_from\_lst(arr,value,which)
- ary\_fpop.fst(arr,value)
- ary\_fpop.fst\_not(arr,value)
- ary\_fpop.lst(arr,value)
- ary\_fpop.lst\_not(arr,value)
- ary\_fpop.some(arr,value,...whiches)
- ary\_fpop.some\_not(arr,value,...whiches)
- ary\_fpop.some\_from\_lst(arr,value,...whiches)
- ary\_fpop.some\_not\_from\_lst(arr,value,...whiches)


- ary\_ipop(arr,index)


- ary\_vpop.all(arr,value)
- ary\_vpop.all\_not(arr,value)
- ary\_vpop.which(arr,value,which)
- ary\_vpop.which\_not(arr,value,which)
- ary\_vpop.which\_from\_lst(arr,value,which)
- ary\_vpop.which\_not\_from\_lst(arr,value,which)
- ary\_vpop.fst(arr,value)
- ary\_vpop.fst\_not(arr,value)
- ary\_vpop.lst(arr,value)
- ary\_vpop.lst\_not(arr,value)
- ary\_vpop.some(arr,value,...whiches)
- ary\_vpop.some\_not(arr,value,...whiches)
- ary\_vpop.some\_from\_lst(arr,value,...whiches)
- ary\_vpop.some\_not\_from\_lst(arr,value,...whiches)



- ary\_frm.all(arr,value)
- ary\_frm.all\_not(arr,value)
- ary\_frm.which(arr,value,which)
- ary\_frm.which\_not(arr,value,which)
- ary\_frm.which\_from\_lst(arr,value,which)
- ary\_frm.which\_not\_from\_lst(arr,value,which)
- ary\_frm.fst(arr,value)
- ary\_frm.fst\_not(arr,value)
- ary\_frm.lst(arr,value)
- ary\_frm.lst\_not(arr,value)
- ary\_frm.some(arr,value,...whiches)
- ary\_frm.some\_not(arr,value,...whiches)
- ary\_frm.some\_from\_lst(arr,value,...whiches)
- ary\_frm.some\_not\_from\_lst(arr,value,...whiches)


- ary\_irm(arr,index)

- ary\_vrm.all(arr,value)
- ary\_vrm.all\_not(arr,value)
- ary\_vrm.which(arr,value,which)
- ary\_vrm.which\_not(arr,value,which)
- ary\_vrm.which\_from\_lst(arr,value,which)
- ary\_vrm.which\_not\_from\_lst(arr,value,which)
- ary\_vrm.fst(arr,value)
- ary\_vrm.fst\_not(arr,value)
- ary\_vrm.lst(arr,value)
- ary\_vrm.lst\_not(arr,value)
- ary\_vrm.some(arr,value,...whiches)
- ary\_vrm.some\_not(arr,value,...whiches)
- ary\_vrm.some\_from\_lst(arr,value,...whiches)
- ary\_vrm.some\_not\_from\_lst(arr,value,...whiches)


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


- ary\_fslc.fst(arr,cond\_func,...cond\_other\_func\_params)
- ary\_fslc.fst\_not(arr,cond\_func,...cond\_other\_func\_params)
- ary\_fslc.which(arr,index,cond\_func,...cond\_other\_func\_params)
- ary\_fslc.which\_not(arr,index,cond\_func,...cond\_other\_func\_params)
- ary\_fslc.which\_from\_lst(arr,index,cond\_func,...cond\_other\_func\_params)
- ary\_fslc.which\_not\_from\_lst(arr,index,cond\_func,...cond\_other\_func\_params)
- ary\_fslc.lst(arr,cond\_func,...cond\_other\_func\_params)
- ary\_fslc.lst\_not(arr,cond\_func,...cond\_other\_func\_params)
- ary\_fslc.some(arr,whiches,cond\_func,...cond\_other\_func\_params)
- ary\_fslc.some\_not(arr,whiches,cond\_func,...cond\_other\_func\_params)
- ary\_fslc.some\_from\_lst(arr,whiches,cond\_func,...cond\_other\_func\_params)
- ary\_fslc.some\_not\_from\_lst(arr,whiches,cond\_func,...cond\_other\_func\_params)
- ary\_fslc.all(arr,cond\_func,...cond\_other\_func\_params)
- ary\_fslc.all\_not(arr,cond\_func,...cond\_other\_func\_params)

- ary\_vslc.fst(arr,v)
- ary\_vslc.fst\_not(arr,v)
- ary\_vslc.which(arr,v,index)
- ary\_vslc.which\_not(arr,v,index)
- ary\_vslc.which\_from\_lst(arr,v,index)
- ary\_vslc.which\_not\_from\_lst(arr,v,index)
- ary\_vslc.lst(arr,v)
- ary\_vslc.lst\_not(arr,v)
- ary\_vslc.some(arr,v,...whiches)
- ary\_vslc.some\_not(arr,v,...whiches)
- ary\_vslc.some\_from\_lst(arr,v,...whiches)
- ary\_vslc.some\_not\_from\_lst(arr,...whiches)
- ary\_vslc.all(arr,v)
- ary\_vslc.all\_not(arr,v)

- ary\_swap.iswap(arr,i0,i1)
- ary\_swap.vswap(arr,v0,v1)
- ary\_swap.viswap(arr,d0,d1)  // d={i:index,v:value}
- ary\_swap.reindex(arr,...whiches)

- ary\_irplc(arr,replace\_by,...indexes)


LICENSE
=======
- ISC

RESTRICT
=========
- only handle the first-level, dont do recursive-or-nest
- for nest-array handle,refer to the below two:
- https://github.com/navegador5/nvtree
- https://github.com/navegador5/nvjson
