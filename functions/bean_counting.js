var countBs = function(s) {
    var Bs = 0;
    var s_len = s.length;
    var i = 0;
    while (i < s_len) {
        if (s.charAt(i) == "B")
            Bs++;
            i++;
    }
    return Bs
}

var countChar = function(s, char) {
    var charCount = 0;
    var s_len = s.length;
    var i = 0;
    while (i < s_len) {
        if (s.charAt(i) == char)
            charCount++;
            i++;
    }
    return charCount
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4