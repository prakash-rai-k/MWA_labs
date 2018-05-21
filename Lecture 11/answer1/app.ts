class Account{
    constructor(private money : number){
        this.money = money;
    };

    deposit(amount:number){
        this.money += amount;
    }
}

class Person{
    constructor(public name:string, public bankAccount: Account, public hobbies:string[]){};

}

const prakash = new Person("Prakash Rai", new Account(200000),["Sports", "Travel"]);
console.log(prakash);
