"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryManager = void 0;
class InventoryManager {
    constructor() {
        this.ingredients = [];
    }
    static getInstance() {
        if (!InventoryManager.instance) {
            InventoryManager.instance = new InventoryManager();
        }
        return InventoryManager.instance;
    }
    addIngredient(ingredient) {
        this.ingredients.push(ingredient);
    }
    removeIngredient(id) {
        this.ingredients = this.ingredients.filter(ing => ing.id !== id);
    }
    getIngredient(id) {
        return this.ingredients.find(ing => ing.id === id);
    }
}
exports.InventoryManager = InventoryManager;
