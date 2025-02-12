import { getPots, updatePots } from '@/lib/db';
import verifyToken from '@/utils/verifyToken';

export async function GET() {
  const email = await verifyToken();
  try {
    const pots = await getPots(email);
    return new Response(JSON.stringify(pots), { status: 200 });
  } catch (error) {
    console.error('Error fetching pots', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch pots' }));
  }
}

export async function PUT(req) {
  const email = await verifyToken();
  try {
    const body = await req.json();
    const pots = await updatePots(JSON.stringify(body), email);
    return new Response(JSON.stringify(pots), { status: 200 });
  } catch (error) {
    console.error('Error updating pots', error);
    return new Response(JSON.stringify({ error: 'Failed to update pots' }));
  }
}
