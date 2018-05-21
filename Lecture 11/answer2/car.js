var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
        this.acceleration = 0;
    }
    ;
    Car.prototype.honk = function () {
        console.log(this.name + " is saying : Toooo!");
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration += speed;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk();
car.accelerate(30);
console.log(car.acceleration);
