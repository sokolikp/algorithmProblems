// console.log('xyz'.charCodeAt(2));
var findLongestWord = function(string) {
  var start = 0, end = 0;
  var longestStart = 0, longestEnd = 0;
  for(var i=0; i<string.length; i++) {
    if(string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 122) {
      end++;
    } else {
      end = end + 1;
      start = end;
    }
    if(end - start > longestEnd - longestStart) {
      longestEnd = end;
      longestStart = start;
    }
  }
  return string.slice(longestStart, longestEnd);
};

var result = findLongestWord('hello my name is Paul. What is ? Well you know what, \
                             name last name is sokolik');

console.log(result, result.length);
