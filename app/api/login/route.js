import { createUser, getUser, updateUser } from '@/lib/db';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { cookies } from 'next/headers';
const argon2 = require('argon2');

dotenv.config();

export async function POST(req) {
  const cookieStore = await cookies();

  try {
    const body = await req.json();
    let res;
    console.log('tedafs');

    if (body.name) await createUser(body);
    else res = await getUser(body);
    console.log('test');
    if (!res.rows[0]) throw new Error('Incorrect Password');
    const hash = res.rows[0].password_hash;
    console.log(hash);
    const match = await argon2.verify(hash, body.pass);
    if (!match) {
      throw new Error('Incorrect Password');
    }

    const payload = {
      email: body.email,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });

    let expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 29);

    cookieStore.set({
      name: 'token',
      value: token,
      httpOnly: true,
      path: '/',
      expires: expirationDate,
      secure: true,
    });
    if (!body.name)
      return new Response(JSON.stringify('Logged in successfully'));
    return new Response(JSON.stringify('User created successfully'));
  } catch (error) {
    console.error('ERROR', error.message);
    if (error.code === '23505')
      return new Response(JSON.stringify({ error: 'Email exists' }));
    return new Response(JSON.stringify({ error: error.message }));
  }
}
