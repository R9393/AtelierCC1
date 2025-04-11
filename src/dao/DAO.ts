export interface DAO<T> {
    save(entity: T): Promise<void>;
    get(id: number): Promise<T | undefined>;
    update(entity: T): Promise<void>;
    delete(id: number): Promise<void>;
}