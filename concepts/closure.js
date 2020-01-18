/* Closure */

var add =  function(num1){
    return function(num2){
        return num1 + num2;
    }
}

var addTen = add(10);
console.log(addTen(5));