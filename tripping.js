var bookings = [
  {
    _id: ("a1234"),
    listing_id: ("b1234"),
    check_in: new Date("Nov 04, 2014"),
    check_out: new Date("Nov 05, 2014"),
    price: 125
  },
  {
    _id: ("a1235"),
    listing_id: ("b1235"),
    check_in: new Date("Nov 07, 2014"),
    check_out: new Date("Nov 08, 2014"),
    price: 225
  },
  {
    _id: ("a1236"),
    listing_id: ("b1234"),
    check_in: new Date("Jan 01, 2015"),
    check_out: new Date("Jan 03, 2015"),
    price: 317
  },
  {
    _id: ("a1237"),
    listing_id: ("b1234"),
    check_in: new Date("Jan 04, 2015"),
    check_out: new Date("Jan 06, 2015"),
    price: 250
  },
  {
    _id: ("a1238"),
    listing_id: ("b1236"),
    check_in: new Date("Jan 17, 2014"),
    check_out: new Date("Jan 19, 2014"),
    price: 455
  },
  {
    _id: ("a1239"),
    listing_id: ("b1234"),
    check_in: new Date("Feb 15, 2014"),
    check_out: new Date("Feb 16, 2014"),
    price: 138
  }
];


var getTotalAmountCollected = function(bookings) {
  var amounts = {};
  var day = 24*60*60*1000;
  var numNights, booking;
  for(var i=0; i<bookings.length; i++) {
    booking = bookings[i];
    if(amounts[booking.listing_id] === undefined) {
      amounts[booking.listing_id] = booking.price;
    } else {
      amounts[booking.listing_id] += booking.price;
    }
  }
  return amounts;
};

var getTotalDays = function(bookings) {
  var days = {};
  var day = 24*60*60*1000;
  var numNights, booking;
  for(var i=0; i<bookings.length; i++) {
    booking = bookings[i];
    numNights = Math.round(Math.abs((booking.check_out.getTime() - booking.check_in.getTime())/day));
    if(days[booking.listing_id] === undefined) {
      days[booking.listing_id] = numNights;
    } else {
      days[booking.listing_id] += numNights;
    }
  }
  return days;
};

//This function runs in linear time (O(n)), however it uses the two previous
//functions to help it find the number of days and total amounts per booking.
//This means 2 linear operations to run through the bookings array, plus one 
//linear operation to run through the resulting hash table as it calculates the avg. price.
//This can be done faster by implementing the logic of the above two functions inside of
//a single for loop in this function and calculating the average on the fly, however, this
//solution may be easier for readability (and it utilizes the previous two helper functions
//that were written). The last function included in this comment, getAllInfo, combines the
//logic of these three functions to create a single return object in linear time.
var getAverageDailyPrice = function(bookings) {
  var prices = {};
  var days = getTotalDays(bookings);
  var amounts = getTotalAmountCollected(bookings);
  for(var id in amounts) {
    prices[id] = Math.round(( amounts[id] / days[id]) * 100) / 100;
  }
  return prices;
};

//function that combines logic of previous three functions
var getAllInfo = function(bookings) {
  var listings = {};
  var day = 24*60*60*1000;
  var numNights, booking;
  for(var i=0; i<bookings.length; i++) {
    booking = bookings[i];
    numNights = Math.round(Math.abs((booking.check_out.getTime() - booking.check_in.getTime())/day));
    if(listings[booking.listing_id] === undefined) {
      listings[booking.listing_id] = {};
      listings[booking.listing_id].totalDays = numNights;
      listings[booking.listing_id].totalAmount = booking.price;
    } else {
      listings[booking.listing_id].totalDays += numNights;
      listings[booking.listing_id].totalAmount += booking.price;
    }
  }
  //average price is calculated in a separate loop here to reduce division computation.
  //If it were done in the above loop, we would need to perform a division operation at
  //each step in the loop. Running through the resulting object once the initial for loop
  //is a fair trade of for the reduction in computation. This function still runs in O(n) time.
  for(var id in listings) {
    listings[id].avgPrice = Math.round(( listings[id].totalAmount / listings[id].totalDays ) * 100) / 100;
  }
  return listings;

};

console.log(getTotalAmountCollected(bookings));
console.log(getTotalDays(bookings));
console.log(getAverageDailyPrice(bookings));
console.log(getAllInfo(bookings));
