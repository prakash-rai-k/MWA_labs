class Person{
    enumerable:boolean;
    configurable:boolean;
    _firstName:string;

    constructor(){
        this.enumerable = true;
        this.configurable = true;
        this._firstName = "";
    }

    get firstName(){
        return this._firstName;
    }

    set firstName(value:string){
        this._firstName = value.toUpperCase();
    }
}

const person1 = new Person();
person1.firstName = "Prakash";
console.log(`Person get :  ${person1._firstName}`);
console.log(person1);