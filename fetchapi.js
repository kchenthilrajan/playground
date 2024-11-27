// write a class 
// 1.contains a constructor which accepts a parameter and create a object
// 2.contains a function  to print the content of object created in constructor

// class Student {
//     constructor(personName){
//         this.person = {
//             name: personName,
//         }
//     }
//     printStudentName(){
//         console.log("I am",this.person.name);
//     }
// }
// const Student1 = new Student("kalai");
// const Student2 = new Student("vani");
// Student1.printStudentName();
// Student2.printStudentName();


//write the function
//1. contains a const json object
//2. contains a function to print the content of above object

// function Student(firstName,lastName){
//     const person = {
//         firstName : firstName,
//         lastName : lastName,
//     }
//     function printFullName(){
//         console.log("I am", person.firstName + person.lastName);
//     }
//     return printFullName;
// }
// const print = Student('john','davis');
// print();


//write a Json object
//1. contains a property name
//2. contains a porpert print which is a function that can print name

// const Person = {
//     firstName : 'kalai',
//     lastName : 'vani',
//     print : function(){
//         console.log("fullName",this.firstName+this.lastName);
//     }
// } 

// Person.print();
//print("kalai","vani");

function counter(){
    let count = 0;
    
    function increment(){
        count = count+1;
        }
    function printCount(){
        console.log("count",count);
    }    
    return{increment:increment,
            printCount:printCount}
}
const myCounter = counter();
myCounter.increment();
myCounter.increment();
myCounter.printCount();


