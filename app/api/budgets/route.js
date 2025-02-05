import { getBudgets, updateBudgets } from '@/lib/db';
import verifyToken from '@/utils/verifyToken';

export async function GET() {
  const email = await verifyToken();
  try {
    const budgets = await getBudgets(email);
    return new Response(JSON.stringify(budgets), { status: 200 });
  } catch (error) {
    console.error('Error fetching budgets', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch budgets' }));
  }
}

export async function PUT(req) {
  const email = await verifyToken();
  console.log('test');
  try {
    const body = await req.json();
    const budgets = await updateBudgets(JSON.stringify(body), email);
    return new Response(JSON.stringify(budgets), { status: 200 });
  } catch (error) {
    console.error('Error updating budgets', error);
    return new Response(JSON.stringify({ error: 'Failed to update budgets' }));
  }
}
