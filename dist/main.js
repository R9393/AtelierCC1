"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const dao_1 = require("./dao");
const factories_1 = require("./factories");
const entities_1 = require("./entities");
const managers_1 = require("./managers");
const Ingredient_1 = require("./entities/Ingredient");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const db = yield (0, utils_1.initDB)();
            const orderDAO = new dao_1.IndexedDBDAO(db, "orders");
            const coffeeDAO = new dao_1.IndexedDBDAO(db, "coffees");
            const customizationDAO = new dao_1.IndexedDBDAO(db, "customizations");
            const coffee = factories_1.CoffeeFactory.createCoffee("Latte", 1);
            const customization = new entities_1.Customization(1, "Sucre", 0.5);
            const order = new entities_1.Order(1, "Alice", coffee, [customization]);
            yield coffeeDAO.save(coffee);
            yield customizationDAO.save(customization);
            yield orderDAO.save(order);
            const retrievedOrder = yield orderDAO.get(1);
            console.log("Commande récupérée :", retrievedOrder);
            const inventory = managers_1.InventoryManager.getInstance();
            inventory.addIngredient(new Ingredient_1.Ingredient(1, "Coffee Beans", 100));
            console.log("Ingrédient dans l'inventaire :", inventory.getIngredient(1));
        }
        catch (error) {
            console.error("Erreur :", error);
        }
    });
}
main();
