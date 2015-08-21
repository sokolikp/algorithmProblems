var rockPaperScissors = function(rounds) {
  var results = [];
  var weapons = ['rock', 'paper', 'scissors'];
  var outcome = [];
  var RPSCombos = function(roundsLeft) {
    if(!roundsLeft) {
      results.push(outcome.slice());
      return;
    }
    for(var i=0; i<weapons.length; i++) {
      outcome.push(weapons[i]);
      RPSCombos(roundsLeft-1);
      outcome.pop();
    }
  };

  RPSCombos(rounds);
  return results;
};

console.log(rockPaperScissors(3));
