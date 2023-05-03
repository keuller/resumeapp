CREATE TABLE IF NOT EXISTS "jobs" (
	"oid" uuid PRIMARY KEY NOT NULL,
	"person_id" uuid NOT NULL,
	"company" varchar(100) NOT NULL,
	"job_title" varchar(30),
	"start_date" date NOT NULL,
	"end_date" date,
	"mode" integer DEFAULT 1,
	"created_at" timestamp NOT NULL
);
