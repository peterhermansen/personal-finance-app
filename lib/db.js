import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

client.connect();

export async function getBalance() {
  const res = await client.query('SELECT balance FROM user_data');
  return res.rows[0].balance;
}

export async function getPots() {
  const res = await client.query('SELECT pots FROM user_data');
  return res.rows[0].pots;
}

export async function getTransactions() {
  const res = await client.query('SELECT transactions FROM user_data');
  return res.rows[0].transactions;
}

export async function getBudgets() {
  const res = await client.query('SELECT budgets FROM user_data');
  return res.rows[0].budgets;
}
