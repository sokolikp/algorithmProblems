// public interface Intervals {
 
//     /**
//      * Adds an interval [from, to) into internal structure.
//      */
//     void addInterval(int from, int to);
    
 
//     *
//      * Returns a total length covered by the added intervals.
//      * If several intervals intersect, the intersection should be counted only once.
//      * Example:
//      *
//      * addInterval(3, 6)
//      * addInterval(8, 9)
//      * addInterval(1, 5)
//      *
//      * getTotalCoveredLength() -> 6
//      * I.e. [1,5) and [3,6) intersect and give a total covered interval [1,6).
//      * [1,6) and [8,9) don't intersect, so the total covered length is a sum of both intervals, that is 5+1=6.
//      *
//      *           ______
//      *                         _
//      *     _________
//      *
//      * 0  1  2  3  4  5  6  7  8  9  10
//      *
     
//     int getTotalCoveredLength();
// }



Array.prototype.addInterval = function(from, to) {
   var obj = {from: from, to: to};
   this.push(obj);
};

var isIntersection = function(interval1, interval2) {
    return ((interval1.from >= interval2.from && interval1.from < interval2.to) || 
            (interval1.to >= interval2.from && interval1.from < interval2.to) ||
            (interval1.from <= interval2.from && interval1.to > interval2.to)  ||
            (interval2.from <= interval1.from && interval2.to > interval1.to)  );
    
};

var getTotalCoveredLength = function(intervals) {
    
    //intervals = [{from: 3,to: 6},{from: 8,to: 9},{from: 1,to: 5}, {from:0, to:4}]
    var length = 0;
    var lengths = [];
    var intersection = false;
    lengths.push(intervals[0]);
    for(var i=0; i<intervals.length; i++) {
        for(var j=0; j<lengths.length; j++) {
            if(isIntersection(intervals[i], lengths[j])) {
                console.log('intersects:', intervals[i]);
                lengths[j].from = Math.min(intervals[i].from, lengths[j].from);
                lengths[j].to = Math.max(intervals[i].to, lengths[j].to);
                intersection = true;
            }
        }
        if(!intersection) {
            console.log('does not intersect:', intervals[i]);
            lengths.push(intervals[i]);
        }
        intersection = false;
        console.log(lengths);
    }

    for(var i=0; i<lengths.length; i++) {
        length += (lengths[i].to - lengths[i].from);
    }
    //return int
    console.log(lengths);
    return length;
};


var intervals = [];
intervals.addInterval(1,4); //3
intervals.addInterval(3,5); //2
intervals.addInterval(8,9); //1
intervals.addInterval(9,10); //1
intervals.addInterval(0,11); //1
console.log(getTotalCoveredLength(intervals));

