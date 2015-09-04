"123456787998797" ==> 123456787998797

var convertToNum = function(str) {
    var sum = 0;
    var tens = 1;
    var numbers = {
     "0": 0,
     "1": 1
    };
    
    var num;
    for(var i=str.length-1; i>=0; i--) {
        //convert str[i] to number (0=48, 9=57) --> user charCodeAt()
        num = (str[i].charCodeAt() - 48) * tens;
        sum += num;
        tens *= 10;
    }

    return sum;
};


//var a = ["a","b","c","d","r"]
//var b = ["a',"b","b"]

var isSubsetOf = function(a, b) {
    //var source = {};
    var subset = {};
    
    for(var i=0; i<b.length; i++) {
        if(!subset.hasOwnProperty(b[i])) {
            subset[b[i]] = 1;
        } else {
            subset[b[i]]++;
        }
    }
    
    //source = {"a": 0, "c": 1, "b": 0, "d": 1, "r": 1}
    for(var i=0; i<a.length; i++) {
        if(Object.keys(subset).length === 0 ) {
            return true;
        }
        
        if(subset.hasOwnProperty(a[i])) {
          if(subset[a[i]] > 1) {
            subset[a[i]]--;
          } else {
            delete subset[a[i]];
          }
        }       
    }
    
    return Object.keys(subset).length === 0;

};

