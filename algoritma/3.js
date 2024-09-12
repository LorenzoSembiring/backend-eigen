const INPUT = ['xc', 'dz', 'bbb', 'dz']  
const QUERY = ['bbb', 'ac', 'dz'] 

// OUTPUT = [1, 0, 2]
var result =[]
for (let i = 0; i < QUERY.length; i++) {
    var count = 0
    for (let j = 0; j < INPUT.length; j++) {
        if(QUERY[i] == INPUT[j]) {
            count ++
        }
    }
    result.push(count)
}
console.log(result)