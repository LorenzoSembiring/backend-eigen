Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]
// diagonal pertama = 1 + 5 + 9 = 15 
// diagonal kedua = 0 + 5 + 7 = 12 

// maka hasilnya adalah 15 - 12 = 3
var diagonal1 = []
var diagonal2 = []
for (let i = 0; i < Matrix.length; i++) {
    diagonal1.push(Matrix[i][i])
    diagonal2.push(Matrix[i][Matrix.length - 1 - i])
}
var sum1 = 0
var sum2 = 0
for (let i = 0; i < diagonal1.length; i++ ) {
    sum1 += diagonal1[i];
}
for (let i = 0; i < diagonal2.length; i++ ) {
    sum2 += diagonal2[i];
}

console.log(`maka hasilnya adalah: ${sum1-sum2}`)