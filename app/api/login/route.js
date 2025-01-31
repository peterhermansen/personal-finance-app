import { createUser } from '@/lib/db';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { cookies } from 'next/headers';

dotenv.config();

export async function POST(req) {
  const cookieStore = await cookies();

  try {
    const body = await req.json();
    await createUser(body);
    const payload = {
      email: body.email,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });

    cookieStore.set({
      name: 'token',
      value: token,
      httpOnly: true,
      path: '/',
    });

    return new Response(JSON.stringify('User created successfully'));
  } catch (error) {
    console.error('Error creating user', error);
    if (error.code === '23505')
      return new Response(JSON.stringify({ error: 'Email exists' }));
    return new Response(JSON.stringify({ error: 'Error creating account' }));
  }
}
