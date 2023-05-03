import { date, integer, pgSchema, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';

const schema = pgSchema('devdb');

export const JobEntity = schema.table('jobs', {
    oid: uuid('oid').primaryKey(),
    personId: uuid('person_id').notNull(),
    company: varchar('company', { length: 100 }).notNull(),
    jobTitle: varchar('job_title', { length: 30 }),
    startDate: date('start_date').notNull(),
    endDate: date('end_date'),
    mode: integer('mode').default(1),
    createdAt: timestamp('created_at').notNull()
});
