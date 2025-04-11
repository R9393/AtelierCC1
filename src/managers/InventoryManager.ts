import { Ingredient } from '../entities/Ingredient';

export class InventoryManager {
    private static instance: InventoryManager;
    private ingredients: Ingredient[];

    private constructor() {
        this.ingredients = [];
    }

    public static getInstance(): InventoryManager {
        if (!InventoryManager.instance) {
            InventoryManager.instance = new InventoryManager();
        }
        return InventoryManager.instance;
    }

    public addIngredient(ingredient: Ingredient): void {
        this.ingredients.push(ingredient);
    }

    public removeIngredient(id: number): void {
        this.ingredients = this.ingredients.filter(ing => ing.id !== id);
    }

    public getIngredient(id: number): Ingredient | undefined {
        return this.ingredients.find(ing => ing.id === id);
    }
}