import PotsPage from '@/components/pages/PotsPage';
import validateCookie from '@/utils/validateCookie';

export default async function page() {
  const validCookie = await validateCookie();
  return <PotsPage validCookie={validCookie} />;
}
