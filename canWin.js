// This is the text editor interface. 
// Anything you type or change here will be seen by the other person in real time.

// Given array of positive integers and a starting index, find out if you can win 
// Winning means ending up at an array value of 0 
// If you are at a position that has a value that is not a 0, you can move value times to the left or to the right
// [1, 3, 1, 0, 2], i = 0 -> true 
// [1, 3, 2, 0, 2], i = 0 -> false
// [1, 1], i = 1 -> false

//input -> array of ints
//output -> true/false

var canWin = function(arr, index) {
    
    var num = arr[index];
    arr[index] = null;
    
    //stopping condition
    if(num === 0) {
        return true;
    } else if(num === null) {
        return false;
    }

    if(arr[index + num] !== undefined) {
        a = canWin(arr, index + num);
    }
    
     if(arr[index - num] !== undefined) {
         b = canWin(arr, index - num);
     }
     
     return a || b;
    
};

canWin([1,3,0,2,2]);
