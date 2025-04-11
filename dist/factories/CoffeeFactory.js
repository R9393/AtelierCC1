"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeFactory = void 0;
const Coffee_1 = require("../entities/Coffee");
class CoffeeFactory {
    static createCoffee(type, id) {
        switch (type) {
            case "Espresso":
                return new Coffee_1.Espresso(id);
            case "Latte":
                return new Coffee_1.Latte(id);
            case "Cappuccino":
                return new Coffee_1.Cappuccino(id);
            default:
                throw new Error("Type de café inconnu");
        }
    }
}
exports.CoffeeFactory = CoffeeFactory;
