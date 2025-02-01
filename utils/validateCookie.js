import { cookies } from 'next/headers';

export default async function validateCookie() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token');
  if (token) {
    return true;
  } else {
    return false;
  }
}
