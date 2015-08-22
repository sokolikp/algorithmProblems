var isUgly = function(num) {
    // if(num === 1) {
    //     return true;
    // }
    // var check = true;
    // while(check) {
    //     if(!(num % 2)) {
    //         num /= 2;
    //     } else if(!(num % 3)) {
    //         num /= 3;
    //     } else if(!(num % 5)) {
    //         num /= 5;
    //     } else {
    //         check = false;
    //     }
    // }
    // return num === 1;
    if(num === 1) {
        return true;
    }
    // var check = true;
    if( (num %  2) !== 0 && (num %  3) !== 0 && (num %  5) !== 0) {
        return false;
    } else {
        var half = Math.floor(num/2);
        for(var i=4; i<half; i++) {
            if(num % i === 0) {
                return false;
            }
        }
    }
    return true;
};

console.log(isUgly(21));
