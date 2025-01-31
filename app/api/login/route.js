import { createUser } from '@/lib/db';

export async function POST(req) {
  try {
    const body = await req.json();
    const res = await createUser(body);
    return new Response(JSON.stringify(res));
  } catch (error) {
    console.error('Error creating user', error);
    if (error.code === '23505')
      return new Response(JSON.stringify({ error: 'Email exists' }));
    return new Response(JSON.stringify({ error: 'Error creating account' }));
  }
}
