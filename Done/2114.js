function mostWordsFound(sentences) {
    let max = 0
    let num_words
    let sentence
    for (let i = 0; i < sentences.length; i++) {
        sentence = sentences[i]
        num_words = 1
        for (let j = 0; j < sentence.length; j++) if (sentence[j] == " ") num_words++
        max = max > num_words ? max : num_words
    }
    return max
}
