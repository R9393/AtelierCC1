"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    constructor(id, customer, coffee, customizations) {
        this.id = id;
        this.customer = customer;
        this.coffee = coffee;
        this.customizations = customizations;
        this.totalPrice = this.calculateTotal();
    }
    calculateTotal() {
        let total = this.coffee.getPrice();
        for (let customization of this.customizations) {
            total += customization.getPrice();
        }
        return total;
    }
}
exports.Order = Order;
