function compress(chars) {
    let curr_letter, num_chars, j
    for (let i = 0; i < chars.length; i++) {
        curr_letter = chars[i]
        j = i + 1
        num_chars = 1
        while (chars[j] == curr_letter) {
            num_chars++
            j++
        }
        if (num_chars == 1) chars = [...chars.slice(0, i), curr_letter, ...chars.slice(j)]
        else chars = [...chars.slice(0, i), curr_letter, num_chars + "", ...chars.slice(j)]

        i++
    }
    console.log(chars)
    return chars.length
}

console.log(compress(["a", "a", "b", "b", "c", "c", "c"]))
