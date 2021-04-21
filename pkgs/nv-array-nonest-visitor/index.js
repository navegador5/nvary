class Visitor {
    #action = 0
    #val
    get action() {return(this.#action)}
    get val() {return(this.#val)}
    yield(){this.#action = 0}
    skip() {this.#action = 1}
    remove() {this.#action = 2}
    insert_before(v) {this.#action = 3,this.#val =v}
    insert_after(v) {this.#action = 4,this.#val =v}
    replace(v) {this.#action = 5,this.#val =v}
    reset(){this.#action = 0;this.#val=undefined}
}


function *gen(arr,f=(v,i,visitor)=>{}) {
    const visitor = new Visitor();
    let lngth = arr.length;
    let oi =0;
    let i =0;
    while(oi<lngth) {
        f(arr[i],oi,visitor);
        if(visitor.action === 0) {
            yield(arr[i]);
        } else if(visitor.action ===1) {
        } else if(visitor.action ===2) {
            arr.splice(i,1);
            i = i-1;
        } else if(visitor.action ===3) {
            let old =arr[i];
            arr.splice(i,0,visitor.val);
            yield(visitor.val);
            yield(old);
            i = i+1;
        } else if(visitor.action ===4) {
            yield(arr[i]);
            yield(visitor.val);
            arr.splice(i+1,0,visitor.val);
            i = i+1;
        } else { 
            arr[i] = visitor.val;
            yield(arr[i]);
        }
        i = i+1;
        oi=oi+1;
        visitor.reset();
    }
}


function visit(arr,f=(v,i,visitor)=>{}) {
    for(let each of gen(arr,f)){}
    return(arr)
}



const ACTION_DICT = {
    'skip':'visitor.skip()',
    'remove':'visitor.remove()',
    'replace':'visitor.replace(new_value)',
    'insert_before':'visitor.insert_before(val)',
    'insert_after':'visitor.insert_after(val)'
}

module.exports = {
    ACTION_DICT,
    gen,
    visit,
}
