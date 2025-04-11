import { Coffee } from './Coffee';
import { Customization } from './Customization';

export class Order {
    id: number;
    customer: string;
    coffee: Coffee;
    customizations: Customization[];
    totalPrice: number;

    constructor(id: number, customer: string, coffee: Coffee, customizations: Customization[]) {
        this.id = id;
        this.customer = customer;
        this.coffee = coffee;
        this.customizations = customizations;
        this.totalPrice = this.calculateTotal();
    }

    calculateTotal(): number {
        let total = this.coffee.getPrice();
        for (let customization of this.customizations) {
            total += customization.getPrice();
        }
        return total;
    }
}