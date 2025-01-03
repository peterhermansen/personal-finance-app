import { getBudgets } from '@/lib/db';

export async function GET() {
  try {
    const balance = await getBudgets();
    return new Response(JSON.stringify(balance), { status: 200 });
  } catch (error) {
    console.error('Error fetching balance', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch balance' }));
  }
}
