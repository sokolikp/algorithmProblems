var spiral = 
[[11, 12, 13, 14],
 [21, 22, 23, 24],
 [31, 32, 33, 34],
 [41, 42, 43, 44]];

var printSpiral = function(m) {

  var nums = [];
  var i, rows, cols;

  while(m.length) {

    cols = m[0].length;

    //traverse top of matrix
    for(i=0; i<cols; i++) {
      nums.push(m[0][i]);
    }
    m.splice(0,1);

    rows = m.length;

    //traverse right of matrix
    for(i=0; i<rows; i++) {
      nums.push(m[i][m[i].length-1]);
      m[i].splice(-1);
    }

    cols = m[0].length - 1;

    //traverse bottom of matrix
    for(i=cols; i>=0; i--) {
      nums.push(m[m.length-1][i]);
    }
    m.splice(-1);

    rows = m.length - 1;

    //traverse left of matrix
    for(i=rows; i>=0; i--) {
      nums.push(m[i][0]);
      m[i].splice(0,1);
    }

  }

  console.log(nums.join(' '));

};

printSpiral(spiral);
// spiral[0].splice(-1);
// console.log(spiral);
