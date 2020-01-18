/* Callback */

function calc(num, cf){
    return cf(num);
}

var addTen =  function(num){
    return num + 10;
}

console.log(calc(3, addTen));
