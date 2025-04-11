import { OrderService } from '../../src/services/OrderService';
import { Order } from '../../src/entities/Order';
import { DAO } from '../../src/dao/DAO';
import { Espresso } from '../../src/entities/Coffee';

// Définir une interface pour le mock DAO
interface MockDAOType extends DAO<Order> {
  save(entity: Order): Promise<void>;
  get(id: number): Promise<Order | undefined>;
  update(entity: Order): Promise<void>;
  delete(id: number): Promise<void>;
}

class MockDAO implements MockDAOType {
  async save(entity: Order): Promise<void> {}
  async get(id: number): Promise<Order | undefined> {
    return undefined;
  }
  async update(entity: Order): Promise<void> {}
  async delete(id: number): Promise<void> {}
}

describe('OrderService', () => {
  test('should create an order', async () => {
    const mockDAO = new MockDAO();
    const orderService = new OrderService(mockDAO);
    const order = new Order(1, 'Test', new Espresso(1), []);
    await expect(orderService.createOrder(order)).resolves.toBeUndefined();
  });
});