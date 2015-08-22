// using what ever language you're most comfortable, implement the following: // design a class `RateLimiter` that takes two inputs, N and Q.
//    N - Number of actions
//    Q - Quantum in seconds
// it should have one method, `Check()` that returns true if it's been called N times in Q seconds, and false otherwise

// implement a queue using an array
// figure out the difference between two timestamps (in seconds)
// push() to add to tail, shift() to remove from head

var RateLimiter = function(N, Q) {
  this.storage = []; 
  var ms = Q * 1000;
  this.Check = function() { 
    var timestamp = new Date();
    this.storage.push(timestamp);
    if(this.storage.length < N) {
      return false;
    } else {
      // console.log(this.storage);
      var first = this.storage.shift();
      // console.log(this.storage[this.storage.length-1] - first);
      return this.storage[this.storage.length-1] - first < ms
    }
  }
};


// quick test harness
var rl = new RateLimiter(5, 2); // 5 actions in 2 seconds
console.log(rl.Check()); // false
console.log(rl.Check()); // false
console.log(rl.Check()); // false
console.log(rl.Check()); // false
console.log(rl.Check()); // true

setTimeout(function() {
  console.log(rl.Check()); // false
  console.log(rl.Check()); // false
  console.log(rl.Check()); // false
  console.log(rl.Check()); // false
  console.log(rl.Check()); // true
}, 2000);

