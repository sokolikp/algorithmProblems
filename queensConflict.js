var _ = require('underscore')

function sayHello() {
  console.log('Hello, World');
}

// _.times(5, sayHello);


/* 
Your previous Ruby content is preserved below:

//Input: list of queen positions (array)
//Output: true/false

 */

//build row, col, & diagonal function checker
//

var isConflict = function(position, queens) {
  var color = position.color;
  var row = position.row;
  var col = position.col;
  var queen;
  for(var i=0; i<queens.length; i++) {
    queen = queens[i];
    if(queen !== position && color !== queen.color) {
      //check down & to the right
      
      
      //check row conflict
      if(row === queen.row) {
        console.log('found row conflict!')
        return true;
      }
      
      //check col conflict
      if(col === queen.col) {
        console.log('found col conflict!');
        return true;
      }
      
      //check diagonal
      if(Math.abs(queen.row - row) === Math.abs(queen.col - col)) {
        console.log('found diag down/right conflict!');
        return true;
      } 
    }
  }
  
  return false;
  
};

var isRowConflict = function(position, queens) {
  var color = position.color;
  var row = position.row;
  var queen;
  for(var i=0; i<queens.length; i++) {
    queen = queens[i];
    if(queen !== position) {
      if(row === queen.row && color !== queen.color) {
        console.log('found row conflict!')
        return true;
      }
    }
  }
  
  return false;
  
};

var isColConflict = function(position, queens) {
  var color = position.color;
  var col = position.col;
  var queen;
  for(var i=0; i<queens.length; i++) {
    queen = queens[i];
    if(queen !== position) {
      if(col === queen.col && color !== queen.color) {
        console.log('found col conflict!');
        return true;
      }
    }
  }
  
  return false;
  
};

var isDiagConflict = function(position, queens) {
  //down/right: 0,0; 1,1; 2,2; 3,3 --- 0,1; 1,2; 2,3 --> row + n, col + n
      //if diff between row1 - row2 === col1 - col2
  
  //down/left:  0,3; 1,2; 2,1; 3,0 --> 
     //if diff between row1 - col2 === row1 - col2
  var color = position.color;
  var row = position.row;
  var col = position.col;
  var queen;
  for(var i=0; i<queens.length; i++) {
    queen = queens[i];
    if(queen !== position && color !== queen.color) {
      //check down & to the right
      console.log(queen);
      if(Math.abs(queen.row - row) === Math.abs(queen.col - col)) {
        console.log('found diag down/right conflict!');
        return true;
      } 
    }
  }
  
  return false;
  
};

//queens = [{row: col: color:},{},{}];
var isQueenAttacking = function(queens) {
  
  //loop through queens array
    //call row, col, diag conflict
    //if any are true => return true
  
  
  var queen;
  if(!Array.isArray(queens)) {
    console.log('please input valid queens array!');
    return false;
  }
//   console.log(queens);
  for(var i=0; i<queens.length; i++) {
    queen = queens[i];
    if(queen.row === undefined || queen.col ===undefined || queen.color === undefined) {
      console.log('please input valid queens array!');
      return false;
    }
    console.log(queen);
    if(isConflict(queen, queens)) {
      return true;
    }
  }
  return false;
 //return false
//   return boolean
};

console.log(isQueenAttacking({row1: 3, col: 1, color: 'black'}, {row: 2, col: 3, color: 'red'}));
