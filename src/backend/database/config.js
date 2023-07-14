import { configDotenv } from "dotenv";
import fs from "fs";
import mysql from "mysql2";

configDotenv();

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASSWORD;
const DB_DB = process.env.DB_DATABASE;
const schema = fs.readFileSync("./src/backend/database/schema.sql", "utf8");

export const pool = mysql
  .createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_DB,
  })
  .promise();

const newJobData = {
  company: "TesteX",
  title: "Fullstack developer",
  location: "Warsaw",
  date: "2023-06-22",
  status: "in-progress",
  coverLetter: "None",
  Owner: "Senior",
};
