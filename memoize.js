function outer(fn) {
    let cache = {}
    return function (...args) {
        let key = JSON.stringify(args)
        if (key in cache) {
            return cache[key]
        }

        let result = fn(...args)
        cache[key] = result
        return result
    }
}