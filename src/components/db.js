import Dexie from "dexie";

export const db = new Dexie("customers")
db.version(1).stores({
    customers: "++id, email, vin"
})
