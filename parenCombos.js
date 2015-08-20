var parenCombos = function(num) {
  var results = [];
  var findCombos = function(string, open, closed) {
    if(string.length === num*2) {
      results.push(string);
      return;
    }
    if(open > closed) {
      return;
    }
    if(open > 0) {
      // console.log('str open', string);
      findCombos(string + '(', open-1, closed);
    }
    if(closed > 0) {
      // console.log('str closed', string);
      findCombos(string + ')', open, closed-1);
    }
  }
  findCombos('', num, num);
  return results;
};

console.log(parenCombos(3));
// console.log('hello'.slice(-1));
