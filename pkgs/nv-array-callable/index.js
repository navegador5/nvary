const {false_ec,false_ewc} = require("nv-facutil-defp")


function creat_carr(f) {
   Object.defineProperty(f,'length',{ value: 0, writable: true, enumerable: false, configurable: false })
   Object.setPrototypeOf(f,Array.prototype);
   f.clear = function() {while(f.length>0) {f.pop()}}
   f.from = function(...args) {
       f.clear();
       let arr = Array.from(...args)
       arr.forEach(r=>f.push(r))
   }
   f.of = function(...args){
       f.clear();
       let arr = Array.of(...args)
       arr.forEach(r=>f.push(r))
   }
   false_ewc(f,'clear','from','of')
   Object.defineProperty(f,'name',{ value: "", writable: true, enumerable: false, configurable: false })
   return(f)
}

module.exports = creat_carr



