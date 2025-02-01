import BudgetsPage from '@/components/pages/BudgetsPage';
import validateCookie from '@/utils/validateCookie';

export default async function page() {
  const validCookie = await validateCookie();
  return <BudgetsPage validCookie={validCookie} />;
}
