import { Coffee, Espresso, Latte, Cappuccino } from '../entities/Coffee';

export class CoffeeFactory {
    public static createCoffee(type: string, id: number): Coffee {
        switch (type) {
            case "Espresso":
                return new Espresso(id);
            case "Latte":
                return new Latte(id);
            case "Cappuccino":
                return new Cappuccino(id);
            default:
                throw new Error("Type de café inconnu");
        }
    }
}