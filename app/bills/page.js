import BillsPage from '@/components/pages/BillsPage';
import validateCookie from '@/utils/validateCookie';

export default async function page() {
  const validCookie = await validateCookie();
  return <BillsPage validCookie={validCookie} />;
}
