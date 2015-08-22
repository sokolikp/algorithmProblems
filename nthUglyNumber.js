 // % 2,3,5
 //1,2,3,4,5,6,8,9,10,12,15
 //1,2,3,2*2,5,2*3,2*2*2,

// var isUgly = function(num) {
//   var check = true;
//   while(check) {
//     if(!(num%2)) {
//       num /= 2;
//     } else if(!(num%3)) {
//       num /= 3;    
//     } else if(!(num%5)) {
//       num /= 5;
//     } else {
//       check = false;
//     }
//   }
//   return num === 1 ? true : false;
// };

var nthUglyNumber = function(n) {
  if(n <= 0) {
    return 0;
  }
  var uglies = [];
  uglies[0] = 1;
  var nextIndex = 1;
  var index2 = 0;
  var index3 = 0;
  var index5 = 0;
  var min;

  while(nextIndex < n) {
    min = Math.min(uglies[index2]*2, uglies[index3]*3, uglies[index5]*5);
    uglies[nextIndex] = min;
    // console.log('min', min);
    // console.log(nextIndex, uglies);

    while(uglies[index2]*2 <= uglies[nextIndex]) {
      // console.log('2!');
      index2++;
    }
    while(uglies[index3]*3 <= uglies[nextIndex]) {
      // console.log('3!');
      index3++;
    }
    while(uglies[index5]*5 <= uglies[nextIndex]) {
      // console.log('5!');
      index5++;
    }
    nextIndex++;
  }

  return uglies[nextIndex-1];
};

console.log(nthUglyNumber(10));

