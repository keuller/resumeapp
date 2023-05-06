import { integer, pgSchema, timestamp, uuid, varchar } from "drizzle-orm/pg-core";


const schema = pgSchema('devdb');

export const LanguageEntity = schema.table('languages',{
    oid: uuid('oid').primaryKey(),
    personId: uuid('person_id').notNull(),
    language: varchar('language', { length: 30 }).notNull(),
    languageLevel: integer('language_level').default(1),
    createdAt: timestamp('created_at').notNull()
})