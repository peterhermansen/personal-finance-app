import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: process.env.DB_SSL === 'true' ? true : false,
});

client.connect();

export async function getBalance(email) {
  const res = await client.query(
    'SELECT balance FROM user_data WHERE email = $1',
    [email],
  );
  return res.rows[0].balance;
}

export async function getPots(email) {
  const res = await client.query(
    'SELECT pots FROM user_data WHERE email = $1',
    [email],
  );
  return res.rows[0].pots;
}

export async function getTransactions(email) {
  const res = await client.query(
    'SELECT transactions FROM user_data WHERE email = $1',
    [email],
  );
  return res.rows[0].transactions;
}

export async function getBudgets(email) {
  const res = await client.query(
    'SELECT budgets FROM user_data WHERE email = $1',
    [email],
  );
  return res.rows[0].budgets;
}

export async function updateBudgets(budgets, email) {
  console.log(budgets, email);
  const query = `
  UPDATE user_data
  SET budgets = $1
  WHERE email = $2
  RETURNING budgets`;

  const res = await client.query(query, [budgets, email]);
  console.log(res);
  return res.rows[0].budgets;
}

export async function updatePots(pots, email) {
  const query = `
  UPDATE user_data
  SET pots = $1
  WHERE email = $2
  RETURNING pots`;

  const res = await client.query(query, [pots, email]);
  return res.rows[0].pots;
}

export async function createUser(user) {
  const query = `
  INSERT INTO users
  (name, email, password_hash)
  VALUES
  ($1, $2, $3)
  `;

  const res = await client.query(query, [user.name, user.email, user.hash]);
  return res;
}

export async function getUser(body) {
  const query = `
  SELECT *
  FROM users
  WHERE email = ($1)`;
  const res = await client.query(query, [body.email]);
  return res;
}
