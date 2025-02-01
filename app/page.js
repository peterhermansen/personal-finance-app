import OverviewPage from '@/components/pages/OverviewPage';
import validateCookie from '@/utils/validateCookie';

export default async function page() {
  const validCookie = await validateCookie();
  return <OverviewPage validCookie={validCookie} />;
}
