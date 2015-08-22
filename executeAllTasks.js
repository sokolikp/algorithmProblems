
//public class Task{
//    public void Execute();
//    public List<Task> Deps;
//}

var Task = function(deps) {
    this.Execute  function() { 
     //do stuff;
    };
    this.Deps = deps;
    this.wasExecuted = false;
};

//A -> B
//B -> C
//B -> D

//A->C->B->D

//D, C, B, A
//C, D, B, A

//A,B,C,D
//allTasks = array of Tasks
var ExecuteAllTasks(allTasks){
  var check = true;
  var index = 0;
  var executedCount = 0;
  var currentTask;
  //while there are tasks not executed
  
  
  while(executedCount < allTasks.length) {
      check = true;
      currentTask = allTasks[index];
      
      for(var i=0; i<currentTask.Deps.length; i++) {
          if(!currentTask.Deps[i].wasExecuted) {
              check = false;
          }
      }
      
      if(check && !currentTask.wasExecuted) {
          //execute currentTask
          currentTask.Execute();
          currentTask.wasExecuted = true;
      }
      
      index = index+1 % allTasks.length;
  }

};