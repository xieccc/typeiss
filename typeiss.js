
let typeiss = (a,b) => {
    let c = a => Object.prototype.toString.call(a).replace(/\[|\]|object| /g,''),
        d = c(a)
    if(c(b) === 'Array'){
        return b.indexOf(d) !== -1?true:false
    }else{
        return d
    }
}

export { typeiss }
exports.typeiss = typeiss
