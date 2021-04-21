nv-array
============
- simple array tools
- only install which you needed


install
=======

all
---

    npm install nvary

splitted
--------

- [npm install nv-array-init](https://www.npmjs.com/package/nv-array-init)
- [npm install nv-array-basic](https://www.npmjs.com/package/nv-array-basic)
- [npm install nv-array-findiv](https://www.npmjs.com/package/nv-array-findiv)
- [npm install nv-array-find-index](https://www.npmjs.com/package/nv-array-find-index)
- [npm install nv-array-find-value](https://www.npmjs.com/package/nv-array-find-value)
- [npm install nv-array-index-of](https://www.npmjs.com/package/nv-array-index-of)
- [npm install nv-array-proposition](https://www.npmjs.com/package/nv-array-proposition)
- [npm install nv-array-pop-with-function](https://www.npmjs.com/package/nv-array-pop-with-function)
- [npm install nv-array-pop-with-index](https://www.npmjs.com/package/nv-array-pop-with-index)
- [npm install nv-array-pop-with-value](https://www.npmjs.com/package/nv-array-pop-with-value)
- [npm install nv-array-remove-with-function](https://www.npmjs.com/package/nv-array-remove-with-function)
- [npm install nv-array-remove-with-index](https://www.npmjs.com/package/nv-array-remove-with-index)
- [npm install nv-array-remove-with-value](https://www.npmjs.com/package/nv-array-remove-with-value)
- [npm install nv-array-map](https://www.npmjs.com/package/nv-array-map)
- [npm install nv-array-sort](https://www.npmjs.com/package/nv-array-sort)
- [npm install nv-array-slice-with-function](https://www.npmjs.com/package/nv-array-slice-with-function)
- [npm install nv-array-slice-with-value](https://www.npmjs.com/package/nv-array-slice-with-value)
- [npm install nv-array-swap](https://www.npmjs.com/package/nv-array-swap)
- [npm install nv-array-replace-with-index](https://www.npmjs.com/package/nv-array-replace-with-index)
- [npm install nv-array-replace-with-function](https://www.npmjs.com/package/nv-array-replace-with-function)
- [npm install nv-array-replace-with-value](https://www.npmjs.com/package/nv-array-replace-with-value)
- [npm install nv-array-group](https://www.npmjs.com/package/nv-array-group)
- [npm install nv-array-desc](https://www.npmjs.com/package/nv-array-desc)
- [npm install nv-array-collection](https://www.npmjs.com/package/nv-array-collection)
- [npm install nv-array-combo](https://www.npmjs.com/package/nv-array-combo)
- [npm install nv-array-slide](https://www.npmjs.com/package/nv-array-slide)
- [npm install nv-array-compare](https://www.npmjs.com/package/nv-array-compare)
- [npm install nv-array-location](https://www.npmjs.com/package/nv-array-location)
- [npm install nv-array-uniq](https://www.npmjs.com/package/nv-array-uniq)
- [npm install nv-array-transform](https://www.npmjs.com/package/nv-array-transform)
- [npm install nv-array-span](https://www.npmjs.com/package/nv-array-span)
- [npm install nv-array-trim-with-function](https://www.npmjs.com/package/nv-array-trim-with-function)
- [npm install nv-array-trim-with-value](https://www.npmjs.com/package/nv-array-trim-with-value)
- [npm install nv-array-divide](https://www.npmjs.com/package/nv-array-divide)
- [npm install nv-array-setter](https://www.npmjs.com/package/nv-array-setter)
- [npm install nv-array-fast](https://www.npmjs.com/package/nv-array-fast)
- [npm install nv-array-callable](https://www.npmjs.com/package/nv-array-callable)
- [npm install nv-array-section](https://www.npmjs.com/package/nv-array-section)
- [npm install nv-array-include](https://www.npmjs.com/package/nv-array-include)
- [npm install nv-array-mole](https://www.npmjs.com/package/nv-array-mole)
- [npm install nv-array-defrag](https://www.npmjs.com/package/nv-array-defrag)



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
    const ary_frplc = require("nv-array-replace-with-function")
    const ary_vrplc = require("nv-array-replace-with-value")
    const ary_grp = require("nv-array-group")
    const ary_desc = require("nv-array-desc")
    const ary_cll = require("nv-array-collection")
    const ary_com = require("nv-array-combo")
    const ary_sld = require("nv-array-slide")
    const ary_cmp = require("nv-array-compare")
    const ary_loc = require("nv-array-location")
    const ary_uniq = require("nv-array-uniq")
    const ary_trans = require("nv-array-transform")
    const ary_span = require("nv-array-span")
    const ary_ftrim = require("nv-array-trim-with-function")
    const ary_vtrim = require("nv-array-trim-with-value")
    const ary_dvd = require("nv-array-divide")
    const ary_setter = require("nv-array-setter")
    const ary_fast = require("nv-array-fast")
    const ary_callable = require("nv-array-callable")
    const ary_sec = require("nv-array-section")
    const ary_clu = require("nv-array-include")
    const ary_mole = require("nv-array-more-less")
    const ary_defrag = require("nv-array-defrag")

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
- ary\_bsc.uniform\_index(arr,index)
- ary\_bsc.validate\_index(arr,index)
- ary\_bsc.validate\_value(arr,value)
- ary\_bsc.validate\_vi(arr,d)  //d = {i:index,v:value}
- ary\_bsc.odd(arr)
- ary\_bsc.even(arr)
- ary\_bsc.interval(arr,interval)
- ary\_bsc.bin(n,lngth,head=true)
- ary\_bsc.eq(arr0,arr1)
- ary\_bsc.combine(...lists)
- ary\_bsc.mid\_index\_pair(arr)
- ary\_bsc.mid\_index\_left(arr)
- ary\_bsc.mid\_index\_right(arr)
- ary\_bsc.mid\_value\_pair(arr)
- ary\_bsc.mid\_value\_left(arr)
- ary\_bsc.mid\_value\_right(arr)




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

- ary\_fpop.fst(arr,cond\_func,...cond\_other\_func\_params)
- ary\_fpop.fst\_not(arr,cond\_func,...cond\_other\_func\_params)
- ary\_fpop.which(arr,index,cond\_func,...cond\_other\_func\_params)
- ary\_fpop.which\_not(arr,index,cond\_func,...cond\_other\_func\_params)
- ary\_fpop.which\_from\_lst(arr,index,cond\_func,...cond\_other\_func\_params)
- ary\_fpop.which\_not\_from\_lst(arr,index,cond\_func,...cond\_other\_func\_params)
- ary\_fpop.lst(arr,cond\_func,...cond\_other\_func\_params)
- ary\_fpop.lst\_not(arr,cond\_func,...cond\_other\_func\_params)
- ary\_fpop.some(arr,whiches,cond\_func,...cond\_other\_func\_params)
- ary\_fpop.some\_not(arr,whiches,cond\_func,...cond\_other\_func\_params)
- ary\_fpop.some\_from\_lst(arr,whiches,cond\_func,...cond\_other\_func\_params)
- ary\_fpop.some\_not\_from\_lst(arr,whiches,cond\_func,...cond\_other\_func\_params)
- ary\_fpop.all(arr,cond\_func,...cond\_other\_func\_params)
- ary\_fpop.all\_not(arr,cond\_func,...cond\_other\_func\_params)


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


- ary\_frm.fst(arr,cond\_func,...cond\_other\_func\_params)
- ary\_frm.fst\_not(arr,cond\_func,...cond\_other\_func\_params)
- ary\_frm.which(arr,index,cond\_func,...cond\_other\_func\_params)
- ary\_frm.which\_not(arr,index,cond\_func,...cond\_other\_func\_params)
- ary\_frm.which\_from\_lst(arr,index,cond\_func,...cond\_other\_func\_params)
- ary\_frm.which\_not\_from\_lst(arr,index,cond\_func,...cond\_other\_func\_params)
- ary\_frm.lst(arr,cond\_func,...cond\_other\_func\_params)
- ary\_frm.lst\_not(arr,cond\_func,...cond\_other\_func\_params)
- ary\_frm.some(arr,whiches,cond\_func,...cond\_other\_func\_params)
- ary\_frm.some\_not(arr,whiches,cond\_func,...cond\_other\_func\_params)
- ary\_frm.some\_from\_lst(arr,whiches,cond\_func,...cond\_other\_func\_params)
- ary\_frm.some\_not\_from\_lst(arr,whiches,cond\_func,...cond\_other\_func\_params)
- ary\_frm.all(arr,cond\_func,...cond\_other\_func\_params)
- ary\_frm.all\_not(arr,cond\_func,...cond\_other\_func\_params)



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


- ary\_frplc.fst(arr,rplc\_by,cond\_func,...cond\_other\_func\_params)
- ary\_frplc.fst\_not(arr,rplc\_by,cond\_func,...cond\_other\_func\_params)
- ary\_frplc.which(arr,rplc\_by,index,cond\_func,...cond\_other\_func\_params)
- ary\_frplc.which\_not(arr,rplc\_by,index,cond\_func,...cond\_other\_func\_params)
- ary\_frplc.which\_from\_lst(arr,rplc\_by,index,cond\_func,...cond\_other\_func\_params)
- ary\_frplc.which\_not\_from\_lst(arr,rplc\_by,index,cond\_func,...cond\_other\_func\_params)
- ary\_frplc.lst(arr,rplc\_by,cond\_func,...cond\_other\_func\_params)
- ary\_frplc.lst\_not(arr,rplc\_by,cond\_func,...cond\_other\_func\_params)
- ary\_frplc.some(arr,rplc\_by,whiches,cond\_func,...cond\_other\_func\_params)
- ary\_frplc.some\_not(arr,rplc\_by,whiches,cond\_func,...cond\_other\_func\_params)
- ary\_frplc.some\_from\_lst(arr,rplc\_by,whiches,cond\_func,...cond\_other\_func\_params)
- ary\_frplc.some\_not\_from\_lst(arr,rplc\_by,whiches,cond\_func,...cond\_other\_func\_params)
- ary\_frplc.all(arr,rplc\_by,cond\_func,...cond\_other\_func\_params)
- ary\_frplc.all\_not(arr,rplc\_by,cond\_func,...cond\_other\_func\_params)

- ary\_vrplc.all(arr,rplc\_by,value)
- ary\_vrplc.all\_not(arr,rplc\_by,value)
- ary\_vrplc.which(arr,rplc\_by,value,which)
- ary\_vrplc.which\_not(arr,rplc\_by,value,which)
- ary\_vrplc.which\_from\_lst(arr,rplc\_by,value,which)
- ary\_vrplc.which\_not\_from\_lst(arr,rplc\_by,value,which)
- ary\_vrplc.fst(arr,rplc\_by,value)
- ary\_vrplc.fst\_not(arr,rplc\_by,value)
- ary\_vrplc.lst(arr,rplc\_by,value)
- ary\_vrplc.lst\_not(arr,rplc\_by,value)
- ary\_vrplc.some(arr,rplc\_by,value,...whiches)
- ary\_vrplc.some\_not(arr,rplc\_by,value,...whiches)
- ary\_vrplc.some\_from\_lst(arr,rplc\_by,value,...whiches)
- ary\_vrplc.some\_not\_from\_lst(arr,rplc\_by,value,...whiches)


- ary\_grp.fgrpvi(arr,func,...func\_params)
- ary\_grp.fgrpi(arr,func,...func\_params)
- ary\_grp.fgrpv(arr,func,...func\_params)
- ary\_grp.vgrpvi(arr,...func\_params)
- ary\_grp.vgrpi(arr,...func\_params)
- ary\_grp.vgrpv(arr,...func\_params)
- ary\_grp.lgrpvi(arr)
- ary\_grp.lgrpi(arr)
- ary\_grp.lgrpv(arr)


- ary\_vldict(arr)
- ary\_vidict(arr)
- ary\_ivdict(arr)
- ary\_mdict(arr,pri\_key="i")

- ary\_cll.union(arr0,arr1)
- ary\_cll.diff(arr0,arr1)
- ary\_cll.inter(arr0,arr1)
- ary\_cll.align(arr0,arr1)


- ary\_com.comb(arr)
- ary\_com.perm(arr)


- ary\_sld.slide\_from\_fst(basearr,slider)
- ary\_sld.slide\_from\_lst(basearr,slider)
- ary\_sld.has(basearr,slider)

- ary\_cmp.samei(arr0,arr1)
- ary\_cmp.samev(arr0,arr1)
- ary\_cmp.samevi(arr0,arr1)
- ary\_cmp.diffi(arr0,arr1)
- ary\_cmp.diffv(arr0,arr1)
- ary\_cmp.diffvi(arr0,arr1)

- ary\_loc.fst(basearr,slider)
- ary\_loc.which(basearr,slider,1)
- ary\_loc.which\_from\_lst(basearr,slider,0)
- ary\_loc.lst(basearr,slider)
- ary\_loc.some(basearr,slider,0,1)
- ary\_loc.some\_from\_lst(basearr,slider,0,1)
- ary\_loc.all(basearr,slider)

- ary\_uniq.uniq(arr,until=Infinity)
- ary\_uniq.recycle(arr,until=Infinity)
- ary\_uniq.ref\_uniq(arr,ref,until=Infinity)
- ary\_uniq.ref\_recycle(arr,ref,until=Infinity)


- ary\_trans.dummy
- ary\_trans.fmt(...lists)
- ary\_trans.transpose(m)
- ary\_trans.interleave(...lists)
- ary\_trans.mat(arr,n)
- ary\_trans.uninterleave(arr,n)

- ary\_span.pair(arr)
- ary\_span.interval(arr,interval)
- ary\_span.range(max\_length,...indexes)
- ary\_span.fullfill(spans)
- ary\_span.supplement(spans)
- ary\_span.compress(arr)
- ary\_span.uncompress(spans)


- ary\_ftrim.left(arr,n,cond\_func,...cond\_func\_params) 
- ary\_ftrim.right(arr,n,cond\_func,...cond\_func\_params) 
- ary\_ftrim.both(arr,n,cond\_func,...cond\_func\_params) 
- ary\_ftrim.lall(arr,cond\_func,...cond\_func\_params) 
- ary\_ftrim.rall(arr,cond\_func,...cond\_func\_params) 
- ary\_ftrim.ball(arr,cond\_func,...cond\_func\_params) 

- ary\_vtrim.left(arr,value,n) 
- ary\_vtrim.right(arr,value,n) 
- ary\_vtrim.both(arr,value,n) 
- ary\_vtrim.lall(arr,value) 
- ary\_vtrim.rall(arr,value) 
- ary\_vtrim.ball(arr,value) 

- ary\_dvd.chunk(arr,interval)
- ary\_dvd.cut(arr,...pts)

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

- ary\_fast.ipop(arr,index);
- ary\_fast.concat(arr0,arr1);
- ary\_fast.splice(arr,index,delete\_count,push\_arr)
- ary\_fast.fst\_index\_of(arr,v)

- ary\_callable.creat\_carr(f);

- ary\_sec.merge(arr,si,ei)
- ary\_sec.get\_sec\_with\_num(arr,n)
- ary\_sec.get\_sec\_with\_seq(arr,seq)
- ary\_sec.get\_seq\_with\_sec(arr,sec)


- ary\_clu.start\_with(arr,l) 
- ary\_clu.end\_with(arr,l) 
- ary\_clu.strict\_include(arr,l) 
- ary\_clu.loose\_include(arr,l)

- ary\_mole.from\_fst(ary)
- ary\_mole.from\_lst(ary)
- ary\_mole.more\_less(ary,start=0)

- more(offset=1)
- current()
- less(offset=1)

- ary\_defrag.defrag(arr,empty=undefined)
- ary\_defrag.defrag\_with\_st(arr,empty\_set,empty=undefined)


LICENSE
=======
- ISC

RESTRICT
=========
- only handle the first-level, dont do recursive-or-nest
- for nest-array handle,refer to the below two:
- https://github.com/navegador5/nvtree
- https://github.com/navegador5/nvjson

