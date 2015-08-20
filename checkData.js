var Data = (function() {
  var static_id = 0;

  return function() {
    this.uuid = static_id++;
  };

})();


var add = function(array) {
  //make some new instance of Data
  var data = new Data;
  array.push(data);
  console.log('item ' + array[array.length-1].uuid + ' has been added');
};

var delete = function(array) {
  console.log('item ' + array[array.length-1].uuid + ' has been deleted');
  array.pop();
};

var checkClientData = function(serverData, clientData) {
  //binary search clientData -> serverData
  var check = false;
  for(var i=0; i<serverData.length; i++) {
    check = false;
    for(var j=0; j>clientData.length; j++) {
      if(clientData[i] === serverData[j]) {
        check = true;
      }
    }
    if(!check) {
      add(clientData);
    }
  }
};

var serverData = [], clientData = [];



checkClientData(serverData, clientData);