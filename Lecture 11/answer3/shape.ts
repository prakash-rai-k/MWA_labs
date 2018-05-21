class Shape{
    constructor(public width:number, public length:number){};

}

class Rectangle extends Shape{
    constructor(width : number, length:number){
        super(width, length);
    };

    calcArea(){
        return this.width * this.length;
    }
}

const rect = new Rectangle(4,5);
console.log(rect.calcArea());