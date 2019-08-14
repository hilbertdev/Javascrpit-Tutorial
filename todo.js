//variables 
var id = 0; 
var listItem; 
var taskArray = [];
//var checkbox; 

//Const variables
const ul = document.querySelector('.items');
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
        checkbox.value = task;
        //checkbox.className = "checkbox";
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
      refreshbtn.style.display = "inline"
    }
});

refreshbtn.addEventListener('click', (e) => {
    var checkboxNode = document.querySelectorAll('input[name=checkbox]'); 
    checkboxNode.forEach((checkitem) => {
          if(checkitem.checked){
            
              var strike = document.createElement('strike');
              var txtNode = document.createTextNode(checkitem.value);
              strike.appendChild(txtNode);
              //checkitem.appendChild(strike);
          }
          else {
              alert('Almost there');
          }
    })
    if(checkboxNode.checked){
        alert('is Checked bro!');
    }  
    else{
        alert('not checked');
    }
});

 






//console.log(document.querySelector('#task').value === '');