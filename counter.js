function counter(n) {
    return function () {
        return n++
    }
}
let stg = counter(10)
console.log(stg())
console.log(stg())

