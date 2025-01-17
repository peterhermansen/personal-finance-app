import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

console.log(process.env.DB_USER);

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: true,
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

export async function updateBudgets(budgets) {
  const query = `
  UPDATE user_data
  SET budgets = $1
  RETURNING budgets`;

  const res = await client.query(query, [budgets]);
  return res.rows[0].budgets;
}

export async function updatePots(pots) {
  const query = `
  UPDATE user_data
  SET pots = $1
  RETURNING pots`;

  const res = await client.query(query, [pots]);
  return res.rows[0].pots;
}
