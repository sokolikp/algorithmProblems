var countDigitOne = function(n) {
    var ones = 0;
    var nums;
    for(var i=0; i<=n; i++) {
        nums = String(i).split('');
        for(var j=0; j<nums.length; j++) {
          if(nums[j] === '1') {
            ones++;
          }
        }
    }
    return ones;
};

console.log(countDigitOne(13));
