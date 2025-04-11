import { Ingredient } from './Ingredient';

export abstract class Coffee {
    id: number;
    name: string;
    basePrice: number;
    ingredients: Ingredient[];

    constructor(id: number, name: string, basePrice: number, ingredients: Ingredient[]) {
        this.id = id;
        this.name = name;
        this.basePrice = basePrice;
        this.ingredients = ingredients;
    }

    abstract getPrice(): number;
}

export class Espresso extends Coffee {
    constructor(id: number) {
        super(id, "Espresso", 2.5, [new Ingredient(1, "Coffee Beans", 10)]);
    }

    getPrice(): number {
        return this.basePrice;
    }
}

export class Latte extends Coffee {
    constructor(id: number) {
        super(id, "Latte", 3.5, [new Ingredient(1, "Coffee Beans", 10), new Ingredient(2, "Milk", 100)]);
    }

    getPrice(): number {
        return this.basePrice;
    }
}

export class Cappuccino extends Coffee {
    constructor(id: number) {
        super(id, "Cappuccino", 4.0, [new Ingredient(1, "Coffee Beans", 10), new Ingredient(2, "Milk", 100), new Ingredient(3, "Foam", 50)]);
    }

    getPrice(): number {
        return this.basePrice;
    }
}