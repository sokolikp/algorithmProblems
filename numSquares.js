var numSquares = function(start, end) {

  var sqrtX = Math.ceil(Math.sqrt(start));
  var sqrtY = Math.floor(Math.sqrt(end));
  return sqrtY - sqrtX + 1;
  
};

console.log(numSquares(1,16));

