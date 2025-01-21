import { getBudgets, updateBudgets } from '@/lib/db';

export async function GET() {
  try {
    const budgets = await getBudgets();
    return new Response(JSON.stringify(budgets), { status: 200 });
  } catch (error) {
    console.error('Error fetching budgets', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch budgets' }));
  }
}

export async function PUT(req) {
  try {
    const body = await req.json();
    const budgets = await updateBudgets(JSON.stringify(body));
    return new Response(JSON.stringify(budgets), { status: 200 });
  } catch (error) {
    console.error('Error updating budgets', error);
    return new Response(JSON.stringify({ error: 'Failed to update budgets' }));
  }
}
