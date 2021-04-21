const {reactivize,add_cumethods_to_rcls,CMMN_METHODS_FILTER} = require("nv-facutil-reactivize");
const ARRAY_METHODS_FILTER = [];
const RArray = reactivize(Array,ARRAY_METHODS_FILTER,CMMN_METHODS_FILTER)

function get_item(index) {return(this[index])}

function set_item(index,value) {
    this[index] = value;
    return(value);
}

add_cumethods_to_rcls(RArray,['get_item','set_item'],[get_item,set_item])


module.exports = RArray
