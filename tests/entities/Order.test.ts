import { Order } from '../../src/entities/Order';
import { Espresso } from '../../src/entities/Coffee';
import { Customization } from '../../src/entities/Customization';

describe('Order', () => {
  test('should create an order with correct properties', () => {
    const coffee = new Espresso(1);
    const order = new Order(1, 'Alice', coffee, []);

    expect(order.id).toBe(1);
    expect(order.customer).toBe('Alice');
    expect(order.coffee).toBe(coffee);
    expect(order.customizations).toEqual([]);
    expect(order.totalPrice).toBe(2.5); // Prix de base de l'Espresso
  });

  test('should calculate total price with customizations', () => {
    const coffee = new Espresso(1);
    const customization = new Customization(1, 'Sucre', 0.5);
    const order = new Order(1, 'Alice', coffee, [customization]);

    expect(order.totalPrice).toBe(3.0); // 2.5 (Espresso) + 0.5 (Sucre)
  });

  test('should calculate total price with multiple customizations', () => {
    const coffee = new Espresso(1);
    const customization1 = new Customization(1, 'Sucre', 0.5);
    const customization2 = new Customization(2, 'Lait', 1.0);
    const order = new Order(1, 'Alice', coffee, [customization1, customization2]);

    expect(order.totalPrice).toBe(4.0); // 2.5 (Espresso) + 0.5 (Sucre) + 1.0 (Lait)
  });
});