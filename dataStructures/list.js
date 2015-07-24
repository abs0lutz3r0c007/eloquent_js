var arrayToList = function(array) {
    var list = null;
    for (var i = array.length - 1; i >= 0; i--)
        list = {value: array[i], rest: list};
    return list;
}

var listToArray = function(list) {
    var array = [];
    for (var node = list; node; node=node.rest)
        array.push(node.value);
    return array;
}

var prepend = function(elem, list) {
    return {value: elem, rest: list};
}

var nth = function(list, number) {
    if (!list)
        return undefined;
    else if (number == 0)
        return list.value;
    else 
        return nth(list.rest, number - 1)
}

var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

console.log(arrayToList([10, 20]));
console.log(prepend(0,list));