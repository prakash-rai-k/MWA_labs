var Person = /** @class */ (function () {
    function Person() {
        this.enumerable = true;
        this.configurable = true;
        this._firstName = "";
    }
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value.toUpperCase();
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var person1 = new Person();
person1.firstName = "Prakash";
console.log("Person get :  " + person1._firstName);
console.log(person1);
