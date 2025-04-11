"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cappuccino = exports.Latte = exports.Espresso = exports.Coffee = void 0;
const Ingredient_1 = require("./Ingredient");
class Coffee {
    constructor(id, name, basePrice, ingredients) {
        this.id = id;
        this.name = name;
        this.basePrice = basePrice;
        this.ingredients = ingredients;
    }
}
exports.Coffee = Coffee;
class Espresso extends Coffee {
    constructor(id) {
        super(id, "Espresso", 2.5, [new Ingredient_1.Ingredient(1, "Coffee Beans", 10)]);
    }
    getPrice() {
        return this.basePrice;
    }
}
exports.Espresso = Espresso;
class Latte extends Coffee {
    constructor(id) {
        super(id, "Latte", 3.5, [new Ingredient_1.Ingredient(1, "Coffee Beans", 10), new Ingredient_1.Ingredient(2, "Milk", 100)]);
    }
    getPrice() {
        return this.basePrice;
    }
}
exports.Latte = Latte;
class Cappuccino extends Coffee {
    constructor(id) {
        super(id, "Cappuccino", 4.0, [new Ingredient_1.Ingredient(1, "Coffee Beans", 10), new Ingredient_1.Ingredient(2, "Milk", 100), new Ingredient_1.Ingredient(3, "Foam", 50)]);
    }
    getPrice() {
        return this.basePrice;
    }
}
exports.Cappuccino = Cappuccino;
