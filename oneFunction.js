function oneFunction(fn){
    let called = true
    return function(...args){
        if(called){
            called = false
            return fn(...args)
        } else{
            return undefined
        }
    }
}