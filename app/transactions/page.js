import TransactionsPage from '@/components/pages/TransactionsPage';
import validateCookie from '@/utils/validateCookie';

export default async function page() {
  const validCookie = await validateCookie();
  return <TransactionsPage validCookie={validCookie} />;
}
