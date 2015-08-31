// Your PM can modify this params variable
var params = [{'key': 'A', check: false, wording: ''},
 {'key': 'B', check: false, wording: '', id: 'C'},
 {'key': 'C', check: false, wording: '', id: 'C'}]; // setup an example tutorial here

/* describe your solution using pseudocode as needed
**REQUIREMENTS**
1.) order
2.) wording
var wording1='',
wording2='',
wording3='';

params = [{'key': 'A', check: false, wording: ''},
 {'key': 'B', check: false, wording: '', id: 'C'},
 {'key': 'C', check: false, wording: '', id: 'C'}];
-Add click event listeners to each div
 -check whether feature has been clicked
 -if not clicked && everything 
   before was already clicked-> show prompt
*/

/*
<div class="my_confusing_page">
  <div class='feat' id='A'>Feature A</div>
  <div class='feat' id='B'>Feature B</div>
  <div class='feat' id='C'>Feature C</div>
</div>
*/

$('.feat').click(function() {
  //get index of jQuery array
  //1st: confirm check property
  //2nd: loop through up to index,
  //     confirm all check props = true
  // if 1 && 2 -> show prompt
  // else do nothign
  var myId = $(this).attr('id'); //C
  var myIndex = $(this).index(); //2
  var check = true;
  var done = false;
  var index = 0;
  while(!done) {
    if(params[index].key === myId) {
      done = true;
    } else if(!params[index].check) {
      check = false;
      done = true;
    }
    index++;
  }
  if(check) {
    alert(params[index-1].wording);
    params[index-1].check = true;
  }  
});

