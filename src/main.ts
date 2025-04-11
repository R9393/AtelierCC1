import { initDB } from './utils';
import { IndexedDBDAO } from './dao';
import { OrderService } from './services';
import { CoffeeFactory } from './factories';
import { Coffee, Customization, Order } from './entities';
import { InventoryManager } from './managers';
import { Ingredient } from './entities/Ingredient';
import { inspect } from 'util';

async function main() {
    try {
        const db = await initDB();
        const orderDAO = new IndexedDBDAO<Order>(db, "orders");
        const coffeeDAO = new IndexedDBDAO<Coffee>(db, "coffees");
        const customizationDAO = new IndexedDBDAO<Customization>(db, "customizations");

        const coffee = CoffeeFactory.createCoffee("Latte", 1);
        const customization = new Customization(1, "Sucre", 0.5);
        const order = new Order(1, "Alice", coffee, [customization]);

        await coffeeDAO.save(coffee);
        await customizationDAO.save(customization);
        await orderDAO.save(order);

        const retrievedOrder = await orderDAO.get(1);
        console.log("Commande récupérée :", inspect(retrievedOrder, { depth: null, colors: true }));

        const inventory = InventoryManager.getInstance();
        inventory.addIngredient(new Ingredient(1, "Coffee Beans", 100));
        console.log("Ingrédient dans l'inventaire :", inspect(inventory.getIngredient(1), { depth: null, colors: true }));
    } catch (error) {
        console.error("Erreur :", error);
    }
}

main();