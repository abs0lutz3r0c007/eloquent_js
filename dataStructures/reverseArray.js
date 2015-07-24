var reverseArray = function(array) {
    var newArray = [];
    while (array.length > 0) {
        newArray.push(array.pop());
    }
    return newArray
}

var reverseArrayInPlace = function(array) {
    var newArray = [];
    while (array.length > 0) {
        newArray.push(array.pop());
    }
    while (newArray.length > 0) {
        array.push(newArray.shift());
    }
}

console.log(reverseArray(["A", "B", "C"]));
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]