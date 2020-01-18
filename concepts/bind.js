/* Bind */

var one = {
    a : 5,
    b : 6
}

var calc = function(){
    return this.a + this.b;
}

var first = calc.bind(one);
console.log(first());

console.log();

var two = {
    a : 10,
    b: 4
}

var second = calc.bind(two);
console.log(second());