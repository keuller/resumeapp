import { integer, pgSchema, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

const schema = pgSchema('devdb');

export const SkillEntity = schema.table('skills',{
    oid: uuid('oid').primaryKey(),
    personId: uuid('person_id').notNull(),
    skillName: varchar('skill_name', { length: 20 }).notNull(),
    skillLevel: integer('skill_level').default(1),
    createdAt: timestamp('created_at').notNull()
})
