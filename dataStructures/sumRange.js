var range = function(start,end,step) {
    var iteration = start;
    var range = [];
    if (step == undefined)
        step = 1;
    if (start < end)
        while (iteration <= end) {
            range.push(iteration);
            iteration = iteration + step;
        }
    else
        while (iteration >= end) {
            range.push(iteration);
            iteration = iteration + step;
        }
    return range
}

var sum = function(numbers) {
    var num = numbers.length;
    var i = 0;
    var total = 0;
    
    while (i < num) {
        total = total + numbers[i];
        i++;
    }
    return total
}

console.log(sum(range(1,10)));
console.log(range(5,2,-1));