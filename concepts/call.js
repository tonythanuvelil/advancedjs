/* Call and Apply */

/* call without arguments */

var person = {
    name : "Jade"
}

var sayHello = function(){
    return "Hello " + this.name;
}

console.log("---call without arguments---");
console.log(sayHello.call(person));

/* call with arguments */

var number = {
    a : 5
}

var add = function(b, c){
    return this.a + b + c;
}

console.log("---call with arguments---");

console.log(add.call(number, 2, 3));

/* Apply */

console.log("---apply---");

console.log(add.apply(number, [2, 3]));