import { DataSource } from "typeorm";

export const AppDS = new DataSource({
  type: "cockroachdb",
  url: process.env.DB_URL,
  ssl: true,
  extra: {
    application_name: 'getrezume',
    // options: 'getrezume'
  },
  timeTravelQueries: false
});
