import { DAO } from '../dao/DAO';
import { Order } from '../entities/Order';

export class OrderService {
    private orderDAO: DAO<Order>;

    constructor(orderDAO: DAO<Order>) {
        this.orderDAO = orderDAO;
    }

    public async createOrder(order: Order): Promise<void> {
        await this.orderDAO.save(order);
    }

    public async getOrder(id: number): Promise<Order | undefined> {
        return await this.orderDAO.get(id);
    }
}