//input: string of integers
//output: number representation of the string

//in -> ‘123’
//out -> 123

//in -> ‘123abc4’
//out -> 1234

//in -> ‘-123’
/out -> -123

// String.charCodeAt(index) -> returns the code of the character at position index
// ‘0’ = 48, ‘1’ = 49, ‘2’ = 50, ...
var convertToNumber = function(string) {
  //var numbers = {‘1’: 1, ‘2’: 2, ‘3’: 3...};
  var offset = 48; 
  var tens = 1;
  var result = 0;
  var negativeCheck = string[0] === ‘-’;
  var end = negativeCheck ? 1 : 0;
  for(var i=string.length-1; i>=end; i--) {
     if(numbers[string[i]) { //check ASCII range
        // string.charCodeAt(i) ..
         result += (charCodeAt(string[i]) - offset) * tens;
         tens *= 10;
     } else {
        return null;
     }
  }
  if(negativeCheck) {
    result *= -1;
  }
  return result;
};


titles
id

title

versions
id → reference fileSystem ID
title_id 
version → concatenated versions
?
