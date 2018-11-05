
let typeiss = (a,b) => {
    let c = (a) => Object.prototype.toString.call(a).replace(/\[|\]|object| /g,''),
        d = c(a)
    if(c(b) === 'Array'){
        if(b.indexOf(d) != -1){
            return true
        }else{
            return false
        }
    }else{
        return d
    }
}
exports.typeiss = typeiss;