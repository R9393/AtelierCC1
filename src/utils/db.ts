// Importer fake-indexeddb
import * as fakeIndexedDB from 'fake-indexeddb';
import FDBKeyRange from 'fake-indexeddb/lib/FDBKeyRange';

// Configurer indexedDB et IDBKeyRange globalement avant toute utilisation
if (typeof global !== 'undefined') {
    global.indexedDB = fakeIndexedDB.indexedDB;
    global.IDBKeyRange = FDBKeyRange as any;
}

export async function initDB(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open("CafeDB", 1);
        request.onupgradeneeded = (event) => {
            const db = (event.target as IDBOpenDBRequest).result;
            db.createObjectStore("orders", { keyPath: "id" });
            db.createObjectStore("coffees", { keyPath: "id" });
            db.createObjectStore("customizations", { keyPath: "id" });
            db.createObjectStore("ingredients", { keyPath: "id" });
        };
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}