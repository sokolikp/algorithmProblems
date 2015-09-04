var map1 =  [['L', 'W', 'W', 'L', 'L'],
             ['L', 'L', 'L', 'L', 'L'],
             ['W', 'W', 'L', 'L', 'L'],
             ['L', 'L', 'L', 'W', 'W'],
             ['L', 'W', 'L', 'L', 'L']];

var map2 =  [['L', 'W', 'L', 'W', 'L'],
             ['W', 'L', 'W', 'L', 'W'],
             ['L', 'W', 'L', 'W', 'L'],
             ['W', 'L', 'W', 'L', 'W'],
             ['L', 'W', 'L', 'W', 'L']];

var countPonds = function(map) {
  var ponds = 0;
  var visited = [];

  for(var i=0; i<map.length; i++) {
    if(visited[i] === undefined) { 
      visited.push([]);
    }
    for(var j=0; j<map[i].length; j++) {
      visited[i][j] = false;
    }
  }

  var isValid = function(row, col) {
    return ( (row >=0 && row < map.length) &&
             (col >=0 && col < map[row].length) &&
             (map[row][col] === 'W') );
  };

  var traversePond = function(row, col) {
    map[row][col] = 'L';
    for(var i=-1; i<=1; i++) {
      for(var j=-1; j<=1; j++) {
        if(j !== i && j !== -i && isValid(row+i, col+j)) {
          traversePond(row+i, col+j)
        }
      }
    }
  };

  for(var i=0; i<map.length; i++) {
    for(var j=0; j<map[i].length; j++) {
      if(map[i][j] === 'W') {
        traversePond(i,j);
        ponds++;
        // console.log(map, ponds);
      }
    }
  }

  return ponds;
};

// console.log(map2);
console.log(countPonds(map2));
// console.log(map2);