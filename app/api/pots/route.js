import { getPots, updatePots } from '@/lib/db';

export async function GET() {
  try {
    const pots = await getPots();
    return new Response(JSON.stringify(pots), { status: 200 });
  } catch (error) {
    console.error('Error fetching pots', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch pots' }));
  }
}

export async function PUT(req) {
  try {
    const body = await req.json();
    const pots = await updatePots(JSON.stringify(body));
    return new Response(JSON.stringify(pots), { status: 200 });
  } catch (error) {
    console.error('Error updating pots', error);
    return new Response(JSON.stringify({ error: 'Failed to update pots' }));
  }
}
