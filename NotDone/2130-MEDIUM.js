function pairSum(head) {
    let max = 0,
        len = head.length,
        curr

    for (let i = 0; i < len / 2; i++) {
        curr = head[i] + head[len - i - 1]
        if (curr > max) max = curr
    }
    return max
}

console.log(pairSum([5, 4, 2, 1]))
