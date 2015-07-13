var size = 8;
var i = 1;
var j = 1;
var board = "";

while (i <= size) {
  while (j <= size) {
    if ((i+j) % 2 == 0)
      board = board + " ";
    else if ((i+j) % 2 == 1)
      board = board + "#";
    j++;
  }
  board = board + "\n";
  i++;
  j = 1;
}
console.log(board);