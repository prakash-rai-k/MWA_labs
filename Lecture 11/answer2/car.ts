class Car{
    acceleration:number;

    constructor(public name:string){
        this.acceleration = 0;
    };

    honk(){
        console.log(`${this.name} is saying : Toooo!`);
    }

    accelerate(speed:number){
        this.acceleration += speed;
    }
}

const car = new Car("BMW");
car.honk();
car.accelerate(30);
console.log(car.acceleration);