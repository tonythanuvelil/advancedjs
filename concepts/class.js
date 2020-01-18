/* Class */

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    
    showPerson(){
        return "Hello " + this.name + " (" + this.age + ")";
    }
}

let perObj = new Person("Jade", 22);
console.log(perObj.showPerson());