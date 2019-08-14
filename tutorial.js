// var , let , const 
//var is globally scoped 
//let you can reassign values 
//const means it cannot be changed 
//always use const unless you know you are gonna reassign it to make your code more robust 
//Data types => Strings, numbers, boolean, null, undefined

const name = 'John';
const num = 19;
const isCool = true; 
const rating = 4.5; //there is not float data type in js, it is just a number
const x = null; 
const y = undefined; 
//console.log(typeof y);


//object literals 
const person = {
    firstName: 'Hilbert',
    lastName: 'Muchatibaya',
    age: 30,
    hobbies: ['Music','Cricket','DC Movies'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}
 for (i = 0; i < person.hobbies.length; i++) {
    // console.log('Hobbies:'  +  person.hobbies[i]);
 }

 //console.log(' I come from the city of ' + person.address.city + ' in the state of ' + person.address.state);

 //pulling different things out from an object i.e destructuring  
const  {firstName , lastName, address: {state}} = person;

//console.log(firstName + lastName + state);


//Creating a todo list 

const toDo = [
    {
        id: 1,
        tasks: 'Clean up room',
        isCompleted: true
    },
    {
        id: 2,
        tasks: 'Clean up desk',
        isCompleted: false
    }, 
    {
        id: 1,
        tasks: 'Clean up home',
        isCompleted: true
    },
];

let newList = []; 
let c = 0;

for(i = 0; i < toDo.length; i++){
    if(toDo[i].isCompleted){
       continue; 
    }
    else {
        newList[c] = toDo[i];
        c++; 
    }
}

//console.log(newList[0].tasks);

//JSON used alot when sending data to a server. Its very similar to object literals 
//freeformatter.com to convert object literals to JSON 

//converting within a script 

const todoJSON = JSON.stringify(toDo);
//console.log(todoJSON);

//higher order array method 

//foreach, map, filter 

//toDo.forEach((toDo) => console.log(toDo.tasks) );

//map, takes in a function that transforms the data and then maps it 

const toDoarray = toDo.map((toDo) => { if(toDo.id == 1) {return "This is the one" } else return toDo.tasks + " This is not high priority"});
//console.log(toDoarray);

const filteredList = toDo.filter((toDo) => { return toDo.isCompleted === false }).map((toDo) => {return toDo.tasks});
//console.log(filteredList);

//Conditionals  ? === if : === else

//constructive objects 

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

//instatiate object 
const person1 = new Person ('Hilbert', 'Mooch', '15-09-1995');

//Class 
class People {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getFullname(){
        return this.firstName + ' ' + this.lastName;
    }
}

//instantiate 
const person3 = new People ('Hilbert','Mooch','15-09-1995');
//console.log(person3.getFullname());

//the DOM! The DOM is a tree structure of your whole document 

//selecting elements from the DOM 
//Single element selectors and multiple element selectors 
const form = document.getElementById('my-form');
const form1 = document.querySelector('h1');
//console.log(form1);

//Manipulating the DOM 
const ul = document.querySelector('.items');
ul.firstElementChild.textContent = 'Look at Me';
const btn = document.querySelector('.btn');
const email = document.querySelector('#email');
const name1 = document.querySelector('#name');
const msg = document.querySelector('.msg');

btn.addEventListener('click', (e) => {
    if(email.value === "" || name1.value === ""){
        e.preventDefault();
        btn.style.background = 'green';
        msg.classList.add('error');
        msg.innerHTML = 'Please Enter All Fields';
    }
    else
    {
       
        btn.style.background = 'red';
        alert('Success');
    }
    
});

