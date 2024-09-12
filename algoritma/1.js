const str = "NEGIE1"
var arr = [];
var number = [];
for (var i = 0; i < str.length; i++) {
    if (isNaN(parseInt(str.charAt(str.length - i-1)))) {
        arr.push(str.charAt(str.length - i-1))
    } else {
        number.push(parseInt(str.charAt(str.length - i-1)))
    }
}
const mergeResult = arr.concat(number)
console.log(mergeResult.join(""))
