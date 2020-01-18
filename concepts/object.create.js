/* Object.create */

const Car =  function(color){ // --> Here the function is acting as constructor
    this.color =  color;
}

const car1 =  new Car('red');
const car2 = Object.create(Car.prototype); // Create object without invoking constructor
console.dir(car1);
console.log(car1.color);
console.dir(car2);
console.log(car2.color);