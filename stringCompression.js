// var _ = require('underscore')

// AAAABBBBC [A-Z|a-z|0-9] 
// A4B4C1
// 'A4|B4'
// 
// [A4, B4]
// {}
var encode = function(str) {
  var result = '';
  var counter = 0;
  var currLetter = str[0];
  for(var i=0; i<str.length; i++) {
    if(currLetter !== str[i]) {
      result += currLetter + counter;
      counter = 0;
      currLetter = str[i];
    }
    counter++;
  }
  result += currLetter + counter;
  return result.length < str.length ? result : str;
};

//   result = result.length < str.length ? result : str;
console.log(encode('AAABCCCDDEFFFFFFFF')); //A2B2CC

