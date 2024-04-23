// db.js
import postgres from "postgres";

const sql = postgres("postgres://postgres:example@db:5432/database"); // will use psql environment variables

export default sql;
