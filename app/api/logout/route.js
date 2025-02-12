import { cookies } from 'next/headers';

export async function POST() {
  const cookieStore = await cookies();

  try {
    cookieStore.delete('token');
    return new Response(JSON.stringify('User logged out successfully'));
  } catch (error) {
    console.error('ERROR', error.message);
    return new Response(JSON.stringify({ error: error.message }));
  }
}
