// X X X
// X
// X X X

//make C shape w/ squares - white background
//add click listener -> turn yellow
//once last element is clicked - revert back to white
//in the reverse order in which they were clicked

//var counter = $('.square').length;

var stack = [];
//console.log('made it to the body');
$('.square').click(function() {
    //console.log('i made it!');
    $(this).css('background-color', 'yellow');
    $(this).text('O');
    stack.push($(this).attr('id'));
    var id;
    //console.log(stack);
    if(stack.length === $('.square').length) {
      //console.log('stack is full'); 
      var counter = 1;
      while(stack.length) {
          //console.log('removing from stack',stack);  
          id = stack.pop();
          //console.log();
                     
          (function(id) {
              setTimeout(function() {
                  $('#' + id).css('background-color', 'red'); 
                  $('#' + id).text('X');
              },counter*200);
          }(id));
          counter++;
      }
    }
    
});
