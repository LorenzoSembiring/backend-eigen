const sentence = "Saya sangat senang mengerjakan soal algoritma"
const words = sentence.split(' ');
var wordsLength = []
var hashMapWordLength = {}
for (let i = 0; i < words.length; i++) {
    hashMapWordLength[words[i]] = words[i].length
    wordsLength.push(words[i].length)
}
const longest = Math.max(...wordsLength)
const indexLongest = Math.max(...wordsLength)
const res = Object.keys(hashMapWordLength).filter(key => hashMapWordLength[key] === longest)
console.log(`${res[0]}: ${longest} character`)