import LoginPage from '@/components/pages/LoginPage';
import validateCookie from '@/utils/validateCookie';

export default async function page() {
  const validCookie = await validateCookie();
  return <LoginPage validCookie={validCookie} />;
}
