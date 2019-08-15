//variables 
var id = 0; 
var listItem; 
var taskArray = [];
var completedList =[]; 
//var checkbox; 

//Const variables
const ul = document.querySelector('.items');
const done = document.querySelector('.done');
const textBox = document.querySelector('#task');
const btn = document.querySelector('.btn');
const msg = document.querySelector('.msg');
const refreshbtn = document.querySelector('.refresh');
//

class toDo {  
    constructor(id, task, isComplete) {
        this.id = id;
        this.task = task; 
        this.isComplete = isComplete;
    }
    incrementID(){
        id++;
    }
    addToList(task){
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "checkbox"; 
        var str = task;
        var str= str.trim()
        checkbox.value = str;
        //checkbox.className = "checkbox";
      
        var textNode = document.createTextNode(task);
        var span = document.createElement('span');
        span.className =textNode.nodeValue.trim();
        span.innerHTML = textNode.nodeValue;
        var breakpoint = document.createElement("br");
        ul.appendChild(checkbox);
        ul.appendChild(span);
        ul.appendChild(breakpoint);
        
      
    }
 
}


btn.addEventListener('click', (e) => {
    e.preventDefault();
    if(document.querySelector('#task').value === ''){
       msg.innerHTML = 'Please Enter A task'
        textBox.style.borderColor = 'red';
    }
    else {
      listItem = document.querySelector('#task').value;
      var task = new toDo(id,listItem, false);
      taskArray[id] = task; 
      task.incrementID();
      task.addToList(listItem);
      refreshbtn.style.display = "inline"
      textBox.value = '';
    }
});

refreshbtn.addEventListener('click', (e) => {
    var checkboxNode = document.querySelectorAll('input[name=checkbox]'); 
    var i = 0; 
    checkboxNode.forEach((checkitem) => {
          if(checkitem.checked){
            checkitem.type = 'hidden';
            checkitem.nextElementSibling.remove();
            var updatedList = taskArray; 
            updatedList.filter((namedTask) => {
                if(namedTask.task === checkitem.value && completedList.indexOf(namedTask.task) < 0){
                    namedTask.isComplete = true;
                    completedList[i++] = namedTask.task; 
                }
            })
          }
          return completedList;
    })
    
    mapToCompleted(completedList);
});

function mapToCompleted (completedArray){
    for(i = 0; i < completedArray.length; i++){
        var textNode = document.createTextNode(completedArray[i]);
        var strike = document.createElement('strike');
        strike.innerText = textNode.nodeValue;
        var breakpoint = document.createElement("br");
        done.appendChild(strike);
        //done.appendChild(textNode);
        done.appendChild(breakpoint);
        //refreshbtn.style.display = "none"
    }
  
}

 






//console.log(document.querySelector('#task').value === '');