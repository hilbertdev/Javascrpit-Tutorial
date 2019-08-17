//variables 
var id = 0;  
var taskArray = [];
var completedList =[]; 
//var checkbox; 

//Const variables
const todoListitems = document.querySelector('.toDolistitems');
const done = document.querySelector('.done');
const taskEntered = document.querySelector('#task');
const btnAdd = document.querySelector('.btnAdd');
const errMsg = document.querySelector('.msg');
const btnClear = document.querySelector('.btnClear');
//

class listItem {  
    constructor(id, task, isComplete) {
        this.id = id;
        this.task = task; 
        this.isComplete = isComplete;
    }
    incrementID(){
        id++;
    }
   
}

//adding an entered task to the displayed list 
function addToList(task) {
    var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";
        checkbox.name = id.toString(); 
        checkbox.value = task;
        var textNode = document.createTextNode(task);
        var span = document.createElement('span');
        span.className =textNode.nodeValue;
        span.innerHTML = textNode.nodeValue;
        var breakpoint = document.createElement("br");
        todoListitems.appendChild(checkbox);
        todoListitems.appendChild(span);
        todoListitems.appendChild(breakpoint);
}
//                      END                         ///

//This is the event handler for adding a task into the todo list 
btnAdd.addEventListener('click', (e) => {
    if(document.querySelector('#task').value === ''){
        errMsg.innerHTML = 'Please Enter A task'
        taskEntered.style.borderColor = 'red';
    }
    else {
      let item = document.querySelector('#task').value;
      if(!checkifAdded(taskArray,item)) {
          console.log(taskArray);
      var task = new listItem(id,item, false);
      taskArray[id] = task; 
      task.incrementID();
      addToList(task.task);
      btnClear.style.display = "inline"
      taskEntered.value = '';
      }
      else {
        errMsg.innerHTML = 'Item exists'; 
      }
    }
});

function checkifAdded(arr, value ) {
   for(i = 0; i < arr.length; i++){
       if(arr[i].task === value)
       {
           if(arr[i].isComplete === false){
            return true;
           }
           
       }
   }
   return false; 
}
function searchItem(arr, val, updateBool) {
        for(i = 0; i < arr.length; i++){
            if(arr[i].task === val)
            {
             arr[i].isComplete = updateBool;
             
             return arr[i].isComplete; 
            }
        }
    return -1;
}


//                      END                         //

//Cross Out item if completed 

//                      END                         //


btnClear.addEventListener('click', (e) => {
    mapToCompleted(updateCompleted());
    updateToDo();
});

function updateToDo(){
    for(i = 0; i < taskArray.length; i++){
        document.querySelector('.mainList').innerHTML = ''; 
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name =  taskArray[i].id.toString(); 
        checkbox.value = taskArray[i].task;
        var textNode = document.createTextNode(taskArray[i].task);
        var span = document.createElement('span');
        span.className =textNode.nodeValue;
        span.innerHTML = textNode.nodeValue;
        var breakpoint = document.createElement("br");
        todoListitems.appendChild(checkbox);
        todoListitems.appendChild(span);
        todoListitems.appendChild(breakpoint);
    }
}

function updateCompleted(){
    var checkboxNode = document.querySelectorAll('input[name=checkbox]'); 
    checkboxNode.forEach((checkitem) => {
        if(checkitem.checked){
          checkitem.type = 'hidden';
          checkitem.nextElementSibling.remove();
          var checkeditem = searchItem(taskArray ,checkitem.nodeValue, true);
          completedList.push(checkeditem);
          //var updatedList = taskArray; 
        }
        ;
  })
  return completedList;
}

function mapToCompleted (completedArray){
    for(i = 0; i < completedArray.length; i++){
        var complete = document.createTextNode(completedArray[i].task);
        var itemC = document.createElement('li');
        var br = document.createElement('br');
        itemC.innerHTML = complete.nodeValue;
        itemC.innerHTML.strike();
        done.appendChild(itemC);
        done.appendChild(br);
    }
}

 






//console.log(document.querySelector('#task').value === '');