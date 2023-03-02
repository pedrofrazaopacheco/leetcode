function calculate_rain(i, j, height) {
    let total_rain = 0
    for (let k = i + 1; k < j; k++) {
        total_rain = height[i] - height[k]
    }
    return total_rain
}

function trap(height) {
    let curr_height, is_in, last_used_index
    let total_rain = 0

    for (let i = 0; i < height.length; i++) {
        curr_height = height[i]
        if (height[i + 1] < curr_height) {
            for (j = i + 2; j < height.length; j++) {
                if (height[j] >= curr_height) is_in = true
                last_used_index = j
            }
            if (is_in) total_rain += calculate_rain(i, last_used_index, height)
            is_in = false
            i += j - 1
        }
    }
    return total_rain
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
