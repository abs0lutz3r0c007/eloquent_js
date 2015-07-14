var minimum = function(x,y) {
    if (x < y)
        return x;
    else if (y < x)
        return y;
    else
        return x;
}

console.log(minimum(0, 10));
// → 0
console.log(minimum(0, -10));
// → -10