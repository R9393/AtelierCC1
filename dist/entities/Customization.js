"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customization = void 0;
class Customization {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
}
exports.Customization = Customization;
