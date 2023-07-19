interface ICar {
    getInfo: () => string
}

class Car implements ICar {

    private readonly name:string;
    private price:number;

    constructor(name:string, price:number) {
        this.name = name;
        this.price = price;
    }

    getInfo():string {
        return `Name: ${this.name}, Price: ${this.price}`;
    }

    protected changePrice(newPrice:number):void {
        this.price = newPrice;
    }
}

class Bmw extends Car {
    constructor(price:number) {
        super("BMW", price);
        this.changePrice(price + 100);
    }
}

const bmw:Bmw = new Bmw(100);
document.write(bmw.getInfo());