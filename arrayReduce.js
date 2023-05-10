function reduce(nums, fn, init) {
    let accumulator = init
    for (const item of nums) {
        accumulator = fn(accumulator, item)
    }
    return accumulator
}
