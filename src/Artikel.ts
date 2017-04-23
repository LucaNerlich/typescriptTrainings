export class Artikel {
    name: String;
    price: number;

    constructor(name: String, price: number){
        this.name = name;
        this.price = price;
    }

    getPrice() {
        return this.price;
    }

    getName() {
        return this.name;
    }

    getNameAndPrice() {
        return this.getName() + ": " + this.getPrice();
    }
}




