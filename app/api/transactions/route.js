import { getTransactions } from '@/lib/db';
import verifyToken from '@/utils/verifyToken';

export async function GET() {
  const email = await verifyToken();

  try {
    const balance = await getTransactions(email);
    return new Response(JSON.stringify(balance), { status: 200 });
  } catch (error) {
    console.error('Error fetching transactions', error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch transactions' }),
    );
  }
}
