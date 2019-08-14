//variables 
var id = 0; 
var listItem; 
var taskArray = [];
var checkbox; 

//Const variables
const ul = document.querySelector('.items');
const textBox = document.querySelector('#task');
const btn = document.querySelector('.btn');
const msg = document.querySelector('.msg');
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
        checkbox.name = "task number:" + id; 
        checkbox.value = "value";
        checkbox.className = "checkbox" + id;
        var textNode = document.createTextNode(task);
        var breakpoint = document.createElement("br");
        ul.appendChild(checkbox);
        ul.appendChild(textNode);
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
    }
});

if (id > 0) {
   console.log(document.querySelector(".checkbox"+id));
 checkbox = document.querySelector(".checkbox"+id).addEventListener('change' , (e) => {
    if(checkbox.checked) {
        console.log('working')
        checkbox.style.background = 'red';
    }
 });
}





//console.log(document.querySelector('#task').value === '');