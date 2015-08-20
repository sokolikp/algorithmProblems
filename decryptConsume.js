// FINAL TOY PROBLEM
// Starting with n=1, for each word n, take the nth letter of that word.
// For example, take the 1st letter of the 1st word, 2nd letter of the 2nd word, 3rd letter of the 3rd word, etc.
// If a word has length len such that n > len, then continue consuming words until you reach letter n.
// Skip over any words consumed in the manner of the previous rule.
// Check the test cases below for examples

var decrypt = function(str) {
  // YOUR CODE HERE
  var words = str.split(' ');
  var result = '', letter, newIndex;
  for(var i=0; i<words.length; i++) {
    check = false;
    letter = words[i][i];
    newIndex = i;
    while(letter === undefined) {
      //combine word i and i+1
      words[i] = words[i] + words[i+1];
      letter = words[i][i];
      newIndex++;
    }
    result += words[i][i];
    i = newIndex;
  }
  return result;
}

console.log(decrypt("oh i understand banter")); //out
console.log(decrypt("a ob ooc dd oeoo ooooof")); //abcef
console.log(decrypt("a b c")); //ac