import { Pool } from "pg";
import { type NodePgDatabase, drizzle } from 'drizzle-orm/node-postgres';

const DB_URL="postgresql://developer:MgKgZ3dDhIqlHjcHPnlfPA@getrezume-7605.8nj.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full";

const pool = new Pool({
    connectionString: process.env.DB_URL || DB_URL,
    application_name: 'getrezume-webapp',
    max: 10
});

let db: NodePgDatabase;

declare global {
    var __db: NodePgDatabase | undefined;
}

if (process.env.NODE_ENV === "production") {
    db = drizzle(pool, { logger: false });
} else {
    if (!global.__db) {
        global.__db = drizzle(pool, { logger: false });
    }
    db = global.__db;
}

export { db };
