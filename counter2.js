function counter(init) {
    let count = init 
    return {
        increment: function () {
            count += 1
            return count
        },
        decrement: function () {
            count -= 1
            return count
        },
        reset: function () {
            count = init
            return count
        }
    }
}