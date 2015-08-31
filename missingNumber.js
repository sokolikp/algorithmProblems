var missingNumber = function(nums) {
    var diff = nums[1] - nums[0];
    var tempDiff = nums[2] - nums[1];
    var currNum = nums[1];
    var index = diff < tempDiff ? 2 : 1;
    if(diff !== tempDiff) {
        nums.splice(index,0,nums[index-1]+Math.min(diff,tempDiff));
        console.log(currNum, diff);
    } else {
        for(var i=2; i<nums.length; i++) {
            console.log(tempDiff);
            tempDiff = nums[i] - currNum;
            if(diff !== tempDiff) {
                nums.splice(i,0,currNum+diff);
            }
            currNum = nums[i];
        }
        
    }
    return nums;
};

console.log(missingNumber([1,2,4,5]));